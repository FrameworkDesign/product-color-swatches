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

    public function arrayPull(Array $array, $key, $default = null)
    {
        if (function_exists('array_pull')) {
            return array_pull($array, $key, $default);
        }

        return \Statamic\Support\Arr::pull($array, $key, $default);
    }

    public function makeItemFromFile($path, $contents)
    {
        $data = YAML::file($path)->parse($contents);

        
        if (! $id = $this->arrayPull($data, 'id')) {
            $idGenerated = true;
            $id = app('stache')->generateId();
        }

        $productColorSwatch = ProductColorSwatch::make()
            ->id($id)
            ->src($this->arrayPull($data, 'src'))
            ->key($this->arrayPull($data, 'key'))
            ->name($this->arrayPull($data, 'name'))
            ->enabled($this->arrayPull($data, 'enabled'))            
            ->colors($this->arrayPull($data, 'colors'))
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
