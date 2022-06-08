<?php

return [
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
                    'display' => 'title ere',
                    'instructions' => 'instructions here'
                ],
                'product_color_swatches_assets' => [
                    'type' => 'assets',
                    'container' => 'assets',
                    'max_files' => 1,
                    'display' => 'Image',
                    'instructions' => 'yes it'
                ],
                'product_color_swatches_title_append' => [
                    'type' => 'text',
                    'character_limit' => '25',
                    'display' => 'title ere 2',
                    'instructions' => 'instructions here 2'
                ],
                'product_color_swatches_section_description' => [
                    'type' => 'section',
                    'display' => 'title ere 3',
                    'instructions' => 'instructions here 3'
                ],
                'product_color_swatches_meta_description' => [
                    'type' => 'textarea',
                    'character_limit' => '200',
                    'display' => 'title ere 4',
                    'instructions' => 'instructions here 4'
                ],
            ],
        ]
    ]

];
