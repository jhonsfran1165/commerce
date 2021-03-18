import { GraphQLFetcherResult } from '@commerce/api'
import { getConfig, ReactionCommerceConfig } from '../api'
import { CatalogItemEdge } from '../schema'
import { getAllProductsQuery } from '../utils/queries'
import { normalizeProduct } from '../utils/normalize'
import { Product } from '@commerce/types'

type Variables = {
  first?: number
  field?: string
  shopId: string
}

type ReturnType = {
  products: Product[]
}

const getAllProducts = async (options: {
  variables?: Variables
  config?: ReactionCommerceConfig
  preview?: boolean
}): Promise<ReturnType> => {
  let { config, variables = { first: 250 } } = options ?? {}
  config = getConfig(config)

  const { data }: GraphQLFetcherResult = await config.fetch(
    getAllProductsQuery,
    { variables }
  )

  const products =
    data.products?.edges?.node?.map(({ node: p }: CatalogItemEdge) =>
      normalizeProduct(p)
    ) ?? []

  return {
    products,
  }
}

export default getAllProducts
