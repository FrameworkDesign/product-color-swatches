<?php

namespace Weareframework\ProductColorSwatches\Http\Controllers\Web;

use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;
use Statamic\Facades\Scope;
use Statamic\Http\Controllers\CP\CpController;
use Weareframework\ProductColorSwatches\Blueprints\ProductColorSwatchBlueprint;
use Weareframework\ProductColorSwatches\Data\ProductColorSwatch;
use Weareframework\ProductColorSwatches\Http\Resources\ProductColorSwatchItemResource;

class ProductColorSwatchController extends CpController
{

    public function __construct(Request $request)
    {
        parent::__construct($request);
    }

    public function index()
    {
        abort_unless(auth()->user()->isSuper() || auth()->user()->hasPermission('view productcolorswatches'), 401);

        return view('product-color-swatches::color-swatches.index', [
            'filters' => Scope::filters('product_color_swatches'),
        ]);
    }

    public function create()
    {
        abort_unless(auth()->user()->isSuper() || auth()->user()->hasPermission('create productcolorswatches'), 401);

        $blueprint = new ProductColorSwatchBlueprint();
        $fields = $blueprint()->fields()->preProcess();

        return view('product-color-swatches::color-swatches.create', [
            'blueprint' => $blueprint()->toPublishArray(),
            'values' => $fields->values()->merge([
                'source' => request('source'),
            ]),
            'meta' => $fields->meta(),
        ]);
    }


    public function edit($id)
    {
        abort_unless(auth()->user()->isSuper() || auth()->user()->hasPermission('edit productcolorswatches'), 401);

        $productColorSwatch = ProductColorSwatch::find($id);
        $productColorSwatchValues = $productColorSwatch->fileData();

        $productColorSwatchBlueprint = new ProductColorSwatchBlueprint();
        $productColorSwatchFields = $productColorSwatchBlueprint()->fields()->addValues($productColorSwatchValues)->preProcess();

        return view('product-color-swatches::color-swatches.edit', [
            'productColorSwatch' => $productColorSwatch,
            'blueprint' => $productColorSwatchBlueprint()->toPublishArray(),
            'values' => $productColorSwatchFields->values(),
            'meta' => $productColorSwatchFields->meta(),
        ]);
    }

    public function store(Request $request)
    {
        abort_unless(auth()->user()->isSuper() || auth()->user()->hasPermission('create productcolorswatches'), 401);

        $blueprint = new ProductColorSwatchBlueprint();
        $fields = $blueprint()->fields()->addValues($request->all());
        $fields->validate();

        $productColorSwatch = ProductColorSwatch::make()
            ->src($request->get('src'))
            ->name($request->get('name'))
            ->key($request->get('key'))
            ->colors($request->get('colors'))
            ->enabled($request->get('enabled'));

        $productColorSwatch->save();

        session()->flash('success', 'Product Color Swatch created successfully');

        return new ProductColorSwatchItemResource($productColorSwatch);
    }

    public function update($id, Request $request)
    {
        abort_unless(auth()->user()->isSuper() || auth()->user()->hasPermission('edit productcolorswatches'), 401);

        $blueprint = new ProductColorSwatchBlueprint();
        $fields = $blueprint()->fields()->addValues($request->all());
        $fields->validate();

        $productColorSwatch = ProductColorSwatch::find($id);

        if (! $productColorSwatch) {
            abort('404');
        }

        $productColorSwatch
            ->src($request->get('src'))
            ->name($request->get('name'))
            ->key($request->get('key'))
            ->colors($request->get('colors'))
            ->enabled($request->get('enabled'));

        $productColorSwatch->save();

        session()->flash('success', 'Product Color Swatch updated successfully');

        return new ProductColorSwatchItemResource($productColorSwatch);
    }

    public function destroy($id)
    {
        abort_unless(auth()->user()->isSuper() || auth()->user()->hasPermission('delete productcolorswatches'), 401);

        $productColorSwatch = ProductColorSwatch::find($id);
        $productColorSwatch->delete();

        session()->flash('success', 'Product Color Swatch deleted');
    }

}
