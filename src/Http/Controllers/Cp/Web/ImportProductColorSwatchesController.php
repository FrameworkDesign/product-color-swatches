<?php

namespace Weareframework\ProductColorSwatches\Http\Controllers\Cp\Web;

use Illuminate\Support\Facades\Cache;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Spatie\SimpleExcel\SimpleExcelReader;
use Statamic\Facades\Scope;
use Statamic\Facades\User;
use Statamic\Http\Controllers\CP\CpController;
use Weareframework\ProductColorSwatches\Data\ProductColorSwatch;

class ImportProductColorSwatchesController extends CpController
{

    public function index()
    {
        abort_unless(auth()->user()->isSuper() || auth()->user()->hasPermission('view productcolorswatches'), 401);
        $importFields = config('statamic.product-color-swatches.fields');
        return view('product-color-swatches::color-swatches.import', [
            'importFields' => $importFields
        ]);
    }

    public function store(Request $request)
    {
        $user = User::fromUser(auth()->user());

        abort_unless($user->isSuper() || $user->hasPermission('create productcolorswatches'), 401);

        $request->validate([
            'file' => ['required', 'file'],
            'delimiter' => ['required'],
        ]);

        /** @var \Illuminate\Http\UploadedFile $file */
        $file = $request->file('file');
        $delimiter = $request->input('delimiter', ',');

        $extension = with($file->extension(), function ($ext) {
            return $ext === 'txt' ? 'csv' : $ext;
        });

        $reader = SimpleExcelReader::create($file->getRealPath(), $extension)
            ->useDelimiter($delimiter);

        $skipped = 0;
        $reader->getRows()->each(function (array $data) use (&$skipped) {
            if (! $data['name'] || ! $data['key'] || ! $data['colors']) {
                $skipped++;
                return;
            }

            $motorcycleDealers = ProductColorSwatch::make()->fill($data);
            $motorcycleDealers->save();
        });

        $message = 'imported successfully.';

        if ($skipped > 0) {
            $message .= " {$skipped} rows skipped due to invalid data.";
        }

        session()->flash('success', $message);

        return redirect()->action([ProductColorSwatchController::class, 'index']);
    }

}
