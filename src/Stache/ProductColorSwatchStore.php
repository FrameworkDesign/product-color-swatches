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

    public function arrayPull(array $array, $key, $default = null)
    {
        try {
            if (function_exists('array_pull')) {
                return array_pull($array, $key, $default);
            }

            return \Illuminate\Support\Arr::pull($array, $key, $default);

        } catch (\Exception $e) {
            return $this->rawArrayPull($array, $key);
        }
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


    /**
     * Replicate Laravel's Arr::pull() functionality.
     *
     * @param array  $array The array to pull the value from.
     * @param string|int  $key The key of the value to pull.
     * @param mixed  $default The default value to return if the key doesn't exist.
     * @return mixed The value that was pulled, or the default value if the key doesn't exist.
     */
    function rawArrayPull(&$array, $key)
    {
        // Check if the key exists in the array
        if (array_key_exists($key, $array)) {
            // Get the value and then unset it from the array
            $value = $array[$key];
            unset($array[$key]);
            return $value;
        }

        // Return the default value if the key doesn't exist
        return $default;
    }
    
}
