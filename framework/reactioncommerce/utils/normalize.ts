import { Maybe } from './../schema.d'
import { Product } from '@commerce/types'

import {
  CatalogProduct,
  ImageInfo,
  CatalogProductVariant,
  Shop,
  Checkout,
  CheckoutLineItemEdge,
  SelectedOption,
  ImageConnection,
  ProductVariantConnection,
  MoneyV2,
  ProductOption,
} from '../schema'

import type { Cart, LineItem } from '../types'

const money = ({ amount, currencyCode }: MoneyV2) => {
  return {
    value: +amount,
    currencyCode,
  }
}

const normalizeProductOption = (option: Maybe<CatalogProductVariant>) => {
  if (option) {
    const { _id, attributeLabel: displayName, optionTitle } = option

    return {
      __typename: 'MultipleChoiceOption',
      id: _id,
      displayName,
      values: {
        label: optionTitle,
      },
    }
  }
}

const normalizeProductImages = (
  media: Maybe<Array<Maybe<ImageInfo>>> | undefined
) => {
  if (media) {
    return media?.map((m) => ({
      url: m?.URLs?.large ? m?.URLs?.large : '',
    }))
  } else {
    return [
      {
        url: '',
      },
    ]
  }
}

const normalizeProductVariants = (
  variants: Maybe<Array<Maybe<CatalogProductVariant>>> | undefined
) => {
  return (
    variants &&
    variants?.map((variant) => {
      if (variant) {
        const { _id: id, options, sku, title, pricing: priceV2 } = variant

        return {
          id,
          name: title,
          sku: sku ?? id,
          price: priceV2[0]?.displayPrice ? +priceV2[0]?.displayPrice : '',
          listPrice: priceV2[0]?.compareAtPrice?.amount
            ? +priceV2[0]?.compareAtPrice?.amount
            : 0,
          requiresShipping: true,
          options: (options || []).map((o) => normalizeProductOption(o)),
        }
      }
    })
  )
}

export function normalizeProduct({
  product: productNode,
}: {
  product: CatalogProduct
  shop: Shop
}): Product {
  const {
    _id,
    title: name,
    vendor,
    media,
    variants,
    description,
    slug,
    pricing,
    ...rest
  } = productNode

  let options: CatalogProductVariant[] = []

  variants?.map((variant) =>
    (variant?.options || []).map((option) => {
      if (option) {
        options.push(option)
      }
    })
  )

  const product = {
    id: _id,
    name: name || '',
    vendor,
    description: description || '',
    path: `/${slug}`,
    slug: slug?.replace(/^\/+|\/+$/g, ''),
    price: money(pricing[0]?.minPrice),
    images: normalizeProductImages(media),
    variants: normalizeProductVariants(variants),
    options: options ? options.map((o) => normalizeProductOption(o)) : [],
    ...rest,
  }

  return product
}

export function normalizeCart(checkout: Checkout): Cart {
  return {
    id: checkout.id,
    customerId: '',
    email: '',
    createdAt: checkout.createdAt,
    currency: {
      code: checkout.totalPriceV2?.currencyCode,
    },
    taxesIncluded: checkout.taxesIncluded,
    lineItems: checkout.lineItems?.edges.map(normalizeLineItem),
    lineItemsSubtotalPrice: +checkout.subtotalPriceV2?.amount,
    subtotalPrice: +checkout.subtotalPriceV2?.amount,
    totalPrice: checkout.totalPriceV2?.amount,
    discounts: [],
  }
}

function normalizeLineItem({
  node: { id, title, variant, quantity, ...rest },
}: CheckoutLineItemEdge): LineItem {
  return {
    id,
    variantId: String(variant?.id),
    productId: String(variant?.id),
    name: `${title}`,
    quantity,
    variant: {
      id: String(variant?.id),
      sku: variant?.sku ?? '',
      name: variant?.title!,
      image: {
        url: variant?.image?.originalSrc ?? '/product-img-placeholder.svg',
      },
      requiresShipping: variant?.requiresShipping ?? false,
      price: variant?.priceV2?.amount,
      listPrice: variant?.compareAtPriceV2?.amount,
    },
    path: '',
    discounts: [],
    options:
      // By default Shopify adds a default variant with default names, we're removing it. https://community.shopify.com/c/Shopify-APIs-SDKs/Adding-new-product-variant-is-automatically-adding-quot-Default/td-p/358095
      variant?.title == 'Default Title'
        ? []
        : [
            {
              value: variant?.title,
            },
          ],
  }
}
