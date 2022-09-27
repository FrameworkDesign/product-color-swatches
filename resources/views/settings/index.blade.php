@extends('statamic::layout')
@section('title', 'Product color swatches settings')
@section('content')
    <div class="flex items-center mb-3">
        <h1 class="flex-1">Product color swatches settings</h1>
        <a href="{{ cp_route('weareframework.product-color-swatches.index') }}" class="btn mr-1">Dashboard</a>
    </div>
    <div class="flex flex-col items-start justify-start mb-0">
        <p class="mb-1">Control your Product color swatches settings general settings here. Make sure to read the instructions on each input.</p>
    </div>
    @if(isset($values['product_color_swatches_route_url']) && !is_null($values['product_color_swatches_route_url']) && !empty($values['product_color_swatches_route_url']))
        <a href="{{ cp_route('weareframework.product-color-swatches.sync-colors-api') }}" class="btn mb-2">Sync Colors From API</a>
    @endif

    <div>
        <publish-form
            title="Settings"
            action="{{ cp_route('weareframework.product-color-swatches.settings.update') }}"
            :blueprint='@json($blueprint)'
            :meta='@json($meta)'
            :values='@json($values)'
        ></publish-form>


    </div>
@stop
