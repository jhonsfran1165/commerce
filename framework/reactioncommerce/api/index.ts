import type { CommerceAPIConfig } from '@commerce/api'

import {
  API_URL,
  API_TOKEN,
  SHOPIFY_CHECKOUT_ID_COOKIE,
  SHOPIFY_CUSTOMER_TOKEN_COOKIE,
} from '../const'

if (!API_URL) {
  throw new Error(
    `The environment variable NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN is missing and it's required to access your store`
  )
}

if (!API_TOKEN) {
  throw new Error(
    `The environment variable NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN is missing and it's required to access your store`
  )
}

import fetchGraphqlApi from './utils/fetch-graphql-api'

export interface ReactionCommerceConfig extends CommerceAPIConfig {
  shopId: string
}

export class Config {
  private config: ReactionCommerceConfig

  constructor(config: ReactionCommerceConfig) {
    this.config = config
  }

  getConfig(userConfig: Partial<ReactionCommerceConfig> = {}) {
    return Object.entries(userConfig).reduce<ReactionCommerceConfig>(
      (cfg, [key, value]) => Object.assign(cfg, { [key]: value }),
      { ...this.config }
    )
  }

  setConfig(newConfig: Partial<ReactionCommerceConfig>) {
    Object.assign(this.config, newConfig)
  }
}

const config = new Config({
  locale: 'en-US',
  commerceUrl: API_URL,
  apiToken: API_TOKEN!,
  cartCookie: SHOPIFY_CHECKOUT_ID_COOKIE,
  cartCookieMaxAge: 60 * 60 * 24 * 30,
  fetch: fetchGraphqlApi,
  customerCookie: SHOPIFY_CUSTOMER_TOKEN_COOKIE,
  shopId: 'cmVhY3Rpb24vc2hvcDpuWGNzdmRDZ3hlWFpaaDZKQQ==',
})

export function getConfig(userConfig?: Partial<ReactionCommerceConfig>) {
  return config.getConfig(userConfig)
}

export function setConfig(newConfig: Partial<ReactionCommerceConfig>) {
  return config.setConfig(newConfig)
}
