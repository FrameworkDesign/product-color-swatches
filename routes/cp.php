<?php

use Weareframework\ProductColorSwatches\Http\Controllers\Cp\Web\ProductColorSwatchController;
use Weareframework\ProductColorSwatches\Http\Controllers\Cp\Web\SettingsController;
use Weareframework\ProductColorSwatches\Http\Controllers\Cp\Web\SyncColorsApiController;
use Weareframework\ProductColorSwatches\Http\Controllers\Cp\Web\ImportProductColorSwatchesController;
use Weareframework\ProductColorSwatches\Http\Controllers\Cp\Web\ExportProductColorSwatchesController;

use Weareframework\ProductColorSwatches\Http\Controllers\Cp\Api\ApiProductColorSwatchController;

Route::get('product-color-swatch/api/product-color-swatches', ['\\' . ApiProductColorSwatchController::class, 'index'])->name('weareframework.product-color-swatches.api.index');

Route::prefix('weareframework/product-color-swatches')->group(function () {

    Route::get('/import/index', ['\\' . ImportProductColorSwatchesController::class, 'index'])->name('weareframework.product-color-swatches.import');
    Route::post('/import/data', ['\\' . ImportProductColorSwatchesController::class, 'store'])->name('weareframework.product-color-swatches.handleImport');

    Route::get('/export/{type}', ['\\' . ExportProductColorSwatchesController::class, 'index'])->name('weareframework.product-color-swatches.export');

    Route::get('/settings', ['\\'. SettingsController::class, 'index'])->name('weareframework.product-color-swatches.settings.index');
    Route::post('/settings', ['\\'. SettingsController::class, 'update'])->name('weareframework.product-color-swatches.settings.update');

    Route::get('/colors/api/sync', ['\\'. SyncColorsApiController::class, 'index'])->name('weareframework.product-color-swatches.sync-colors-api');

    Route::get('/list', ['\\'. ProductColorSwatchController::class, 'index'])->name('weareframework.product-color-swatches.index');
    Route::get('/create', ['\\'. ProductColorSwatchController::class, 'create'])->name('weareframework.product-color-swatches.create');
    Route::post('/store', ['\\'. ProductColorSwatchController::class, 'store'])->name('weareframework.product-color-swatches.store');
    Route::get('/{id}', ['\\'. ProductColorSwatchController::class, 'edit'])->name('weareframework.product-color-swatches.edit');
    Route::post('/{id}', ['\\'. ProductColorSwatchController::class, 'update'])->name('weareframework.product-color-swatches.update');
    Route::delete('/{id}', ['\\'. ProductColorSwatchController::class, 'destroy'])->name('weareframework.product-color-swatches.delete');
});

