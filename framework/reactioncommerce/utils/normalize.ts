import { Product } from '@commerce/types'

import {
  CatalogProduct,
  ImageInfo,
  CatalogProductVariant,
  Maybe,
  Cart as Checkout,
  ProductPricingInfo,
  CartItem,
} from '../schema'

import type { Cart, LineItem } from '../types'

const money = ({ minPrice, currency }: ProductPricingInfo) => {
  return {
    value: +minPrice,
    currencyCode: currency?.code,
  }
}

const normalizeProductOption = (option: Maybe<CatalogProductVariant>) => {
  const { _id, title: displayName, optionTitle } = option

  return {
    __typename: 'MultipleChoiceOption',
    id: _id,
    displayName,
    values: [
      {
        label: optionTitle || '',
      },
    ],
    ...option,
  }
}

const normalizeProductImages = (media: Maybe<Array<Maybe<ImageInfo>>>) => {
  return media?.map((m) => ({
    url: m?.URLs?.large ? m?.URLs?.large : '',
  }))
}

const normalizeProductVariants = (
  variants: Maybe<Array<Maybe<CatalogProductVariant>>>
) => {
  return variants?.map((variant) => {
    const { _id: id, options } = variant
    return {
      id,
      options: options && options?.map((o) => normalizeProductOption(o)),
    }
  })
}

export function normalizeProduct(productNode: CatalogProduct): Product {
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

  const productVercel = {
    id: _id,
    name: name || '',
    vendor,
    description: description || '',
    path: `/${slug}`,
    slug: slug?.replace(/^\/+|\/+$/g, ''),
    price: money(pricing[0]),
    images: media && normalizeProductImages(media),
    variants: variants && normalizeProductVariants(variants),
    options: options && options?.map((o) => normalizeProductOption(o)),
    ...rest,
  }
  return productVercel
}

export function normalizeCart(cart: Checkout): Cart {
  return {
    id: cart._id,
    customerId: '',
    email: '',
    createdAt: cart.createdAt,
    currency: {
      code: cart?.checkout?.summary.total?.currency?.code || '',
    },
    taxesIncluded: cart?.checkout?.summary?.taxTotal ? true : false,
    lineItems: cart?.items?.edges?.map(
      ({ node }) => node && normalizeLineItem(node)
    ),
    lineItemsSubtotalPrice: +cart.subtotalPriceV2?.amount,
    subtotalPrice: +cart.subtotalPriceV2?.amount,
    totalPrice: cart.totalPriceV2?.amount,
    discounts: [],
  }
}

function normalizeLineItem(node: Maybe<CartItem>): LineItem {
  const {
    _id,
    title,
    productConfiguration: { productId, productVariantId },
    variantTitle,
    price,
    compareAtPrice,
    quantity,
    imageURLs,
    ...rest
  } = node
  return {
    id: _id,
    variantId: productVariantId,
    productId,
    name: `${title}`,
    quantity,
    variant: {
      id: String(_id),
      sku: '',
      name: variantTitle ?? '',
      image: {
        url: imageURLs?.large ?? '/product-img-placeholder.svg',
      },
      requiresShipping: true,
      price: Number(price?.amount),
      listPrice: Number(compareAtPrice?.amount),
    },
    path: '',
    discounts: [],
    options: [],
  }
}
