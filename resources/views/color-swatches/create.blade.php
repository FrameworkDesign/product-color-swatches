@extends('statamic::layout')

@section('title', 'Create Product Color Swatches')
@section('wrapper_class', 'max-w-3xl')

@section('content')
    <publish-form-product-color-swatch
        title="Create Product Color Swatch"
        action="{{ cp_route('weareframework.product-color-swatches.store') }}"
        :blueprint='@json($blueprint)'
        :meta='@json($meta)'
        :values='@json($values)'
        :breadcrumbs="[
            {
                url: '{{ cp_route('weareframework.product-color-swatches.index') }}',
                text: '< Redirects'
            }
        ]"
        redirect-to="{{ cp_route('weareframework.product-color-swatches.index') }}"
    ></publish-form-product-color-swatch>
@stop
