<?php

namespace Weareframework\ProductColorSwatches\Http\Controllers\Api;

use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Statamic\Facades\Collection;
use Statamic\Facades\Config;
use Statamic\Query\Scopes\Filters\Concerns\QueriesFilters;
use Statamic\Support\Arr;
use Statamic\Facades\Site;
use Illuminate\Http\Request;
use Statamic\Facades\Blueprint;
use Illuminate\Support\Facades\Session;
use Illuminate\Http\UploadedFile;
use Statamic\Http\Requests\FilteredRequest;
use Statamic\Http\Controllers\CP\CpController;
use Weareframework\ProductColorSwatches\Data\ProductColorSwatch;
use Weareframework\ProductColorSwatches\Http\Resources\ProductColorSwatchesCollectionToolsPage;

class ApiProductColorSwatchController extends CpController
{
    use QueriesFilters;

    public function index(FilteredRequest $request)
    {
        $query = $this->indexQuery();
        $activeFilterBadges = $this->queryFilters($query, $request->filters);

        $sortField = request('sort');
        $sortDirection = request('order', 'asc');

        if (! $sortField && ! request('search')) {
            $sortField = 'name';
            $sortDirection = 'asc';
        }

        if ($sortField) {
            $query->orderBy($sortField, $sortDirection);
        }

        $productColorSwatches = $query->paginate(request('perPage'));

        return (new ProductColorSwatchesCollectionToolsPage($productColorSwatches))
            ->columnPreferenceKey('product-color-swatches.columns')
            ->additional(['meta' => [
                'activeFilterBadges' => $activeFilterBadges,
            ]]);
    }

    protected function indexQuery()
    {
        $query = ProductColorSwatch::query();

        if ($search = request('search')) {
            $query->where('name', 'like', '%'.$search.'%');
        }

        return $query;
    }

}
