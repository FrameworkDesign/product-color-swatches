<?php
namespace Weareframework\ProductColorSwatches\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Statamic\CP\Column;
use Statamic\CP\Columns;

class ProductColorSwatchItemResourceToolsPage extends JsonResource
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
            'key' => $productColorSwatch->key(),
            'enabled' => $productColorSwatch->enabled(),
            'src' => $productColorSwatch->srcObject(),
            'colors' => $productColorSwatch->colors(),
            'delete_url' => cp_route('weareframework.product-color-swatches.delete', $productColorSwatch->id()),
        ];
    }
}
