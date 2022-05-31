<?php
namespace Weareframework\ProductColorSwatches\Http\Resources;

use Illuminate\Http\Resources\Json\ResourceCollection;
use Statamic\CP\Column;
use Statamic\CP\Columns;

class ProductColorSwatchesCollection extends ResourceCollection
{
    public $collects = ProductColorSwatchItemResource::class;

    protected $columnPreferenceKey;

    public function columnPreferenceKey($key)
    {
        $this->columnPreferenceKey = $key;

        return $this;
    }

    private function setColumns()
    {
        $columns = new Columns([
            Column::make('enabled')->label('Enabled'),
            Column::make('name')->label('Name'),
            Column::make('label')->label('Label'),
            Column::make('key')->label('Key'),
            Column::make('value')->label('Value'),
            Column::make('src')->label('Src')->fieldtype('assets'),
            Column::make('colors')->label('Colors')->fieldtype('array'),
        ]);

        if ($key = $this->columnPreferenceKey) {
            $columns->setPreferred($key);
        }

        $this->columns = $columns->rejectUnlisted()->values();
    }

    public function toArray($request)
    {
        $this->setColumns();

        return $this->collection->each(function ($colorSwatch) {
            $colorSwatch->columns($this->columns);
        });
    }
}
