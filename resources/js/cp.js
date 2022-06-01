import ProductColorSwatchesListing from "./components/Tools/ProductColorSwatchesListing";
import PublishFormProductColorSwatch from "./components/Tools/PublishFormProductColorSwatch";

import ProductColorSwatchFieldType from "./components/FieldTypes/ProductColorSwatchFieldType";

Statamic.booting(() => {
    Statamic.$components.register("product-color-swatches-listing", ProductColorSwatchesListing);
    Statamic.$components.register("publish-form-product-color-swatch", PublishFormProductColorSwatch);

    Statamic.$components.register("product_color_swatch-fieldtype", ProductColorSwatchFieldType);
});

