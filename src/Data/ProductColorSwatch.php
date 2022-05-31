<?php

namespace Weareframework\ProductColorSwatches\Data;

use Illuminate\Support\Facades\Log;
use Statamic\Data\DataCollection;
use Statamic\Data\ExistsAsFile;
use Statamic\Data\TracksQueriedColumns;
use Statamic\Facades\Asset;
use Statamic\Facades\Stache;
use Statamic\Http\Resources\CP\Assets\Asset as AssetResource;
use Statamic\Support\Traits\FluentlyGetsAndSets;
use Weareframework\ProductColorSwatches\Stache\ProductColorSwatchBuilder;

class ProductColorSwatch
{
    use FluentlyGetsAndSets;
    use ExistsAsFile;
    use TracksQueriedColumns;

    /** @var string|int|null */
    protected $id;

    /** @var bool */
    protected $enabled = true;

    /** @var string */
    protected $src;

    /** @var string */
    protected $name;

    /** @var string */
    protected $key;

    protected $colors;

    public static function make()
    {
        return new self();
    }

    public static function query(): ProductColorSwatchBuilder
    {
        return new ProductColorSwatchBuilder(Stache::store('product-color-swatches'));
    }

    public function selectedQueryRelations()
    {
        return $this;
    }

    public static function all()
    {
        return self::query()->get();
    }

    public static function find($id): ?self
    {
        return self::query()->where('id', $id)->first();
    }

    public function path()
    {
        return vsprintf('%s/%s.yaml', [
            rtrim(Stache::store('product-color-swatches')->directory(), '/'),
            $this->id(),
        ]);
    }

    public function save()
    {
        if (! $this->id()) {
            $this->id(Stache::generateId());
        }

        Stache::store('product-color-swatches')->save($this);

        return true;
    }

    public function delete()
    {
        Stache::store('product-color-swatches')->delete($this);

        return true;
    }

    public function fileData()
    {
        return [
            'id' => $this->id(),
            'enabled' => $this->enabled(),
            'name' => $this->name(),
            'key' => $this->key(),
            'src' => $this->src(),
            'colors' => $this->colors()
        ];
    }

    public function value($key)
    {
        return $this->get($key);
    }

    public function get($key, $fallback = null)
    {
        return $this->$key() ?? $fallback;
    }

    public function id($id = null)
    {
        return $this->fluentlyGetOrSet('id')->args(func_get_args());
    }

    public function enabled($enabled = null)
    {
        return $this->fluentlyGetOrSet('enabled')->args(func_get_args());
    }

    public function name($name = null)
    {
        return $this->fluentlyGetOrSet('name')->args(func_get_args());
    }

    public function key($uniqueKey = null)
    {
        return $this->fluentlyGetOrSet('key')->args(func_get_args());
    }

    public function srcString($src = null)
    {
        return $this->fluentlyGetOrSet('src')->args(func_get_args());
    }

    public function src($src = null)
    {
        return $this->fluentlyGetOrSet('src')->args(func_get_args());
    }

    public function colors($colors = null)
    {
        return $this->fluentlyGetOrSet('colors')->args(func_get_args());
    }

    public function srcObject($enabled = null)
    {
        $srcUrl = $this->fluentlyGetOrSet('src')->args(func_get_args());
        if(empty($srcUrl)) {
            return null;
        }

        return collect($srcUrl)->map(function ($url) {
            if (is_null($url)) {
                return null;
            }
            $urlToUse = (is_array($url)) ? $url[0] : $url;
            return Asset::find($urlToUse);
        })->map(function ($asset) {
            if (is_null($asset)) {
                return null;
            }
            $extension = $asset->extension();
            $arr = [
                'id' => $asset->id(),
                'is_image' => $isImage = $asset->isImage(),
                'extension' => $extension,
                'url' => $asset->url(),
            ];

            if ($isImage) {
                $arr['thumbnail'] = cp_route('assets.thumbnails.show', [
                    'encoded_asset' => base64_encode($asset->id()),
                    'size' => 'thumbnail',
                ]);
            }

            if ($extension === 'svg') {
                $arr['thumbnail'] = cp_route('assets.svgs.show', [
                    'encoded_asset' => base64_encode($asset->id()),
                ]);
            }

            return $arr;
        });
    }
}
