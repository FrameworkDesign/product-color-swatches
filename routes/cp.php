<?php

use Weareframework\ProductColorSwatches\Http\Controllers\Web\ProductColorSwatchController;

use Weareframework\ProductColorSwatches\Http\Controllers\Api\ApiProductColorSwatchController;

Route::get('product-color-swatch/api/product-color-swatches', ['\\' . ApiProductColorSwatchController::class, 'index'])->name('weareframework.product-color-swatches.api.index');

Route::prefix('weareframework/product-color-swatches')->group(function () {
    Route::get('/list', ['\\'. ProductColorSwatchController::class, 'index'])->name('weareframework.product-color-swatches.index');
    Route::get('/create', ['\\'. ProductColorSwatchController::class, 'create'])->name('weareframework.product-color-swatches.create');
    Route::post('/store', ['\\'. ProductColorSwatchController::class, 'store'])->name('weareframework.product-color-swatches.store');
    Route::get('/{id}', ['\\'. ProductColorSwatchController::class, 'edit'])->name('weareframework.product-color-swatches.edit');
    Route::post('/{id}', ['\\'. ProductColorSwatchController::class, 'update'])->name('weareframework.product-color-swatches.update');
    Route::delete('/{id}', ['\\'. ProductColorSwatchController::class, 'destroy'])->name('weareframework.product-color-swatches.delete');
});

