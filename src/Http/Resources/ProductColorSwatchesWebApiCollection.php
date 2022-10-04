<?php
namespace Weareframework\ProductColorSwatches\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use Statamic\CP\Column;
use Statamic\CP\Columns;

class ProductColorSwatchesWebApiCollection extends ResourceCollection
{
    public function toArray($request)
    {
        return ProductColorSwatchItemResource::collection($this->collection);
    }
}
