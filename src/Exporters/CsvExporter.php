<?php

namespace Weareframework\ProductColorSwatches\Exporters;

use League\Csv\Writer;
use Weareframework\ProductColorSwatches\Data\ProductColorSwatch;
use SplTempFileObject;
use Statamic\Forms\Exporters\AbstractExporter;

class CsvExporter extends AbstractExporter
{
    /**
     * @var Writer
     */
    private $writer;

    /**
     * Create a new CsvExporter.
     */
    public function __construct()
    {
        $this->writer = Writer::createFromFileObject(new SplTempFileObject);
    }

    /**
     * Perform the export.
     *
     * @return string
     */
    public function export()
    {
        $this->insertHeaders();

        $this->insertData();

        return (string) $this->writer;
    }

    /**
     * Insert the headers into the CSV.
     */
    private function insertHeaders()
    {
        $headers = array_keys(ProductColorSwatch::all()->first()->fileData());

        unset($headers[array_search('id', $headers)]);

        $this->writer->insertOne($headers);
    }

    /**
     * Insert the submission data into the CSV.
     */
    private function insertData()
    {
        $data = ProductColorSwatch::all()->map(function (\Weareframework\ProductColorSwatches\Data\ProductColorSwatch $productColorSwatch) {
            $productColorSwatch = $productColorSwatch->fileData();
            $productColorSwatch['colors'] = json_encode($productColorSwatch['colors']);
            $productColorSwatch['src'] = json_encode($productColorSwatch['src']);
            unset($productColorSwatch['id']);

            return $productColorSwatch;
        })->all();

        $this->writer->insertAll($data);
    }
}
