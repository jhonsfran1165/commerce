const getAllProductsPathsQuery = /* GraphQL */ `
  query getAllProductPaths(
    $first: ConnectionLimitInt = 250
    $cursor: ConnectionCursor
    $shopId: ID!
  ) {
    catalogItems(first: $first, after: $cursor, shopIds: [$shopId]) {
      pageInfo {
        hasNextPage
      }
      edges {
        cursor
        node {
          _id
          ... on CatalogItemProduct {
            product {
              _id
              slug
              variants {
                _id
                options {
                  _id
                }
              }
            }
          }
        }
      }
    }
  }
`
export default getAllProductsPathsQuery
