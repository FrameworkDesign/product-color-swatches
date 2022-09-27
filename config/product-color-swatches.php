<?php

return [
    'file' => 'product_color_swatches',
    /*
     * The database connection redirect should use to store errors
     * by default this is the included 'redirect' connection
     * that uses an sqlite database in storage.
     */
    'connection' => 'product_color_swatches',
    /*
     * Customize where on filesystem the redirects are being stored
     * Useful when using a non-conventional setup where data should
     * not be inside the usual content/redirects folder
     */
    'product_color_swatches_store' => base_path('content/product-color-swatches'),

    'fields' => [
        'name',
        'key',
        'colors',
        'svg',
    ],

    'settings-blueprint' => [
        'name' => [
            'display' => 'General',
            'fields' => [
                'product_color_swatches_section_title' => [
                    'type' => 'section',
                    'display' => 'Colors',
                    'instructions' => 'We use these to match the colors on import.'
                ],
                'product_color_swatches_colors' => [
                    'type' => 'array',
                    'listable' => false,
                    'display' => 'Colors',
                    'instructions' => 'Please use hex codes with hash for color values e.g #000000',
                    'mode' => 'dynamic',
                    'icon' => 'array',
                ],
                'product_color_swatches_section_api_settings' => [
                    'type' => 'section',
                    'display' => 'API import settings',
                    'instructions' => 'We can import all the color swatch combinations from an API'
                ],
                'product_color_swatches_route_url' => [
                    'type' => 'text',
                    'character_limit' => '500',
                    'display' => 'API Route - Single Product',
                    'instructions' => 'The URL of the API route',
                    'validate' => 'required|string',
                ],
                'product_color_swatches_route_method' => [
                    'type' => 'select',
                    'display' => 'Route Method Type',
                    'instructions' => 'What method type?',
                    'validate' => 'required|string',
                    'options' => [
                        'GET' => 'GET',
                        'POST' => 'POST',
                        'PATCH' => 'PATCH',
                        'PUT' => 'PUT',
                    ]
                ],
            ],
        ]
    ]

];
