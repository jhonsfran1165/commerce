export const productConnection = `
totalCount
pageInfo {
  endCursor
  startCursor
  hasNextPage
  hasPreviousPage
}
edges {
  cursor
  node {
    _id
    ... on CatalogItemProduct {
      product {
        variants {
          _id
          variantId
          title
          optionTitle
          index
          pricing {
            compareAtPrice {
              displayAmount
            }
            price
            currency {
              code
            }
            displayPrice
          }
          canBackorder
          inventoryAvailableToSell
          isBackorder
          isSoldOut
          isLowQuantity
          options {
            _id
            variantId
            title
            index
            pricing {
              compareAtPrice {
                displayAmount
              }
              price
              currency {
                code
              }
              displayPrice
            }
            optionTitle
            canBackorder
            inventoryAvailableToSell
            isBackorder
            isSoldOut
            isLowQuantity
            media {
              priority
              productId
              variantId
              URLs {
                thumbnail
                small
                medium
                large
                original
              }
            }
            metafields {
              description
              key
              namespace
              scope
              value
              valueType
            }
            media {
              URLs {
                large
                medium
                original
                small
                thumbnail
              }
              priority
              productId
              variantId
            }
          }
          media {
            priority
            productId
            variantId
            URLs {
              thumbnail
              small
              medium
              large
              original
            }
          }
          metafields {
            description
            key
            namespace
            scope
            value
            valueType
          }
          primaryImage {
            URLs {
              large
              medium
              original
              small
              thumbnail
            }
            priority
            productId
            variantId
          }
        }
        _id
        title
        slug
        description
        vendor
        isLowQuantity
        isSoldOut
        isBackorder
        metafields {
          description
          key
          namespace
          scope
          value
          valueType
        }
        shop {
          currency {
            code
          }
        }
        pricing {
          compareAtPrice {
            displayAmount
          }
          currency {
            code
          }
          displayPrice
          minPrice
          maxPrice
        }
        media {
          priority
          productId
          variantId
          URLs {
            thumbnail
            small
            medium
            large
            original
          }
        }
        primaryImage {
          URLs {
            thumbnail
            small
            medium
            large
            original
          }
        }
      }
    }
  }
}`

export const productsFragment = `
catalogItems(
  shopIds: [$shopId]
  tagIds: $tagIds
  first: $first
  last: $last
  before: $before
  after: $after
  sortBy: $sortBy
  sortByPriceCurrencyCode: $sortByPriceCurrencyCode
  sortOrder: $sortOrder
) {
  ${productConnection}
}
`

const getAllProductsQuery = /* GraphQL */ `
  query catalogItems(
    $shopId: ID!
    $tagIds: [ID]
    $first: ConnectionLimitInt
    $last: ConnectionLimitInt
    $before: ConnectionCursor
    $after: ConnectionCursor
    $sortBy: CatalogItemSortByField
    $sortByPriceCurrencyCode: String
    $sortOrder: SortOrder
  ) {
    ${productsFragment}
  }
`
export default getAllProductsQuery
