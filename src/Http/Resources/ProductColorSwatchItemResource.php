<?php
namespace Weareframework\ProductColorSwatches\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Statamic\CP\Column;
use Statamic\CP\Columns;

class ProductColorSwatchItemResource extends JsonResource
{
    protected $columns;

    public function columns($columns)
    {
        $this->columns = $columns;
        return $this;
    }

    public function toArray($request)
    {
        $productColorSwatch = $this->resource;
        return [
            'id' => $productColorSwatch->id(),
            'name' => $productColorSwatch->name(),
            "label" => $productColorSwatch->name(),
            'key' => $productColorSwatch->key(),
            "value" => $productColorSwatch->key(),
            'enabled' => $productColorSwatch->enabled(),
            'colors' => (array)$productColorSwatch->colors(),
        ];
    }
}
