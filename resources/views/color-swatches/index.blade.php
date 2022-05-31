@extends('statamic::layout')
@section('title', 'Product Color Swatches')
@section('content')
    <div class="flex mb-3">
        <h1 class="flex-1">Product Color Swatches</h1>

        @if(auth()->user()->isSuper() || auth()->user()->hasPermission('create productcolorswatches'))
            <a href="{{ cp_route('weareframework.product-color-swatches.create') }}" class="btn-primary">Create</a>
        @endif
    </div>

    <product-color-swatches-listing
        :filters="{{ $filters->toJson() }}"
    ></product-color-swatches-listing>
@endsection

