@extends('statamic::layout')
@section('title', 'Product Color Swatches')
@section('content')
    <div class="flex mb-3">
        <h1 class="flex-1">Product Color Swatches</h1>

        <a href="{{ cp_route('weareframework.product-color-swatches.settings.index') }}" class="btn mr-1">Settings</a>

        @if(auth()->user()->isSuper() || auth()->user()->hasPermission('create productcolorswatches'))
            <a href="{{ cp_route('weareframework.product-color-swatches.import') }}" class="btn mr-1">Import csv</a>
        @endif

        <dropdown-list class="mr-1">
            <button class="btn" slot="trigger">{{ __('Export Product Color Swatches') }}</button>
            <dropdown-item :text="__('Export as CSV')" redirect="{{ cp_route('weareframework.product-color-swatches.export', ['type' => 'csv']) }}?download=true"></dropdown-item>
            <dropdown-item :text="__('Export as JSON')" redirect="{{ cp_route('weareframework.product-color-swatches.export', ['type' => 'json']) }}?download=true"></dropdown-item>
        </dropdown-list>

        @if(auth()->user()->isSuper() || auth()->user()->hasPermission('create productcolorswatches'))
            <a href="{{ cp_route('weareframework.product-color-swatches.create') }}" class="btn-primary">Create</a>
        @endif
    </div>

    <product-color-swatches-listing
        :filters="{{ $filters->toJson() }}"
    ></product-color-swatches-listing>
@endsection

