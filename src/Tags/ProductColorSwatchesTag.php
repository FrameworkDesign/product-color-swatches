<?php

namespace Weareframework\ProductColorSwatches\Tags;

use Statamic\Support\Str;
use Statamic\Tags\Tags;
use Weareframework\ProductColorSwatches\Blueprints\ProductColorSwatchBlueprint;
use Weareframework\ProductColorSwatches\Data\ProductColorSwatch;

class ProductColorSwatchesTag extends Tags
{
    protected static $handle = 'product_color_swatch';

    public static function render(...$arguments): string
    {
        return '';
    }

    public function index()
    {
        try {
            $field = $this->params->get('field') ?? null;
            if (is_null($field)) {
                return '';
            }

            $productColorSwatch = ProductColorSwatch::query()->where('key', $field)->get()->first();

            if (is_null($productColorSwatch)) {
                return $this->emptyDataView();
            }

            $productColorSwatchValues = $productColorSwatch->fileData();
            $productColorSwatchBlueprint = new ProductColorSwatchBlueprint();
            $productColorSwatchFields = $productColorSwatchBlueprint()->fields()->addValues($productColorSwatchValues)->preProcess();
            $values = $productColorSwatchFields->values()->toArray();

            return view('product-color-swatches::tags.index', [
                'key' => $values['key'] ?? [],
                'value' => $values['value'] ?? [],
                'colors' => $values['colors'] ?? []
            ])->render();
        } catch (\Exception $e) {
            return $this->emptyDataView();
        }
    }

    private function emptyDataView()
    {
        return view('product-color-swatches::tags.index', [
            'key' => [],
            'value' => [],
            'colors' => []
        ])->render();
    }
}

