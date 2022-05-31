<?php

namespace Weareframework\ProductColorSwatches\Blueprints;

use Statamic\Facades\Blueprint;

class ProductColorSwatchBlueprint extends Blueprint
{
    public function __invoke()
    {
        return Blueprint::make()->setContents([
            'sections' => [
                'main' => [
                    'fields' => [
                        [
                            'handle' => 'name',
                            'field' => [
                                'type' => 'text',
                                'display' => 'Name',
                                'instructions' => 'what is the name of this swatch?',
                                'validate' => 'required|string',
                            ],
                        ],
                        [
                            'handle' => 'key',
                            'field' => [
                                'type' => 'text',
                                'display' => 'Key',
                                'instructions' => 'what is the key of this swatch?',
                                'validate' => 'required|string',
                            ],
                        ],
                        [
                            'handle' => 'colors',
                            'field' => [
                                'type' => 'array',
                                'listable' => false,
                                'display' => 'Colors',
                                'instructions' => 'Please use hex codes with hash for color values e.g #000000',
                                'mode' => 'dynamic',
                                'icon' => 'array',
                            ]
                        ],
                        [
                            'handle' => 'src',
                            'field' => [
                                'type' => 'assets',
                                'container' => 'assets',
                                'max_files' => 1,
                                'display' => 'SVG',
                                'instructions' => 'Upload your SVG here'
                            ],
                        ]
                    ],
                ],
                'sidebar' => [
                    'fields' => [
                        [
                            'handle' => 'enabled',
                            'field' => [
                                'type' => 'toggle',
                                'default' => true,
                                'display' => 'Enabled',
                                'validate' => 'required|boolean',
                            ],
                        ],
                    ],
                ],
            ],
        ]);
    }
}
