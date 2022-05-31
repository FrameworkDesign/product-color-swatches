@extends('statamic::layout')
@section('title', 'Product Color Swatches')
@section('content')
    <div class="flex items-center mb-3">
        <h1 class="flex-1">Product Color Swatches</h1>
    </div>
    <div class="flex items-center mb-3">
        <p>Control your Product color swatch settings here.</p>
    </div>

    <div>
        <publish-form
            title="Settings"
            action="{{ cp_route('weareframework.product-color-swatches.settings.update') }}"
            :blueprint='@json($blueprint)'
            :meta='@json($meta)'
            :values='@json($values)'
        />

    </div>
@stop
