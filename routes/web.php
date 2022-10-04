<?php

use Weareframework\ProductColorSwatches\Http\Controllers\Web\Api\ApiProductColorSwatchController;

Route::get('product-color-swatch/api/product-color-swatches', ['\\' . ApiProductColorSwatchController::class, 'index'])->name('weareframework.product-color-swatches.web.api.index');

