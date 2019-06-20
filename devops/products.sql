SELECT "ProductVariant"."id", "ProductVariant"."description", "ProductVariant"."image_id", "ProductVariant"."public_image_id",
       "ProductVariant"."image_ids", "ProductVariant"."is_active", "ProductVariant"."verification_status_id", "ProductVariant"."consumption_details",
       "ProductVariant"."storage_information", "ProductVariant"."product_id", "ProductVariant"."brand_id", "ProductVariant"."bundle_price",
       "ProductVariant"."bundle_discount_percentage", "ProductVariant"."company_id", "ProductVariant"."versions", "ProductVariant"."createdAt",
       "ProductVariant"."updatedAt",

       "brand"."id" AS "brand.id",
       "brand"."name" AS "brand.name",
       "brand"."description" AS "brand.description",
       "brand"."image_id" AS "brand.image_id",
       "brand"."createdAt" AS "brand.createdAt",
       "brand"."updatedAt" AS "brand.updatedAt",

       "product"."id" AS "product.id",
       "product"."name" AS "product.name",
       "product"."category_id" AS "product.category_id",
       "product"."product_type_id" AS "product.product_type_id",
       "product"."createdAt" AS "product.createdAt",
       "product"."updatedAt" AS "product.updatedAt",

       "product->category"."id" AS "product.category.id",
       "product->category"."name" AS "product.category.name",
       "product->category"."image_id" AS "product.category.image_id",
       "product->category"."public_image_id" AS "product.category.public_image_id",
       "product->category"."category_id" AS "product.category.category_id",
       "product->category"."position" AS "product.category.position",
       "product->category"."createdAt" AS "product.category.createdAt",
       "product->category"."updatedAt" AS "product.category.updatedAt",

       "product->product_type"."id" AS "product.product_type.id",
       "product->product_type"."name" AS "product.product_type.name",
       "product->product_type"."description" AS "product.product_type.description",
       "product->product_type"."createdAt" AS "product.product_type.createdAt",
       "product->product_type"."updatedAt" AS "product.product_type.updatedAt",

       "pvp"."id" AS "pvp.id",
       "pvp"."sku" AS "pvp.sku",
       "pvp"."unit_size" AS "pvp.unit_size",
       "pvp"."discounted_floor_price" AS "pvp.discounted_floor_price",
       "pvp"."unit_id" AS "pvp.unit_id",
       "pvp"."quantity" AS "pvp.quantity",
       "pvp"."price" AS "pvp.price",
       "pvp"."product_variant_id" AS "pvp.product_variant_id",
       "pvp"."image_id" AS "pvp.image_id",
       "pvp"."public_image_id" AS "pvp.public_image_id",
       "pvp"."image_ids" AS "pvp.image_ids",
       "pvp"."license_type_id" AS "pvp.license_type_id",
       "pvp"."createdAt" AS "pvp.createdAt",
       "pvp"."updatedAt" AS "pvp.updatedAt",

       "pvp->unit"."id" AS "pvp.unit.id",
       "pvp->unit"."name" AS "pvp.unit.name",
       "pvp->unit"."createdAt" AS "pvp.unit.createdAt",
       "pvp->unit"."updatedAt" AS "pvp.unit.updatedAt",

       "pvp->ppia"."id" AS "pvp.ppia.id",
       "pvp->ppia"."warehouse_id" AS "pvp.ppia.warehouse_id",
       "pvp->ppia"."product_variant_price_id" AS "pvp.ppia.product_variant_price_id",
       "pvp->ppia"."local_quantity" AS "pvp.ppia.local_quantity",
       "pvp->ppia"."remote_quantity" AS "pvp.ppia.remote_quantity",
       "pvp->ppia"."createdAt" AS "pvp.ppia.createdAt",
       "pvp->ppia"."updatedAt" AS "pvp.ppia.updatedAt",

       "pvp->product_price_discount_value"."id" AS "pvp.product_price_discount_value.id",
       "pvp->product_price_discount_value"."percentage" AS "pvp.product_price_discount_value.percentage",
       "pvp->product_price_discount_value"."product_variant_price_id" AS "pvp.product_price_discount_value.product_variant_price_id",
       "pvp->product_price_discount_value"."createdAt" AS "pvp.product_price_discount_value.createdAt",
       "pvp->product_price_discount_value"."updatedAt" AS "pvp.product_price_discount_value.updatedAt",

       "favorites"."id" AS "favorites.id",
       "favorites"."product_variant_id" AS "favorites.product_variant_id",
       "favorites"."company_id" AS "favorites.company_id",
       "favorites"."createdAt" AS "favorites.createdAt",
       "favorites"."updatedAt" AS "favorites.updatedAt",

       "tags"."id" AS "tags.id",
       "tags"."name" AS "tags.name",
       "tags"."description" AS "tags.description",
       "tags"."is_system" AS "tags.is_system",
       "tags"."createdAt" AS "tags.createdAt",
       "tags"."updatedAt" AS "tags.updatedAt",

       "tags->ProductVariantTag"."id" AS "tags.ProductVariantTag.id",
       "tags->ProductVariantTag"."product_variant_id" AS "tags.ProductVariantTag.product_variant_id",
       "tags->ProductVariantTag"."tag_id" AS "tags.ProductVariantTag.tag_id",
       "tags->ProductVariantTag"."createdAt" AS "tags.ProductVariantTag.createdAt",
       "tags->ProductVariantTag"."updatedAt" AS "tags.ProductVariantTag.updatedAt"
FROM
    "product_variant" AS "ProductVariant"
        INNER JOIN "brand" AS "brand" ON "ProductVariant"."brand_id" = "brand"."id"
        INNER JOIN "product" AS "product" ON "ProductVariant"."product_id" = "product"."id" AND "product"."category_id" IN (8)
        INNER JOIN "category" AS "product->category" ON "product"."category_id" = "product->category"."id"
        INNER JOIN "product_type" AS "product->product_type" ON "product"."product_type_id" = "product->product_type"."id" AND "product->product_type"."name" IN ('simple', 'bundle')
        INNER JOIN "product_variant_price" AS "pvp" ON "ProductVariant"."id" = "pvp"."product_variant_id" AND "pvp"."price" BETWEEN '0' AND '9999' AND "pvp"."license_type_id" IN (3, 2, 1, 4)
        INNER JOIN "unit" AS "pvp->unit" ON "pvp"."unit_id" = "pvp->unit"."id"
        INNER JOIN "vw_product_price_inventory_availability" AS "pvp->ppia" ON "pvp"."id" = "pvp->ppia"."product_variant_price_id" AND "pvp->ppia"."warehouse_id" IN (2) AND "pvp->ppia"."remote_quantity" > 0
        LEFT OUTER JOIN "vw_product_price_discount_value" AS "pvp->product_price_discount_value" ON "pvp"."id" = "pvp->product_price_discount_value"."product_variant_price_id" AND "pvp->product_price_discount_value"."company_id" = 598
        LEFT OUTER JOIN "favorite_product" AS "favorites" ON "ProductVariant"."id" = "favorites"."product_variant_id" AND "favorites"."company_id" = 598
        LEFT OUTER JOIN ( "product_variant_tag" AS "tags->ProductVariantTag"
        INNER JOIN "tag" AS "tags" ON "tags"."id" = "tags->ProductVariantTag"."tag_id") ON "ProductVariant"."id" = "tags->ProductVariantTag"."product_variant_id"

WHERE "ProductVariant"."is_active" = true;
