<?php

namespace Weareframework\ProductColorSwatches\Exporters;

use Weareframework\ProductColorSwatches\Data\ProductColorSwatch;
use Statamic\Forms\Exporters\AbstractExporter;

class JsonExporter extends AbstractExporter
{
    /**
     * Perform the export.
     *
     * @return string
     */
    public function export()
    {
        $submissions = ProductColorSwatch::all()->map(function (ProductColorSwatch $productColorSwatch) {
            return $productColorSwatch->fileData();
        })->toArray();

        return json_encode($submissions);
    }

    /**
     * Get the content type.
     *
     * @return string
     */
    public function contentType()
    {
        return 'application/json';
    }
}
