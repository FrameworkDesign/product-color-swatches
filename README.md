# Product Color Swatches

> Product Color Swatches is a Statamic addon that does something pretty neat. 
> It allows you to create your own color swatches to be used in the system as a field type

## Features

This addon does:

- Allows you to add your own color swatches 
- Select the color swatches in a field type
- edit the outputted field on the frontend

## How to Install

You can search for this addon in the `Tools > Addons` section of the Statamic control panel and click **install**, or run the following command from your project root:

``` bash
composer require weareframework/product-color-swatches
```

### Install locally
If installing locally then create a local folder to put this in e.g. **addons**, then **weareframework** so full folder path is **addons/weareframework**
clone this repo in and then update your composer file to make statamic aware of a local file like so:

```
    ...
 
    "require": {
        ...,
        "weareframework/product-color-swatches": "*"
    },
 
    ...
    "repositories": [
        {
            "type": "path",
            "url": "addons/weareframework/product-color-swatches"
        }
    ]
```    

the docs at statamic refer to how to do this also: https://statamic.dev/extending/addons#private-addons

## How to Use

Install it, use it, let your site abuse it
