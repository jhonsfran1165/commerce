const getProductQuery = /* GraphQL */ `
  query getProductBySlug($slug: String) {
    catalogItemProduct(slugOrId: $slug) {
      product {
        _id
        slug
        title
        vendor
        description
        pricing {
          maxPrice
          minPrice
          currency {
            code
          }
        }
        variants {
          _id
          title
          sku
          options {
            _id
            variantId
            title
            optionTitle
          }
          pricing {
            maxPrice
            minPrice
            currency {
              code
            }
            compareAtPrice {
              amount
              currency {
                code
              }
            }
          }
        }
        media {
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
`

export default getProductQuery
