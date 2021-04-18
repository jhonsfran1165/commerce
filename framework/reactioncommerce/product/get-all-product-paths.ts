import { Product } from '@commerce/types'
import { getConfig, ReactionCommerceConfig } from '../api'
import fetchAllProducts from '../api/utils/fetch-all-products'
import { CatalogItemProduct } from '../schema'
import getAllProductsPathsQuery from '../utils/queries/get-all-products-paths-query'

type ProductPath = {
  path: string
}

export type ProductPathNode = {
  node: ProductPath
}

type ReturnType = {
  products: ProductPathNode[]
}

const getAllProductPaths = async (options?: {
  variables?: any
  config?: ReactionCommerceConfig
  preview?: boolean
}): Promise<ReturnType> => {
  let { config, variables = { first: 250 } } = options ?? {}
  config = getConfig(config)

  const products = await fetchAllProducts({
    config,
    query: getAllProductsPathsQuery,
    variables,
  })

  return {
    products: products?.map(({ node: { product } }: CatalogItemProduct) => ({
      node: {
        path: `/${product?.slug}`,
      },
    })),
  }
}

export default getAllProductPaths
