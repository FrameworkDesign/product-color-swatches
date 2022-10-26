<?php

namespace Weareframework\ProductColorSwatches\Http\Controllers\Cp\Web;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Statamic\Http\Controllers\CP\CpController;
use Weareframework\ProductColorSwatches\Data\ProductColorSwatch;
use Weareframework\ProductColorSwatches\Library\Files\File;
use Weareframework\ProductColorSwatches\Library\Settings\CollectSettings;

class SyncColorsApiController extends CpController
{

    public function index(Request $request, File $file)
    {
        try {
            abort_unless(auth()->user()->isSuper() || auth()->user()->hasPermission('edit productcolorswatches'), 401);

            $settings = (new CollectSettings($file))->handle();
            $url = (! empty($settings->values['product_color_swatches_route_url'])) ? $settings->values['product_color_swatches_route_url'] : null;

            if (is_null($url)) {
                throw new \Exception('No API URL');
            }

            $response = Http::get($url);

            if ($response->failed()) {
                throw new \Exception('It failed the pull');
            }

            $response->onError(function() {
                throw new \Exception('It did not pull');
            });

            if ($response->successful()) {
                $importData = $response->json();
                $currentValues = $settings->values;

                $pluckedColors = array_pluck($importData['colors'], 'hex_code', 'value');
                $currentValues['product_color_swatches_colors'] = $pluckedColors;
                // update colors in line with api
                $settings->updateValues($currentValues);

                // get all unique colors - done
                $uniqueColors = $importData['unique'];

                // loop through them
                foreach($uniqueColors as $uniqueColor) {
                    if (is_null($uniqueColor)) {
                        continue;
                    }
                    // check if the key exists
                    $productColorSwatch = ProductColorSwatch::findByKey($uniqueColor);
                    // if not make a new one
                    if (is_null($productColorSwatch)) {
                        $productColorSwatch = ProductColorSwatch::make();
                    }

                    // get hex values from key of importing data via $pluckedColors
                    $colorsArray = [];
                    $uniqueColorExplode = explode('_', $uniqueColor);

                    foreach ($uniqueColorExplode as $colorItem) {
                        if (isset($pluckedColors[$colorItem])) {
                            $colorsArray[$colorItem] = $pluckedColors[$colorItem];
                        }
                    }

                    // update or create ProductColorSwatch
                    $productColorSwatch->fill([
                        'enabled' => true,
                        'name' => $uniqueColor,
                        'key' => $uniqueColor,
                        'colors' => $colorsArray
                    ]);
                    $productColorSwatch->save();
                }
            }
            session()->flash('success', 'Started, check back soon');
        } catch (\Exception $exception) {
            session()->flash('error', $exception->getMessage());
        }

        return redirect()->route('statamic.cp.weareframework.product-color-swatches.settings.index');
    }


}
