<?php

namespace Weareframework\ProductColorSwatches\Http\Controllers\Cp\Web;

use Weareframework\ProductColorSwatches\Library\Files\File;
use Statamic\Facades\Site;
use Illuminate\Http\Request;
use Statamic\Facades\Blueprint;
use Statamic\Http\Controllers\CP\CpController;
use Weareframework\ProductColorSwatches\Library\Settings\CollectSettings;

class SettingsController extends CpController
{
    /**
     * @var File
     */
    protected $file;

    public function __construct(Request $request, File $file)
    {
        $this->file = $file;
        parent::__construct($request);
    }

    public function index(Request $request)
    {
        $settings = (new CollectSettings($this->file))->handle();

        return view('product-color-swatches::settings.index', [
            'blueprint' => $settings->blueprint->toPublishArray(),
            'values'    => $settings->fields->values(),
            'meta'      => $settings->fields->meta(),
        ]);
    }

    public function update(Request $request)
    {
        $this->setLocale();

        $blueprint = Blueprint::makeFromSections(config('statamic.product-color-swatches.settings-blueprint'));
        $fields = $blueprint->fields()->addValues($request->all());

        // Perform validation. Like Laravel's standard validation, if it fails,
        // a 422 response will be sent back with all the validation errors.
        $fields->validate();

        // Perform post-processing. This will convert values the Vue components
        // were using into values suitable for putting into storage.
        $values = $fields->process()->values();

        $this->file->write($values->toArray());
    }

    /**
     * Since we are accessing the files via CP, we need to fetch the
     * current language via a session variable, and set the locale
     *
     * @return void
     */
    private function setLocale()
    {
        $this->file->setLocale(
            session('statamic.cp.selected-site') ?
                Site::get(session('statamic.cp.selected-site'))->locale() :
                Site::current()->locale());
    }

}
