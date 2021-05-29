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

const money = (price: ProductPricingInfo) => {
  return {
    value: +price?.minPrice,
    currencyCode: price?.currency?.code,
  }
}

const normalizeProductOption = (option: CatalogProductVariant) => {
  const { _id, title: displayName, optionTitle } = option

  return {
    __typename: 'MultipleChoiceOption',
    id: _id,
    displayName,
    values: [
      {
        label: optionTitle,
      },
    ],
    ...option,
  }
}

const normalizeProductImages = (media: ImageInfo) => {
  const { URLs } = media

  return {
    url: URLs?.large ? URLs?.large : '',
  }
}

const normalizeProductVariants = (variant: CatalogProductVariant) => {
  const { _id: id, options } = variant
  return {
    id,
    options: options && options?.map((o) => o && normalizeProductOption(o)),
  }
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

  const availableMedia = media?.filter(
    (img) => img.URLs?.large?.endsWith('null') === false
  )

  const productVercel = {
    id: _id,
    name: name,
    vendor,
    description: description,
    path: `/${slug}`,
    slug: slug?.replace(/^\/+|\/+$/g, ''),
    price: pricing?.[0] && money(pricing[0]),
    images: availableMedia?.map((o) => o && normalizeProductImages(o)),
    variants: variants?.map((o) => o && normalizeProductVariants(o)),
    options: options?.map((o) => o && normalizeProductOption(o)),
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
