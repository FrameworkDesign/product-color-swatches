<?php

namespace Weareframework\ProductColorSwatches\Http\Controllers\Cp\Web;

use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Spatie\SimpleExcel\SimpleExcelReader;
use Statamic\Exceptions\FatalException;
use Statamic\Facades\File;
use Statamic\Facades\Scope;
use Statamic\Facades\User;
use Statamic\Http\Controllers\CP\CpController;
use Statamic\Support\Str;
use Weareframework\MotorcycleDealers\Blueprints\MotorcycleDealerBlueprint;
use Weareframework\MotorcycleDealers\Data\MotorcycleDealer;
use Weareframework\MotorcycleDealers\Http\Resources\MotorcycleDealerItemResource;

class ExportProductColorSwatchesController extends CpController
{

    public function index($type)
    {
        $user = User::fromUser(auth()->user());
        abort_unless($user->isSuper() || $user->hasPermission('view productcolorswatches'), 401);

        $exporter = 'Weareframework\ProductColorSwatches\Exporters\\'.Str::studly($type).'Exporter';

        if (! class_exists($exporter)) {
            throw new FatalException("Exporter of type [$type] does not exist.");
        }

        $exporter = new $exporter;
        $content = $exporter->export();

        if (request()->has('download')) {
            $path = storage_path('statamic/tmp/product-color-swatches/' . time() . '.' . $type);
            File::put($path, $content);
            $response = response()->download($path)->deleteFileAfterSend(true);
        } else {
            $response = response($content)->header('Content-Type', $exporter->contentType());
        }

        return $response;
    }
}
