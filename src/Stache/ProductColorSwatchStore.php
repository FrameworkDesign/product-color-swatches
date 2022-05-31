<?php

namespace Weareframework\ProductColorSwatches\Stache;

use Weareframework\ProductColorSwatches\Data\ProductColorSwatch;
use Statamic\Facades\YAML;
use Statamic\Stache\Stores\BasicStore;
use Symfony\Component\Finder\SplFileInfo;

class ProductColorSwatchStore extends BasicStore
{
    protected $storeIndexes = [
        'src'
    ];

    public function key()
    {
        return 'product-color-swatches';
    }

    public function makeItemFromFile($path, $contents)
    {
        $data = YAML::file($path)->parse($contents);

        if (! $id = array_pull($data, 'id')) {
            $idGenerated = true;
            $id = app('stache')->generateId();
        }

        $productColorSwatch = ProductColorSwatch::make()
            ->id($id)
            ->src(array_pull($data, 'src'))
            ->key(array_pull($data, 'key'))
            ->name(array_pull($data, 'name'))
            ->enabled(array_pull($data, 'enabled'))
            ->colors(array_pull($data, 'colors'))
            ->initialPath($path);

        if (isset($idGenerated)) {
            $productColorSwatch->save();
        }

        return $productColorSwatch;
    }

    public function filter(SplFileInfo $file)
    {
        return $file->getExtension() === 'yaml';
    }
}
