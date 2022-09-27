<?php

namespace Weareframework\ProductColorSwatches\Fieldtypes;

use Illuminate\Support\Facades\Log;
use Statamic\Exceptions\AssetContainerNotFoundException;
use Statamic\Facades\Asset;
use Statamic\Facades\AssetContainer;
use Statamic\Facades\GraphQL;
use Statamic\Fields\Fields as BlueprintFields;
use Statamic\Fields\Fieldtype;
use Statamic\Fieldtypes\Assets\DimensionsRule;
use Statamic\Fieldtypes\Assets\ImageRule;
use Statamic\Fieldtypes\Assets\MaxRule;
use Statamic\Fieldtypes\Assets\MimesRule;
use Statamic\Fieldtypes\Assets\MimetypesRule;
use Statamic\Fieldtypes\Assets\MinRule;
use Statamic\Fieldtypes\Assets\UndefinedContainerException;
use Statamic\GraphQL\Types\AssetInterface;
use Statamic\Http\Resources\CP\Assets\Asset as AssetResource;
use Weareframework\ProductColorSwatches\Data\ProductColorSwatch as ProductColorSwatchDataElement;
use Statamic\Support\Arr;
use Statamic\Support\Str;
use Weareframework\ProductColorSwatches\Http\Resources\ProductColorSwatchesCollection;

class ProductColorSwatch extends Fieldtype
{
    protected $icon = 'generic';

    protected $categories = ['text'];

    public function preload()
    {
        $productColorSwatches = ProductColorSwatchDataElement::query()
            ->where('enabled', 1)
            ->get();

        return [
            'swatches' => (new ProductColorSwatchesCollection($productColorSwatches))
                ->columnPreferenceKey('product-color-swatches.columns')
        ];
    }

    public function preProcess($values)
    {
        if (is_null($values)) {
            return null;
        }

        return $values;
    }

    public function process($data)
    {
        return $data;
    }

    public function preProcessIndex($data)
    {
        return $data;
    }

}
