<?php

namespace Weareframework\ProductColorSwatches\Http\Controllers\Web\Api;

use Illuminate\Http\Request;
use Statamic\Http\Controllers\Controller;
use Weareframework\ProductColorSwatches\Data\ProductColorSwatch;
use Weareframework\ProductColorSwatches\Http\Resources\ProductColorSwatchesCollectionToolsPage;
use Weareframework\ProductColorSwatches\Http\Resources\ProductColorSwatchesWebApiCollection;
use Weareframework\ProductColorSwatches\Library\Errors\GeneralError;

class ApiProductColorSwatchController extends Controller
{

    public function index(Request $request)
    {
        try {
            $productColorSwatches = ProductColorSwatch::all()->toArray();
            return response()->json([
                'success'  => false,
                'data'     => new ProductColorSwatchesWebApiCollection($productColorSwatches),
                'message'  => 'Color Swatches Attached'
            ]);
        } catch (\Exception $exception) {
            return GeneralError::api($exception);
        }
    }


}
