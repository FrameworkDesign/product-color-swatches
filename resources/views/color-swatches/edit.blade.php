@extends('statamic::layout')

@section('title', 'Edit Product color swatche')
@section('wrapper_class', 'max-w-3xl')

@section('content')
    <publish-form-product-color-swatch
        title="Update Product Color Swatch"
        action="{{ cp_route('weareframework.product-color-swatches.update', $productColorSwatch->id()) }}"
        :blueprint='@json($blueprint)'
        :meta='@json($meta)'
        :values='@json($values)'
        :breadcrumbs="[
            {
                url: '{{ cp_route('weareframework.product-color-swatches.index') }}',
                text: '< Product Color Swatches'
            }
        ]"
        redirect-to="{{ cp_route('weareframework.product-color-swatches.edit', $productColorSwatch->id()) }}"
    ></publish-form-product-color-swatch>
@stop
