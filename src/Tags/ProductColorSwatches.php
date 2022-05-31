<?php

namespace Weareframework\ProductColorSwatches\Tags;

use Statamic\Support\Str;
use Statamic\Tags\Tags;

class ProductColorSwatches extends Tags
{
    public static function render(...$arguments): string
    {
        return view('product-color-swatches::tags.index')->render();
    }
}

