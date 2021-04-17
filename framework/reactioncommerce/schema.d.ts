export type Maybe<T> = T
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  /** A string email address */
  Email: any
  /**
   *
   * An opaque string that identifies a particular result within a connection,
   * allowing you to request a subset of results before or after that result.
   *
   */
  ConnectionCursor: any
  /**
   *
   * An integer between 1 and 50, inclusive. Values less than 1 become 1 and
   * values greater than 50 become 50.
   *
   */
  ConnectionLimitInt: any
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any
  /** An object with any fields */
  JSONObject: any
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
}

/** Queries return all requested data, without any side effects */
export type Query = {
  __typename?: 'Query'
  /** A test query */
  ping: Scalars['String']
  /** Returns the primary shop for the domain */
  primaryShop?: Maybe<Shop>
  /** Returns the ID of the primary shop for the domain */
  primaryShopId?: Maybe<Scalars['ID']>
  /** Returns a shop by ID */
  shop?: Maybe<Shop>
  /** Returns a shop by slug */
  shopBySlug?: Maybe<Shop>
  shops?: Maybe<ShopConnection>
  /**
   * Returns app settings that are not shop specific. Plugins extend the GlobalSettings type to support
   * whatever settings they need.
   */
  globalSettings: GlobalSettings
  /**
   * Returns app settings for a specific shop. Plugins extend the ShopSettings type to support
   * whatever settings they need.
   */
  shopSettings: ShopSettings
  /** Get e-mail jobs for a given set of shops */
  emailJobs: EmailJobConnection
  /**
   * Get a list of errors and suggested properly formatted addresses for an address. If no address
   * validation service is active for the shop, this will return as if the address is valid even
   * though no check actually occurred.
   */
  addressValidation: AddressValidationResults
  /** Get a full list of all registered address validation services */
  addressValidationServices: Array<Maybe<AddressValidationService>>
  /** Returns a list of defined address validation rules for a shop */
  addressValidationRules: AddressValidationRuleConnection
  /** SystemInformation object */
  systemInformation: SystemInformation
  /** Retrieves a list of email templates */
  emailTemplates?: Maybe<TemplateConnection>
  /** Returns a paged list of all roles associated with a shop */
  roles?: Maybe<RoleConnection>
  /** Returns the account with the provided ID */
  account?: Maybe<Account>
  /** Returns accounts optionally filtered by account groups */
  accounts: AccountConnection
  /** Returns customer accounts */
  customers: AccountConnection
  /** Returns the account for the authenticated user */
  viewer?: Maybe<Account>
  /** Returns a single group by ID. */
  group?: Maybe<Group>
  /** Returns a list of groups for the shop with ID `shopId`, as a Relay-compatible connection. */
  groups?: Maybe<GroupConnection>
  /** Returns all pending staff member invitations */
  invitations: InvitationConnection
  /** Returns a paged list of all roles associated with a shop */
  rolesAvailablesByShop?: Maybe<RoleConnection>
  /** Query for a single Product */
  product?: Maybe<Product>
  /** Query for a list of Products */
  products?: Maybe<ProductConnection>
  /** Gets items from a shop catalog */
  catalogItems?: Maybe<CatalogItemConnection>
  /** Gets product from catalog */
  catalogItemProduct?: Maybe<CatalogItemProduct>
  /** Returns a list of product in a tag */
  productsByTagId: TagProductConnection
  /** Returns a tag from a provided tag ID or slug. Tags with isVisible set to false are excluded by default. */
  tag?: Maybe<Tag>
  /** Returns a paged list of tags for a shop. You must include a shopId when querying. */
  tags?: Maybe<TagConnection>
  /**
   * Get the SimpleInventory info for a product configuration. Returns `null` if `updateSimpleInventory`
   * has never been called for this product configuration.
   */
  simpleInventory?: Maybe<SimpleInventoryInfo>
  /** Finds a cart by the cart ID and anonymous cart token. */
  anonymousCartByCartId?: Maybe<Cart>
  /** Find a cart for a given account ID. */
  accountCartByAccountId?: Maybe<Cart>
  /** Get an order by its ID */
  orderById?: Maybe<Order>
  /** Get all orders for a single account, optionally limited to certain shop IDs and certain orderStatus */
  orders: OrderConnection
  /** Get all orders for a single account, optionally limited to certain shop IDs and certain orderStatus */
  ordersByAccountId: OrdersByAccountIdConnection
  /** Get an order by its reference ID (the ID shown to customers) */
  orderByReferenceId?: Maybe<Order>
  /** Get refunds applied to an order by order ID */
  refunds?: Maybe<Array<Maybe<Refund>>>
  /** Get refunds applied to a specific payment by payment ID */
  refundsByPaymentId?: Maybe<Array<Maybe<Refund>>>
  /**
   * Get a list of all payment methods available during a checkout. This may filter by auth,
   * active/inactive, IP/region, shop, etc. To get the full list, use the `paymentMethods`
   * query with proper authorization.
   */
  availablePaymentMethods: Array<Maybe<PaymentMethod>>
  /** Get a full list of all payment methods */
  paymentMethods: Array<Maybe<PaymentMethod>>
  /** Gets discount codes */
  discountCodes?: Maybe<DiscountCodeConnection>
  /** Get the full list of surcharges. */
  surcharges: SurchargeConnection
  /** Get a single surcharge definition by its ID */
  surchargeById?: Maybe<Surcharge>
  /** Get a flat rate fulfillment method */
  flatRateFulfillmentMethod: FlatRateFulfillmentMethod
  /** Get a flat rate fulfillment methods */
  flatRateFulfillmentMethods: FlatRateFulfillmentMethodConnection
  /** Get the full list of flat rate fulfillment method restrictions. */
  getFlatRateFulfillmentRestrictions: FlatRateFulfillmentRestrictionConnection
  /** Get a single flat rate fulfillment method restriction. */
  getFlatRateFulfillmentRestriction?: Maybe<FlatRateFulfillmentRestriction>
  /** List all tax codes supported by the current active tax service for the shop */
  taxCodes: Array<Maybe<TaxCode>>
  /** Get a full list of all tax services for the shop */
  taxServices: Array<Maybe<TaxService>>
  /** Gets tax rates */
  taxRates?: Maybe<TaxRateConnection>
  /** Returns a navigation tree by its ID in the specified language */
  navigationTreeById?: Maybe<NavigationTree>
  /** Returns the navigation items for a shop */
  navigationItemsByShopId?: Maybe<NavigationItemConnection>
  /** Returns Sitemap object for a shop based on the handle param */
  sitemap?: Maybe<Sitemap>
  /** Returns the status of each onboarding step */
  onboardingByShopId?: Maybe<OnboardingStatus>
  /** Check if shop name already exists */
  checkShopName: Scalars['Boolean']
  /** Returning shop by hydra client configuration */
  shopByHydra?: Maybe<Shop>
  /** Returns a HydraClient from a provided HydraClient ID or clientId. */
  hydraClient?: Maybe<HydraClient>
  /** Returns a paged list of HydraClients for a shop. You must include a shopId when querying. */
  hydraClients?: Maybe<Array<Maybe<HydraClient>>>
  /** FeaturedProductsByShop get featured products by shop ID */
  featuredProductsByShop?: Maybe<CatalogItemConnection>
  /** Returns a HomePageAsset from a provided HomePageAsset ID or slug. HomePageAsset with isVisible set to false are excluded by default. */
  homePageAsset?: Maybe<HomePageAsset>
  /** Returns a paged list of HomePageAssets for a shop. You must include a shopId when querying. */
  homePageAssets?: Maybe<HomePageAssetConnection>
  /** Returns a Page from a provided Page ID or slug. Page with isVisible set to false are excluded by default. */
  page?: Maybe<Page>
  /** Returns a paged list of Pages for a shop. You must include a shopId when querying. */
  pages?: Maybe<PageConnection>
  /** searchProducts */
  searchProducts?: Maybe<CatalogItemConnection>
  /** searchTags */
  searchTags?: Maybe<TagConnection>
  /** Returns a single subscription by ID. */
  subscriptionPlan: SubscriptionPlan
  /** List all the subscription plans */
  subscriptionPlans?: Maybe<Array<Maybe<SubscriptionPlan>>>
  /** number of shops with a subscription */
  subscriptionsUsed?: Maybe<Scalars['JSONObject']>
  /** Get the shop's subscription */
  subscriptionByShopId: SubscriptionByShopIdPayload
  /** Get the shop's subscription quota used */
  subscriptionQuotaUsedByShopId?: Maybe<Scalars['JSONObject']>
}

/** Queries return all requested data, without any side effects */
export type QueryShopArgs = {
  id: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QueryShopBySlugArgs = {
  slug: Scalars['String']
}

/** Queries return all requested data, without any side effects */
export type QueryShopsArgs = {
  shopIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<GroupSortByField>
}

/** Queries return all requested data, without any side effects */
export type QueryShopSettingsArgs = {
  shopId: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QueryEmailJobsArgs = {
  shopIds: Array<Maybe<Scalars['ID']>>
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
}

/** Queries return all requested data, without any side effects */
export type QueryAddressValidationArgs = {
  address: AddressInput
  shopId: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QueryAddressValidationRulesArgs = {
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  serviceNames?: Maybe<Array<Maybe<Scalars['String']>>>
  shopId: Scalars['ID']
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<AddressValidationRuleSortByField>
}

/** Queries return all requested data, without any side effects */
export type QuerySystemInformationArgs = {
  shopId: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QueryEmailTemplatesArgs = {
  shopId: Scalars['ID']
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
}

/** Queries return all requested data, without any side effects */
export type QueryRolesArgs = {
  shopId: Scalars['ID']
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<RoleSortByField>
}

/** Queries return all requested data, without any side effects */
export type QueryAccountArgs = {
  id: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QueryAccountsArgs = {
  shopIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  groupIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  notInAnyGroups?: Maybe<Scalars['Boolean']>
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<AccountSortByField>
}

/** Queries return all requested data, without any side effects */
export type QueryCustomersArgs = {
  shopId: Scalars['ID']
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<AccountSortByField>
}

/** Queries return all requested data, without any side effects */
export type QueryGroupArgs = {
  id: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QueryGroupsArgs = {
  shopId: Scalars['ID']
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<GroupSortByField>
}

/** Queries return all requested data, without any side effects */
export type QueryInvitationsArgs = {
  shopIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<AccountSortByField>
}

/** Queries return all requested data, without any side effects */
export type QueryRolesAvailablesByShopArgs = {
  shopId: Scalars['ID']
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<RoleSortByField>
}

/** Queries return all requested data, without any side effects */
export type QueryProductArgs = {
  productId: Scalars['ID']
  shopId: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QueryProductsArgs = {
  isArchived?: Maybe<Scalars['Boolean']>
  isVisible?: Maybe<Scalars['Boolean']>
  metafieldKey?: Maybe<Scalars['String']>
  metafieldValue?: Maybe<Scalars['String']>
  priceMax?: Maybe<Scalars['Float']>
  priceMin?: Maybe<Scalars['Float']>
  productIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  query?: Maybe<Scalars['String']>
  shopIds: Array<Maybe<Scalars['ID']>>
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<ProductSortByField>
}

/** Queries return all requested data, without any side effects */
export type QueryCatalogItemsArgs = {
  shopIds: Array<Maybe<Scalars['ID']>>
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  booleanFilters?: Maybe<Array<Maybe<CatalogBooleanFilter>>>
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortByPriceCurrencyCode?: Maybe<Scalars['String']>
  sortBy?: Maybe<CatalogItemSortByField>
}

/** Queries return all requested data, without any side effects */
export type QueryCatalogItemProductArgs = {
  shopId?: Maybe<Scalars['ID']>
  slugOrId?: Maybe<Scalars['String']>
}

/** Queries return all requested data, without any side effects */
export type QueryProductsByTagIdArgs = {
  shopId: Scalars['ID']
  tagId: Scalars['ID']
  query?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
}

/** Queries return all requested data, without any side effects */
export type QueryTagArgs = {
  slugOrId: Scalars['String']
  shopId: Scalars['ID']
  shouldIncludeInvisible?: Maybe<Scalars['Boolean']>
}

/** Queries return all requested data, without any side effects */
export type QueryTagsArgs = {
  shopId: Scalars['ID']
  filter?: Maybe<Scalars['String']>
  excludedTagIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  isTopLevel?: Maybe<Scalars['Boolean']>
  shouldIncludeDeleted?: Maybe<Scalars['Boolean']>
  shouldIncludeInvisible?: Maybe<Scalars['Boolean']>
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<TagSortByField>
}

/** Queries return all requested data, without any side effects */
export type QuerySimpleInventoryArgs = {
  shopId: Scalars['ID']
  productConfiguration: ProductConfigurationInput
}

/** Queries return all requested data, without any side effects */
export type QueryAnonymousCartByCartIdArgs = {
  cartId: Scalars['ID']
  cartToken: Scalars['String']
}

/** Queries return all requested data, without any side effects */
export type QueryAccountCartByAccountIdArgs = {
  accountId: Scalars['ID']
  shopId: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QueryOrderByIdArgs = {
  id: Scalars['ID']
  shopId: Scalars['ID']
  token?: Maybe<Scalars['String']>
}

/** Queries return all requested data, without any side effects */
export type QueryOrdersArgs = {
  filters?: Maybe<OrderFilterInput>
  shopIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<OrdersSortByField>
}

/** Queries return all requested data, without any side effects */
export type QueryOrdersByAccountIdArgs = {
  accountId: Scalars['ID']
  orderStatus?: Maybe<Array<Maybe<Scalars['String']>>>
  shopIds: Array<Maybe<Scalars['ID']>>
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<OrdersByAccountIdSortByField>
}

/** Queries return all requested data, without any side effects */
export type QueryOrderByReferenceIdArgs = {
  id: Scalars['ID']
  shopId: Scalars['ID']
  token?: Maybe<Scalars['String']>
}

/** Queries return all requested data, without any side effects */
export type QueryRefundsArgs = {
  orderId: Scalars['ID']
  shopId: Scalars['ID']
  token?: Maybe<Scalars['String']>
}

/** Queries return all requested data, without any side effects */
export type QueryRefundsByPaymentIdArgs = {
  orderId: Scalars['ID']
  paymentId: Scalars['ID']
  shopId: Scalars['ID']
  token?: Maybe<Scalars['String']>
}

/** Queries return all requested data, without any side effects */
export type QueryAvailablePaymentMethodsArgs = {
  shopId: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QueryPaymentMethodsArgs = {
  shopId: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QueryDiscountCodesArgs = {
  shopId: Scalars['ID']
  filters?: Maybe<DiscountCodeFilterInput>
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
}

/** Queries return all requested data, without any side effects */
export type QuerySurchargesArgs = {
  shopId: Scalars['ID']
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<SurchargeSortByField>
}

/** Queries return all requested data, without any side effects */
export type QuerySurchargeByIdArgs = {
  shopId: Scalars['ID']
  surchargeId: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QueryFlatRateFulfillmentMethodArgs = {
  methodId: Scalars['ID']
  shopId: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QueryFlatRateFulfillmentMethodsArgs = {
  shopId: Scalars['ID']
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
}

/** Queries return all requested data, without any side effects */
export type QueryGetFlatRateFulfillmentRestrictionsArgs = {
  shopId: Scalars['ID']
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<FlatRateFulfillmentRestrictionSortByField>
}

/** Queries return all requested data, without any side effects */
export type QueryGetFlatRateFulfillmentRestrictionArgs = {
  restrictionId: Scalars['ID']
  shopId: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QueryTaxCodesArgs = {
  shopId: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QueryTaxServicesArgs = {
  shopId: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QueryTaxRatesArgs = {
  shopId: Scalars['ID']
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
}

/** Queries return all requested data, without any side effects */
export type QueryNavigationTreeByIdArgs = {
  id: Scalars['ID']
  language: Scalars['String']
  shopId: Scalars['ID']
  shouldIncludeSecondary?: Maybe<Scalars['Boolean']>
}

/** Queries return all requested data, without any side effects */
export type QueryNavigationItemsByShopIdArgs = {
  shopId: Scalars['ID']
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<NavigationItemSortByField>
}

/** Queries return all requested data, without any side effects */
export type QuerySitemapArgs = {
  handle: Scalars['String']
  shopUrl: Scalars['String']
}

/** Queries return all requested data, without any side effects */
export type QueryOnboardingByShopIdArgs = {
  shopId: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QueryCheckShopNameArgs = {
  shopName: Scalars['String']
}

/** Queries return all requested data, without any side effects */
export type QueryShopByHydraArgs = {
  hydraClientId: Scalars['String']
}

/** Queries return all requested data, without any side effects */
export type QueryHydraClientArgs = {
  shopId: Scalars['ID']
  clientIdOrId?: Maybe<Scalars['String']>
}

/** Queries return all requested data, without any side effects */
export type QueryHydraClientsArgs = {
  shopId: Scalars['ID']
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<HydraClientSortByField>
}

/** Queries return all requested data, without any side effects */
export type QueryFeaturedProductsByShopArgs = {
  shopId: Scalars['ID']
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<GroupSortByField>
}

/** Queries return all requested data, without any side effects */
export type QueryHomePageAssetArgs = {
  slugOrId: Scalars['String']
  shouldIncludeInvisible?: Maybe<Scalars['Boolean']>
}

/** Queries return all requested data, without any side effects */
export type QueryHomePageAssetsArgs = {
  shopId: Scalars['ID']
  shouldIncludeDeleted?: Maybe<Scalars['Boolean']>
  shouldIncludeInvisible?: Maybe<Scalars['Boolean']>
  assetType?: Maybe<Scalars['String']>
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<HomePageAssetsSortByField>
}

/** Queries return all requested data, without any side effects */
export type QueryPageArgs = {
  slugOrId: Scalars['String']
  shopId: Scalars['ID']
  shouldIncludeInvisible?: Maybe<Scalars['Boolean']>
}

/** Queries return all requested data, without any side effects */
export type QueryPagesArgs = {
  shopId: Scalars['ID']
  filter?: Maybe<Scalars['String']>
  shouldIncludeDeleted?: Maybe<Scalars['Boolean']>
  shouldIncludeInvisible?: Maybe<Scalars['Boolean']>
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<PagesSortByField>
}

/** Queries return all requested data, without any side effects */
export type QuerySearchProductsArgs = {
  shopId: Scalars['ID']
  searchQuery: Scalars['String']
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  sortBy?: Maybe<CatalogItemSortByField>
  sortByPriceCurrencyCode?: Maybe<Scalars['String']>
  sortOrder?: Maybe<SortOrder>
}

/** Queries return all requested data, without any side effects */
export type QuerySearchTagsArgs = {
  shopId: Scalars['ID']
  searchQuery: Scalars['String']
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  sortBy?: Maybe<CatalogItemSortByField>
  sortByPriceCurrencyCode?: Maybe<Scalars['String']>
  sortOrder?: Maybe<SortOrder>
}

/** Queries return all requested data, without any side effects */
export type QuerySubscriptionPlanArgs = {
  id: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QuerySubscriptionPlansArgs = {
  sortBy?: Maybe<Scalars['JSONObject']>
}

/** Queries return all requested data, without any side effects */
export type QuerySubscriptionByShopIdArgs = {
  shopId: Scalars['ID']
}

/** Queries return all requested data, without any side effects */
export type QuerySubscriptionQuotaUsedByShopIdArgs = {
  shopId: Scalars['ID']
  module?: Maybe<Scalars['String']>
}

/** Represents a Reaction shop */
export type Shop = Node & {
  __typename?: 'Shop'
  /** The shop ID */
  _id: Scalars['ID']
  /** An the shop's default address */
  addressBook?: Maybe<Array<Maybe<Address>>>
  /** Whether to allow user to checkout without creating an account */
  allowGuestCheckout?: Maybe<Scalars['Boolean']>
  /** The base unit of length */
  baseUOL?: Maybe<Scalars['String']>
  /** The base unit of Measure */
  baseUOM?: Maybe<Scalars['String']>
  /** URLs for various shop assets in various sizes */
  brandAssets?: Maybe<ShopBrandAssets>
  /** The default shop currency */
  currency: Currency
  /** Default parcel size for this shop */
  defaultParcelSize?: Maybe<ShopParcelSize>
  /** Shop description */
  description?: Maybe<Scalars['String']>
  /** The shop's default email record */
  emails?: Maybe<Array<Maybe<EmailRecord>>>
  /** Shop's keywords */
  keywords?: Maybe<Scalars['String']>
  /** Shop default language */
  language: Scalars['String']
  /** Shop name */
  name: Scalars['String']
  /** Returns URLs for shop logos */
  shopLogoUrls?: Maybe<ShopLogoUrls>
  /** Shop's type */
  shopType?: Maybe<Scalars['String']>
  /** Shop's slug */
  slug?: Maybe<Scalars['String']>
  /** Returns URLs for various storefront routes */
  storefrontUrls?: Maybe<StorefrontUrls>
  /** Shop default timezone */
  timezone?: Maybe<Scalars['String']>
  /** The shop's units of length */
  unitsOfLength?: Maybe<Array<Maybe<UnitOfLength>>>
  /** The shop's units of measure */
  unitsOfMeasure?: Maybe<Array<Maybe<UnitOfMeasure>>>
  /** Returns a list of roles for this shop, as a Relay-compatible connection. */
  roles?: Maybe<RoleConnection>
  /** Returns a list of groups for this shop, as a Relay-compatible connection. */
  groups?: Maybe<GroupConnection>
  /** Returns a paged list of tags for this shop */
  tags?: Maybe<TagConnection>
  /** The default navigation tree for this shop */
  defaultNavigationTree?: Maybe<NavigationTree>
  /** The ID of the shop's default navigation tree */
  defaultNavigationTreeId?: Maybe<Scalars['String']>
  /** Returns if the shop is active or not */
  active?: Maybe<Scalars['Boolean']>
  /** Returns AddressBook for this shop */
  hydraClient?: Maybe<HydraClient>
  /** Return when the shop was created */
  createdAt: Scalars['DateTime']
  /** Subscription plan for the shop */
  subscription?: Maybe<Array<Maybe<SubscriptionForShop>>>
}

/** Represents a Reaction shop */
export type ShopRolesArgs = {
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<RoleSortByField>
}

/** Represents a Reaction shop */
export type ShopGroupsArgs = {
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<GroupSortByField>
}

/** Represents a Reaction shop */
export type ShopTagsArgs = {
  isTopLevel?: Maybe<Scalars['Boolean']>
  shouldIncludeDeleted?: Maybe<Scalars['Boolean']>
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<TagSortByField>
}

/** Represents a Reaction shop */
export type ShopDefaultNavigationTreeArgs = {
  language: Scalars['String']
  shouldIncludeSecondary?: Maybe<Scalars['Boolean']>
}

/** Objects implementing the Node interface will always have an _id field that is globally unique. */
export type Node = {
  /** The ID of the object */
  _id: Scalars['ID']
}

/** Represents a physical or mailing address somewhere on Earth */
export type Address = {
  __typename?: 'Address'
  /** The address ID */
  _id?: Maybe<Scalars['ID']>
  /** The street address / first line */
  address1: Scalars['String']
  /** Optional second line */
  address2?: Maybe<Scalars['String']>
  /** City */
  city: Scalars['String']
  /** Optional company name, if it's a business address */
  company?: Maybe<Scalars['String']>
  /** Country */
  country: Scalars['String']
  /**
   * The first name of a person at this address
   * This is an optional field to support legacy and third party platforms
   * We use fullName internally, and use first and last name fields to combine into a full name if needed
   */
  firstName?: Maybe<Scalars['String']>
  /** The full name of a person at this address */
  fullName: Scalars['String']
  /** Is this the default address for billing purposes? */
  isBillingDefault?: Maybe<Scalars['Boolean']>
  /** Is this a commercial address? */
  isCommercial: Scalars['Boolean']
  /** Is this the default address to use when selecting a shipping address at checkout? */
  isShippingDefault?: Maybe<Scalars['Boolean']>
  /**
   * The last name of a person at this address
   * This is an optional field to support legacy and third party platforms
   * We use fullName internally, and use first and last name fields to combine into a full name if needed
   */
  lastName?: Maybe<Scalars['String']>
  /** Arbitrary additional metadata about this address */
  metafields?: Maybe<Array<Maybe<Metafield>>>
  /** A phone number for someone at this address */
  phone: Scalars['String']
  /** Postal code */
  postal: Scalars['String']
  /** Region. For example, a U.S. state */
  region: Scalars['String']
}

/** User defined attributes */
export type Metafield = {
  __typename?: 'Metafield'
  /** Field description */
  description?: Maybe<Scalars['String']>
  /** Field key */
  key?: Maybe<Scalars['String']>
  /** Field namespace */
  namespace?: Maybe<Scalars['String']>
  /** Field scope */
  scope?: Maybe<Scalars['String']>
  /** Field value */
  value?: Maybe<Scalars['String']>
  /** Field value type */
  valueType?: Maybe<Scalars['String']>
}

/** URLs for various shop assets in various sizes */
export type ShopBrandAssets = {
  __typename?: 'ShopBrandAssets'
  /** URLs for the navigation bar brand logo image */
  navbarBrandImage?: Maybe<ImageSizes>
  /** Internal navigation bar brand logo image ID */
  navbarBrandImageId?: Maybe<Scalars['String']>
}

/** A list of URLs for various sizes of an image */
export type ImageSizes = {
  __typename?: 'ImageSizes'
  /** Use this URL to get a large resolution file for this image */
  large?: Maybe<Scalars['String']>
  /** Use this URL to get a medium resolution file for this image */
  medium?: Maybe<Scalars['String']>
  /**
   * Use this URL to get this image with its original resolution as uploaded. This may not be
   * the true original size if there is a hard cap on how big image files can be.
   */
  original?: Maybe<Scalars['String']>
  /** Use this URL to get a small resolution file for this image */
  small?: Maybe<Scalars['String']>
  /** Use this URL to get a thumbnail resolution file for this image */
  thumbnail?: Maybe<Scalars['String']>
}

/** Represents one type of currency */
export type Currency = Node & {
  __typename?: 'Currency'
  /** ID */
  _id: Scalars['ID']
  /** Currency code */
  code: Scalars['String']
  /** Decimal symbol */
  decimal?: Maybe<Scalars['String']>
  /** Format string */
  format: Scalars['String']
  /** Exchange rate from shop default currency, if known */
  rate?: Maybe<Scalars['Float']>
  /** The decimal scale used by this currency */
  scale?: Maybe<Scalars['Int']>
  /** Currency symbol */
  symbol: Scalars['String']
  /** Thousands separator symbol */
  thousand?: Maybe<Scalars['String']>
}

/** Parcel size */
export type ShopParcelSize = {
  __typename?: 'ShopParcelSize'
  /** Parcel height */
  height?: Maybe<Scalars['Float']>
  /** Parcel length */
  length?: Maybe<Scalars['Float']>
  /** Parcel weight */
  weight?: Maybe<Scalars['Float']>
  /** Parcel width */
  width?: Maybe<Scalars['Float']>
}

/** A confirmable email record */
export type EmailRecord = {
  __typename?: 'EmailRecord'
  /** The actual email address */
  address?: Maybe<Scalars['Email']>
  /** The services provided by this address */
  provides?: Maybe<Scalars['String']>
  /** Has this address been verified? */
  verified?: Maybe<Scalars['Boolean']>
}

/** Shop logo URLs */
export type ShopLogoUrls = {
  __typename?: 'ShopLogoUrls'
  /** The primary logo URL for this shop. Setting this overrides any uploaded logo. */
  primaryShopLogoUrl?: Maybe<Scalars['String']>
}

/** Storefront route URLs */
export type StorefrontUrls = {
  __typename?: 'StorefrontUrls'
  /** Storefront Account Profile URL (can include `:accountId` in string) */
  storefrontAccountProfileUrl?: Maybe<Scalars['String']>
  /** Storefront Home URL */
  storefrontHomeUrl?: Maybe<Scalars['String']>
  /** Storefront login URL */
  storefrontLoginUrl?: Maybe<Scalars['String']>
  /** Storefront single order URL (can include `:orderReferenceId` and `:orderToken` in string) */
  storefrontOrderUrl?: Maybe<Scalars['String']>
  /** Storefront orders URL (can include `:accountId` in string) */
  storefrontOrdersUrl?: Maybe<Scalars['String']>
}

/** Units of length */
export type UnitOfLength = {
  __typename?: 'UnitOfLength'
  /** Whether this unit of length is the default */
  default?: Maybe<Scalars['Boolean']>
  /** The name of the unit of length */
  label?: Maybe<Scalars['String']>
  /** Unit of length */
  uol?: Maybe<Scalars['String']>
}

/** Units of measure */
export type UnitOfMeasure = {
  __typename?: 'UnitOfMeasure'
  /** Whether this unit of measure is the default */
  default?: Maybe<Scalars['Boolean']>
  /** The name of the unit of measure */
  label?: Maybe<Scalars['String']>
  /** Unit of measure */
  uom?: Maybe<Scalars['String']>
}

/** The order in which the connection results should be sorted, based on the sortBy field. */
export enum SortOrder {
  /** ascending */
  Asc = 'asc',
  /** descending */
  Desc = 'desc',
}

/** The fields by which you are allowed to sort any query that returns an `RoleConnection` */
export enum RoleSortByField {
  /** Role ID */
  Id = '_id',
  /** Role name */
  Name = 'name',
}

/**
 * Wraps a list of `Roles`, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type RoleConnection = {
  __typename?: 'RoleConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<RoleEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<Role>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `Role` object */
export type RoleEdge = NodeEdge & {
  __typename?: 'RoleEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The role */
  node?: Maybe<Role>
}

/**
 * Objects implementing the NodeEdge interface will always have a node and a cursor
 * that represents that node for purposes of requesting paginated results.
 */
export type NodeEdge = {
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The node itself */
  node?: Maybe<Node>
}

/** Represents a named role */
export type Role = Node & {
  __typename?: 'Role'
  /** The role ID */
  _id: Scalars['ID']
  /** A unique name for the role */
  name: Scalars['String']
}

/**
 * Pagination information. When requesting pages of results, you can use endCursor or startCursor
 * as your before or after parameters for the query you are paging.
 */
export type PageInfo = {
  __typename?: 'PageInfo'
  /** When paginating forwards, the cursor to continue. */
  endCursor?: Maybe<Scalars['ConnectionCursor']>
  /** When paginating forwards, are there more items? */
  hasNextPage: Scalars['Boolean']
  /** When paginating backwards, are there more items? */
  hasPreviousPage: Scalars['Boolean']
  /** When paginating backwards, the cursor to continue. */
  startCursor?: Maybe<Scalars['ConnectionCursor']>
}

/** The fields by which you are allowed to sort any query that returns an `GroupConnection` */
export enum GroupSortByField {
  /** Group ID */
  Id = '_id',
  /** Date and time at which this group was created */
  CreatedAt = 'createdAt',
  /** Group name */
  Name = 'name',
  /** Date and time at which this group was last updated */
  UpdatedAt = 'updatedAt',
}

/**
 * Wraps a list of `Groups`, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type GroupConnection = {
  __typename?: 'GroupConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<GroupEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<Group>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `Group` object */
export type GroupEdge = NodeEdge & {
  __typename?: 'GroupEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The group */
  node?: Maybe<Group>
}

/** Represents an account group */
export type Group = Node & {
  __typename?: 'Group'
  /** The group ID */
  _id: Scalars['ID']
  /** The date and time at which this group was created */
  createdAt: Scalars['DateTime']
  /** The account that created this group */
  createdBy?: Maybe<Account>
  /** A free text description of this group */
  description?: Maybe<Scalars['String']>
  /** A unique name for the group */
  name: Scalars['String']
  /** The shop to which this group belongs */
  shop?: Maybe<Shop>
  /** A unique URL-safe string representing this group */
  slug: Scalars['String']
  /** The date and time at which this group was last updated */
  updatedAt: Scalars['DateTime']
  /** A list of the account permissions implied by membership in this group */
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Represents a single user account */
export type Account = Node & {
  __typename?: 'Account'
  /** The account ID */
  _id: Scalars['ID']
  /** A list of physical or mailing addresses associated with this account */
  addressBook?: Maybe<AddressConnection>
  /** A list of shops this user can administer with the admin UI */
  adminUIShops?: Maybe<Array<Maybe<Shop>>>
  /** Bio to display on profile */
  bio?: Maybe<Scalars['String']>
  /** The date and time at which this account was created */
  createdAt: Scalars['DateTime']
  /** The preferred currency used by this account */
  currency?: Maybe<Currency>
  /** A list of email records associated with this account */
  emailRecords?: Maybe<Array<Maybe<EmailRecord>>>
  /** The first name of the person this account represents, if known */
  firstName?: Maybe<Scalars['String']>
  /** The preferred language used by this account */
  language?: Maybe<Scalars['String']>
  /** The last name of the person this account represents, if known */
  lastName?: Maybe<Scalars['String']>
  /** Arbitrary additional metadata about this account */
  metafields?: Maybe<Array<Maybe<Metafield>>>
  /** The full name of the person this account represents, if known */
  name?: Maybe<Scalars['String']>
  /** Some note about this account */
  note?: Maybe<Scalars['String']>
  /** URL of picture to display on profile */
  picture?: Maybe<Scalars['String']>
  /** An object storing plugin-specific preferences for this account */
  preferences?: Maybe<Scalars['JSONObject']>
  /** The primary email address for the account. This matches the address in `emailRecords` where `provides` is `default`. */
  primaryEmailAddress: Scalars['Email']
  /** The date and time at which this account was last updated */
  updatedAt?: Maybe<Scalars['DateTime']>
  /** The Identity user ID with which this account is associated */
  userId: Scalars['String']
  /** Username */
  username?: Maybe<Scalars['String']>
  /** The shop to which this account belongs */
  shop: Shop
  /** A paged list of the account groups in which this account is listed */
  groups?: Maybe<GroupConnection>
}

/** Represents a single user account */
export type AccountAddressBookArgs = {
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
}

/** Represents a single user account */
export type AccountGroupsArgs = {
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<GroupSortByField>
}

/**
 * Wraps a list of `Addresses`, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type AddressConnection = {
  __typename?: 'AddressConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<AddressEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<Address>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is an `Address` object */
export type AddressEdge = {
  __typename?: 'AddressEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The address */
  node?: Maybe<Address>
}

/** The fields by which you are allowed to sort any query that returns a `TagConnection` */
export enum TagSortByField {
  /** Tag ID */
  Id = '_id',
  /** Date and time the tag was created */
  CreatedAt = 'createdAt',
  /** Tag name */
  Name = 'name',
  /** Tag position */
  Position = 'position',
  /** Date and time the tag was last updated */
  UpdatedAt = 'updatedAt',
}

/**
 * Wraps a list of `Tags`, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type TagConnection = {
  __typename?: 'TagConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<TagEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<Tag>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `Tag` object */
export type TagEdge = NodeEdge & {
  __typename?: 'TagEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The tag */
  node?: Maybe<Tag>
}

/** Represents a single tag */
export type Tag = Node &
  Deletable & {
    __typename?: 'Tag'
    /** The tag ID */
    _id: Scalars['ID']
    /** The date and time at which this tag was created */
    createdAt: Scalars['DateTime']
    /** A string of the title to be displayed on a Tag Listing Page */
    displayTitle?: Maybe<Scalars['String']>
    /** A list of the IDs of top products in this tag */
    featuredProductIds?: Maybe<Array<Maybe<Scalars['ID']>>>
    /** A string containing the hero image id */
    heroMediaId?: Maybe<Scalars['String']>
    /** All media for a variant */
    media?: Maybe<Array<Maybe<ImageInfo>>>
    /**
     * If `true`, this object should be considered deleted. Soft deleted objects are not
     * returned in query results unless you explicitly ask for them.
     */
    isDeleted: Scalars['Boolean']
    /** If `true`, this tag should be shown at the top level of the tag hierarchy */
    isTopLevel: Scalars['Boolean']
    /** If `true`, this tag's Tag Listing Page should be visible to the public */
    isVisible: Scalars['Boolean']
    /** Arbitrary additional metadata about this tag */
    metafields?: Maybe<Array<Maybe<Metafield>>>
    /** The display name for the tag. This is unique within a given shop. */
    name: Scalars['String']
    /** The tag's position relative to other tags at the same level of the tag hierarchy */
    position?: Maybe<Scalars['Int']>
    /** The shop to which this tag belongs */
    shop: Shop
    /** A unique URL-safe string representing this tag for links */
    slug?: Maybe<Scalars['String']>
    /** A list of the IDs of tags that have this tag as their parent in the tag hierarchy, in the user-defined order */
    subTagIds: Array<Maybe<Scalars['ID']>>
    /** The date and time at which this tag was last updated */
    updatedAt: Scalars['DateTime']
    /** A paged list of tags that have this tag as their parent in the tag hierarchy. Currently only three levels are supported. */
    subTags?: Maybe<TagConnection>
  }

/** Represents a single tag */
export type TagSubTagsArgs = {
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<TagSortByField>
}

/** Objects implementing the Deletable support soft deletion */
export type Deletable = {
  /**
   * If true, this object should be considered deleted. Soft deleted objects are not
   * returned in query results unless you explicitly ask for them.
   */
  isDeleted: Scalars['Boolean']
}

/** Information about an image */
export type ImageInfo = {
  __typename?: 'ImageInfo'
  /** A list of URLs for various size files of this image */
  URLs?: Maybe<ImageSizes>
  /** ID */
  _id?: Maybe<Scalars['ID']>
  /**
   * Sort by priority ascending when displaying more than one image for a product in a user interface.
   * This is an integer with 1 being the first / highest priority image.
   */
  priority?: Maybe<Scalars['Int']>
  /** The related product ID */
  productId?: Maybe<Scalars['ID']>
  /** The related variant ID, if linked with a particular variant */
  variantId?: Maybe<Scalars['ID']>
}

/** Represents a navigation tree containing multiple levels of navigation items */
export type NavigationTree = Node & {
  __typename?: 'NavigationTree'
  /** The navigation tree ID */
  _id: Scalars['ID']
  /** The draft navigation items that make up this tree */
  draftItems?: Maybe<Array<Maybe<NavigationTreeItem>>>
  /** Whether the navigation item has unpublished changes */
  hasUnpublishedChanges?: Maybe<Scalars['Boolean']>
  /** The published navigation items that make up this tree */
  items?: Maybe<Array<Maybe<NavigationTreeItem>>>
  /** The name of the tree, for operator display purposes. Assumed to be in the primary shop's language */
  name: Scalars['String']
  /** The ID of the shop this navigation tree belongs to */
  shopId: Scalars['ID']
}

/** Represents a navigation item and its children in a tree */
export type NavigationTreeItem = {
  __typename?: 'NavigationTreeItem'
  /** Whether the navigation item should display its children */
  expanded?: Maybe<Scalars['Boolean']>
  /** Whether the navigation item should be hidden from customers */
  isPrivate?: Maybe<Scalars['Boolean']>
  /** Whether the navigaton item is a secondary navigation item */
  isSecondary?: Maybe<Scalars['Boolean']>
  /** Whether the navigation ttem should shown in query results for customers and admins */
  isVisible?: Maybe<Scalars['Boolean']>
  /** The child navigation items */
  items?: Maybe<Array<Maybe<NavigationTreeItem>>>
  /** The navigation item */
  navigationItem: NavigationItem
}

/** Represents a single navigation item */
export type NavigationItem = Node & {
  __typename?: 'NavigationItem'
  /** The navigation item ID */
  _id: Scalars['ID']
  /** The date and time at which this navigation item was created */
  createdAt: Scalars['DateTime']
  /** The published data for this navigation item */
  data?: Maybe<NavigationItemData>
  /** The draft/unpublished data for this navigation item */
  draftData?: Maybe<NavigationItemData>
  /** Whether the navigation item has unpublished changes */
  hasUnpublishedChanges?: Maybe<Scalars['Boolean']>
  /** An object storing additional metadata about the navigation item (such as its related tag) */
  metadata?: Maybe<Scalars['JSONObject']>
  /** The ID of the shop the navigation item belongs to */
  shopId: Scalars['ID']
}

/** Represents the data for a navigation item */
export type NavigationItemData = {
  __typename?: 'NavigationItemData'
  /** CSS class names to add to the menu item for display */
  classNames?: Maybe<Scalars['String']>
  /** The content for the navigation item, in one or more languages */
  content?: Maybe<Array<Maybe<NavigationItemContent>>>
  /** The translated content for a navigation item */
  contentForLanguage?: Maybe<Scalars['String']>
  /** Whether the provided URL is relative or external */
  isUrlRelative?: Maybe<Scalars['Boolean']>
  /** Whether the navigation item should trigger a new tab/window to open when clicked */
  shouldOpenInNewWindow?: Maybe<Scalars['Boolean']>
  /** The URL for the navigation item to link to */
  url?: Maybe<Scalars['String']>
}

/** Represents the translated content for a navigation item */
export type NavigationItemContent = {
  __typename?: 'NavigationItemContent'
  /** The language of the piece of navigation content */
  language: Scalars['String']
  /** The translated value, in plain text or markdown */
  value?: Maybe<Scalars['String']>
}

/** HydraClient that is gonna be created in Hydra */
export type HydraClient = Node &
  Deletable & {
    __typename?: 'HydraClient'
    /** The HydraClient ID */
    _id: Scalars['ID']
    /** AccountId that create the client */
    accountId?: Maybe<Scalars['String']>
    /** clientId */
    clientId: Scalars['String']
    /**
     * If `true`, this object should be considered deleted. Soft deleted objects are not
     * returned in query results unless you explicitly ask for them.
     */
    isDeleted: Scalars['Boolean']
    /** secret */
    secret: Scalars['String']
    /** shopId */
    shopId: Scalars['String']
    /** storefrontName */
    storefrontName: Scalars['String']
    /** storefrontRedirectionURI */
    storefrontRedirectionURI: Scalars['String']
    /** Object with all the required information to deploy a new storefront with a template */
    template?: Maybe<Scalars['JSONObject']>
  }

export type SubscriptionForShop = {
  __typename?: 'SubscriptionForShop'
  /** The ID of the Subscription Plan */
  _id: Scalars['ID']
  /** Date when the shop is going to get charged again to renew its subscription */
  nextBillingDate?: Maybe<Scalars['Date']>
  /** Response of the payment gateway */
  payment?: Maybe<Scalars['JSONObject']>
  /** Status of the current subscription */
  status: Scalars['String']
  /** Whether a subscription's billing cycle is set to never expire */
  neverExpires: Scalars['Boolean']
  /** The price specified for a subscription */
  price: Scalars['Float']
  /**
   * The number of consecutive failed attempts by our recurring billing engine to charge a subscription.
   * This count includes the transaction attempt that caused the subscription's status to become past due,
   * starting at 0 and increasing for each failed attempt. If the subscription is active and no charge attempts failed,
   * the count is 0.
   */
  failureCount: Scalars['Int']
  /** The number of days that the subscription is past due */
  daysPastDue: Scalars['Int']
  /** An alphanumeric value that references a specific payment method stored */
  paymentMethodToken?: Maybe<Scalars['String']>
  /** An alphanumeric value that references a specific customer token for a payment method stored */
  paymentMethodTokenCustomer?: Maybe<Scalars['String']>
  /** The date and time at which this shop subscribed */
  createdAt: Scalars['Date']
  /** Trial days for the subscription */
  trialDays: Scalars['Int']
}

/**
 * Wraps a list of `Shops`, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type ShopConnection = {
  __typename?: 'ShopConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<ShopEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<Shop>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is an `Shop` object */
export type ShopEdge = NodeEdge & {
  __typename?: 'ShopEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The Shop */
  node?: Maybe<Shop>
}

/**
 * App settings that are not shop specific. Plugins extend the GlobalSettings type to support
 * whatever settings they need.
 */
export type GlobalSettings = {
  __typename?: 'GlobalSettings'
  /** A fake setting necessary until some plugin extends this with a real setting */
  doNotUse?: Maybe<Scalars['String']>
}

/**
 * App settings for a specific shop. Plugins extend the ShopSettings type to support
 * whatever settings they need.
 */
export type ShopSettings = {
  __typename?: 'ShopSettings'
  /** A fake setting necessary until some plugin extends this with a real setting */
  doNotUse?: Maybe<Scalars['String']>
  /**
   * If there is no known inventory for a product configuration, this setting determines
   * whether that product configuration can be sold and should appear to be available.
   */
  canSellVariantWithoutInventory: Scalars['Boolean']
  /**
   * If `false` no defined shipping rates will be used when fulfillment
   * quotes are requested for a cart or order. A quick way to disable the entire
   * `reaction-shipping-rates` plugin temporarily.
   */
  isShippingRatesFulfillmentEnabled?: Maybe<Scalars['Boolean']>
  /** The default value to use for `taxCode` property of a product */
  defaultTaxCode?: Maybe<Scalars['String']>
  /**
   * The name of the tax service to fall back to if the primary tax service is down.
   * This will match the `name` field of one of the services returned by the `taxServices`
   * query.
   */
  fallbackTaxServiceName?: Maybe<Scalars['String']>
  /**
   * The name of the tax service to use for calculating taxes on carts and orders.
   * This will match the `name` field of one of the services returned by the `taxServices`
   * query.
   */
  primaryTaxServiceName?: Maybe<Scalars['String']>
  /**
   * Whether a navigation item added to the navigation tree should be visible only to
   * admins by default.
   */
  shouldNavigationTreeItemsBeAdminOnly: Scalars['Boolean']
  /**
   * Whether a navigation item added to the navigation tree should be
   * public API/Storefront visible by default.
   */
  shouldNavigationTreeItemsBePubliclyVisible: Scalars['Boolean']
  /**
   * Whether a navigation item added to the navigation tree should be a secondary
   * navigation item by default.
   */
  shouldNavigationTreeItemsBeSecondaryNavOnly: Scalars['Boolean']
  /** This setting controls how often the sitemaps for the shop will be rebuilt */
  sitemapRefreshPeriod: Scalars['String']
  /** Setting to show the onboarding for new shops */
  showOnboarding?: Maybe<Scalars['Boolean']>
  /** Set epaycoSettings */
  epaycoSettings?: Maybe<Scalars['JSONObject']>
  /** Set segmentSettings */
  segmentSettings?: Maybe<Scalars['JSONObject']>
  /** Set googleSettings */
  googleSettings?: Maybe<Scalars['JSONObject']>
  /** Set whatsAppSettings */
  whatsAppSettings?: Maybe<Scalars['JSONObject']>
  /** Set nequiSettings */
  nequiSettings?: Maybe<Scalars['JSONObject']>
  /** Set bitpaySettings */
  bitpaySettings?: Maybe<Scalars['JSONObject']>
  /** Set themeSettings */
  themeSettings?: Maybe<Scalars['JSONObject']>
  /** Set carouselSettings */
  carouselSettings?: Maybe<Scalars['JSONObject']>
}

/**
 * Wraps a list of `EmailJob`s, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type EmailJobConnection = {
  __typename?: 'EmailJobConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<EmailJobEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<EmailJob>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is an `EmailJob` object */
export type EmailJobEdge = {
  __typename?: 'EmailJobEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The product */
  node?: Maybe<EmailJob>
}

/** An e-mail job */
export type EmailJob = {
  __typename?: 'EmailJob'
  /** The ID of the e-mail job */
  _id: Scalars['ID']
  /** The date and time of the last update to the e-mail job */
  updated: Scalars['DateTime']
  /** The status of the e-mail job */
  status: Scalars['String']
  /** The data of the e-mail */
  data: EmailJobData
}

/** The data of the e-mail */
export type EmailJobData = {
  __typename?: 'EmailJobData'
  /** The address the e-mail was/is being/will be sent to */
  to: Scalars['String']
  /** The subject of the e-mail */
  subject: Scalars['String']
}

/** The details of an `Address` to be created or updated */
export type AddressInput = {
  /** The street address / first line */
  address1: Scalars['String']
  /** Optional second line */
  address2?: Maybe<Scalars['String']>
  /** Optionally, a name for this address (e.g. 'Home') to easily identify it in the future */
  addressName?: Maybe<Scalars['String']>
  /** City */
  city: Scalars['String']
  /** Optional company name, if it's a business address */
  company?: Maybe<Scalars['String']>
  /** Country */
  country: Scalars['String']
  /**
   * The first name of a person at this address
   * This is an optional field to support legacy and third party platforms
   * We use fullName internally, and use first and last name fields to combine into a full name if needed
   */
  firstName?: Maybe<Scalars['String']>
  /** The full name of a person at this address */
  fullName: Scalars['String']
  /** Is this the default address for billing purposes? */
  isBillingDefault?: Maybe<Scalars['Boolean']>
  /** Is this a commercial address? */
  isCommercial?: Maybe<Scalars['Boolean']>
  /** Is this the default address to use when selecting a shipping address at checkout? */
  isShippingDefault?: Maybe<Scalars['Boolean']>
  /**
   * The last name of a person at this address
   * This is an optional field to support legacy and third party platforms
   * We use fullName internally, and use first and last name fields to combine into a full name if needed
   */
  lastName?: Maybe<Scalars['String']>
  /** Arbitrary additional metadata about this address */
  metafields?: Maybe<Array<Maybe<MetafieldInput>>>
  /** A phone number for someone at this address */
  phone: Scalars['String']
  /** Postal code */
  postal: Scalars['String']
  /** Region. For example, a U.S. state */
  region: Scalars['String']
}

/** User defined attributes. You can include only `key` and use these like tags, or also include a `value`. */
export type MetafieldInput = {
  /** Field description */
  description?: Maybe<Scalars['String']>
  /** Field key */
  key: Scalars['String']
  /** Field namespace */
  namespace?: Maybe<Scalars['String']>
  /** Field scope */
  scope?: Maybe<Scalars['String']>
  /** Field value */
  value?: Maybe<Scalars['String']>
  /** Field value type */
  valueType?: Maybe<Scalars['String']>
}

/** The response from `Query.addressValidation` */
export type AddressValidationResults = {
  __typename?: 'AddressValidationResults'
  /**
   * A list of suggested addresses. If the address is valid as is OR the address input is invalid OR
   * the shop is not configured to validate addresses, then this will be empty.
   */
  suggestedAddresses: Array<Maybe<SuggestedAddress>>
  /**
   * This may have information about the ways in which the provided address input is incomplete or invalid.
   * Show these errors in the address review user interface.
   */
  validationErrors: Array<Maybe<AddressValidationError>>
}

/** An address suggestion returned from an address validation service */
export type SuggestedAddress = {
  __typename?: 'SuggestedAddress'
  /** The street address / first line */
  address1: Scalars['String']
  /** Optional second line */
  address2?: Maybe<Scalars['String']>
  /** City */
  city: Scalars['String']
  /** Country */
  country: Scalars['String']
  /** Postal code */
  postal: Scalars['String']
  /** Region. For example, a U.S. state */
  region: Scalars['String']
}

/** Details about an error that was the result of validating an address that is invalid */
export type AddressValidationError = {
  __typename?: 'AddressValidationError'
  /** A longer, detailed error message suitable for showing in the user interface */
  details?: Maybe<Scalars['String']>
  /** An identifier of the source of this error. These are not currently standardized. As long as your client understands it, any string is fine. */
  source?: Maybe<Scalars['String']>
  /** A short error message suitable for showing in the user interface */
  summary: Scalars['String']
  /** The error type. These are not currently standardized. As long as your client understands it, any string is fine. */
  type: Scalars['String']
}

/** A single registered address validation service */
export type AddressValidationService = {
  __typename?: 'AddressValidationService'
  /** Human-readable name to show operators */
  displayName: Scalars['String']
  /** Unique name to serve as a key identifying this service */
  name: Scalars['String']
  /** An optional list of all country codes that this address service supports. Null means all countries. */
  supportedCountryCodes?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** The fields by which you are allowed to sort any query that returns an `AddressValidationRuleConnection` */
export enum AddressValidationRuleSortByField {
  /** AddressValidationRule ID */
  Id = '_id',
  /** Date and time at which the rule was created */
  CreatedAt = 'createdAt',
  /** Service name */
  ServiceName = 'serviceName',
  /** Date and time at which the rule was last updated */
  UpdatedAt = 'updatedAt',
}

/**
 * Wraps a list of `AddressValidationRules`, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type AddressValidationRuleConnection = {
  __typename?: 'AddressValidationRuleConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<AddressValidationRuleEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<AddressValidationRule>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `AddressValidationRule` object */
export type AddressValidationRuleEdge = NodeEdge & {
  __typename?: 'AddressValidationRuleEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The address validation rule */
  node?: Maybe<AddressValidationRule>
}

/**
 * An address validation rule specifies which validation services should run for
 * which countries in each shop.
 */
export type AddressValidationRule = Node & {
  __typename?: 'AddressValidationRule'
  /** The rule ID */
  _id: Scalars['ID']
  /** Country codes for which this service is enabled */
  countryCodes?: Maybe<Array<Maybe<Scalars['String']>>>
  /** The date and time at which this rule was created */
  createdAt: Scalars['DateTime']
  /**
   * The name of one of the installed validation services. Use `addressValidationServices`
   * query to get a list with more details about all installed services.
   */
  serviceName: Scalars['String']
  /** ID of the shop to which this rule applies */
  shopId: Scalars['ID']
  /** The date and time at which this rule was last updated */
  updatedAt: Scalars['DateTime']
}

/** Represents Reaction System Infomation */
export type SystemInformation = {
  __typename?: 'SystemInformation'
  /** Core api version */
  apiVersion: Scalars['String']
  /** Mongo version */
  mongoVersion: DatabaseInformation
  /** Plugins installed with name, version information */
  plugins?: Maybe<Array<Maybe<Plugin>>>
}

/** Represents Mongo Database information */
export type DatabaseInformation = {
  __typename?: 'DatabaseInformation'
  /** Version of database */
  version: Scalars['String']
}

/** Represents Reaction Plugin */
export type Plugin = {
  __typename?: 'Plugin'
  /** Name of plugin */
  name: Scalars['String']
  /** Version of plugin */
  version?: Maybe<Scalars['String']>
}

/**
 * Wraps a list of Templates, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type TemplateConnection = {
  __typename?: 'TemplateConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<TemplateEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<Template>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `Template` object */
export type TemplateEdge = {
  __typename?: 'TemplateEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The email template */
  node?: Maybe<Template>
}

/** Represents a Template */
export type Template = Node & {
  __typename?: 'Template'
  /** The shop ID */
  _id: Scalars['ID']
  /** Email template language */
  language?: Maybe<Scalars['String']>
  /** Email template name */
  name?: Maybe<Scalars['String']>
  /** The shop that owns the template */
  shopId: Scalars['ID']
  /** Email template string */
  subject?: Maybe<Scalars['String']>
  /** Email template body or html text */
  template?: Maybe<Scalars['String']>
  /** Email template title */
  title?: Maybe<Scalars['String']>
}

/** The fields by which you are allowed to sort any query that returns an `AccountConnection` */
export enum AccountSortByField {
  /** Account ID */
  Id = '_id',
  /** Date and time at which this account was created */
  CreatedAt = 'createdAt',
  /** Date and time at which this account was last updated */
  UpdatedAt = 'updatedAt',
}

/**
 * Wraps a list of `Accounts`, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type AccountConnection = {
  __typename?: 'AccountConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<AccountEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<Account>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is an `Account` object */
export type AccountEdge = NodeEdge & {
  __typename?: 'AccountEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The account */
  node?: Maybe<Account>
}

/**
 * Wraps a list of `Invitation`s, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type InvitationConnection = {
  __typename?: 'InvitationConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<InvitationEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<Invitation>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is an `Invitation` object */
export type InvitationEdge = NodeEdge & {
  __typename?: 'InvitationEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The account */
  node?: Maybe<Invitation>
}

/** Represents a single staff member invitation */
export type Invitation = Node & {
  __typename?: 'Invitation'
  /** The invitation ID */
  _id: Scalars['ID']
  /** The e-mail address the invitation was sent to */
  email: Scalars['String']
  /** The groups this person was invited to */
  groups: Array<Maybe<Group>>
  /** The shop this person was invited to. Optional because we can also invite merchants to create their own shops. */
  shop?: Maybe<Shop>
  /** The admin who invited this person */
  invitedBy?: Maybe<Account>
}

/** A Reaction product */
export type Product = {
  __typename?: 'Product'
  /** Product ID */
  _id: Scalars['ID']
  /** The date and time at which this product was created */
  createdAt: Scalars['DateTime']
  /** Hash to compare with publishedProductHash, to see if this product has changed since it was last published */
  currentProductHash?: Maybe<Scalars['String']>
  /** The full product description, which may have newline characters in it */
  description?: Maybe<Scalars['String']>
  /** True if this product has been deleted. Typically, deleted products are not returned in queries. */
  isDeleted: Scalars['Boolean']
  /** True if this product should be shown to shoppers. Typically, non-visible products are not returned in queries. */
  isVisible: Scalars['Boolean']
  /** All media for a product */
  media?: Maybe<Array<Maybe<ImageInfo>>>
  /** The product description to use for page `description` meta element in HTML */
  metaDescription?: Maybe<Scalars['String']>
  /** Arbitrary additional metadata about this product */
  metafields: Array<Maybe<Metafield>>
  /** The country of origin */
  originCountry?: Maybe<Scalars['String']>
  /** Subtitle */
  pageTitle?: Maybe<Scalars['String']>
  /** An arbitrary product type value, such as from an external system */
  productType?: Maybe<Scalars['String']>
  /** The date and time at which this product was last published. If `null`, it has never been published. */
  publishedAt?: Maybe<Scalars['DateTime']>
  /** Hash to compare with currentProductHash, to see if this product has changed since it was last published */
  publishedProductHash?: Maybe<Scalars['String']>
  /** The shop to which this product belongs */
  shop: Shop
  /** Whether this product will be shown in the generated sitemap */
  shouldAppearInSitemap?: Maybe<Scalars['Boolean']>
  /** A URL-safe and human-readable string that uniquely identifies this product */
  slug?: Maybe<Scalars['String']>
  /** Holds metadata specific to a specific social network service */
  socialMetadata?: Maybe<Array<Maybe<SocialMetadata>>>
  /** When a shopper purchases this product, what types of fulfillment can they choose from? */
  supportedFulfillmentTypes: Array<Maybe<FulfillmentType>>
  /** The list of tag IDs that have been applied to this product */
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** The list of tags that have been applied to this product */
  tags?: Maybe<TagConnection>
  /** Product title */
  title?: Maybe<Scalars['String']>
  /** The date and time at which this product was last updated */
  updatedAt?: Maybe<Scalars['DateTime']>
  /** A list of all variants for this product */
  variants: Array<Maybe<ProductVariant>>
  /** The product vendor or manufacturer, for display */
  vendor?: Maybe<Scalars['String']>
  /**
   * Price range
   * @deprecated Use `pricing`
   */
  price?: Maybe<ProductPriceRange>
  /** Pricing information */
  pricing: ProductPricingInfo
}

/** A Reaction product */
export type ProductMediaArgs = {
  shouldIncludeVariantMedia?: Maybe<Scalars['Boolean']>
}

/** A Reaction product */
export type ProductTagsArgs = {
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<TagSortByField>
}

/** A Reaction product */
export type ProductVariantsArgs = {
  shouldIncludeHidden?: Maybe<Scalars['Boolean']>
  shouldIncludeArchived?: Maybe<Scalars['Boolean']>
}

/** Holds metadata specific to a specific social network service */
export type SocialMetadata = {
  __typename?: 'SocialMetadata'
  /** Default share message to use when sharing this product on this social network */
  message?: Maybe<Scalars['String']>
  /** Which social network is this metadata for */
  service?: Maybe<SocialNetwork>
}

/** The list of currently supported social network identifiers */
export enum SocialNetwork {
  /** Facebook */
  Facebook = 'facebook',
  /** Google+ */
  Googleplus = 'googleplus',
  /** Pinterest */
  Pinterest = 'pinterest',
  /** Twitter */
  Twitter = 'twitter',
}

/** Allowed fulfillment types */
export enum FulfillmentType {
  /** An order will be fulfilled digitally, such as by sending a download link */
  Digital = 'digital',
  /** An order will be fulfilled by the customer picking it up */
  Pickup = 'pickup',
  /** An order will be fulfilled by the seller shipping it to the customer */
  Shipping = 'shipping',
}

/** A Reaction product variant or option */
export type ProductVariant = {
  __typename?: 'ProductVariant'
  /** Variant ID */
  _id: Scalars['ID']
  /**
   * The attribute label describes the category of variant, for example, `Color` or `Size`.
   * In most cases this will be the same for all variants at the same level.
   */
  attributeLabel?: Maybe<Scalars['String']>
  /** The product variant barcode value, if it has one */
  barcode?: Maybe<Scalars['String']>
  /** The date and time at which this variant was created */
  createdAt?: Maybe<Scalars['DateTime']>
  /** The height of the product variant, if it has physical dimensions */
  height?: Maybe<Scalars['Float']>
  /** The position of this variant among other variants at the same level of the product-variant-option hierarchy */
  index?: Maybe<Scalars['Int']>
  /** True if this variant was deleted. Deleted variants are not published to the catalog. */
  isDeleted: Scalars['Boolean']
  /** True if this variant is visible. Hidden variants are not published to the catalog. */
  isVisible: Scalars['Boolean']
  /** The length of the product, if it has physical dimensions */
  length?: Maybe<Scalars['Float']>
  /** All media for a variant */
  media?: Maybe<Array<Maybe<ImageInfo>>>
  /** Arbitrary additional metadata about this product */
  metafields: Array<Maybe<Metafield>>
  /** The minimum quantity that must be added to a cart */
  minOrderQuantity?: Maybe<Scalars['Int']>
  /** A short title to use for product detail select lists */
  optionTitle?: Maybe<Scalars['String']>
  /** Child variants, if any */
  options: Array<Maybe<ProductVariant>>
  /** The country of origin */
  originCountry?: Maybe<Scalars['String']>
  /** The shop to which this product variant belongs */
  shop: Shop
  /** SKU of variant */
  sku?: Maybe<Scalars['String']>
  /**
   * The full variant title for use on cart, checkout, and order summaries and on invoices.
   * This fully describes the configured variant. For example, if this is an option with
   * `optionTitle` "Large", its parent variant has `optionTitle` `Red`, and the product
   * `title` is "Fancy T-Shirt", then this `title` will be something like `Fancy T-Shirt - Red - Large`.
   */
  title?: Maybe<Scalars['String']>
  /** The date and time at which this product was last updated */
  updatedAt?: Maybe<Scalars['DateTime']>
  /** The weight of the product on Earth, if it has physical dimensions */
  weight?: Maybe<Scalars['Float']>
  /** The width of the product, if it has physical dimensions */
  width?: Maybe<Scalars['Float']>
  /**
   * Compare at price of the variant
   * @deprecated Use `pricing`
   */
  compareAtPrice?: Maybe<Scalars['Float']>
  /**
   * Price of the variant
   * @deprecated Use `pricing`
   */
  price?: Maybe<Scalars['Float']>
  /** Pricing information */
  pricing: ProductPricingInfo
  /** Whether this variant is taxable */
  isTaxable?: Maybe<Scalars['Boolean']>
  /** Tax code */
  taxCode?: Maybe<Scalars['String']>
  /** Tax description */
  taxDescription?: Maybe<Scalars['String']>
}

/** A Reaction product variant or option */
export type ProductVariantOptionsArgs = {
  shouldIncludeHidden?: Maybe<Scalars['Boolean']>
  shouldIncludeArchived?: Maybe<Scalars['Boolean']>
}

/** The product price or price range for a specific currency */
export type ProductPricingInfo = {
  __typename?: 'ProductPricingInfo'
  /**
   * A comparison price value, usually MSRP. If `price` is null, this will also be null. That is,
   * only purchasable variants will have a `compareAtPrice`.
   */
  compareAtPrice?: Maybe<Money>
  /** The code for the currency these pricing details applies to */
  currency: Currency
  /** Pricing converted to specified currency */
  currencyExchangePricing?: Maybe<CurrencyExchangeProductPricingInfo>
  /**
   * UI should display this price. If a product has multiple potential prices depending on selected
   * variants and options, then this is a price range string such as "$3.95 - $6.99". It includes the currency
   * symbols.
   */
  displayPrice: Scalars['String']
  /** The price of the most expensive possible variant+option combination */
  maxPrice: Scalars['Float']
  /** The price of the least expensive possible variant+option combination */
  minPrice: Scalars['Float']
  /**
   * For variants with no options and for options, this will always be set to a price. For variants
   * with options and products, this will be `null`. There must be a price for a variant to be
   * added to a cart or purchased. Otherwise you would instead add one of its child options to a cart.
   */
  price?: Maybe<Scalars['Float']>
}

/** The product price or price range for a specific currency */
export type ProductPricingInfoCurrencyExchangePricingArgs = {
  currencyCode: Scalars['String']
}

/** Represents some amount of a single currency */
export type Money = {
  __typename?: 'Money'
  /** The numeric amount */
  amount: Scalars['Float']
  /** The currency, for interpreting the `amount` */
  currency: Currency
  /** The display amount, with any currency symbols and decimal places already added */
  displayAmount: Scalars['String']
}

/** The product price or price range for a specific currency */
export type CurrencyExchangeProductPricingInfo = {
  __typename?: 'CurrencyExchangeProductPricingInfo'
  /**
   * A comparison price value, usually MSRP. If `price` is null, this will also be null. That is,
   * only purchasable variants will have a `compareAtPrice`.
   */
  compareAtPrice?: Maybe<Money>
  /** The code for the currency these pricing details applies to */
  currency: Currency
  /**
   * UI should display this price. If a product has multiple potential prices depending on selected
   * variants and options, then this is a price range string such as "$3.95 - $6.99". It includes the currency
   * symbols.
   */
  displayPrice: Scalars['String']
  /** The price of the most expensive possible variant+option combination */
  maxPrice: Scalars['Float']
  /** The price of the least expensive possible variant+option combination */
  minPrice: Scalars['Float']
  /**
   * For variants with no options and for options, this will always be set to a price. For variants
   * with options and products, this will be `null`. There must be a price for a variant to be
   * added to a cart or purchased. Otherwise you would instead add one of its child options to a cart.
   */
  price?: Maybe<Scalars['Float']>
}

/** Product price range */
export type ProductPriceRange = {
  __typename?: 'ProductPriceRange'
  /** Maximum price in range */
  max?: Maybe<Scalars['Float']>
  /** Minimum price in range */
  min?: Maybe<Scalars['Float']>
  /** Price range display */
  range?: Maybe<Scalars['String']>
}

/** The fields by which you are allowed to sort any query that returns a `ProductConnection` */
export enum ProductSortByField {
  /** Product ID */
  Id = '_id',
  /** Date and time the product was created */
  CreatedAt = 'createdAt',
  /** Product title */
  Title = 'title',
  /** Date and time the product was last updated */
  UpdatedAt = 'updatedAt',
}

/**
 * Wraps a list of Products`s, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type ProductConnection = {
  __typename?: 'ProductConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<ProductEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<Product>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `Product` object */
export type ProductEdge = {
  __typename?: 'ProductEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The product */
  node?: Maybe<Product>
}

/** A filter to be applied to a Catalog query */
export type CatalogBooleanFilter = {
  /** The name of the filter */
  name: CatalogBooleanFilterName
  /** The filter value */
  value: Scalars['Boolean']
}

/** The list of currently supported top level Catalog props on which catalog items can be filtered. */
export enum CatalogBooleanFilterName {
  /** isDeleted */
  IsDeleted = 'isDeleted',
  /** isVisible */
  IsVisible = 'isVisible',
  /** isLowQuantity */
  IsLowQuantity = 'isLowQuantity',
  /** isSoldOut */
  IsSoldOut = 'isSoldOut',
  /** isBackorder */
  IsBackorder = 'isBackorder',
}

/** Allowed values for sorting catalog items */
export enum CatalogItemSortByField {
  /** Sort by item ID */
  Id = '_id',
  /** Sort by date and time at which the item was created */
  CreatedAt = 'createdAt',
  /** Sort in the shop-defined order for the tag filter */
  Featured = 'featured',
  /** Sort by price */
  MinPrice = 'minPrice',
  /** Sort by date and time at which the item was last updated */
  UpdatedAt = 'updatedAt',
}

/**
 * Wraps a list of `CatalogItem`s, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type CatalogItemConnection = {
  __typename?: 'CatalogItemConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<CatalogItemEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<CatalogItem>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `CatalogItem` object */
export type CatalogItemEdge = {
  __typename?: 'CatalogItemEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The catalog item */
  node?: Maybe<CatalogItem>
}

/** Catalog items are combined to create a catalog. Each item can represent a different type of content. */
export type CatalogItem = {
  /** Item ID */
  _id: Scalars['ID']
  /** Date and time at which the item was created */
  createdAt?: Maybe<Scalars['DateTime']>
  /** Shop that owns the item */
  shop: Shop
  /** Date and time at which the item was last updated */
  updatedAt?: Maybe<Scalars['DateTime']>
}

/** Represents a catalog item that displays a product */
export type CatalogItemProduct = CatalogItem &
  Node & {
    __typename?: 'CatalogItemProduct'
    /** The CatalogItemProduct ID */
    _id: Scalars['ID']
    /** The date and time at which this CatalogItem was first created, which is when the related product was first published */
    createdAt: Scalars['DateTime']
    /** The catalog product */
    product?: Maybe<CatalogProduct>
    /** The shop to which this catalog belongs */
    shop: Shop
    /** The date and time at which this CatalogItem was last updated, which is when the related product was most recently published */
    updatedAt: Scalars['DateTime']
  }

/**
 * Represents a product that has been published into a shop catalog. The related `Product` is the source of truth for
 * shop administrators, but that is then published to a catalog as a `CatalogProduct`, which is what should
 * be displayed to shoppers who browse that catalog.
 */
export type CatalogProduct = CatalogProductOrVariant &
  Node & {
    __typename?: 'CatalogProduct'
    /** The CatalogProduct ID. Do not assume that this is the same as the related product ID. See `productId` for that. */
    _id: Scalars['ID']
    /** The product barcode value, if it has one */
    barcode?: Maybe<Scalars['String']>
    /** The date and time at which this CatalogProduct was created, which is when the related product was first published */
    createdAt: Scalars['DateTime']
    /** The full product description, which may have newline characters in it */
    description?: Maybe<Scalars['String']>
    /** The height of the product, if it has physical dimensions */
    height?: Maybe<Scalars['Float']>
    /** True if this product has been deleted. Typically, deleted products are not returned in queries. */
    isDeleted: Scalars['Boolean']
    /** True if this product should be shown to shoppers. Typically, non-visible products are not returned in queries. */
    isVisible: Scalars['Boolean']
    /** The length of the product, if it has physical dimensions */
    length?: Maybe<Scalars['Float']>
    /** All media for this product and its variants */
    media?: Maybe<Array<Maybe<ImageInfo>>>
    /** The product description to use for page `description` meta element in HTML */
    metaDescription?: Maybe<Scalars['String']>
    /** Arbitrary additional metadata about this product */
    metafields?: Maybe<Array<Maybe<Metafield>>>
    /** The minimum quantity that must be added to a cart */
    minOrderQuantity?: Maybe<Scalars['Int']>
    /** The country of origin */
    originCountry?: Maybe<Scalars['String']>
    /** Subtitle */
    pageTitle?: Maybe<Scalars['String']>
    /** Dimensions and other information about the containers in which this product will be shipped */
    parcel?: Maybe<ShippingParcel>
    /** The primary image */
    primaryImage?: Maybe<ImageInfo>
    /** The related Product ID */
    productId: Scalars['ID']
    /** An arbitrary product type value, such as from an external system */
    productType?: Maybe<Scalars['String']>
    /** The shop to which this product belongs */
    shop: Shop
    /** A stock keeping unit (SKU) identifier for this product */
    sku?: Maybe<Scalars['String']>
    /** A URL-safe and human-readable string that uniquely identifies this product */
    slug?: Maybe<Scalars['String']>
    /** Holds metadata specific to a specific social network service */
    socialMetadata?: Maybe<Array<Maybe<SocialMetadata>>>
    /** When a shopper purchases this product, what types of fulfillment can they choose from? */
    supportedFulfillmentTypes: Array<Maybe<FulfillmentType>>
    /** Product title */
    title?: Maybe<Scalars['String']>
    /** The date and time at which this CatalogProduct was last updated, which is when the related product was most recently published */
    updatedAt: Scalars['DateTime']
    /** A flat list of all variants for this product */
    variants?: Maybe<Array<Maybe<CatalogProductVariant>>>
    /** The product vendor or manufacturer, for display */
    vendor?: Maybe<Scalars['String']>
    /** The weight of the product on Earth, if it has physical dimensions */
    weight?: Maybe<Scalars['Float']>
    /** The width of the product, if it has physical dimensions */
    width?: Maybe<Scalars['Float']>
    /** The list of tag IDs that have been applied to this product */
    tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>
    /** The list of tags that have been applied to this product */
    tags?: Maybe<TagConnection>
    /** Price and related information, per currency */
    pricing: Array<Maybe<ProductPricingInfo>>
    /**
     * True if every purchasable variant of this product is sold out but allows backorders. A storefront UI may use this
     * to decide to show a "Backordered" indicator.
     */
    isBackorder: Scalars['Boolean']
    /**
     * True if at least one purchasable variant of this product has a low quantity in stock. A storefront UI may use this
     * to decide to show a "Low Quantity" indicator.
     */
    isLowQuantity: Scalars['Boolean']
    /**
     * True if every purchasable variant of this product is sold out. A storefront UI may use this
     * to decide to show a "Sold Out" indicator when `isBackorder` is not also true.
     */
    isSoldOut: Scalars['Boolean']
  }

/**
 * Represents a product that has been published into a shop catalog. The related `Product` is the source of truth for
 * shop administrators, but that is then published to a catalog as a `CatalogProduct`, which is what should
 * be displayed to shoppers who browse that catalog.
 */
export type CatalogProductTagsArgs = {
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<TagSortByField>
}

/** This interface represents the fields that are identical for both Products and Variants */
export type CatalogProductOrVariant = {
  /** The product barcode value, if it has one */
  barcode?: Maybe<Scalars['String']>
  /** The date and time at which this CatalogProduct was created, which is when the related product was first published */
  createdAt?: Maybe<Scalars['DateTime']>
  /** The height of the product, if it has physical dimensions */
  height?: Maybe<Scalars['Float']>
  /** The length of the product, if it has physical dimensions */
  length?: Maybe<Scalars['Float']>
  /** Arbitrary additional metadata about this product */
  metafields?: Maybe<Array<Maybe<Metafield>>>
  /** The minimum quantity that must be added to a cart */
  minOrderQuantity?: Maybe<Scalars['Int']>
  /** The country of origin */
  originCountry?: Maybe<Scalars['String']>
  /** The shop to which this product belongs */
  shop: Shop
  /** A stock keeping unit (SKU) identifier for this product */
  sku?: Maybe<Scalars['String']>
  /** Product or variant title */
  title?: Maybe<Scalars['String']>
  /** The date and time at which this CatalogProduct was last updated, which is when the related product was most recently published */
  updatedAt?: Maybe<Scalars['DateTime']>
  /** The weight of the product on Earth, if it has physical dimensions */
  weight?: Maybe<Scalars['Float']>
  /** The width of the product, if it has physical dimensions */
  width?: Maybe<Scalars['Float']>
}

/** A shipping parcel */
export type ShippingParcel = {
  __typename?: 'ShippingParcel'
  /** Containers */
  containers?: Maybe<Scalars['String']>
  /** Distance unit */
  distanceUnit?: Maybe<DistanceUnit>
  /** Height */
  height?: Maybe<Scalars['Float']>
  /** Length */
  length?: Maybe<Scalars['Float']>
  /** Mass unit */
  massUnit?: Maybe<MassUnit>
  /** Weight */
  weight?: Maybe<Scalars['Float']>
  /** Width */
  width?: Maybe<Scalars['Float']>
}

/** Distance units */
export enum DistanceUnit {
  /** Centimeter */
  Cm = 'cm',
  /** Foot */
  Ft = 'ft',
  /** Inch */
  In = 'in',
}

/** Mass units */
export enum MassUnit {
  /** Gram */
  G = 'g',
  /** Kilogram */
  Kg = 'kg',
  /** Pound */
  Lb = 'lb',
  /** Ounce */
  Oz = 'oz',
}

/** A variant of a catalog product */
export type CatalogProductVariant = CatalogProductOrVariant &
  Node & {
    __typename?: 'CatalogProductVariant'
    /** The CatalogProductVariant ID. Do not assume that this is the same as the related variant ID. See `variantId` for that. */
    _id: Scalars['ID']
    /**
     * The attribute label describes the category of variant, for example, `Color` or `Size`.
     * In most cases this will be the same for all variants at the same level.
     */
    attributeLabel: Scalars['String']
    /** The product variant barcode value, if it has one */
    barcode?: Maybe<Scalars['String']>
    /** The date and time at which this CatalogProductVariant was created, which is when the related product was first published */
    createdAt?: Maybe<Scalars['DateTime']>
    /** The height of the product variant, if it has physical dimensions */
    height?: Maybe<Scalars['Float']>
    /** The position of this variant among other variants at the same level of the product-variant-option hierarchy */
    index: Scalars['Int']
    /** The length of the product, if it has physical dimensions */
    length?: Maybe<Scalars['Float']>
    /** All media for this variant / option */
    media?: Maybe<Array<Maybe<ImageInfo>>>
    /** Arbitrary additional metadata about this product */
    metafields?: Maybe<Array<Maybe<Metafield>>>
    /** The minimum quantity that must be added to a cart */
    minOrderQuantity?: Maybe<Scalars['Int']>
    /** A short title to use for product detail select lists */
    optionTitle?: Maybe<Scalars['String']>
    /** Child variants, if any */
    options?: Maybe<Array<Maybe<CatalogProductVariant>>>
    /** The country of origin */
    originCountry?: Maybe<Scalars['String']>
    /** The primary image of this variant / option */
    primaryImage?: Maybe<ImageInfo>
    /** The shop to which this product variant belongs */
    shop: Shop
    /** A stock keeping unit (SKU) identifier for this product */
    sku?: Maybe<Scalars['String']>
    /**
     * The full variant title for use on cart, checkout, and order summaries and on invoices.
     * This fully describes the configured variant. For example, if this is an option with
     * `optionTitle` `Large`, its parent variant has `optionTitle` `Red`, and the product
     * `title` is `Fancy T-Shirt`, then this `title` will be something like `Fancy T-Shirt - Red - Large`.
     */
    title?: Maybe<Scalars['String']>
    /** The date and time at which this CatalogProduct was last updated, which is when the related product was most recently published */
    updatedAt?: Maybe<Scalars['DateTime']>
    /** The related Variant ID */
    variantId: Scalars['ID']
    /** The weight of the product on Earth, if it has physical dimensions */
    weight?: Maybe<Scalars['Float']>
    /** The width of the product, if it has physical dimensions */
    width?: Maybe<Scalars['Float']>
    /** Price and related information, per currency */
    pricing: Array<Maybe<ProductPricingInfo>>
    /**
     * True for a purchasable variant if an order containing this variant will be accepted even when there is insufficient
     * available inventory (`inventoryAvailableToSell`) to fulfill it immediately. For non-purchasable variants, this is true if at least one purchasable
     * child variant can be backordered. A storefront UI may use this in combination with `inventoryAvailableToSell` to
     * decide whether to show or enable an "Add to Cart" button.
     */
    canBackorder: Scalars['Boolean']
    /**
     * The quantity of this item currently available to sell.
     * This number is updated when an order is placed by the customer.
     * This number does not include reserved inventory (i.e. inventory that has been ordered, but not yet processed by the operator).
     * If this is a variant, this number is created by summing all child option inventory numbers.
     * This is most likely the quantity to display in the storefront UI.
     */
    inventoryAvailableToSell?: Maybe<Scalars['Int']>
    /**
     * The quantity of this item currently in stock.
     * This number is updated when an order is processed by the operator.
     * This number includes all inventory, including reserved inventory (i.e. inventory that has been ordered, but not yet processed by the operator).
     * If this is a variant, this number is created by summing all child option inventory numbers.
     * This is most likely just used as a reference in the operator UI, and not displayed in the storefront UI.
     */
    inventoryInStock?: Maybe<Scalars['Int']>
    /**
     * True for a purchasable variant if it is sold out but allows backorders. For non-purchasable variants, this is
     * true if every purchasable child variant is sold out but allows backorders. A storefront UI may use this
     * to decide to show a "Backordered" indicator.
     */
    isBackorder: Scalars['Boolean']
    /**
     * True for a purchasable variant if it has a low available quantity (`inventoryAvailableToSell`) in stock.
     * For non-purchasable variants, this is true if at least one purchasable child variant has a low available
     * quantity in stock. A storefront UI may use this to decide to show a "Low Quantity" indicator.
     */
    isLowQuantity: Scalars['Boolean']
    /**
     * True for a purchasable variant if it is sold out (`inventoryAvailableToSell` is 0). For non-purchasable
     * variants, this is true if every purchasable child variant is sold out. A storefront UI may use this
     * to decide to show a "Sold Out" indicator when `isBackorder` is not also true.
     */
    isSoldOut: Scalars['Boolean']
    /** Is sales tax charged on this item? */
    isTaxable: Scalars['Boolean']
    /** An optional code which, if understood by the active tax service for the shop, determines how this product should be taxed */
    taxCode?: Maybe<Scalars['String']>
    /** A description to use for the tax line item on an invoice */
    taxDescription?: Maybe<Scalars['String']>
  }

/**
 * Wraps a list of `TagProduct`s, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type TagProductConnection = {
  __typename?: 'TagProductConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<TagProductEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<TagProduct>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `TagProduct` object */
export type TagProductEdge = {
  __typename?: 'TagProductEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The tag product */
  node?: Maybe<TagProduct>
}

/** A tag product */
export type TagProduct = {
  __typename?: 'TagProduct'
  /** The product id */
  _id: Scalars['ID']
  /** The date and time at which this CatalogProduct was created, which is when the related product was first published */
  createdAt: Scalars['DateTime']
  /** Position of the product */
  position?: Maybe<Scalars['Int']>
  /** The title of the product */
  title?: Maybe<Scalars['String']>
}

/** Input that defines a single configuration of a product */
export type ProductConfigurationInput = {
  /** The Product ID */
  productId: Scalars['ID']
  /** The ProductVariant ID */
  productVariantId: Scalars['ID']
}

/** Inventory info for a specific product configuration. For inventory managed by the SimpleInventory plugin. */
export type SimpleInventoryInfo = {
  __typename?: 'SimpleInventoryInfo'
  /** Whether to allow ordering this product configuration when there is insufficient quantity available */
  canBackorder?: Maybe<Scalars['Boolean']>
  /** Current quantity of this product configuration in stock */
  inventoryInStock?: Maybe<Scalars['Int']>
  /**
   * Current quantity of this product configuration unavailable for ordering. This value is calculated
   * by the system based on this product variant being in not-yet-approved orders.
   */
  inventoryReserved?: Maybe<Scalars['Int']>
  /** Whether the SimpleInventory plugin should manage inventory for this product configuration */
  isEnabled?: Maybe<Scalars['Boolean']>
  /**
   * The "low quantity" flag will be applied to this product configuration when the available quantity
   * is at or below this threshold
   */
  lowInventoryWarningThreshold?: Maybe<Scalars['Int']>
  /** The product and chosen options this info applies to */
  productConfiguration: ProductConfiguration
}

/** Product configuration data */
export type ProductConfiguration = {
  __typename?: 'ProductConfiguration'
  /** The Product ID */
  productId: Scalars['ID']
  /** The ProductVariant ID */
  productVariantId: Scalars['ID']
}

/** The cart holds selected items until order is placed. */
export type Cart = Node & {
  __typename?: 'Cart'
  /** The Cart ID */
  _id: Scalars['ID']
  /**
   * The account that owns the cart. Some carts are created for anonymous users. Anonymous carts have a null account.
   * Every account has exactly one cart per shop.
   */
  account?: Maybe<Account>
  /** Holds all information collected for a cart during checkout */
  checkout?: Maybe<Checkout>
  /** The date and time at which the cart was created, which is when the first item was added to it. */
  createdAt: Scalars['DateTime']
  /** An email address that has been associated with the cart */
  email?: Maybe<Scalars['String']>
  /** The date and time at which the cart will expire. Account carts usually do not expire, so they will have a null value here. */
  expiresAt?: Maybe<Scalars['DateTime']>
  /** The items that have been added to the cart. A cart is not created until the first item is added. Items can be removed from a cart, and a cart is not deleted if all items are removed from it. Because all items may have been removed, this may be an empty array. */
  items?: Maybe<CartItemConnection>
  /**
   * If any products or variants become hidden or are deleted after they were added to this cart, they'll be
   * automatically moved from `items` to `missingItems`. Clients may want to use this to show an
   * "items that are no longer available" list to storefront users.
   *
   * If a product becomes visible again, the item will never be automatically moved from `missingItems`
   * back to `items`, but clients may want to provide a way for users to manually do this.
   */
  missingItems?: Maybe<Array<Maybe<CartItem>>>
  /**
   * If you integrate with third-party systems that require you to send the same ID for order
   * calculations as for cart calculations, you may use this ID, which is the same on a `cart` as on
   * the `order` placed from that cart. This ID can also be customized by plugins and is the best
   * ID to use if it is necessary to show a cart ID in the user interface.
   */
  referenceId?: Maybe<Scalars['String']>
  /** The shop that owns the cart. */
  shop: Shop
  /** Total quantity of all items in the cart */
  totalItemQuantity: Scalars['Int']
  /** The date and time at which this cart was last updated. */
  updatedAt: Scalars['DateTime']
  /** Surcharges applied to this cart */
  surcharges: Array<Maybe<AppliedSurcharge>>
  /**
   * A summary of calculated taxes for this cart. Null means "not able to calculate",
   * such as when no fulfillment method has been selected for some fulfillment groups.
   */
  taxSummary?: Maybe<TaxSummary>
}

/** The cart holds selected items until order is placed. */
export type CartItemsArgs = {
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<CartItemsSortByField>
}

/** Holds all information collected for a cart during checkout */
export type Checkout = {
  __typename?: 'Checkout'
  /** One or more fulfillment groups, for example, mapping certain items to certain shipping addresses */
  fulfillmentGroups: Array<Maybe<FulfillmentGroup>>
  /** A summary of the totals for this cart */
  summary: CartSummary
}

/**
 * Links one or more cart items to fulfillment data. The most common example is having one FulfillmentGroup
 * per shipping address.
 */
export type FulfillmentGroup = Node & {
  __typename?: 'FulfillmentGroup'
  /** The fulfillment ID */
  _id: Scalars['ID']
  /**
   * The list of fulfillment options from which the shopper may choose. This list is created by taking
   * the full list of registered fulfillment methods, keeping only those that match the fulfillment `type`
   * of this group, and then calculating a price and handlingPrice for each based on the `items` in this group.
   */
  availableFulfillmentOptions: Array<Maybe<FulfillmentOption>>
  /** Information needed by the fulfillment type to properly fulfill the order */
  data?: Maybe<FulfillmentData>
  /** The items that are included in this fulfillment group */
  items: Array<Maybe<CartItem>>
  /** The fulfillment method selected by a shopper for this group, with its associated price */
  selectedFulfillmentOption?: Maybe<FulfillmentOption>
  /** The shipping address collected for this group, if relevant */
  shippingAddress?: Maybe<Address>
  /** The shop that owns the items in this group and is responsible for fulfillment */
  shop: Shop
  /** The fulfillment type. Any valid type that has been registered by a fulfillment plugin. Examples: `shipping`, `digital` */
  type: FulfillmentType
}

/** A fulfillment option for a cart fulfillment group, which is a method with an associated price */
export type FulfillmentOption = {
  __typename?: 'FulfillmentOption'
  /** The fulfillment method this pricing is for */
  fulfillmentMethod?: Maybe<FulfillmentMethod>
  /** The additional amount charged for handling */
  handlingPrice: Money
  /** The base price charged */
  price: Money
}

/**
 * A single fulfillment method. Fulfillment methods are shown to shoppers along with a quote for them,
 * and the shopper chooses one method per fulfillment group per cart during checkout.
 */
export type FulfillmentMethod = Node & {
  __typename?: 'FulfillmentMethod'
  /** The fulfillment method ID */
  _id: Scalars['ID']
  /** A carrier name */
  carrier?: Maybe<Scalars['String']>
  /** The name of this method, for display in the user interface */
  displayName: Scalars['String']
  /** The fulfillment types for which this method may be used. For example, `shipping` or `digital`. */
  fulfillmentTypes: Array<Maybe<FulfillmentType>>
  /** The group to which this method belongs */
  group?: Maybe<Scalars['String']>
  /** The name of this method, a unique identifier */
  name: Scalars['String']
}

/** Information needed by the selected fulfillment method to properly fulfill the order */
export type FulfillmentData = {
  __typename?: 'FulfillmentData'
  /** The mailing address to which this fulfillment group should be shipped */
  shippingAddress?: Maybe<Address>
}

/** A single item in a cart. The item contains information about an intended purchase. */
export type CartItem = Node & {
  __typename?: 'CartItem'
  /** The cart item ID */
  _id: Scalars['ID']
  /**
   * "
   * The date and time at which this item was first added to the associated cart.
   * If an item is added, removed, and then added again, this will reflect the most recent addition.
   * However, if an item is added twice, the quantity will increase but this date will remain
   * the initial added date.
   */
  addedAt: Scalars['DateTime']
  /**
   * FUTURE. Additional attributes of the chosen item. For example, if this item is for a product, socks, where `blue` and `small`
   * options were chosen for some configurable attributes, then `color:blue` and `size:small` will be indicated here.
   */
  attributes?: Maybe<Array<Maybe<CartItemAttribute>>>
  /** The current comparison (e.g., MSRP) price of the item */
  compareAtPrice?: Maybe<Money>
  /**
   * The date and time at which the cart item was created. If an item is added, removed, and then added again,
   * the original item is destroyed and this field will reflect the time it was created for the most recent addition.
   */
  createdAt: Scalars['DateTime']
  /** The URLs for a picture of the item in various sizes */
  imageURLs?: Maybe<ImageSizes>
  /** Arbitrary additional metadata about this cart item. */
  metafields?: Maybe<Array<Maybe<Metafield>>>
  /** The selected variant optionTitle */
  optionTitle?: Maybe<Scalars['String']>
  /** Packing information such as item weight, height, length, and depth. Used for calculating shipping rates. */
  parcel?: Maybe<ShippingParcel>
  /** The current price of the item */
  price: Money
  /** The price at which this item was listed when it was added to the cart */
  priceWhenAdded: Money
  /** The product and chosen options */
  productConfiguration: ProductConfiguration
  /** The product's slug */
  productSlug?: Maybe<Scalars['String']>
  /** The list of tags that have been applied to this product */
  productTags?: Maybe<TagConnection>
  /** The type of product, used to display cart items differently */
  productType?: Maybe<Scalars['String']>
  /** The product vendor */
  productVendor?: Maybe<Scalars['String']>
  /** The quantity of this item that has been added to the cart. This must be a positive integer. Remove this `CartItem` from it's associated cart if you want `0` of this item. */
  quantity: Scalars['Int']
  /** The shop associated with this cart item. */
  shop: Shop
  /** The current price of the item multiplied by the quantity */
  subtotal: Money
  /** A title for use in cart/orders that conveys the selected product's title + chosen options */
  title: Scalars['String']
  /** The date and time at which this item was last updated */
  updatedAt: Scalars['DateTime']
  /** The selected variant title */
  variantTitle?: Maybe<Scalars['String']>
  /**
   * The quantity of this item currently available to sell.
   * This number is updated when an order is placed by the customer.
   * This number does not include reserved inventory (i.e. inventory that has been ordered, but not yet processed by the operator).
   * This is most likely the quantity to display in the storefront UI.
   */
  inventoryAvailableToSell?: Maybe<Scalars['Int']>
  /**
   * True if this item is currently sold out but allows backorders. A storefront UI may use this
   * to decide to show a "Backordered" indicator.
   */
  isBackorder: Scalars['Boolean']
  /**
   * True if this item has a low available quantity (`inventoryAvailableToSell`) in stock.
   * A storefront UI may use this to decide to show a "Low Quantity" indicator.
   */
  isLowQuantity: Scalars['Boolean']
  /**
   * True if this item is currently sold out (`inventoryAvailableToSell` is 0). A storefront
   * UI may use this to decide to show a "Sold Out" indicator when `isBackorder` is not also true.
   */
  isSoldOut: Scalars['Boolean']
  /** Is this a taxable item? */
  isTaxable: Scalars['Boolean']
  /** Total tax calculated for this item */
  tax?: Maybe<Money>
  /** The tax code for this item */
  taxCode?: Maybe<Scalars['String']>
  /** Amount of subtotal that is taxable */
  taxableAmount?: Maybe<Money>
  /** List of calculated taxes due for this item */
  taxes?: Maybe<Array<Maybe<CalculatedTax>>>
}

/** A single item in a cart. The item contains information about an intended purchase. */
export type CartItemProductTagsArgs = {
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<TagSortByField>
}

/** One attribute of a cart item */
export type CartItemAttribute = {
  __typename?: 'CartItemAttribute'
  /** The attribute label, e.g., Color */
  label?: Maybe<Scalars['String']>
  /** The attribute value, e.g., Blue */
  value?: Maybe<Scalars['String']>
}

/** A single calculated tax for a cart, order group, cart item, or order item */
export type CalculatedTax = {
  __typename?: 'CalculatedTax'
  /** Calculated tax ID */
  _id: Scalars['ID']
  /** Jurisdiction ID. It is up to the tax service to determine if and how to use this. */
  jurisdictionId?: Maybe<Scalars['String']>
  /** Did this tax match due to the order origin or the order destination? */
  sourcing: TaxSource
  /** Amount of tax due */
  tax: Money
  /** A human-readable display name for showing this tax to operators and customers in the UI */
  taxName: Scalars['String']
  /** The tax rate used for this calculation */
  taxRate: Rate
  /** Amount that was used for calculating the tax due */
  taxableAmount: Money
}

/** Tax sources */
export enum TaxSource {
  /** Tax is applied when the destination matches the tax jurisdiction */
  Destination = 'destination',
  /** Tax is applied when the origin matches the tax jurisdiction */
  Origin = 'origin',
}

/** A numeric rate, with its corresponding percent values */
export type Rate = {
  __typename?: 'Rate'
  /** The rate */
  amount: Scalars['Float']
  /** The percent as a preformatted string with percent symbol included */
  displayPercent: Scalars['String']
  /** The percent (rate x 100) */
  percent: Scalars['Float']
}

/** A summary of the totals for this cart */
export type CartSummary = {
  __typename?: 'CartSummary'
  /** The total of all discounts applied, as a positive number */
  discountTotal: Money
  /**
   * The calculated tax-exclusive tax rate on all items and fulfillment prices (taxTotal / taxableAmount).
   * This may be null, and there is a difference between null and 0. Null means `not able to calculate`,
   * such as when no fulfillment method has been selected for some fulfillment groups.
   */
  effectiveTaxRate?: Maybe<Rate>
  /**
   * The total price of all chosen fulfillment methods. This may be null, and there is a difference
   * between null and 0. Null means `not able to calculate`, such as when no fulfillment method has
   * been selected for some fulfillment groups.
   */
  fulfillmentTotal?: Maybe<Money>
  /** The combined prices of all cart items */
  itemTotal: Money
  /**
   * The total estimated tax that has not already been included in the item prices. This may be null,
   * and there is a difference between null and 0. Null means `not able to calculate`, such as when no
   * fulfillment methods have been selected or there is some other issue with the tax service.
   */
  taxTotal?: Maybe<Money>
  /** The total amount that was deemed taxable by the tax service */
  taxableAmount: Money
  /** The sum of `itemTotal`, `fulfillmentTotal`, and `taxTotal`, minus `discountTotal` */
  total: Money
  /**
   * The combined total of all surcharges. This may be null, and there is a difference
   * between null and 0. Null means `not able to calculate`, such as when no fulfillment method has
   * been selected for some fulfillment groups.
   */
  surchargeTotal?: Maybe<Money>
}

/** Allowed values for cart item sortBy parameter */
export enum CartItemsSortByField {
  /** Cart item ID */
  Id = '_id',
  /** Date and time at which the item was added to the cart */
  AddedAt = 'addedAt',
}

/**
 * Wraps a list of `CartItem`s, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type CartItemConnection = {
  __typename?: 'CartItemConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<CartItemEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<CartItem>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `CartItem` object */
export type CartItemEdge = NodeEdge & {
  __typename?: 'CartItemEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The cart item */
  node?: Maybe<CartItem>
}

/** Defines a surcharge that has been applied to a Cart or Order */
export type AppliedSurcharge = Node & {
  __typename?: 'AppliedSurcharge'
  /** The surcharge ID */
  _id: Scalars['ID']
  /** The amount of the surcharge */
  amount: Money
  /** The fulfillmentGroupId (for reference) */
  fulfillmentGroupId?: Maybe<Scalars['ID']>
  /** The message to explain the surchage to customers, translated (if available) based on shop language */
  message?: Maybe<Scalars['String']>
  /** The surchargeId from the surchages collection (for reference) */
  surchargeDefinitionId: Scalars['ID']
}

/** Defines a surcharge that has been applied to a Cart or Order */
export type AppliedSurchargeMessageArgs = {
  language: Scalars['String']
}

/** A summary of tax-related calculations for a cart or order group */
export type TaxSummary = {
  __typename?: 'TaxSummary'
  /** The time at which taxes were last calculated for the cart or order group */
  calculatedAt: Scalars['DateTime']
  /** The name of the tax service that last calculated taxes for the cart or order group */
  calculatedByTaxServiceName?: Maybe<Scalars['String']>
  /** A reference ID for the external system that calculated the taxes */
  referenceId?: Maybe<Scalars['String']>
  /** Total tax calculated by the active tax service */
  tax: Money
  /** Amount that was deemed subject to any taxes by the active tax service */
  taxableAmount: Money
  /** Full list of all taxes that were calculated by the active tax service for the cart or order group */
  taxes: Array<Maybe<CalculatedTax>>
}

/** An order */
export type Order = Node & {
  __typename?: 'Order'
  /** The Order ID */
  _id: Scalars['ID']
  /** The account that placed the order. Some orders are created for anonymous users. Anonymous orders have a null account. */
  account?: Maybe<Account>
  /** Full name(s) involved with payment. Payment can be made by one or more than one person */
  billingName?: Maybe<Scalars['String']>
  /** The ID of the cart that created this order. Carts are deleted after becoming orders, so this is just a reference. */
  cartId?: Maybe<Scalars['ID']>
  /** The date and time at which the cart was created, which is when the first item was added to it. */
  createdAt: Scalars['DateTime']
  /** The order status for display in UI */
  displayStatus: Scalars['String']
  /** An email address that has been associated with the cart */
  email?: Maybe<Scalars['String']>
  /** One or more fulfillment groups. Each of these are fulfilled and charged as separate orders. */
  fulfillmentGroups: Array<Maybe<OrderFulfillmentGroup>>
  /** Notes about the order. This will always return an array but it may be empty */
  notes: Array<Maybe<OrderNote>>
  /**
   * Payments that collectively have paid or will pay for the total amount due for this order.
   * May be null if no payment is needed.
   */
  payments?: Maybe<Array<Maybe<Payment>>>
  /**
   * An ID by which the customer can reference this order when enquiring about it. A storefront user
   * interface may show this to customers. Do not display other IDs (`_id`) to customers.
   */
  referenceId: Scalars['String']
  /** Refunds that have been applied to the payments on this order. */
  refunds?: Maybe<Array<Maybe<Refund>>>
  /** The shop through which the order was placed */
  shop: Shop
  /** The machine-readable order status. */
  status: Scalars['String']
  /** A summary of the totals for all fulfillment groups for this order */
  summary: OrderSummary
  /** Total quantity of all items in the order */
  totalItemQuantity: Scalars['Int']
  /** The date and time at which this order was last updated */
  updatedAt: Scalars['DateTime']
  /** Surcharges applied to this order */
  surcharges: Array<Maybe<AppliedSurcharge>>
}

/** An order */
export type OrderDisplayStatusArgs = {
  language: Scalars['String']
}

/** An order fulfillment group */
export type OrderFulfillmentGroup = Node & {
  __typename?: 'OrderFulfillmentGroup'
  /** The order fulfillment group ID */
  _id: Scalars['ID']
  /** Information needed by the selected fulfillment method to properly fulfill the order */
  data?: Maybe<OrderFulfillmentGroupData>
  /** The order status for display in UI */
  displayStatus: Scalars['String']
  /** The items that are part of this fulfillment group */
  items?: Maybe<OrderItemConnection>
  /** The fulfillment method that was selected, with its price quote */
  selectedFulfillmentOption: FulfillmentOption
  /** The shipping label URL */
  shippingLabelUrl?: Maybe<Scalars['String']>
  /** The shop responsible for fulfilling this order */
  shop: Shop
  /** The machine-readable fulfillment group status. */
  status: Scalars['String']
  /** A summary of the totals for this group */
  summary: OrderSummary
  /** Total quantity of all items in the group */
  totalItemQuantity: Scalars['Int']
  /** The order fulfillment group shipment tracking number */
  tracking?: Maybe<Scalars['String']>
  /** The order fulfillment group shipment tracking URL */
  trackingUrl?: Maybe<Scalars['String']>
  /** The fulfillment type. Any valid type that has been registered by a fulfillment plugin. Examples: `shipping`, `digital` */
  type: FulfillmentType
  /** A summary of calculated taxes for this group. */
  taxSummary?: Maybe<TaxSummary>
}

/** An order fulfillment group */
export type OrderFulfillmentGroupDisplayStatusArgs = {
  language: Scalars['String']
}

/** An order fulfillment group */
export type OrderFulfillmentGroupItemsArgs = {
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<OrderFulfillmentGroupItemsSortByField>
}

/** Extra data for an order fulfillment group */
export type OrderFulfillmentGroupData = ShippingOrderFulfillmentGroupData

/** Extra data for an order fulfillment group with type `shipping` */
export type ShippingOrderFulfillmentGroupData = {
  __typename?: 'ShippingOrderFulfillmentGroupData'
  /** The address to ship to */
  shippingAddress: Address
}

/** Allowed values for the `OrderFulfillmentGroupItems` sortBy parameter */
export enum OrderFulfillmentGroupItemsSortByField {
  /** Sort by the item ID */
  Id = '_id',
  /** Sort by the date and time when the item was added to the order */
  AddedAt = 'addedAt',
}

/**
 * Wraps a list of `OrderItem`s, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type OrderItemConnection = {
  __typename?: 'OrderItemConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<OrderItemEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<OrderItem>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `OrderItem` object */
export type OrderItemEdge = NodeEdge & {
  __typename?: 'OrderItemEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The order item */
  node?: Maybe<OrderItem>
}

/** A single item in an order. The item contains information about a purchase. */
export type OrderItem = Node & {
  __typename?: 'OrderItem'
  /** The order item ID */
  _id: Scalars['ID']
  /**
   * "
   * The date and time at which this item was first added to the associated cart.
   * If an item is added, removed, and then added again, this will reflect the most recent addition.
   * However, if an item is added twice, the quantity will increase but this date will remain
   * the initial added date.
   */
  addedAt?: Maybe<Scalars['DateTime']>
  /**
   * FUTURE. Additional attributes of the chosen item. For example, if this item is for a product, socks, where `blue` and `small`
   * options were chosen for some configurable attributes, then `color:blue` and `size:small` will be indicated here.
   */
  attributes?: Maybe<Array<Maybe<OrderItemAttribute>>>
  /** If this order item is canceled, the reason for cancelation, if provided */
  cancelReason?: Maybe<Scalars['String']>
  /** The date and time at which the order item was created */
  createdAt: Scalars['DateTime']
  /** The URLs for a picture of the item in various sizes */
  imageURLs?: Maybe<ImageSizes>
  /** Arbitrary additional metadata about this cart item. */
  metafields?: Maybe<Array<Maybe<Metafield>>>
  /** The short title of the associated option, if this is an option item */
  optionTitle?: Maybe<Scalars['String']>
  /** Packing information such as item weight, height, length, and depth. Used for calculating shipping rates. */
  parcel?: Maybe<ShippingParcel>
  /** The price of the item at the time of purchase */
  price: Money
  /** The product and chosen options */
  productConfiguration: ProductConfiguration
  /** The product's slug */
  productSlug?: Maybe<Scalars['String']>
  /** The list of tags that have been applied to this product */
  productTags?: Maybe<TagConnection>
  /** The type of product, used to display cart items differently */
  productType?: Maybe<Scalars['String']>
  /** The product vendor */
  productVendor?: Maybe<Scalars['String']>
  /** The quantity of this item that has been added to the cart. This must be a positive integer. Remove this `CartItem` from it's associated cart if you want `0` of this item. */
  quantity: Scalars['Int']
  /** The shop associated with this cart item. */
  shop: Shop
  /** The machine-readable order item status. */
  status: Scalars['String']
  /** The price of the item multiplied by the quantity of this item ordered */
  subtotal: Money
  /** A title for use in orders that conveys the selected product's title + chosen options */
  title: Scalars['String']
  /** The date and time at which this item was last updated */
  updatedAt: Scalars['DateTime']
  /** The selected variant title */
  variantTitle?: Maybe<Scalars['String']>
  /** Is this a taxable item? */
  isTaxable: Scalars['Boolean']
  /** Total tax calculated for this item */
  tax: Money
  /** The tax code for this item */
  taxCode?: Maybe<Scalars['String']>
  /** Amount of subtotal that is taxable */
  taxableAmount: Money
  /** List of calculated taxes due for this item */
  taxes: Array<Maybe<CalculatedTax>>
}

/** A single item in an order. The item contains information about a purchase. */
export type OrderItemProductTagsArgs = {
  after?: Maybe<Scalars['ConnectionCursor']>
  before?: Maybe<Scalars['ConnectionCursor']>
  first?: Maybe<Scalars['ConnectionLimitInt']>
  last?: Maybe<Scalars['ConnectionLimitInt']>
  offset?: Maybe<Scalars['Int']>
  sortOrder?: Maybe<SortOrder>
  sortBy?: Maybe<TagSortByField>
}

/** One attribute of an order item */
export type OrderItemAttribute = {
  __typename?: 'OrderItemAttribute'
  /** The attribute label, e.g., Color */
  label?: Maybe<Scalars['String']>
  /** The attribute value, e.g., Blue */
  value?: Maybe<Scalars['String']>
}

/** A summary of the totals for this order */
export type OrderSummary = {
  __typename?: 'OrderSummary'
  /** The total of all discounts applied, as a positive number */
  discountTotal: Money
  /** The calculated tax-exclusive tax rate on all items and fulfillment prices (taxTotal / taxableAmount) */
  effectiveTaxRate: Rate
  /** The total price of all chosen fulfillment methods */
  fulfillmentTotal: Money
  /** The combined prices of all cart items */
  itemTotal: Money
  /** The total estimated tax that has not already been included in the item prices */
  taxTotal: Money
  /** The total amount that was deemed taxable by the tax service */
  taxableAmount: Money
  /** The sum of `itemTotal`, `fulfillmentTotal`, and `taxTotal`, minus `discountTotal` */
  total: Money
  /** The total of all suurcharges applied */
  surchargeTotal?: Maybe<Money>
}

/** A note about an order */
export type OrderNote = {
  __typename?: 'OrderNote'
  /** The account who wrote this note */
  account: Account
  /** The content of the note */
  content: Scalars['String']
  /** The date and time at which this note was created */
  createdAt: Scalars['DateTime']
  /** The date and time at which this note was last updated */
  updatedAt: Scalars['DateTime']
}

/** Information about a payment made */
export type Payment = Node & {
  __typename?: 'Payment'
  /** The Payment ID */
  _id: Scalars['ID']
  /**
   * The amount that will be applied to this payment method. If there are multiple payment methods applied to the
   * cart, this may be less than the cart total.
   */
  amount: Money
  /** The billing address for this payment, if one was collected */
  billingAddress?: Maybe<Address>
  /** If status is `error` due to a capture error, this code describes the error in a machine-readable way. */
  captureErrorCode?: Maybe<Scalars['String']>
  /** If status is `error` due to a capture error, this code describes the error in a human-readable way. */
  captureErrorMessage?: Maybe<Scalars['String']>
  /** For card payments, the brand of the card. Useful for showing card icons for common brands. */
  cardBrand?: Maybe<Scalars['String']>
  /** The date and time at which this payment was created */
  createdAt: Scalars['DateTime']
  /**
   * The shopper-provided data needed to complete the payment using this method.
   * For example, a billing address, store credit code, stored credit card ID, etc.
   */
  data?: Maybe<PaymentData>
  /** Use this identifier when showing this payment in a user interface */
  displayName: Scalars['String']
  /** Has the payment authorization been canceled? */
  isAuthorizationCanceled: Scalars['Boolean']
  /** Has the payment been captured? If false, it is just an authorization. */
  isCaptured: Scalars['Boolean']
  /** The payment method */
  method: PaymentMethod
  /** The payment mode */
  mode?: Maybe<Scalars['String']>
  /** The payment processor */
  processor?: Maybe<Scalars['String']>
  /** Refunds that have been applied to this payment. */
  refunds?: Maybe<Array<Maybe<Refund>>>
  /** Risk level of payment */
  riskLevel?: Maybe<RiskLevel>
  /** The current status of this payment */
  status: PaymentStatus
  /** The payment transaction ID */
  transactionId?: Maybe<Scalars['String']>
}

/** Data identifying a payment for an order */
export type PaymentData =
  | FakeData
  | StripeCardPaymentData
  | ExampleIouPaymentData
  | EpaycoCreditPaymentData
  | EpaycoDebitPaymentData
  | EpaycoCashPaymentData
  | NequiQrCodePaymentData
  | BitpayPaymentData

/** Do not use this */
export type FakeData = {
  __typename?: 'FakeData'
  /** Do not use this */
  doNotUse?: Maybe<Scalars['String']>
}

/** Data for a Stripe card payment */
export type StripeCardPaymentData = {
  __typename?: 'StripeCardPaymentData'
  /** The Stripe charge ID */
  chargeId: Scalars['String']
  /** The Stripe customer ID, if a Stripe customer exists for this charge */
  customerId?: Maybe<Scalars['String']>
}

/** Data for an example IOU payment */
export type ExampleIouPaymentData = {
  __typename?: 'ExampleIOUPaymentData'
  /** The name of the IOU payer entered by the shopper */
  fullName: Scalars['String']
}

/** Data for epayco payment */
export type EpaycoCreditPaymentData = {
  __typename?: 'EpaycoCreditPaymentData'
  /** The Epayco charge ID */
  chargeId: Scalars['String']
  /** The Epayco customer ID */
  customerId?: Maybe<Scalars['String']>
  /** Url_confirmation payment */
  url_confirmation: Scalars['String']
}

/** Data for epayco payment */
export type EpaycoDebitPaymentData = {
  __typename?: 'EpaycoDebitPaymentData'
  /** The Epayco charge ID */
  chargeId: Scalars['String']
  /** The url bank to redirect the customer */
  uriBank: Scalars['String']
  /** Url confirmation bank */
  url_confirmation: Scalars['String']
}

/** Data for epayco cash payment */
export type EpaycoCashPaymentData = {
  __typename?: 'EpaycoCashPaymentData'
  /** The entity which the customer make the payment */
  cashEntity: Scalars['String']
  /** The Epayco charge ID */
  chargeId: Scalars['String']
  /** Date and time until which this payment can be paid */
  expirationDate: Scalars['String']
  /** Date and time in that the customer can paid */
  paymentDate: Scalars['String']
  /** Pin from the epayco */
  pin: Scalars['String']
  /** Project code from the epayco */
  projectCode: Scalars['String']
  /** Url_confirmation payment */
  url_confirmation: Scalars['String']
  /** Value to Paid */
  valueToPaid: Scalars['String']
}

/** Data for a nequi qr code payment */
export type NequiQrCodePaymentData = {
  __typename?: 'NequiQRCodePaymentData'
  /** The string for QR Code */
  chargeId: Scalars['String']
  /** The shop that sell throught nequi */
  shopId?: Maybe<Scalars['String']>
}

/** Data for a BitPay invoice payment */
export type BitpayPaymentData = {
  __typename?: 'BitpayPaymentData'
  /** The BitPay charge currency */
  currency: Scalars['String']
  /** The BitPay charge price */
  price: Scalars['Float']
  /** The BitPay charge buyer data */
  buyer: BuyerData
  /** The shop that sell throught bitpay */
  shopId: Scalars['String']
  /** Bitpay token */
  bitpayToken?: Maybe<Scalars['String']>
  /** Invoice Id */
  invoiceId?: Maybe<Scalars['String']>
}

/** Buyer data for a BitPay invoice payment */
export type BuyerData = {
  __typename?: 'BuyerData'
  /** The BitPay charge email */
  email: Scalars['String']
  /** The BitPay charge email */
  name?: Maybe<Scalars['String']>
  /** The BitPay charge phone */
  phone?: Maybe<Scalars['String']>
  /** The BitPay charge address1 */
  address1?: Maybe<Scalars['String']>
  /** The BitPay charge address2 */
  address2?: Maybe<Scalars['String']>
  /** The BitPay charge locality */
  locality?: Maybe<Scalars['String']>
  /** The BitPay charge region */
  region?: Maybe<Scalars['String']>
  /** The BitPay charge postal code */
  postalCode?: Maybe<Scalars['Int']>
  /** The BitPay charge country */
  country?: Maybe<Scalars['String']>
  /** The BitPay charge notify */
  notify?: Maybe<Scalars['Boolean']>
}

/** Describes a payment method */
export type PaymentMethod = {
  __typename?: 'PaymentMethod'
  /** If this is `false`, the payment method does not support refunding. Use this to hide refund UI. */
  canRefund: Scalars['Boolean']
  /** Data for this method. The data format differs for each method */
  data?: Maybe<PaymentMethodData>
  /** Human-readable display name */
  displayName: Scalars['String']
  /** Whether the payment method is enabled on a given shop */
  isEnabled: Scalars['Boolean']
  /** The payment method name. Any valid name that has been registered by a payment plugin. e.g., saved_card */
  name: Scalars['String']
  /** Name of the plugin that added the payment method */
  pluginName: Scalars['String']
}

/** Any extra data needed by the payment method */
export type PaymentMethodData = FakeData | ExampleIouPaymentMethodData

/** Data for an example IOU payment method */
export type ExampleIouPaymentMethodData = {
  __typename?: 'ExampleIOUPaymentMethodData'
  /** Example */
  example: Scalars['String']
}

/** A refund of a payment on an order */
export type Refund = Node & {
  __typename?: 'Refund'
  /** The refund ID */
  _id: Scalars['ID']
  /** The amount of the refund */
  amount: Money
  /** The date and time at which the refund was created */
  createdAt: Scalars['DateTime']
  /** The display name of the payment refunded to */
  paymentDisplayName: Scalars['String']
  /** The ID of the payment this refund is applied to */
  paymentId: Scalars['ID']
  /** The reason for the refund */
  reason?: Maybe<Scalars['String']>
}

/** Valid payment risk levels */
export enum RiskLevel {
  /** An elevated risk level for a payment */
  Elevated = 'elevated',
  /** The highest risk level for a payment */
  Highest = 'highest',
  /** A normal risk level for a payment */
  Normal = 'normal',
}

/** Valid payment statuses */
export enum PaymentStatus {
  /** A shop operator adjusted the payment amount after the order was placed */
  Adjustments = 'adjustments',
  /** A shop operator has approved this payment */
  Approved = 'approved',
  /** A shop operator has canceled this payment before it was captured */
  Canceled = 'canceled',
  /** A shop operator has captured this payment */
  Completed = 'completed',
  /** Upon placing an order, the status of all payments for that order begins at 'created' */
  Created = 'created',
  /** There was an error capturing the payment */
  Error = 'error',
  /** A shop operator has refunded some but not all of this payment */
  PartialRefund = 'partialRefund',
  /** A shop operator has refunded all of this payment */
  Refunded = 'refunded',
  /** The payment was created but it's pending */
  Pending = 'pending',
}

/** Input type for filters to by applied to an Orders list */
export type OrderFilterInput = {
  /** A createdAt date range to filter by */
  createdAt?: Maybe<CreatedAtInput>
  /** An order's fulfillment status */
  fulfillmentStatus?: Maybe<Array<Maybe<OrderFulfillmentStatus>>>
  /** An order's payment status */
  paymentStatus?: Maybe<Array<Maybe<OrderPaymentStatus>>>
  /** Keywords typed by the user in the search input field */
  searchField?: Maybe<Scalars['String']>
  /** The order's status to filter by */
  status?: Maybe<OrderStatus>
}

/** Input for the createdAt database field */
export type CreatedAtInput = {
  /** Start date, inclusive */
  gte?: Maybe<Scalars['DateTime']>
  /** End date, inclusive */
  lte?: Maybe<Scalars['DateTime']>
}

/** Available order fulfillment statuses */
export enum OrderFulfillmentStatus {
  /** An order that has been completed */
  Completed = 'completed',
  /** Newly created order that needs processing */
  New = 'new',
  /** An order that is currently being processed */
  Processing = 'processing',
}

/** Order payment status */
export enum OrderPaymentStatus {
  /** Payments that have been successfully processed */
  Completed = 'completed',
  /** A payment intent has been created */
  Created = 'created',
}

/** Order status */
export enum OrderStatus {
  /** Canceled order */
  Canceled = 'canceled',
  /** A completed order */
  Completed = 'completed',
  /** A new order that needs processing */
  New = 'new',
  /** An order that is being processed */
  Processing = 'processing',
}

/** The fields by which you are allowed to sort any query that returns a `OrderConnection` */
export enum OrdersSortByField {
  /** Sort by the order ID */
  Id = '_id',
  /** Sort by the date and time when the order was placed */
  CreatedAt = 'createdAt',
}

/**
 * Wraps a list of `Order`s, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type OrderConnection = {
  __typename?: 'OrderConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<OrderEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<Order>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `Order` object */
export type OrderEdge = NodeEdge & {
  __typename?: 'OrderEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The order */
  node?: Maybe<Order>
}

/** The fields by which you are allowed to sort any query that returns a `OrdersByAccountIdConnection` */
export enum OrdersByAccountIdSortByField {
  /** Sort by the order ID */
  Id = '_id',
  /** Sort by the date and time when the order was placed */
  CreatedAt = 'createdAt',
}

/**
 * Wraps a list of `Order`s, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type OrdersByAccountIdConnection = {
  __typename?: 'OrdersByAccountIdConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<OrdersByAccountIdEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<Order>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `Order` object */
export type OrdersByAccountIdEdge = NodeEdge & {
  __typename?: 'OrdersByAccountIdEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The order */
  node?: Maybe<Order>
}

/** Input type for filters to be applied to an discount codes list */
export type DiscountCodeFilterInput = {
  /** Keywords typed by the user in the search input field */
  searchField?: Maybe<Scalars['String']>
}

/**
 * Wraps a list of DiscountCode`s, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type DiscountCodeConnection = {
  __typename?: 'DiscountCodeConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<DiscountCodeEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<DiscountCode>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `DiscountCode` object */
export type DiscountCodeEdge = {
  __typename?: 'DiscountCodeEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The discount code */
  node?: Maybe<DiscountCode>
}

/** A discount code */
export type DiscountCode = {
  __typename?: 'DiscountCode'
  /** Discount code ID */
  _id: Scalars['ID']
  /** How the discount should be applied */
  calculation?: Maybe<DiscountCalculation>
  /** Discount Code */
  code: Scalars['String']
  /** Discount code conditions */
  conditions?: Maybe<DiscountConditions>
  /** Description to describe the discount code */
  description?: Maybe<Scalars['String']>
  /**
   * Discount is allowed to be string or number.
   * it's a formula value (could be shipping code)
   */
  discount?: Maybe<Scalars['String']>
  /** Discount method type */
  discountMethod?: Maybe<DiscountMethod>
  /** Label to describe the code */
  label?: Maybe<Scalars['String']>
  /** The shop to which this DiscountCode belongs to */
  shop: Shop
  /** History of transactions */
  transactions?: Maybe<Array<Maybe<DiscountTransaction>>>
}

/** Discount code calculation */
export type DiscountCalculation = {
  __typename?: 'DiscountCalculation'
  /** Discount code calculation method */
  method?: Maybe<DiscountCalculationMethod>
}

/** Discount calculation types */
export enum DiscountCalculationMethod {
  /** Store credit */
  Credit = 'credit',
  /** Discount of order */
  Discount = 'discount',
  /** Sale on an item */
  Sale = 'sale',
  /** Discount to shipping */
  Shipping = 'shipping',
}

/** Conditions for a discount code to be applied */
export type DiscountConditions = {
  __typename?: 'DiscountConditions'
  /** Account Limit */
  accountLimit?: Maybe<Scalars['Int']>
  /** Audience that may apply this discount code */
  audience?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Is this discount code enabled */
  enabled: Scalars['Boolean']
  /** Order conditions */
  order?: Maybe<DiscountConditionOrder>
  /** Permissions that may apply this discount code */
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Products that may apply this discount code */
  products?: Maybe<Array<Maybe<Scalars['String']>>>
  /**
   * Number of times this code may be redeemed.
   * Setting to 100 means the first 100 customers may apply this code.
   * Setting this value to 0 will allow this code to be applied an infinite number of times.
   */
  redemptionLimit?: Maybe<Scalars['Int']>
  /** Tags that may be apply this discount code */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** The conditions an order must meet for a discount code to be applied */
export type DiscountConditionOrder = {
  __typename?: 'DiscountConditionOrder'
  /** Order date range end */
  endDate?: Maybe<Scalars['DateTime']>
  /** Maximum order value */
  max?: Maybe<Scalars['Float']>
  /** Minimum order value */
  min: Scalars['Float']
  /** Order date range start */
  startDate?: Maybe<Scalars['DateTime']>
}

/** Discount method types */
export enum DiscountMethod {
  /** Code type */
  Code = 'code',
  /** Rate type */
  Rate = 'rate',
}

/** Transaction history for a discount code */
export type DiscountTransaction = {
  __typename?: 'DiscountTransaction'
  /** Date the code was applied */
  appliedAt?: Maybe<Scalars['DateTime']>
  /** Cart id */
  cartId: Scalars['String']
  /** User id */
  userId: Scalars['String']
}

/** Allowed values for surcharge `sortBy` parameter */
export enum SurchargeSortByField {
  /** The date the surcharge definition was created */
  CreatedAt = 'createdAt',
}

/**
 * Wraps a list of `Surcharge`s, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type SurchargeConnection = {
  __typename?: 'SurchargeConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<SurchargeEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<Surcharge>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** Total count for all pages */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `Surcharge` object */
export type SurchargeEdge = {
  __typename?: 'SurchargeEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The surcharge */
  node?: Maybe<Surcharge>
}

/** Defines a surcharge for surchargeById and surcharges query. */
export type Surcharge = Node & {
  __typename?: 'Surcharge'
  /** The surcharge ID. */
  _id: Scalars['ID']
  /** Amount. */
  amount: Money
  /** Attribute restrictions. */
  attributes?: Maybe<Array<Maybe<SurchargeAttributeRestrictions>>>
  /** The date and time at which this surcharge was created */
  createdAt: Scalars['DateTime']
  /** Destination restrictions. */
  destination?: Maybe<SurchargeDestinationRestrictions>
  /** Message translated into provided / default language. */
  message: Scalars['String']
  /** Messages provided with content and all languages */
  messagesByLanguage?: Maybe<Array<Maybe<SurchargeMessagesByLanguage>>>
  /** Method IDs to apply this surcharge to. */
  methodIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** The shop ID */
  shopId: Scalars['ID']
  /** The type of this surcharge. Allowed types `surcharge`. */
  type: SurchargeTypeEnum
  /** The date and time at which this surcharge was last updated */
  updatedAt?: Maybe<Scalars['DateTime']>
}

/** Defines a surcharge for surchargeById and surcharges query. */
export type SurchargeMessageArgs = {
  language: Scalars['String']
}

/** Attribute Restrictions attached to a Surcharge */
export type SurchargeAttributeRestrictions = {
  __typename?: 'SurchargeAttributeRestrictions'
  /** The operator to use for value comparison */
  operator?: Maybe<Scalars['String']>
  /** The property to check */
  property?: Maybe<Scalars['String']>
  /** The type of this property */
  propertyType?: Maybe<SurchargePropertyType>
  /** The value to check for */
  value?: Maybe<Scalars['String']>
}

/** A list of the possible property types for surcharges */
export enum SurchargePropertyType {
  /** Boolean */
  Bool = 'bool',
  /** Float */
  Float = 'float',
  /** Integer */
  Int = 'int',
  /** String */
  String = 'string',
}

/**
 * Destination restrictions attached to a surcharge. If multiple of `country`,
 * `region`, and `postal` are set, there is an AND relationship.
 */
export type SurchargeDestinationRestrictions = {
  __typename?: 'SurchargeDestinationRestrictions'
  /** Restrict for any of these destination countries */
  country?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Restrict for any of these destination postal codes */
  postal?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Restrict for any of these destination regions */
  region?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Object that includes translated content and language of translation */
export type SurchargeMessagesByLanguage = {
  __typename?: 'SurchargeMessagesByLanguage'
  /** The message for this language */
  content: Scalars['String']
  /** The language code */
  language: Scalars['String']
}

/** Allowed values for surcharge type */
export enum SurchargeTypeEnum {
  /** Surcharge */
  Surcharge = 'surcharge',
}

/** Defines a fulfillment method that has a fixed price. This type is provided by the `flat-rate` fulfillment plugin. */
export type FlatRateFulfillmentMethod = Node & {
  __typename?: 'FlatRateFulfillmentMethod'
  /** The flat rate fulfillment method ID */
  _id: Scalars['ID']
  /** The cost of this fulfillment method to the shop, if you track this */
  cost?: Maybe<Scalars['Float']>
  /** The fulfillment types for which this method may be used. For example, `shipping` or `digital`. */
  fulfillmentTypes: Array<Maybe<FulfillmentType>>
  /** The group to which this method belongs */
  group: Scalars['String']
  /** A fixed price to charge for handling costs when this fulfillment method is selected for an order */
  handling: Scalars['Float']
  /** Include this as a fulfillment option shown to shoppers during checkout? */
  isEnabled: Scalars['Boolean']
  /** The name of this method, for display in the user interface */
  label: Scalars['String']
  /** The name of this method, a unique identifier */
  name: Scalars['String']
  /** A fixed price to charge for fulfillment costs when this fulfillment method is selected for an order */
  rate: Scalars['Float']
  /** The shop to which this fulfillment method belongs */
  shop: Shop
}

/**
 * Wraps a list of FlatRateFulfillmentMethods`s, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type FlatRateFulfillmentMethodConnection = {
  __typename?: 'FlatRateFulfillmentMethodConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<FlatRateFulfillmentMethodEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<FlatRateFulfillmentMethod>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `FlatRateFulfillmentMethod` object */
export type FlatRateFulfillmentMethodEdge = {
  __typename?: 'FlatRateFulfillmentMethodEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The fulfillment method */
  node?: Maybe<FlatRateFulfillmentMethod>
}

/** Allowed values for `FlatRateFulfillmentRestriction` sortBy parameter */
export enum FlatRateFulfillmentRestrictionSortByField {
  /** Date the restriction was created */
  CreatedAt = 'createdAt',
}

/**
 * Wraps a list of `FlatRateFulfillmentRestriction`s, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type FlatRateFulfillmentRestrictionConnection = {
  __typename?: 'FlatRateFulfillmentRestrictionConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<FlatRateFulfillmentRestrictionEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<FlatRateFulfillmentRestriction>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `FlatRateFulfillmentRestriction` object */
export type FlatRateFulfillmentRestrictionEdge = {
  __typename?: 'FlatRateFulfillmentRestrictionEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The flat rate fulfillment restriction */
  node?: Maybe<FlatRateFulfillmentRestriction>
}

/** Defines a flat rate fulfillment method restriction. */
export type FlatRateFulfillmentRestriction = Node & {
  __typename?: 'FlatRateFulfillmentRestriction'
  /** The restriction ID. */
  _id: Scalars['ID']
  /** Attribute restrictions. Multiple attribute restrictions are evaluated with AND. If both destination and attribute restrictions are present, they evaluate with AND. */
  attributes?: Maybe<Array<Maybe<AttributeRestrictions>>>
  /** Destination restrictions. If multiple destination restrictions are present, the most localized is the only one evaluated (i.e. evaluate postal if present, then region if present, then country). If both destination and attribute restrictions are present, they evaluate with AND. */
  destination?: Maybe<DestinationRestrictions>
  /** Method IDs to apply this restriction to. If none, applies to all methods as a universal restriction. */
  methodIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** The shop ID */
  shopId: Scalars['ID']
  /** The type of this restriction. Allowed types are `allow` or `deny`. */
  type: RestrictionTypeEnum
}

/** An attribute restriction condition */
export type AttributeRestrictions = {
  __typename?: 'AttributeRestrictions'
  /** The operator to use for value comparison */
  operator: Scalars['String']
  /** The property to check */
  property: Scalars['String']
  /** The type of this property */
  propertyType: Scalars['String']
  /** The value to check for */
  value: Scalars['String']
}

/**
 * Destination restriction conditions. If multiple of `country`,
 * `region`, and `postal` are set, there is an AND relationship.
 */
export type DestinationRestrictions = {
  __typename?: 'DestinationRestrictions'
  /** Restrict for any of these destination countries */
  country?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Restrict for any of these destination postal codes */
  postal?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Restrict for any of these destination regions */
  region?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Restriction type */
export enum RestrictionTypeEnum {
  /** Allow */
  Allow = 'allow',
  /** Deny */
  Deny = 'deny',
}

/** A tax code that may be used on a product to indicate proper taxation category */
export type TaxCode = {
  __typename?: 'TaxCode'
  /** The code */
  code: Scalars['String']
  /** Short description of what types of products the code is for */
  label: Scalars['String']
}

/** A service registered by a tax plugin, that provides tax codes and calculations */
export type TaxService = {
  __typename?: 'TaxService'
  /** Human-readable display name */
  displayName: Scalars['String']
  /** The tax service name. Any valid name that has been registered by a tax plugin. */
  name: Scalars['String']
  /** Name of the plugin that added the tax service */
  pluginName: Scalars['String']
}

/**
 * Wraps a list of TaxRate`s, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type TaxRateConnection = {
  __typename?: 'TaxRateConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<TaxRateEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<TaxRate>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `TaxRate` object */
export type TaxRateEdge = {
  __typename?: 'TaxRateEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The tax rate */
  node?: Maybe<TaxRate>
}

/** A single calculated tax for a cart, order group, cart item, or order item */
export type TaxRate = {
  __typename?: 'TaxRate'
  /** Tax rate ID */
  _id: Scalars['ID']
  /** An optional country code to limit where this tax is applied, in conjunction with `sourcing` field */
  country?: Maybe<Scalars['String']>
  /** An optional postal code to limit where this tax is applied, in conjunction with `sourcing` field */
  postal?: Maybe<Scalars['String']>
  /** The tax rate. For example, 0.05 for a 5% sales tax. */
  rate: Scalars['Float']
  /** An optional region (e.g., state) to limit where this tax is applied, in conjunction with `sourcing` field */
  region?: Maybe<Scalars['String']>
  /** The shop to which this TaxRate belongs */
  shop: Shop
  /** Whether the `country`, `postal`, and `region` filters apply to the origin address or the destination address */
  sourcing: TaxSource
  /** An optional tax code, to apply this tax rate to only products that have this tax code */
  taxCode?: Maybe<Scalars['String']>
}

/** The fields by which you are allowed to sort any query that returns a `NavigationItemConnection` */
export enum NavigationItemSortByField {
  /** Sort by NavigationItem ID */
  Id = '_id',
  /** Sort by when the NavigationItem was created */
  CreatedAt = 'createdAt',
}

/**
 * Wraps a list of `NavigationItem`s, providing pagination cursors and information.
 *
 * For information about what Relay-compatible connections are and how to use them, see the following articles:
 * - [Relay Connection Documentation](https://facebook.github.io/relay/docs/en/graphql-server-specification.html#connections)
 * - [Relay Connection Specification](https://facebook.github.io/relay/graphql/connections.htm)
 * - [Using Relay-style Connections With Apollo Client](https://www.apollographql.com/docs/react/recipes/pagination.html)
 */
export type NavigationItemConnection = {
  __typename?: 'NavigationItemConnection'
  /** The list of nodes that match the query, wrapped in an edge to provide a cursor string for each */
  edges?: Maybe<Array<Maybe<NavigationItemEdge>>>
  /**
   * You can request the `nodes` directly to avoid the extra wrapping that `NodeEdge` has,
   * if you know you will not need to paginate the results.
   */
  nodes?: Maybe<Array<Maybe<NavigationItem>>>
  /** Information to help a client request the next or previous page */
  pageInfo: PageInfo
  /** The total number of nodes that match your query */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `NavigationItem` object */
export type NavigationItemEdge = NodeEdge & {
  __typename?: 'NavigationItemEdge'
  /** The cursor that represents this node in the paginated results */
  cursor: Scalars['ConnectionCursor']
  /** The navigation item */
  node?: Maybe<NavigationItem>
}

/** Generated sitemap XML for a single shop */
export type Sitemap = {
  __typename?: 'Sitemap'
  /** Date created */
  createdAt: Scalars['Date']
  /** The sitemap handle */
  handle: Scalars['String']
  /** The shop ID */
  shopId: Scalars['String']
  /** The Sitemap XML content */
  xml: Scalars['String']
}

/** Represents the current state of the onboarding steps for a shop */
export type OnboardingStatus = {
  __typename?: 'OnboardingStatus'
  /** True if the shop has more than one product */
  hasCreatedAndPublishProduct?: Maybe<Scalars['Boolean']>
  /** True if the shop has more than one payment method enabled */
  hasEnablePaymentMethod?: Maybe<Scalars['Boolean']>
  /** True if the shop has set their payment method */
  hasSetShippingMethod?: Maybe<Scalars['Boolean']>
  /** True if the shop has added address book */
  hasAddAddressBook?: Maybe<Scalars['Boolean']>
  /** True if the user has verified its email */
  verifiedEmail?: Maybe<Scalars['Boolean']>
}

/** The fields by which you are allowed to sort any query that returns a `HydraClientConnection` */
export enum HydraClientSortByField {
  /** Id */
  Id = '_id',
  /** CreatedAt */
  CreatedAt = 'createdAt',
  /** UpdatedAt */
  UpdatedAt = 'updatedAt',
}

/** HomePageAsset is a kind of asset for home page. For example carrousel */
export type HomePageAsset = Node &
  Deletable & {
    __typename?: 'HomePageAsset'
    /** The HomePageAsset ID */
    _id: Scalars['ID']
    /** The AssetType for the HomePageAsset. */
    assetType: Scalars['String']
    /** The callToAction to action for the HomePageAsset. */
    callToAction?: Maybe<Scalars['String']>
    /** The createdAt and time at which this HomePageAsset was created */
    createdAt: Scalars['DateTime']
    /** The descriptionAsset for the HomePageAsset. */
    descriptionAsset: Scalars['String']
    /** The displayTitle for the HomePageAsset. */
    displayTitle: Scalars['String']
    /** The heroMediaId is a string containing the hero image id for a HomePageAsset Listing Page */
    heroMediaId?: Maybe<Scalars['String']>
    /** All media for a variant */
    media?: Maybe<Array<Maybe<ImageInfo>>>
    /**
     * If `true`, this object should be considered deleted. Soft deleted objects are not
     * returned in query results unless you explicitly ask for them.
     */
    isDeleted: Scalars['Boolean']
    /** If `true`, this HomePageAsset's HomePageAsset Listing Page should be visible to the public */
    isVisible: Scalars['Boolean']
    /** Arbitrary additional metadata about this HomePageAsset */
    metafields?: Maybe<Array<Maybe<Metafield>>>
    /** The display name for the HomePageAsset. This is unique within a given shop. */
    name: Scalars['String']
    /** The HomePageAsset's position relative to other HomePageAssets at the same level of the HomePageAsset hierarchy */
    position?: Maybe<Scalars['Int']>
    /** The shop to which this HomePageAsset belongs */
    shop: Shop
    /** A unique URL-safe string representing this HomePageAsset for links */
    slug?: Maybe<Scalars['String']>
    /** The date and time at which this HomePageAsset was last updated */
    updatedAt: Scalars['DateTime']
    /** The url to action for the HomePageAsset. */
    uriAction?: Maybe<Scalars['String']>
  }

/** The fields by which you are allowed to sort any query that returns a `HomePageAssetConnection` */
export enum HomePageAssetsSortByField {
  /** Id */
  Id = '_id',
  /** AssetType */
  AssetType = 'assetType',
  /** CreatedAt */
  CreatedAt = 'createdAt',
  /** Name */
  Name = 'name',
  /** UpdatedAt */
  UpdatedAt = 'updatedAt',
}

/** Wraps a list of `HomePageAssets`, providing pagination cursors and information. */
export type HomePageAssetConnection = {
  __typename?: 'HomePageAssetConnection'
  /** Edges */
  edges?: Maybe<Array<Maybe<HomePageAssetEdge>>>
  /** Nodes */
  nodes?: Maybe<Array<Maybe<HomePageAsset>>>
  /** PageInfo */
  pageInfo: PageInfo
  /** TotalCount */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `HomePageAsset` object */
export type HomePageAssetEdge = NodeEdge & {
  __typename?: 'HomePageAssetEdge'
  /** Cursor */
  cursor: Scalars['ConnectionCursor']
  /** Node */
  node?: Maybe<HomePageAsset>
}

/** Page */
export type Page = Node &
  Deletable & {
    __typename?: 'Page'
    /** The Page ID */
    _id: Scalars['ID']
    /** The contents for the Page. */
    content: Scalars['String']
    /** The date and time at which this Page was created */
    createdAt: Scalars['DateTime']
    /**
     * If `true`, this object should be considered deleted. Soft deleted objects are not
     * returned in query results unless you explicitly ask for them.
     */
    isDeleted: Scalars['Boolean']
    /** If `true`, this Page's Page Listing Page should be visible to the public */
    isVisible: Scalars['Boolean']
    /** Arbitrary additional metadata about this Page */
    metafields?: Maybe<Array<Maybe<Metafield>>>
    /** The display name for the Page. This is unique within a given shop. */
    name: Scalars['String']
    /** The shop to which this Page belongs */
    shop: Shop
    /** A unique URL-safe string representing this Page for links */
    slug?: Maybe<Scalars['String']>
    /** The date and time at which this Page was last updated */
    updatedAt: Scalars['DateTime']
  }

/** The fields by which you are allowed to sort any query that returns a `PageConnection` */
export enum PagesSortByField {
  /** Id */
  Id = '_id',
  /** CreatedAt */
  CreatedAt = 'createdAt',
  /** Name */
  Name = 'name',
  /** UpdatedAt */
  UpdatedAt = 'updatedAt',
}

/** Wraps a list of `Pages`, providing pagination cursors and information. */
export type PageConnection = {
  __typename?: 'PageConnection'
  /** Edges */
  edges?: Maybe<Array<Maybe<PageEdge>>>
  /** Nodes */
  nodes?: Maybe<Array<Maybe<Page>>>
  /** PageInfo */
  pageInfo: PageInfo
  /** TotalCount */
  totalCount: Scalars['Int']
}

/** A connection edge in which each node is a `Page` object */
export type PageEdge = NodeEdge & {
  __typename?: 'PageEdge'
  /** Cursor */
  cursor: Scalars['ConnectionCursor']
  /** Node */
  node?: Maybe<Page>
}

/** Represents a subscription that can be assign to a shop */
export type SubscriptionPlan = Node &
  Deletable & {
    __typename?: 'SubscriptionPlan'
    /** The subscription ID */
    _id: Scalars['ID']
    /** Name for the subscription */
    name: Scalars['String']
    /** Title for the subscription */
    title?: Maybe<Scalars['String']>
    /** Description for the subscription */
    description?: Maybe<Scalars['String']>
    /**
     * If `true`, this object should be considered deleted. Soft deleted objects are not
     * returned in query results unless you explicitly ask for them.
     */
    isDeleted: Scalars['Boolean']
    /** Slug for the subscription */
    slug: Scalars['String']
    /** Price in COP */
    price: Scalars['Float']
    /** Days for free in the subscription */
    trialDays?: Maybe<Scalars['Int']>
    /** Routes available from the admin UI for the subscription */
    routes: Array<Maybe<SubscriptionRoute>>
  }

/** Represents a subscription route */
export type SubscriptionRoute = {
  __typename?: 'SubscriptionRoute'
  /** name of the UI plugin the route belongs to */
  name: Scalars['String']
  /** path of the route */
  path: Scalars['String']
  /** status of the route */
  active: Scalars['Boolean']
  /** some routes are required for the admin in order to function */
  required: Scalars['Boolean']
  /** Plan quota in this module */
  plan?: Maybe<SubscriptionPlanQuota>
}

/** Represents a plan Subscription Quota */
export type SubscriptionPlanQuota = {
  __typename?: 'SubscriptionPlanQuota'
  /** Quota - limit quantity of (items, seconds or kilobytes) in the module */
  quota: Scalars['Float']
  /** number of reset (in days) '0 = Total' or '# = per # days' */
  unit: Scalars['Float']
  /** unit of measurement (null or quantity or q, seconds or s, kilobyte or k) */
  unitMeasurement?: Maybe<Scalars['String']>
}

/** Response payload for `subscriptionByShopId` mutation */
export type SubscriptionByShopIdPayload = {
  __typename?: 'SubscriptionByShopIdPayload'
  subscriptionPlan: SubscriptionPlan
  /** Date when the shop is going to get charged again to renew its subscription */
  nextBillingDate?: Maybe<Scalars['Date']>
  /** Information and response of the payment gateway */
  payment?: Maybe<Scalars['JSONObject']>
  /** Status of the subscription */
  status: Scalars['String']
  /** Interval of time that user wants to automatically renew their subscription */
  billingCycle?: Maybe<Scalars['String']>
  /** An alphanumeric value that references a specific payment method stored */
  paymentMethodToken?: Maybe<Scalars['String']>
  /** An alphanumeric value that references a specific customer token for a payment method stored */
  paymentMethodTokenCustomer?: Maybe<Scalars['String']>
  /** If the subscription is free this is true */
  neverExpires: Scalars['Boolean']
  /** Price paid for the subscription */
  price: Scalars['Boolean']
  /** Count of unsuccessful attempts to charge the subscription */
  failureCount?: Maybe<Scalars['Int']>
  /** Count of days the subscription past its billing date */
  daysPastDue?: Maybe<Scalars['Int']>
  /** Trial days for the subscription */
  trialDays?: Maybe<Scalars['Int']>
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type Mutation = {
  __typename?: 'Mutation'
  /** A test mutation that returns whatever string you send it */
  echo?: Maybe<Scalars['String']>
  /** Archive a MediaRecord to hide it without deleting the backing file data */
  archiveMediaRecord: ArchiveMediaRecordPayload
  /** Create the MediaRecord for file data after you upload it */
  createMediaRecord: CreateMediaRecordPayload
  /** Delete a MediaRecord to delete both the record and the backing file data */
  deleteMediaRecord: DeleteMediaRecordPayload
  /** Update the priority metadata for a MediaRecord. Used for sorting product and variant media in the catalog. */
  updateMediaRecordPriority: UpdateMediaRecordPriorityPayload
  /** Create a new shop */
  createShop: CreateShopPayload
  /** Given shop data, update the Shops collection with this data */
  updateShop: UpdateShopPayload
  /**
   * Returns app settings that are not shop specific. Plugins extend the GlobalSettings type to support
   * whatever settings they need.
   */
  updateGlobalSettings: UpdateGlobalSettingsPayload
  /**
   * Returns app settings for a specific shop. Plugins extend the ShopSettings type to support
   * whatever settings they need.
   */
  updateShopSettings: UpdateShopSettingsPayload
  /** Retry a failed or cancelled email job */
  retryFailedEmail: RetryFailedEmailPayload
  /** Create an address validation rule */
  createAddressValidationRule: CreateAddressValidationRulePayload
  /** Delete an address validation rule */
  deleteAddressValidationRule: DeleteAddressValidationRulePayload
  /** Update an address validation rule */
  updateAddressValidationRule: UpdateAddressValidationRulePayload
  /** Use this mutation to verify the SMTP email settings */
  verifySMTPEmailSettings: VerifySmtpEmailSettingsInputPayload
  /** Updates an existing template */
  updateTemplate: UpdateTemplatePayload
  /** Add a new address to the `addressBook` field for an account */
  addAccountAddressBookEntry?: Maybe<AddAccountAddressBookEntryPayload>
  /** Add an email address to an account */
  addAccountEmailRecord?: Maybe<AddAccountEmailRecordPayload>
  /** Create an account based off a user */
  createAccount?: Maybe<CreateAccountPayload>
  /** Remove an address from the `addressBook` field for an account */
  removeAccountAddressBookEntry?: Maybe<RemoveAccountAddressBookEntryPayload>
  /** Remove an email address from an account */
  removeAccountEmailRecord?: Maybe<RemoveAccountEmailRecordPayload>
  /** Send a reset password email to an email address from an account */
  sendResetAccountPasswordEmail?: Maybe<SendResetAccountPasswordEmailPayload>
  /** Set default email address for an account */
  setAccountDefaultEmail?: Maybe<SetAccountDefaultEmailPayload>
  /** Remove an address that exists in the `addressBook` field for an account */
  updateAccountAddressBookEntry?: Maybe<UpdateAccountAddressBookEntryPayload>
  /** Update account fields */
  updateAccount?: Maybe<UpdateAccountPayload>
  /** Bulk-update groups for accounts */
  updateGroupsForAccounts?: Maybe<UpdateGroupsForAccountsPayload>
  /** Grant admin UI access for shops to a specific users */
  grantAdminUIAccess: GrantOrRevokeAdminUiAccessPayload
  /** Revoke admin UI access to shops for specific users */
  revokeAdminUIAccess: GrantOrRevokeAdminUiAccessPayload
  /** Update admin UI access to shops for specific users */
  updateAdminUIAccess: UpdateAdminUiAccessPayload
  /** Add an account to a group */
  addAccountToGroup?: Maybe<AddAccountToGroupPayload>
  /** Create a new account group. These are usually used for account permissions */
  createAccountGroup?: Maybe<CreateAccountGroupPayload>
  /** Remove an account from a group */
  removeAccountFromGroup?: Maybe<RemoveAccountFromGroupPayload>
  /** Remove an existing account group */
  removeAccountGroup?: Maybe<RemoveAccountGroupPayload>
  /** Update an existing account group */
  updateAccountGroup?: Maybe<UpdateAccountGroupPayload>
  /**
   * Given a person's email address and name, invite them to create an account for a certain shop,
   * and put them in the provided permission group
   */
  inviteShopMember?: Maybe<InviteShopMemberPayload>
  /** Send a verification email to an a provided account */
  sendVerificationAccountEmail?: Maybe<VerificationEmailPayload>
  /** Archive products */
  archiveProducts: ArchiveProductsPayload
  /** Archive product variants */
  archiveProductVariants: ArchiveProductVariantsPayload
  /** Update the isVisible property of an array of products */
  updateProductsVisibility: UpdateProductsVisibilityPayload
  /** Create a new product */
  createProduct: CreateProductPayload
  /** Create a new product variant */
  createProductVariant: CreateProductVariantPayload
  /** Clone an existing product */
  cloneProducts: CloneProductsPayload
  /** Clone an existing product variant */
  cloneProductVariants: CloneProductVariantsPayload
  /** Update an existing product */
  updateProduct: UpdateProductPayload
  /** Update an existing product variant */
  updateProductVariant: UpdateProductVariantPayload
  /** Bulk operation for adding an array of tags to an array of products */
  addTagsToProducts: ProductTagsOperationPayload
  /** Bulk operation for removing an array of tags from an array of products */
  removeTagsFromProducts: ProductTagsOperationPayload
  /** Publish products to the Catalog collection by product ID */
  publishProductsToCatalog?: Maybe<Array<Maybe<CatalogItemProduct>>>
  /** Adds a new tag */
  addTag: AddTagPayload
  /** Removes an existing tag */
  removeTag: RemoveTagPayload
  /** Add an image to the tag */
  setTagHeroMedia: SetTagHeroMediaPayload
  /** Updates an existing tag */
  updateTag: UpdateTagPayload
  /** Update an existing product variants prices */
  updateProductVariantPrices: UpdateProductVariantPricesPayload
  /** Force recalculation of the system-managed `inventoryReserved` field based on current order statuses */
  recalculateReservedSimpleInventory: RecalculateReservedSimpleInventoryPayload
  /** Update the SimpleInventory info for a product configuration */
  updateSimpleInventory: UpdateSimpleInventoryPayload
  /** Add item(s) to a cart */
  addCartItems: AddCartItemsPayload
  /** Create a new cart */
  createCart: CreateCartPayload
  /** Reconcile an anonymous cart with the current account cart for the same shop */
  reconcileCarts: ReconcileCartsPayload
  /** Remove item(s) from a cart */
  removeCartItems: RemoveCartItemsPayload
  /** Set the email address for an anonymous cart */
  setEmailOnAnonymousCart: SetEmailOnAnonymousCartPayload
  /** Update cart item(s) quantity. Use absolute quantity. If updating to 0, the item will be removed. */
  updateCartItemsQuantity: UpdateCartItemsQuantityPayload
  /** Select a fulfillment option from the `availableFulfillmentOptions` list for a fulfillment group */
  selectFulfillmentOptionForGroup: SelectFulfillmentOptionForGroupPayload
  /** Set the shipping address for all fulfillment groups */
  setShippingAddressOnCart: SetShippingAddressOnCartPayload
  /**
   * Clients should call this as necessary during checkout to update the `availableFulfillmentOptions`
   * property for all fulfillment groups of the cart with fresh price quotes. These need to be
   * recalculated every time the items in that group change. When the order is placed, the chosen
   * option for each group will have its prices recalculated one last time. If the prices do not match,
   * order creation will fail.
   */
  updateFulfillmentOptionsForGroup: UpdateFulfillmentOptionsForGroupPayload
  /**
   * Use this mutation to add a new order fulfillment group to an order. It must have at least one
   * item. Items may be provided or moved from another existing group or both.
   */
  addOrderFulfillmentGroup: AddOrderFulfillmentGroupPayload
  /**
   * Use this mutation to cancel one item of an order, either for the full ordered quantity
   * or for a partial quantity. If partial, the item will be split into two items and the
   * original item will have a lower quantity and will be canceled.
   *
   * If this results in all items in a fulfillment group being canceled, the group will also
   * be canceled. If this results in all fulfillment groups being canceled, the full order will
   * also be canceled.
   */
  cancelOrderItem: CancelOrderItemPayload
  /** Use this mutation to create a refund on a payment method used to make the order */
  createRefund: CreateRefundPayload
  /** Use this mutation to move one or more items between existing order fulfillment groups. */
  moveOrderItems: MoveOrderItemsPayload
  /**
   * Use this mutation to place an order, providing information necessary to pay for it.
   * The order will be placed only if authorization is successful for all submitted payments.
   */
  placeOrder: PlaceOrderPayload
  /**
   * Use this mutation to reduce the quantity of one item of an order and create
   * a new item for the remaining quantity in the same fulfillment group, and with the
   * same item status. You may want to do this if you are only able to partially fulfill
   * the item order right now.
   */
  splitOrderItem: SplitOrderItemPayload
  /** Use this mutation to update order details after the order has been placed. */
  updateOrder: UpdateOrderPayload
  /** Use this mutation to update an order fulfillment group status and tracking information. */
  updateOrderFulfillmentGroup: UpdateOrderFulfillmentGroupPayload
  /** Approve one or more payments for an order */
  approveOrderPayments: ApproveOrderPaymentsPayload
  /** Capture one or more payments for an order */
  captureOrderPayments: CaptureOrderPaymentsPayload
  /** Enable a payment method for a shop */
  enablePaymentMethodForShop: EnablePaymentMethodForShopPayload
  /** Create a new discount code */
  createDiscountCode?: Maybe<CreateDiscountCodePayload>
  /** Update a discount code */
  updateDiscountCode?: Maybe<UpdateDiscountCodePayload>
  /** Delete a discount code */
  deleteDiscountCode?: Maybe<DeleteDiscountCodePayload>
  /** Apply a discount code to a cart */
  applyDiscountCodeToCart: ApplyDiscountCodeToCartPayload
  /** Remove a discount code from a cart */
  removeDiscountCodeFromCart: RemoveDiscountCodeFromCartPayload
  /** Create a surcharge */
  createSurcharge: CreateSurchargePayload
  /** Delete a flat rate fulfillment restriction */
  deleteSurcharge: DeleteSurchargePayload
  /** Update a flat rate fulfillment surcharge */
  updateSurcharge: UpdateSurchargePayload
  /** Create a flat rate fulfillment method */
  createFlatRateFulfillmentMethod: CreateFlatRateFulfillmentMethodPayload
  /** Update a flat rate fulfillment method */
  updateFlatRateFulfillmentMethod: UpdateFlatRateFulfillmentMethodPayload
  /** Delete a flat rate fulfillment method */
  deleteFlatRateFulfillmentMethod: DeleteFlatRateFulfillmentMethodPayload
  /** Create a flat rate fulfillment method restriction. */
  createFlatRateFulfillmentRestriction: CreateFlatRateFulfillmentRestrictionPayload
  /** Delete a flat rate fulfillment method restriction */
  deleteFlatRateFulfillmentRestriction: DeleteFlatRateFulfillmentRestrictionPayload
  /** Update a flat rate fulfillment method restriction */
  updateFlatRateFulfillmentRestriction: UpdateFlatRateFulfillmentRestrictionPayload
  /** Create a new tax rate */
  createTaxRate?: Maybe<CreateTaxRatePayload>
  /** Update a tax rate */
  updateTaxRate?: Maybe<UpdateTaxRatePayload>
  /** Delete a tax rate */
  deleteTaxRate?: Maybe<DeleteTaxRatePayload>
  /** Create a new navigation item */
  createNavigationItem?: Maybe<CreateNavigationItemPayload>
  /** Create a new navigation tree */
  createNavigationTree: CreateNavigationTreePayload
  /** Delete a navigation item */
  deleteNavigationItem?: Maybe<DeleteNavigationItemPayload>
  /** Publish the draft structure for a navigation tree and the draft changes for all of its navigation items. Sets hasUnpublishedChanges to false on tree and its items */
  publishNavigationChanges?: Maybe<PublishNavigationChangesPayload>
  /** Update an existing navigation item's draft data. Sets hasUnpublishedChanges to true */
  updateNavigationItem?: Maybe<UpdateNavigationItemPayload>
  /** Update an existing navigation tree's draft items. Sets hasUnpublishedChanges to true */
  updateNavigationTree?: Maybe<UpdateNavigationTreePayload>
  /** Generate sitemap documents */
  generateSitemaps: GenerateSitemapsPayload
  /** Deactivate secondary shop, this mutation change active status */
  deactivateShop: DeactivateShopPayload
  /** Add storefront to a shop */
  addStorefrontToShop: AddStorefrontToShopPayload
  /** Adds a new HydraClient */
  addHydraClient: AddHydraClientPayload
  /** Updates an existing HydraClient */
  updateHydraClient: UpdateHydraClientPayload
  createQRCode: CreateQrCodePayload
  refundQRCode: RefundQrCodePayload
  captureQRCode: Scalars['Boolean']
  createInvoice?: Maybe<BitPayPayload>
  getInvoiceById?: Maybe<BitPayInvoicePayload>
  /** Adds a new HomePageAsset */
  addHomePageAsset: AddHomePageAssetPayload
  /** Add an image to the HomePageAsset */
  setHomePageAssetHeroMedia: SetHomePageAssetHeroMediaPayload
  /** Removes an existing HomePageAsset */
  removeHomePageAsset: RemoveHomePageAssetPayload
  /** Updates an existing HomePageAsset */
  updateHomePageAsset: UpdateHomePageAssetPayload
  /** Adds a new Page */
  addPage: AddPagePayload
  /** Removes an existing Page */
  removePage: RemovePagePayload
  /** Updates an existing Page */
  updatePage: UpdatePagePayload
  /** deploy a shop */
  deployShop: DeployShopPayload
  /** Pay and grant access to a subscription plan for a shop */
  paySubscription: PaySubscriptionPayload
  /** Create a new subscription for Goodcommerce */
  createSubscriptionPlan: Scalars['Boolean']
  /** Update an existing subscription for Goodcommerce */
  updateSubscriptionPlan: Scalars['Boolean']
  /** Cancel a Subscription Plan for a Shop */
  cancelSubscription: Scalars['Boolean']
  updatePaymentMethod: Scalars['Boolean']
  /** Load generated products and tags */
  loadProductsAndTags: LoadProductsAndTagsPayload
  /** Load generated orders */
  loadOrders: LoadOrdersPayload
  /** Load product images */
  loadProductImages: LoadProductImagesPayload
  /** Remove all products, tags and orders from the database */
  removeAllData: RemoveDataPayload
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationEchoArgs = {
  str?: Maybe<Scalars['String']>
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationArchiveMediaRecordArgs = {
  input: ArchiveMediaRecordInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateMediaRecordArgs = {
  input: CreateMediaRecordInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationDeleteMediaRecordArgs = {
  input: DeleteMediaRecordInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateMediaRecordPriorityArgs = {
  input: UpdateMediaRecordPriorityInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateShopArgs = {
  input: CreateShopInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateShopArgs = {
  input: UpdateShopInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateGlobalSettingsArgs = {
  input: UpdateGlobalSettingsInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateShopSettingsArgs = {
  input: UpdateShopSettingsInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationRetryFailedEmailArgs = {
  input: RetryFailedEmailInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateAddressValidationRuleArgs = {
  input: CreateAddressValidationRuleInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationDeleteAddressValidationRuleArgs = {
  input: DeleteAddressValidationRuleInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateAddressValidationRuleArgs = {
  input: UpdateAddressValidationRuleInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationVerifySmtpEmailSettingsArgs = {
  input: VerifySmtpEmailSettingsInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateTemplateArgs = {
  input: UpdateTemplateInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationAddAccountAddressBookEntryArgs = {
  input: AddAccountAddressBookEntryInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationAddAccountEmailRecordArgs = {
  input: AddAccountEmailRecordInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateAccountArgs = {
  input: CreateAccountInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationRemoveAccountAddressBookEntryArgs = {
  input: RemoveAccountAddressBookEntryInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationRemoveAccountEmailRecordArgs = {
  input: RemoveAccountEmailRecordInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationSendResetAccountPasswordEmailArgs = {
  input: SendResetAccountPasswordEmailInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationSetAccountDefaultEmailArgs = {
  input: SetAccountDefaultEmailInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateAccountAddressBookEntryArgs = {
  input: UpdateAccountAddressBookEntryInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateAccountArgs = {
  input: UpdateAccountInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateGroupsForAccountsArgs = {
  input: UpdateGroupsForAccountsInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationGrantAdminUiAccessArgs = {
  input: GrantOrRevokeAdminUiAccessInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationRevokeAdminUiAccessArgs = {
  input: GrantOrRevokeAdminUiAccessInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateAdminUiAccessArgs = {
  input: UpdateAdminUiAccessInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationAddAccountToGroupArgs = {
  input: AddAccountToGroupInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateAccountGroupArgs = {
  input: CreateAccountGroupInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationRemoveAccountFromGroupArgs = {
  input: RemoveAccountFromGroupInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationRemoveAccountGroupArgs = {
  input: RemoveAccountGroupInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateAccountGroupArgs = {
  input: UpdateAccountGroupInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationInviteShopMemberArgs = {
  input: InviteShopMemberInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationSendVerificationAccountEmailArgs = {
  input: VerificationEmailInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationArchiveProductsArgs = {
  input: ArchiveProductsInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationArchiveProductVariantsArgs = {
  input: ArchiveProductVariantsInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateProductsVisibilityArgs = {
  input: UpdateProductsVisibilityInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateProductArgs = {
  input: CreateProductInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateProductVariantArgs = {
  input: CreateProductVariantInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCloneProductsArgs = {
  input: CloneProductsInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCloneProductVariantsArgs = {
  input: CloneProductVariantsInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateProductArgs = {
  input: UpdateProductInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateProductVariantArgs = {
  input: UpdateProductVariantInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationAddTagsToProductsArgs = {
  input: ProductTagsOperationInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationRemoveTagsFromProductsArgs = {
  input: ProductTagsOperationInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationPublishProductsToCatalogArgs = {
  productIds: Array<Maybe<Scalars['ID']>>
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationAddTagArgs = {
  input: AddTagInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationRemoveTagArgs = {
  input: RemoveTagInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationSetTagHeroMediaArgs = {
  input: SetTagHeroMediaInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateTagArgs = {
  input: UpdateTagInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateProductVariantPricesArgs = {
  input: UpdateProductVariantPricesInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationRecalculateReservedSimpleInventoryArgs = {
  input: RecalculateReservedSimpleInventoryInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateSimpleInventoryArgs = {
  input: UpdateSimpleInventoryInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationAddCartItemsArgs = {
  input: AddCartItemsInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateCartArgs = {
  input: CreateCartInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationReconcileCartsArgs = {
  input: ReconcileCartsInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationRemoveCartItemsArgs = {
  input: RemoveCartItemsInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationSetEmailOnAnonymousCartArgs = {
  input: SetEmailOnAnonymousCartInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateCartItemsQuantityArgs = {
  input: UpdateCartItemsQuantityInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationSelectFulfillmentOptionForGroupArgs = {
  input: SelectFulfillmentOptionForGroupInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationSetShippingAddressOnCartArgs = {
  input: SetShippingAddressOnCartInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateFulfillmentOptionsForGroupArgs = {
  input: UpdateFulfillmentOptionsForGroupInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationAddOrderFulfillmentGroupArgs = {
  input: AddOrderFulfillmentGroupInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCancelOrderItemArgs = {
  input: CancelOrderItemInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateRefundArgs = {
  input: CreateRefundInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationMoveOrderItemsArgs = {
  input: MoveOrderItemsInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationPlaceOrderArgs = {
  input: PlaceOrderInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationSplitOrderItemArgs = {
  input: SplitOrderItemInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateOrderArgs = {
  input: UpdateOrderInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateOrderFulfillmentGroupArgs = {
  input: UpdateOrderFulfillmentGroupInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationApproveOrderPaymentsArgs = {
  input: ApproveOrderPaymentsInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCaptureOrderPaymentsArgs = {
  input: CaptureOrderPaymentsInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationEnablePaymentMethodForShopArgs = {
  input: EnablePaymentMethodForShopInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateDiscountCodeArgs = {
  input: CreateDiscountCodeInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateDiscountCodeArgs = {
  input: UpdateDiscountCodeInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationDeleteDiscountCodeArgs = {
  input: DeleteDiscountCodeInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationApplyDiscountCodeToCartArgs = {
  input: ApplyDiscountCodeToCartInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationRemoveDiscountCodeFromCartArgs = {
  input: RemoveDiscountCodeFromCartInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateSurchargeArgs = {
  input: CreateSurchargeInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationDeleteSurchargeArgs = {
  input: DeleteSurchargeInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateSurchargeArgs = {
  input: UpdateSurchargeInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateFlatRateFulfillmentMethodArgs = {
  input: CreateFlatRateFulfillmentMethodInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateFlatRateFulfillmentMethodArgs = {
  input: UpdateFlatRateFulfillmentMethodInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationDeleteFlatRateFulfillmentMethodArgs = {
  input: DeleteFlatRateFulfillmentMethodInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateFlatRateFulfillmentRestrictionArgs = {
  input: CreateFlatRateFulfillmentRestrictionInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationDeleteFlatRateFulfillmentRestrictionArgs = {
  input: DeleteFlatRateFulfillmentRestrictionInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateFlatRateFulfillmentRestrictionArgs = {
  input: UpdateFlatRateFulfillmentRestrictionInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateTaxRateArgs = {
  input: CreateTaxRateInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateTaxRateArgs = {
  input: UpdateTaxRateInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationDeleteTaxRateArgs = {
  input: DeleteTaxRateInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateNavigationItemArgs = {
  input: CreateNavigationItemInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateNavigationTreeArgs = {
  input: CreateNavigationTreeInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationDeleteNavigationItemArgs = {
  input: DeleteNavigationItemInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationPublishNavigationChangesArgs = {
  input: PublishNavigationChangesInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateNavigationItemArgs = {
  input: UpdateNavigationItemInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateNavigationTreeArgs = {
  input: UpdateNavigationTreeInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationGenerateSitemapsArgs = {
  input?: Maybe<GenerateSitemapsInput>
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationDeactivateShopArgs = {
  input: DeactivateShopInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationAddStorefrontToShopArgs = {
  input: AddStorefrontToShopInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationAddHydraClientArgs = {
  input: AddHydraClientInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateHydraClientArgs = {
  input: UpdateHydraClientInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateQrCodeArgs = {
  input: InputCreateQrCode
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationRefundQrCodeArgs = {
  input: InputRefundQrCode
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCaptureQrCodeArgs = {
  code: Scalars['String']
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateInvoiceArgs = {
  input: InvoiceInput
  facade?: Maybe<Scalars['String']>
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationGetInvoiceByIdArgs = {
  input: InvoiceByIdInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationAddHomePageAssetArgs = {
  input: AddHomePageAssetInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationSetHomePageAssetHeroMediaArgs = {
  input: SetHomePageAssetHeroMediaInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationRemoveHomePageAssetArgs = {
  input: RemoveHomePageAssetInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateHomePageAssetArgs = {
  input: UpdateHomePageAssetInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationAddPageArgs = {
  input: AddPageInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationRemovePageArgs = {
  input: RemovePageInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdatePageArgs = {
  input: UpdatePageInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationDeployShopArgs = {
  input: DeployShopInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationPaySubscriptionArgs = {
  input: PaySubscriptionInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCreateSubscriptionPlanArgs = {
  input: CreateSubscriptionPlanInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdateSubscriptionPlanArgs = {
  input: UpdateSubscriptionPlanInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationCancelSubscriptionArgs = {
  shopId: Scalars['ID']
  status: Scalars['String']
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationUpdatePaymentMethodArgs = {
  input: UpdatePaymentMethodInput
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationLoadProductsAndTagsArgs = {
  input?: Maybe<LoadProductsAndTagsInput>
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationLoadOrdersArgs = {
  input?: Maybe<LoadOrdersInput>
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationLoadProductImagesArgs = {
  input?: Maybe<LoadProductImagesInput>
}

/** Mutations have side effects, such as mutating data or triggering a task */
export type MutationRemoveAllDataArgs = {
  input?: Maybe<RemoveDataInput>
}

/** Input for the archiveMediaRecord mutation */
export type ArchiveMediaRecordInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of MediaRecord to archive */
  mediaRecordId: Scalars['ID']
  /** ID of shop that owns this MediaRecord */
  shopId: Scalars['ID']
}

/** Response payload for the archiveMediaRecord mutation */
export type ArchiveMediaRecordPayload = {
  __typename?: 'ArchiveMediaRecordPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The archived MediaRecord */
  mediaRecord: MediaRecord
}

/** A FileRecord for a media file */
export type MediaRecord = {
  __typename?: 'MediaRecord'
  /** MediaRecord ID */
  _id: Scalars['ID']
  /** Custom metadata for the media record */
  metadata: MediaRecordMetadata
  /** Core info about the original uploaded file */
  original: MediaRecordInfo
}

/** Custom metadata for the media record */
export type MediaRecordMetadata = {
  __typename?: 'MediaRecordMetadata'
  /** True if the MediaRecord is archived. This typically means that the media will not show in a storefront but the image file data still exists. */
  isArchived: Scalars['Boolean']
  /** ID of the account that uploaded the file */
  ownerId?: Maybe<Scalars['String']>
  /** Priority among media files with similar metadata */
  priority?: Maybe<Scalars['Int']>
  /** ID of the related product, if the media is for a product */
  productId?: Maybe<Scalars['String']>
  /** ID of the shop that owns the media */
  shopId: Scalars['String']
  /** A string that identifies where this media will be used, for filtering */
  type?: Maybe<Scalars['String']>
  /** ID of the related product variant, if the media is for a product variant */
  variantId?: Maybe<Scalars['String']>
}

/** Core info about the original uploaded media file */
export type MediaRecordInfo = {
  __typename?: 'MediaRecordInfo'
  /** File name */
  name: Scalars['String']
  /** File size */
  size: Scalars['Int']
  /** File type */
  type: Scalars['String']
  /** Date and time at which the file was last updated */
  updatedAt: Scalars['DateTime']
  /** Date and time at which the file was uploaded */
  uploadedAt: Scalars['DateTime']
}

/** Input for the createMediaRecord mutation */
export type CreateMediaRecordInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The media record to insert, with related file data already fully uploaded to temporary storage */
  mediaRecord: MediaRecordInput
  /** ID of shop that owns this MediaRecord */
  shopId: Scalars['ID']
}

/** A FileRecord for a media file */
export type MediaRecordInput = {
  /** Custom metadata for the media record */
  metadata: MediaRecordMetadataInput
  /** Core info about the original uploaded file */
  original: MediaRecordInfoInput
}

/** Custom metadata for the media record */
export type MediaRecordMetadataInput = {
  /** Priority among media files with similar metadata */
  priority?: Maybe<Scalars['Int']>
  /** ID of the related product, if the media is for a product */
  productId?: Maybe<Scalars['ID']>
  /** A string that identifies where this media will be used, for filtering */
  type?: Maybe<Scalars['String']>
  /** ID of the related product variant, if the media is for a product variant */
  variantId?: Maybe<Scalars['ID']>
}

/** Core info about the original uploaded media file */
export type MediaRecordInfoInput = {
  /** File name */
  name: Scalars['String']
  /** File size */
  size: Scalars['Int']
  /** ID of the file uploaded to temporary storage */
  tempStoreId: Scalars['String']
  /** File type */
  type: Scalars['String']
  /** Date and time at which the file was last updated */
  updatedAt: Scalars['DateTime']
  /** Date and time at which the file was uploaded */
  uploadedAt: Scalars['DateTime']
}

/** Response payload for the createMediaRecord mutation */
export type CreateMediaRecordPayload = {
  __typename?: 'CreateMediaRecordPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The created MediaRecord */
  mediaRecord: MediaRecord
}

/** Input for the deleteMediaRecord mutation */
export type DeleteMediaRecordInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of MediaRecord to delete */
  mediaRecordId: Scalars['ID']
  /** ID of shop that owns this MediaRecord */
  shopId: Scalars['ID']
}

/** Response payload for the deleteMediaRecord mutation */
export type DeleteMediaRecordPayload = {
  __typename?: 'DeleteMediaRecordPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The deleted MediaRecord */
  mediaRecord: MediaRecord
}

/** Input for the updateMediaRecordPriority mutation */
export type UpdateMediaRecordPriorityInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of MediaRecord to update */
  mediaRecordId: Scalars['ID']
  /** New priority value */
  priority: Scalars['Int']
  /** ID of shop that owns this MediaRecord */
  shopId: Scalars['ID']
}

/** Response payload for the updateMediaRecordPriority mutation */
export type UpdateMediaRecordPriorityPayload = {
  __typename?: 'UpdateMediaRecordPriorityPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated MediaRecord */
  mediaRecord: MediaRecord
}

/** Input parameters for the `createShop` mutation */
export type CreateShopInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** Currency in which all money values should be assumed to be. Default is `USD`. */
  currencyCode?: Maybe<Scalars['String']>
  /** Default language for translation and localization. Default is `en`. */
  defaultLanguage?: Maybe<Scalars['String']>
  /** Primary timezone. Default is `US/Pacific` */
  defaultTimezone?: Maybe<Scalars['String']>
  /** An optional description of the shop, intended for only admins to see */
  description?: Maybe<Scalars['String']>
  /** A unique name for the shop */
  name: Scalars['String']
  /** The shop type. Default is `primary`, but there may be only one primary shop. */
  type?: Maybe<Scalars['String']>
  /** Name of the user that is creating the shop */
  userName?: Maybe<Scalars['String']>
  /** Name of the industry the shop operate in */
  industry?: Maybe<Scalars['String']>
  /** URL for the storefront using the goodcommerce domain or the own domain of the user */
  storefrontUrl?: Maybe<Scalars['String']>
  /** Confirmation for the user of the terms of service */
  hasAgreedTerms: Scalars['Boolean']
}

/** The response from the `createShop` mutation */
export type CreateShopPayload = {
  __typename?: 'CreateShopPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The shop which was created */
  shop: Shop
}

/** Input parameters for the updateShop mutation */
export type UpdateShopInput = {
  /** An address book entry to set the primary shop's address */
  addressBook?: Maybe<Array<Maybe<AddressInput>>>
  /** Whether to allow user to checkout without creating an account */
  allowGuestCheckout?: Maybe<Scalars['Boolean']>
  /** The base unit of length */
  baseUOL?: Maybe<Scalars['String']>
  /** The base unit of Measure */
  baseUOM?: Maybe<Scalars['String']>
  /** ID of media record to be used as the brand asset */
  brandAssets?: Maybe<Scalars['ID']>
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The shop's currency */
  currency?: Maybe<Scalars['String']>
  /** Default parcel size used for this shop */
  defaultParcelSize?: Maybe<ShopParcelSizeInput>
  /** The shop's description */
  description?: Maybe<Scalars['String']>
  /** The shops primary email address */
  emails?: Maybe<Array<Maybe<EmailRecordInput>>>
  /** The shop's keywords */
  keywords?: Maybe<Scalars['String']>
  /** The shop's language */
  language?: Maybe<Scalars['String']>
  /** The shop's name */
  name?: Maybe<Scalars['String']>
  /** The ID of the shop to update */
  shopId: Scalars['ID']
  /** Object of shop logo urls  */
  shopLogoUrls?: Maybe<ShopLogoUrlsInput>
  /** Shop's slug */
  slug?: Maybe<Scalars['String']>
  /** Object of storefront routes urls */
  storefrontUrls?: Maybe<StorefrontUrlsInput>
  /** The shop's timezone */
  timezone?: Maybe<Scalars['String']>
}

/** Parcel size input */
export type ShopParcelSizeInput = {
  /** Parcel height */
  height?: Maybe<Scalars['Float']>
  /** Parcel length */
  length?: Maybe<Scalars['Float']>
  /** Parcel weight */
  weight?: Maybe<Scalars['Float']>
  /** Parcel width */
  width?: Maybe<Scalars['Float']>
}

/** A confirmable email record */
export type EmailRecordInput = {
  /** The actual email address */
  address?: Maybe<Scalars['Email']>
  /** The services provided by this address */
  provides?: Maybe<Scalars['String']>
  /** Has this address been verified? */
  verified?: Maybe<Scalars['Boolean']>
}

/** Shop Logo URLs to provide for the updateShop mutation */
export type ShopLogoUrlsInput = {
  /** The primary logo URL for this shop. Setting this overrides any uploaded logo. */
  primaryShopLogoUrl?: Maybe<Scalars['String']>
}

/** Storefront route URLs to provide for the updateShop mutation */
export type StorefrontUrlsInput = {
  /** Storefront Account Profile URL (can include `:accountId` in string) */
  storefrontAccountProfileUrl?: Maybe<Scalars['String']>
  /** Storefront Home URL */
  storefrontHomeUrl?: Maybe<Scalars['String']>
  /** Storefront login URL */
  storefrontLoginUrl?: Maybe<Scalars['String']>
  /** Storefront single order URL (can include `:orderReferenceId` and `:orderToken` in string) */
  storefrontOrderUrl?: Maybe<Scalars['String']>
  /** Storefront orders URL (can include `:accountId` in string) */
  storefrontOrdersUrl?: Maybe<Scalars['String']>
}

/** The response from the `updateShop` mutation */
export type UpdateShopPayload = {
  __typename?: 'UpdateShopPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The shop which was updated */
  shop: Shop
}

/** Input for the `updateGlobalSettings` mutation */
export type UpdateGlobalSettingsInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** Updated settings values. Only includes settings to be changed. */
  settingsUpdates: GlobalSettingsUpdates
}

/**
 * Updates for app settings that are not shop specific. Plugins extend
 * this input type to support whatever settings they need. All fields
 * must be optional.
 */
export type GlobalSettingsUpdates = {
  /** Do not use this field */
  doNotUse?: Maybe<Scalars['String']>
}

/** Response payload for the `updateGlobalSettings` mutation */
export type UpdateGlobalSettingsPayload = {
  __typename?: 'UpdateGlobalSettingsPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** Updated global settings */
  globalSettings: GlobalSettings
}

/** Input for the `updateShopSettings` mutation */
export type UpdateShopSettingsInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** Updated settings values. Only includes settings to be changed. */
  settingsUpdates: ShopSettingsUpdates
  /** The ID of the shop to update some settings for */
  shopId: Scalars['ID']
}

/**
 * Updates for app settings that are not shop specific. Plugins extend
 * this input type to support whatever settings they need. All fields
 * must be optional.
 */
export type ShopSettingsUpdates = {
  /** Do not use this field */
  doNotUse?: Maybe<Scalars['String']>
  /**
   * If there is no known inventory for a product configuration, this setting determines
   * whether that product configuration can be sold and should appear to be available.
   */
  canSellVariantWithoutInventory?: Maybe<Scalars['Boolean']>
  /**
   * Set to `false` to prevent any defined shipping rates from being used when fulfillment
   * quotes are requested for a cart or order. A quick way to disable the entire
   * `reaction-shipping-rates` plugin temporarily.
   */
  isShippingRatesFulfillmentEnabled?: Maybe<Scalars['Boolean']>
  /** The default value to use for `taxCode` property of a product */
  defaultTaxCode?: Maybe<Scalars['String']>
  /**
   * Optionally, set the name of the tax service to fall back to if the primary tax service is down.
   * This must match the `name` field of one of the services returned by the `taxServices` query.
   */
  fallbackTaxServiceName?: Maybe<Scalars['String']>
  /**
   * Set the name of the tax service to use for calculating taxes on carts and orders.
   * This will match the `name` field of one of the services returned by the `taxServices`
   * query. There will be no taxes charged for any carts or orders if this is not set.
   */
  primaryTaxServiceName?: Maybe<Scalars['String']>
  /**
   * Whether a navigation item added to the navigation tree should be visible only to
   * admins by default.
   */
  shouldNavigationTreeItemsBeAdminOnly?: Maybe<Scalars['Boolean']>
  /**
   * Whether a navigation item added to the navigation tree should be
   * public API/Storefront visible by default.
   */
  shouldNavigationTreeItemsBePubliclyVisible?: Maybe<Scalars['Boolean']>
  /**
   * Whether a navigation item added to the navigation tree should be a secondary
   * navigation item by default.
   */
  shouldNavigationTreeItemsBeSecondaryNavOnly?: Maybe<Scalars['Boolean']>
  /** This setting controls how often the sitemaps for the shop will be rebuilt */
  sitemapRefreshPeriod?: Maybe<Scalars['String']>
  showOnboarding?: Maybe<Scalars['Boolean']>
  /** Set epaycoSettings */
  epaycoSettings?: Maybe<Scalars['JSONObject']>
  /** Set segmentSettings */
  segmentSettings?: Maybe<Scalars['JSONObject']>
  /** Set googleSettings */
  googleSettings?: Maybe<Scalars['JSONObject']>
  /** Set whatsAppSettings */
  whatsAppSettings?: Maybe<Scalars['JSONObject']>
  /** Set nequiSettings */
  nequiSettings?: Maybe<Scalars['JSONObject']>
  /** Set bitpaySettings */
  bitpaySettings?: Maybe<Scalars['JSONObject']>
  /** Set themeSettings */
  themeSettings?: Maybe<Scalars['JSONObject']>
  /** Set carouselSettings */
  carouselSettings?: Maybe<Scalars['JSONObject']>
}

/** Response payload for the `updateShopSettings` mutation */
export type UpdateShopSettingsPayload = {
  __typename?: 'UpdateShopSettingsPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** Updated shop settings */
  shopSettings: ShopSettings
}

/** Input for `retryFailedEmail` mutation */
export type RetryFailedEmailInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of Email Job to retry */
  jobId: Scalars['ID']
  /** Shop ID of Email Job */
  shopId: Scalars['ID']
}

/** Response payload for `retryFailedEmail` mutation */
export type RetryFailedEmailPayload = {
  __typename?: 'RetryFailedEmailPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** Email retry status */
  emailSent: Scalars['Boolean']
}

/** Input for the `createAddressValidationRule` mutation */
export type CreateAddressValidationRuleInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** Country codes for which this service is enabled. `null` means all, while an empty array means none. */
  countryCodes?: Maybe<Array<Maybe<Scalars['String']>>>
  /**
   * The name of one of the installed validation services. Use `addressValidationServices`
   * query to get a list, and then use the `name` field value from one of them.
   */
  serviceName: Scalars['String']
  /** ID of the shop to which this rule applies */
  shopId: Scalars['ID']
}

/** Payload for the `createAddressValidationRule` mutation */
export type CreateAddressValidationRulePayload = {
  __typename?: 'CreateAddressValidationRulePayload'
  /** Created address validation rule */
  addressValidationRule: AddressValidationRule
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Input for the `deleteAddressValidationRule` mutation */
export type DeleteAddressValidationRuleInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of the rule you want to delete */
  ruleId: Scalars['ID']
  /** Shop ID of the rule you want to delete */
  shopId: Scalars['ID']
}

/** Payload for the `deleteAddressValidationRule` mutation */
export type DeleteAddressValidationRulePayload = {
  __typename?: 'DeleteAddressValidationRulePayload'
  /** Deleted address validation rule */
  addressValidationRule: AddressValidationRule
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Input for the `updateAddressValidationRule` mutation */
export type UpdateAddressValidationRuleInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** Country codes for which this service is enabled. `null` means all, while an empty array means none. */
  countryCodes?: Maybe<Array<Maybe<Scalars['String']>>>
  /** ID of the rule you want to update */
  ruleId: Scalars['ID']
  /**
   * The name of one of the installed validation services. Use `addressValidationServices`
   * query to get a list, and then use the `name` field value from one of them.
   */
  serviceName: Scalars['String']
  /** Shop ID of the rule you want to update. This is not something you can modify. */
  shopId: Scalars['ID']
}

/** Payload for the `updateAddressValidationRule` mutation */
export type UpdateAddressValidationRulePayload = {
  __typename?: 'UpdateAddressValidationRulePayload'
  /** Updated address validation rule */
  addressValidationRule: AddressValidationRule
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Input for an `VerifySMTPEmailSettingsInput` */
export type VerifySmtpEmailSettingsInput = {
  /** The ID of the shop this setting belongs to */
  shopId: Scalars['ID']
}

/** Response payload for the verifySMTPEmailSettings mutation */
export type VerifySmtpEmailSettingsInputPayload = {
  __typename?: 'VerifySMTPEmailSettingsInputPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** True if the SMTP connection was made and authentication was successful. */
  isVerified: Scalars['Boolean']
}

/** Input for `updateTemplate` mutation */
export type UpdateTemplateInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of template to modify */
  id: Scalars['ID']
  /** The shop that owns the template */
  shopId: Scalars['ID']
  /** Email template string */
  subject?: Maybe<Scalars['String']>
  /** Email template body or html text */
  template?: Maybe<Scalars['String']>
  /** Email template title */
  title?: Maybe<Scalars['String']>
}

/** Response payload for `updateTemplate` mutation */
export type UpdateTemplatePayload = {
  __typename?: 'UpdateTemplatePayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated template */
  template: Template
}

/** Defines a new Address and the account to which it should be added */
export type AddAccountAddressBookEntryInput = {
  /** The account ID */
  accountId: Scalars['ID']
  /** The address to add */
  address: AddressInput
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
}

/** The response from the `addAccountAddressBookEntry` mutation */
export type AddAccountAddressBookEntryPayload = {
  __typename?: 'AddAccountAddressBookEntryPayload'
  /** The added address */
  address?: Maybe<Address>
  /** The added address edge */
  addressEdge?: Maybe<AddressEdge>
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Defines a new Email and the account to which it should be added */
export type AddAccountEmailRecordInput = {
  /** The account ID, which defaults to the viewer account */
  accountId?: Maybe<Scalars['ID']>
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The email address to add */
  email: Scalars['Email']
}

/** The response from the `addAccountEmailRecord` mutation */
export type AddAccountEmailRecordPayload = {
  __typename?: 'AddAccountEmailRecordPayload'
  /** The account, with updated `emailRecords` */
  account?: Maybe<Account>
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Defines the account which should be created */
export type CreateAccountInput = {
  /** Bio to display on profile */
  bio?: Maybe<Scalars['String']>
  /** Email record to create account with */
  emails: Array<Maybe<EmailRecordInput>>
  /** Name to display on profile */
  name?: Maybe<Scalars['String']>
  /** URL of picture to display on profile */
  picture?: Maybe<Scalars['String']>
  /** The ID of the shop this account will belong to */
  shopId: Scalars['ID']
  /** The userID account was created from create a new account from */
  userId: Scalars['ID']
  /** Username */
  username?: Maybe<Scalars['String']>
}

/** The response from the `createAccount` mutation */
export type CreateAccountPayload = {
  __typename?: 'CreateAccountPayload'
  /** The added account */
  account?: Maybe<Account>
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Describes which address should be removed from which account */
export type RemoveAccountAddressBookEntryInput = {
  /** The account ID */
  accountId: Scalars['ID']
  /** The address ID */
  addressId: Scalars['ID']
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
}

/** The response from the `removeAccountAddressBookEntry` mutation */
export type RemoveAccountAddressBookEntryPayload = {
  __typename?: 'RemoveAccountAddressBookEntryPayload'
  /** The removed address */
  address?: Maybe<Address>
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Defines which email address should be removed from which account */
export type RemoveAccountEmailRecordInput = {
  /** The account ID, which defaults to the viewer account */
  accountId?: Maybe<Scalars['ID']>
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The email address to remove */
  email: Scalars['Email']
}

/** The response from the `removeAccountEmailRecord` mutation */
export type RemoveAccountEmailRecordPayload = {
  __typename?: 'RemoveAccountEmailRecordPayload'
  /** The account, with updated `emailRecords` */
  account?: Maybe<Account>
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Describes which email should be sent a password reset link */
export type SendResetAccountPasswordEmailInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The email address of the account to send reset email to */
  email: Scalars['String']
}

/** The response from the `sendResetAccountPasswordEmail` mutation */
export type SendResetAccountPasswordEmailPayload = {
  __typename?: 'SendResetAccountPasswordEmailPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The email address of the account to send reset email to */
  email: Scalars['String']
}

/** Defines which email address should be set as the default for which account */
export type SetAccountDefaultEmailInput = {
  /** The account ID, which defaults to the viewer account */
  accountId?: Maybe<Scalars['ID']>
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The email address to set as default */
  email: Scalars['Email']
}

/** The response from the `setAccountDefaultEmail` mutation */
export type SetAccountDefaultEmailPayload = {
  __typename?: 'SetAccountDefaultEmailPayload'
  /** The account, with updated `emailRecords` */
  account?: Maybe<Account>
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Describes changes that should be applied to one of the addresses for an account */
export type UpdateAccountAddressBookEntryInput = {
  /** The account ID */
  accountId: Scalars['ID']
  /** The address ID */
  addressId: Scalars['ID']
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** If present, make this address the default address of this type */
  type?: Maybe<AddressType>
  /** The address changes to apply */
  updates: AddressInput
}

/** A list of the possible types of `Address` */
export enum AddressType {
  /** Address can be used for payment transactions and invoicing */
  Billing = 'billing',
  /** Address can be used as a mailing address for sending physical items */
  Shipping = 'shipping',
}

/** The response from the `updateAccountAddressBookEntry` mutation */
export type UpdateAccountAddressBookEntryPayload = {
  __typename?: 'UpdateAccountAddressBookEntryPayload'
  /** The updated address */
  address?: Maybe<Address>
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Describes an account update */
export type UpdateAccountInput = {
  /** The account ID, which defaults to the viewer account */
  accountId?: Maybe<Scalars['ID']>
  /** Bio to display on profile */
  bio?: Maybe<Scalars['String']>
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The preferred currency code used by this account */
  currencyCode?: Maybe<Scalars['String']>
  /** The first name of the person this account represents */
  firstName?: Maybe<Scalars['String']>
  /** The preferred language (code) used by this account */
  language?: Maybe<Scalars['String']>
  /** The last name of the person this account represents */
  lastName?: Maybe<Scalars['String']>
  /** The full name of the person this account represents */
  name?: Maybe<Scalars['String']>
  /** Some note about this account */
  note?: Maybe<Scalars['String']>
  /** URL of picture to display on profile */
  picture?: Maybe<Scalars['String']>
  /** Username */
  username?: Maybe<Scalars['String']>
}

/** The response from the `updateAccount` mutation */
export type UpdateAccountPayload = {
  __typename?: 'UpdateAccountPayload'
  /** The updated account */
  account: Account
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

export type UpdateGroupsForAccountsInput = {
  /** The account IDs */
  accountIds: Array<Maybe<Scalars['ID']>>
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The group IDs */
  groupIds: Array<Maybe<Scalars['ID']>>
}

export type UpdateGroupsForAccountsPayload = {
  __typename?: 'UpdateGroupsForAccountsPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The accounts that were modified */
  accounts: Array<Maybe<Account>>
}

export type GrantOrRevokeAdminUiAccessInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The account ID to update */
  accountId: Scalars['String']
  /** The shop IDs to unassign or assign to the accounts */
  shopId: Scalars['String']
}

export type GrantOrRevokeAdminUiAccessPayload = {
  __typename?: 'GrantOrRevokeAdminUIAccessPayload'
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The up to date account object */
  account?: Maybe<Account>
}

export type UpdateAdminUiAccessInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The account IDs to update */
  accountIds: Array<Maybe<Scalars['String']>>
  /** The shop IDs to unassign or assign to the accounts */
  shopIds: Array<Maybe<Scalars['String']>>
}

export type UpdateAdminUiAccessPayload = {
  __typename?: 'UpdateAdminUIAccessPayload'
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The up to date account objects */
  accounts?: Maybe<Array<Maybe<Account>>>
}

/** Defines a group and account that should be linked */
export type AddAccountToGroupInput = {
  /** The account ID */
  accountId: Scalars['ID']
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The group ID */
  groupId: Scalars['ID']
}

/** The response from the `addAccountToGroup` mutation */
export type AddAccountToGroupPayload = {
  __typename?: 'AddAccountToGroupPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated group */
  group?: Maybe<Group>
}

/** The details for creating a group */
export type CreateAccountGroupInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The group to create */
  group: GroupInput
  /** The ID of the shop this group belongs to */
  shopId?: Maybe<Scalars['ID']>
}

/** A group definition */
export type GroupInput = {
  /** A free text description of this group */
  description?: Maybe<Scalars['String']>
  /** A unique name for the group */
  name: Scalars['String']
  /** A unique URL-safe string representing this group */
  slug?: Maybe<Scalars['String']>
  /** A list of the account permissions implied by membership in this group */
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** The response from the `createAccountGroup` mutation */
export type CreateAccountGroupPayload = {
  __typename?: 'CreateAccountGroupPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The new group */
  group?: Maybe<Group>
}

/** Defines a group and account that should be unlinked */
export type RemoveAccountFromGroupInput = {
  /** The account ID */
  accountId: Scalars['ID']
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The group ID */
  groupId: Scalars['ID']
}

/** The response from the `removeAccountFromGroup` mutation */
export type RemoveAccountFromGroupPayload = {
  __typename?: 'RemoveAccountFromGroupPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The removed group */
  group: Group
}

/** The details for removing a group */
export type RemoveAccountGroupInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The group ID */
  groupId: Scalars['ID']
  /** The ID of the shop this group belongs to */
  shopId?: Maybe<Scalars['ID']>
}

/** The response from the `removeGroup` mutation */
export type RemoveAccountGroupPayload = {
  __typename?: 'RemoveAccountGroupPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The removed group */
  group?: Maybe<Group>
}

/** The details for updating a group */
export type UpdateAccountGroupInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The changes to apply to the group */
  group: UpdateGroupInput
  /** The group ID */
  groupId: Scalars['ID']
  /** The ID of the shop this group belongs to */
  shopId?: Maybe<Scalars['ID']>
}

/** Fields to update for an existing account group */
export type UpdateGroupInput = {
  /** A free text description of this group */
  description?: Maybe<Scalars['String']>
  /** A unique name for the group */
  name?: Maybe<Scalars['String']>
  /** A unique URL-safe string representing this group */
  slug?: Maybe<Scalars['String']>
  /** A list of the account permissions implied by membership in this group */
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** The response from the `updateAccountGroup` mutation */
export type UpdateAccountGroupPayload = {
  __typename?: 'UpdateAccountGroupPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated group */
  group?: Maybe<Group>
}

/** Input parameters for the inviteShopMember mutation */
export type InviteShopMemberInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The email address of the person to invite */
  email: Scalars['String']
  /** The permission group for this person's new account. DEPRECATED. Use `groupIds` field instead. */
  groupId?: Maybe<Scalars['ID']>
  /** The permission groups for this person's new account */
  groupIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** The invitee's full name */
  name: Scalars['String']
  /** The ID of the shop to which you want to invite this person */
  shopId: Scalars['ID']
  /** Whether the newly invited user should get admin UI access to the shop upon sign-up */
  shouldGetAdminUIAccess?: Maybe<Scalars['Boolean']>
}

/** The response from the `inviteShopMember` mutation */
export type InviteShopMemberPayload = {
  __typename?: 'InviteShopMemberPayload'
  /** The account that was successfully created or found and updated by inviting this shop member */
  account?: Maybe<Account>
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Input parameters for the sendVerificationAccountEmail mutation */
export type VerificationEmailInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The userId of the account to validate */
  userId: Scalars['String']
}

/** The response from the `sendVerificationAccountEmail` mutation */
export type VerificationEmailPayload = {
  __typename?: 'VerificationEmailPayload'
  /** The userId of the account to validate */
  userId: Scalars['String']
  /** Default email of the account */
  defaultEmail: Scalars['String']
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Input for the `archiveProducts` mutation */
export type ArchiveProductsInput = {
  /** Array of IDs of products to archive */
  productIds: Array<Maybe<Scalars['ID']>>
  /** ID of shop that owns all products you are archiving */
  shopId: Scalars['ID']
}

/** Response payload of `archiveProducts` mutation */
export type ArchiveProductsPayload = {
  __typename?: 'ArchiveProductsPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** Array of newly archived products */
  products: Array<Maybe<Product>>
}

/** Input for the `archiveProducts` mutation */
export type ArchiveProductVariantsInput = {
  /** ID of shop that owns all variants you are archiving */
  shopId: Scalars['ID']
  /** Array of IDs of variants to archive */
  variantIds: Array<Maybe<Scalars['ID']>>
}

/** Response payload of `archiveProductVariants` mutation */
export type ArchiveProductVariantsPayload = {
  __typename?: 'ArchiveProductVariantsPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** Array of newly archived variants */
  variants: Array<Maybe<ProductVariant>>
}

/** Input for the `updateProductsVisibility` mutation */
export type UpdateProductsVisibilityInput = {
  /** The desired visibility */
  isVisible: Scalars['Boolean']
  /** Array of product ids to update */
  productIds: Array<Maybe<Scalars['ID']>>
  /** ID of shop the products belong to */
  shopId: Scalars['ID']
}

/** Response payload for `updateProductsVisibility` mutation */
export type UpdateProductsVisibilityPayload = {
  __typename?: 'UpdateProductsVisibilityPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The number of products that were updated successfully */
  updatedCount?: Maybe<Scalars['Int']>
}

/** Input for the `createProduct` mutation */
export type CreateProductInput = {
  /** Product input */
  product?: Maybe<ProductInput>
  /** ID of shop product will belong to */
  shopId: Scalars['ID']
  /** Set to false if you do not want to auto-create the first variant of the product */
  shouldCreateFirstVariant?: Maybe<Scalars['Boolean']>
}

/** Mutation input for a product */
export type ProductInput = {
  /**
   * Any string to use as the internal ID for a new product. Do not prefix or base64 encode this ID.
   * This field is allowed only when creating a product. If you include an ID for an update, you
   * will get an error. The string must also be different from any existing product, variant, or
   * option internal ID or you will get a duplicate ID error. If you do not include this when creating
   * a product, a random unique string is generated for you.
   */
  _id?: Maybe<Scalars['String']>
  /** The full product description, which may have newline characters in it */
  description?: Maybe<Scalars['String']>
  /** Facebook message */
  facebookMsg?: Maybe<Scalars['String']>
  /** Google message */
  googleplusMsg?: Maybe<Scalars['String']>
  /** True if this product has been deleted. Typically, deleted products are not returned in queries. */
  isDeleted?: Maybe<Scalars['Boolean']>
  /** True if this product should be shown to shoppers. Typically, non-visible products are not returned in queries. */
  isVisible?: Maybe<Scalars['Boolean']>
  /** The product description to use for page `description` meta element in HTML */
  metaDescription?: Maybe<Scalars['String']>
  /** Arbitrary additional metadata about this product */
  metafields?: Maybe<Array<Maybe<MetafieldInput>>>
  /** The country of origin */
  originCountry?: Maybe<Scalars['String']>
  /** Subtitle */
  pageTitle?: Maybe<Scalars['String']>
  /** Pinterest message */
  pinterestMsg?: Maybe<Scalars['String']>
  /** An arbitrary product type value, such as from an external system */
  productType?: Maybe<Scalars['String']>
  /** Whether this product will be shown in the generated sitemap */
  shouldAppearInSitemap?: Maybe<Scalars['Boolean']>
  /** A URL-safe and human-readable string that uniquely identifies this product */
  slug?: Maybe<Scalars['String']>
  /** When a shopper purchases this product, what types of fulfillment can they choose from? */
  supportedFulfillmentTypes?: Maybe<Array<Maybe<FulfillmentType>>>
  /** The list of tag IDs that have been applied to this product */
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Product title */
  title?: Maybe<Scalars['String']>
  /** Twitter message */
  twitterMsg?: Maybe<Scalars['String']>
  /** The product vendor or manufacturer, for display */
  vendor?: Maybe<Scalars['String']>
}

/** Response payload of `createProduct` mutation */
export type CreateProductPayload = {
  __typename?: 'CreateProductPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The created product */
  product: Product
}

/** Input for the `createProductVariant` mutation */
export type CreateProductVariantInput = {
  /** ID of product variant belongs to */
  productId: Scalars['ID']
  /** ID of shop product variant will belong to */
  shopId: Scalars['ID']
  /** Variant input */
  variant?: Maybe<ProductVariantInput>
}

/** Mutation input for a product variant or option */
export type ProductVariantInput = {
  /**
   * Any string to use as the internal ID for a new variant. Do not prefix or base64 encode this ID.
   * This field is allowed only when creating a variant. If you include an ID for an update, you
   * will get an error. The string must also be different from any existing product, variant, or
   * option internal ID or you will get a duplicate ID error. If you do not include this when creating
   * a variant, a random unique string is generated for you.
   */
  _id?: Maybe<Scalars['String']>
  /**
   * The attribute label describes the category of variant, for example, `Color` or `Size`.
   * In most cases this will be the same for all variants at the same level.
   */
  attributeLabel?: Maybe<Scalars['String']>
  /** The product variant barcode value, if it has one */
  barcode?: Maybe<Scalars['String']>
  /** The height of the product variant, if it has physical dimensions */
  height?: Maybe<Scalars['Float']>
  /** The position of this variant among other variants at the same level of the product-variant-option hierarchy */
  index?: Maybe<Scalars['Int']>
  /** True if this variant was deleted. Deleted variants are not published to the catalog. */
  isDeleted?: Maybe<Scalars['Boolean']>
  /** True if this variant is visible. Hidden variants are not published to the catalog. */
  isVisible?: Maybe<Scalars['Boolean']>
  /** The length of the product, if it has physical dimensions */
  length?: Maybe<Scalars['Float']>
  /** Arbitrary additional metadata about this product */
  metafields?: Maybe<Array<Maybe<MetafieldInput>>>
  /** The minimum quantity that must be added to a cart */
  minOrderQuantity?: Maybe<Scalars['Int']>
  /** A short title to use for product detail select lists */
  optionTitle?: Maybe<Scalars['String']>
  /** The country of origin */
  originCountry?: Maybe<Scalars['String']>
  /** SKU of variant */
  sku?: Maybe<Scalars['String']>
  /**
   * The full variant title for use on cart, checkout, and order summaries and on invoices.
   * This fully describes the configured variant. For example, if this is an option with
   * `optionTitle` `Large`, its parent variant has `optionTitle` `Red`, and the product
   * `title` is `Fancy T-Shirt`, then this `title` will be something like `Fancy T-Shirt - Red - Large`.
   */
  title?: Maybe<Scalars['String']>
  /** The weight of the product on Earth, if it has physical dimensions */
  weight?: Maybe<Scalars['Float']>
  /** The width of the product, if it has physical dimensions */
  width?: Maybe<Scalars['Float']>
  /** Variant compareAtPrice. DEPRECATED. Use the `updateProductVariantPrices` mutation to set product variant prices. */
  compareAtPrice?: Maybe<Scalars['Float']>
  /** Variant price. DEPRECATED. Use the `updateProductVariantPrices` mutation to set product variant prices. */
  price?: Maybe<Scalars['Float']>
  /** Whether this variant is taxable */
  isTaxable?: Maybe<Scalars['Boolean']>
  /** Tax code */
  taxCode?: Maybe<Scalars['String']>
  /** Tax description */
  taxDescription?: Maybe<Scalars['String']>
}

/** Response payload of `createProductVariant` mutation */
export type CreateProductVariantPayload = {
  __typename?: 'CreateProductVariantPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The created product variant */
  variant: ProductVariant
}

/** Input for the `cloneProducts` mutation */
export type CloneProductsInput = {
  /** Array of IDs of products to clone */
  productIds: Array<Maybe<Scalars['ID']>>
  /** ID of shop that owns all products you are cloning */
  shopId: Scalars['ID']
}

/** Response payload of `cloneProducts` mutation */
export type CloneProductsPayload = {
  __typename?: 'CloneProductsPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** Array of newly cloned products */
  products: Array<Maybe<Product>>
}

/** Input for the `cloneProductVariants` mutation */
export type CloneProductVariantsInput = {
  /** ID of shop that owns all product variants you want to clone */
  shopId: Scalars['ID']
  /** Array of IDs of variants to clone */
  variantIds: Array<Maybe<Scalars['ID']>>
}

/** Response payload of `cloneProductVariants` mutation */
export type CloneProductVariantsPayload = {
  __typename?: 'CloneProductVariantsPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** Array of newly cloned product variants */
  variants: Array<Maybe<ProductVariant>>
}

/** Input for the `updateProduct` mutation */
export type UpdateProductInput = {
  /** Product input */
  product: ProductInput
  /** ID of product to update */
  productId: Scalars['ID']
  /** ID of shop that owns the product to update */
  shopId: Scalars['ID']
}

/** Response payload of `updateProduct` mutation */
export type UpdateProductPayload = {
  __typename?: 'UpdateProductPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** Updated product */
  product: Product
}

/** Input for the `updateProductVariantField` mutation */
export type UpdateProductVariantInput = {
  /** ID of shop that owns the variant to update */
  shopId: Scalars['ID']
  /** Variant input */
  variant: ProductVariantInput
  /** ID of variant to update */
  variantId: Scalars['ID']
}

/** Response payload of `updateProductVariantField` mutation */
export type UpdateProductVariantPayload = {
  __typename?: 'UpdateProductVariantPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** Updated variant */
  variant: ProductVariant
}

/** Input for adding tags to products in bulk */
export type ProductTagsOperationInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** An array of product productIds to which an array of tags will be added */
  productIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** The shop id */
  shopId: Scalars['ID']
  /** An array of tag ids to add to an array of products */
  tagIds?: Maybe<Array<Maybe<Scalars['ID']>>>
}

/** Response payload managing tags on products */
export type ProductTagsOperationPayload = {
  __typename?: 'ProductTagsOperationPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The number of products found */
  foundCount?: Maybe<Scalars['Int']>
  /** The number of products for which a match was not found */
  notFoundCount?: Maybe<Scalars['Int']>
  /** The number of products successfully updated */
  updatedCount?: Maybe<Scalars['Int']>
  /** An array of write errors if any were generated */
  writeErrors?: Maybe<Array<Maybe<WriteError>>>
}

/** A bulk write error type */
export type WriteError = {
  __typename?: 'WriteError'
  /** The documentId(_id) on which the error occurred */
  documentId?: Maybe<Scalars['Int']>
  /** Error message for a documentId */
  errorMsg?: Maybe<Scalars['String']>
}

/** Input for `addTag` mutation */
export type AddTagInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** Title to display to customers */
  displayTitle?: Maybe<Scalars['String']>
  /** Hero media URL */
  heroMediaId?: Maybe<Scalars['String']>
  /** Whether the tag is visible */
  isVisible: Scalars['Boolean']
  /** Tag metafields */
  metafields?: Maybe<Array<Maybe<MetafieldInput>>>
  /** Unique name of the tag */
  name: Scalars['String']
  /** The shop that owns the tag */
  shopId: Scalars['ID']
  /** The tag slug. If left blank, the name will be slugified and saved as the slug */
  slug?: Maybe<Scalars['String']>
}

/** Response payload for `addTag` mutation */
export type AddTagPayload = {
  __typename?: 'AddTagPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The shop that owns the tag */
  shopId: Scalars['ID']
  /** The newly-created tag */
  tag: Tag
}

/** Input for `removeTag` mutation */
export type RemoveTagInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of tag to delete */
  id: Scalars['ID']
  /** The shop that owns the tag */
  shopId: Scalars['ID']
}

/** Response payload for `removeTag` mutation */
export type RemoveTagPayload = {
  __typename?: 'RemoveTagPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The deleted tag */
  tag: Tag
}

/** Input for `setTagHeroMedia` mutation */
export type SetTagHeroMediaInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** File record document */
  fileRecord?: Maybe<Scalars['JSONObject']>
  /** ID of tag to add the hero image record to */
  id: Scalars['ID']
  /** The shop that owns the tag */
  shopId: Scalars['ID']
}

/** Response payload for `setTagHeroMedia` mutation */
export type SetTagHeroMediaPayload = {
  __typename?: 'SetTagHeroMediaPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** Tag the hero image was added to */
  tag: Tag
}

/** Input for `updateTag` mutation */
export type UpdateTagInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** Title to display to customers */
  displayTitle?: Maybe<Scalars['String']>
  /** A list of the IDs of top products in this tag */
  featuredProductIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** Hero media URL */
  heroMediaId?: Maybe<Scalars['String']>
  /** ID of rule to modify */
  id: Scalars['ID']
  /** Whether the tag is visible */
  isVisible: Scalars['Boolean']
  /** Tag metafields */
  metafields?: Maybe<Array<Maybe<MetafieldInput>>>
  /** Unique name of the tag */
  name: Scalars['String']
  /** The shop that owns the tag */
  shopId: Scalars['ID']
  /** The tag slug. If left blank, the name will be slugified and saved as the slug */
  slug?: Maybe<Scalars['String']>
}

/** Response payload for `updateTag` mutation */
export type UpdateTagPayload = {
  __typename?: 'UpdateTagPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated tag */
  tag: Tag
}

/** Input for the `updateProductVariantField` mutation */
export type UpdateProductVariantPricesInput = {
  /** Prices to update */
  prices: ProductVariantPricesInput
  /** ID of shop that owns the variant to update */
  shopId: Scalars['ID']
  /** ID of variant to update */
  variantId: Scalars['ID']
}

/** Mutation input for a product variant or option */
export type ProductVariantPricesInput = {
  /** Variant compareAtPrice */
  compareAtPrice?: Maybe<Scalars['Float']>
  /** Variant price */
  price?: Maybe<Scalars['Float']>
}

/** Response payload of `updateProductVariantPricesField` mutation */
export type UpdateProductVariantPricesPayload = {
  __typename?: 'UpdateProductVariantPricesPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** Updated variant */
  variant: ProductVariant
}

/** Input for the `recalculateReservedSimpleInventory` mutation */
export type RecalculateReservedSimpleInventoryInput = {
  /** The product and chosen options this info applies to */
  productConfiguration: ProductConfigurationInput
  /** Shop that owns the product */
  shopId: Scalars['ID']
}

/** Response payload for the `updateSimpleInventory` mutation */
export type RecalculateReservedSimpleInventoryPayload = {
  __typename?: 'RecalculateReservedSimpleInventoryPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated inventory info */
  inventoryInfo: SimpleInventoryInfo
}

/** Input for the `updateSimpleInventory` mutation. In addition to `shopId`, at least one field to update is required. */
export type UpdateSimpleInventoryInput = {
  /**
   * Whether to allow ordering this product configuration when there is insufficient quantity available.
   * Set this to `true` or `false` if you want to update it.
   */
  canBackorder?: Maybe<Scalars['Boolean']>
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** Current quantity of this product configuration in stock. Set this to an integer if you want to update it. */
  inventoryInStock?: Maybe<Scalars['Int']>
  /**
   * Whether the SimpleInventory plugin should manage inventory for this product configuration.
   * Set this to `true` or `false` if you want to update it.
   */
  isEnabled?: Maybe<Scalars['Boolean']>
  /**
   * The "low quantity" flag will be applied to this product configuration when the available quantity
   * is at or below this threshold. Set this to an integer if you want to update it.
   */
  lowInventoryWarningThreshold?: Maybe<Scalars['Int']>
  /** The product and chosen options this info applies to */
  productConfiguration: ProductConfigurationInput
  /** Shop that owns the product */
  shopId: Scalars['ID']
}

/** Response payload for the `updateSimpleInventory` mutation */
export type UpdateSimpleInventoryPayload = {
  __typename?: 'UpdateSimpleInventoryPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated inventory info */
  inventoryInfo: SimpleInventoryInfo
}

/** Input for the `addCartItems` mutation */
export type AddCartItemsInput = {
  /** The cart ID */
  cartId: Scalars['ID']
  /** If this cart is anonymous, provide the `cartToken` that was returned in the `CreateCartPayload` */
  cartToken?: Maybe<Scalars['String']>
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** Array of items to be added to the cart */
  items: Array<Maybe<CartItemInput>>
}

/** Information about an item to add to a cart */
export type CartItemInput = {
  /** Arbitrary additional metadata about this cart item. */
  metafields?: Maybe<Array<Maybe<MetafieldInput>>>
  /**
   * The price of this item, for validating that this matches the actual price in the system,
   * in case the client has stale data.
   */
  price: MoneyInput
  /** The product and chosen options */
  productConfiguration: ProductConfigurationInput
  /** The number of this item to add to the cart */
  quantity: Scalars['Int']
}

/** Represents input for some amount of a single currency */
export type MoneyInput = {
  /** The numeric amount */
  amount: Scalars['Float']
  /** The currency code, for interpreting the `amount` */
  currencyCode: Scalars['String']
}

/** The payload returned from the `addCartItems` mutation call */
export type AddCartItemsPayload = {
  __typename?: 'AddCartItemsPayload'
  /**
   * The modified cart. You should check `incorrectPriceFailures` and `minOrderQuantityFailures` for
   * information necessary to display errors to the shopper. Some items may not have been added.
   */
  cart?: Maybe<Cart>
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /**
   * Clients should check to see if any items failed to be added due to the price not matching the current price.
   * In general, a user interface should display the correct current prices to the shopper, confirm that they still
   * want to add the items, and then call `createCart` or `addCartItems` to do so.
   *
   * Note that this field will always exist but may be an empty array if there were no failures of this type.
   */
  incorrectPriceFailures: Array<Maybe<IncorrectPriceFailureDetails>>
  /**
   * Clients should check to see if any items failed to be added due to quantity being below the minimum order
   * quantity defined for the product variant. In general, a user interface should display the minimum order
   * quantity to the shopper and allow them to add that quantity or greater.
   *
   * Note that this field will always exist but may be an empty array if there were no failures of this type.
   */
  minOrderQuantityFailures: Array<Maybe<MinOrderQuantityFailureDetails>>
}

/** Details about a CartItemInput that failed to be added to a cart due to a price mismatch */
export type IncorrectPriceFailureDetails = {
  __typename?: 'IncorrectPriceFailureDetails'
  /** The current price in the system for this product configuration in the requested currency */
  currentPrice: Money
  /** The productConfiguration that was provided with the CartItemInput that caused this failure */
  productConfiguration: ProductConfiguration
  /** The price that was provided with the CartItemInput that caused this failure */
  providedPrice: Money
}

/** Details about a CartItemInput that failed to be added to a cart due to a quantity error */
export type MinOrderQuantityFailureDetails = {
  __typename?: 'MinOrderQuantityFailureDetails'
  /** The minimum quantity that can be added to a cart */
  minOrderQuantity: Scalars['Int']
  /** The productConfiguration that was provided with the CartItemInput that caused this failure */
  productConfiguration: ProductConfiguration
  /** The quantity that was provided with the CartItemInput that caused this failure */
  quantity: Scalars['Int']
}

/** The input necessary to create a cart */
export type CreateCartInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** Array of items to add to new cart. */
  items: Array<Maybe<CartItemInput>>
  /** ShopId association for the cart. */
  shopId: Scalars['ID']
}

/** The payload returned from the `createCart` mutation call */
export type CreateCartPayload = {
  __typename?: 'CreateCartPayload'
  /**
   * The created cart, if at least one item could be added. Otherwise null, and you should check
   * `incorrectPriceFailures` and `minOrderQuantityFailures` for information necessary to display
   * errors to the shopper.
   */
  cart?: Maybe<Cart>
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /**
   * Clients should check to see if any items failed to be added due to the price not matching the current price.
   * In general, a user interface should display the correct current prices to the shopper, confirm that they still
   * want to add the items, and then call `createCart` or `addCartItems` to do so.
   *
   * Note that this field will always exist but may be an empty array if there were no failures of this type.
   */
  incorrectPriceFailures: Array<Maybe<IncorrectPriceFailureDetails>>
  /**
   * Clients should check to see if any items failed to be added due to quantity being below the minimum order
   * quantity defined for the product variant. In general, a user interface should display the minimum order
   * quantity to the shopper and allow them to add that quantity or greater.
   *
   * Note that this field will always exist but may be an empty array if there were no failures of this type.
   */
  minOrderQuantityFailures: Array<Maybe<MinOrderQuantityFailureDetails>>
  /**
   * If no identity token is provided with the request, then this mutation will create an anonymous cart. All
   * anonymous carts have a token associated with them, which allows the client that created the cart to access
   * that cart in the future. This is the only time this token is returned, so clients must store this securely
   * in some type of local storage solution, and then send it along with all future anonymous cart queries and
   * mutations.
   */
  token?: Maybe<Scalars['String']>
}

/** Input for the `reconcileCarts` mutation call */
export type ReconcileCartsInput = {
  /** An anonymous cart ID */
  anonymousCartId: Scalars['ID']
  /** An anonymous cart token */
  cartToken: Scalars['String']
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /**
   * If both an anonymous cart and a cart for the authenticated account are found, how do we combine them?
   * Default mode is `merge`, where all anonymous items are moved into the account cart along with existing
   * account cart items, and quantities are combined.
   */
  mode?: Maybe<CartReconciliationMode>
  /** The ID of the shop that owns both carts */
  shopId: Scalars['ID']
}

/** Supported cart reconciliation modes */
export enum CartReconciliationMode {
  /** Delete the anonymous cart and use the account cart. */
  KeepAccountCart = 'keepAccountCart',
  /** Assign the anonymous cart to the account, and delete the account cart. */
  KeepAnonymousCart = 'keepAnonymousCart',
  /**
   * Move all items from the anonymous cart into the account cart along with existing
   * account cart items. If the same item is in both carts, combine the quantities.
   */
  Merge = 'merge',
}

/** The payload returned from the `reconcileCarts` mutation call */
export type ReconcileCartsPayload = {
  __typename?: 'ReconcileCartsPayload'
  /** The account cart, potentially modified */
  cart: Cart
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Input for the `removeCartItems` mutation */
export type RemoveCartItemsInput = {
  /** The cart ID */
  cartId: Scalars['ID']
  /** Array of items to remove from the cart. */
  cartItemIds: Array<Maybe<Scalars['ID']>>
  /** If this cart is anonymous, provide the `cartToken` that was returned in the `CreateCartPayload` */
  cartToken?: Maybe<Scalars['String']>
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
}

/** The payload returned from the `removeCartItems` mutation call */
export type RemoveCartItemsPayload = {
  __typename?: 'RemoveCartItemsPayload'
  /** The modified cart */
  cart: Cart
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Input for the `setEmailOnAnonymousCart` mutation call */
export type SetEmailOnAnonymousCartInput = {
  /** An anonymous cart ID */
  cartId: Scalars['ID']
  /** Provide the `cartToken` that was returned in the `CreateCartPayload` */
  cartToken: Scalars['String']
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /**
   * The email address to associate with this cart. This address is used for order communication and
   * other fulfillment purposes.
   */
  email: Scalars['String']
}

/** The payload returned from the `setEmailOnAnonymousCart` mutation call */
export type SetEmailOnAnonymousCartPayload = {
  __typename?: 'SetEmailOnAnonymousCartPayload'
  /** The modified cart */
  cart: Cart
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Input for the `updateCartItemsQuantity` mutation */
export type UpdateCartItemsQuantityInput = {
  /** The cart ID */
  cartId: Scalars['ID']
  /** If this cart is anonymous, provide the `cartToken` that was returned in the `CreateCartPayload` */
  cartToken?: Maybe<Scalars['String']>
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** Array of cart item quantities to update. */
  items: Array<Maybe<UpdateCartItemInput>>
}

/** Input for the `updateCartItem` mutation */
export type UpdateCartItemInput = {
  /** The cart item ID */
  cartItemId: Scalars['ID']
  /** New absolute value for specified cart item's quantity. Not an incremental value. */
  quantity: Scalars['Int']
}

/** The payload returned from the `updateCartItemsQuantity` mutation call */
export type UpdateCartItemsQuantityPayload = {
  __typename?: 'UpdateCartItemsQuantityPayload'
  /** The modified cart */
  cart: Cart
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Input needed to select a fulfillment option for a single fulfillment group on a cart */
export type SelectFulfillmentOptionForGroupInput = {
  /** The cart to select this option for */
  cartId: Scalars['ID']
  /** The token for the cart, required if it is an anonymous cart */
  cartToken?: Maybe<Scalars['String']>
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The group to select this option for */
  fulfillmentGroupId: Scalars['ID']
  /** The fulfillment method ID from the option the shopper selected */
  fulfillmentMethodId: Scalars['ID']
}

/** The response from the `selectFulfillmentOptionForGroup` mutation */
export type SelectFulfillmentOptionForGroupPayload = {
  __typename?: 'SelectFulfillmentOptionForGroupPayload'
  /** The updated Cart */
  cart: Cart
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Input needed when setting the shipping address on a cart */
export type SetShippingAddressOnCartInput = {
  /** The shipping address */
  address: AddressInput
  /** If set, this will be saved as the Address._id. Otherwise an ID will be generated. */
  addressId?: Maybe<Scalars['String']>
  /** The cart to set shipping address on */
  cartId: Scalars['ID']
  /** The token for the cart, required if it is an anonymous cart */
  cartToken?: Maybe<Scalars['String']>
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
}

/** The response from the `setShippingAddressOnCart` mutation */
export type SetShippingAddressOnCartPayload = {
  __typename?: 'SetShippingAddressOnCartPayload'
  /** The updated Cart */
  cart: Cart
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** A request to update the available fulfillment options for a single fulfillment group */
export type UpdateFulfillmentOptionsForGroupInput = {
  /** The cart to update fulfillment options for */
  cartId: Scalars['ID']
  /** The token for the cart, required if it is an anonymous cart */
  cartToken?: Maybe<Scalars['String']>
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The group to update fulfillment options for */
  fulfillmentGroupId: Scalars['ID']
}

/** The response from the `updateFulfillmentOptionsForGroup` mutation */
export type UpdateFulfillmentOptionsForGroupPayload = {
  __typename?: 'UpdateFulfillmentOptionsForGroupPayload'
  /** The updated Cart */
  cart: Cart
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Input for the addOrderFulfillmentGroup mutation */
export type AddOrderFulfillmentGroupInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The order fulfillment group input, used to build the new group */
  fulfillmentGroup: OrderFulfillmentGroupExistingOrderInput
  /** Optional list of order item IDs that should be moved from an existing group to the new group */
  moveItemIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** ID of the order that has the item you want to add the group to */
  orderId: Scalars['ID']
}

/** Similar to `OrderFulfillmentGroupInput` but `items` can be omitted if moving existing items to the new group */
export type OrderFulfillmentGroupExistingOrderInput = {
  /** Information needed by the selected fulfillment method to properly fulfill the order */
  data?: Maybe<OrderFulfillmentGroupDataInput>
  /** The list of items to be ordered */
  items?: Maybe<Array<Maybe<OrderFulfillmentGroupItemInput>>>
  /** The ID of the fulfillment method to be used for this order group */
  selectedFulfillmentMethodId: Scalars['ID']
  /** The shop that owns these items and needs to fulfill this part of the order */
  shopId: Scalars['ID']
  /**
   * The total price of the items, fulfillment, and taxes, for this group, less any discounts, in the
   * `order.currencyCode` currency. This value is not trusted; the actual total is calculated by the
   * Order service. However, providing this value prevents an order being created for an amount that
   * does not match what was shown to the shopper in order preview.
   */
  totalPrice?: Maybe<Scalars['Float']>
  /** The fulfillment type. Any valid type that has been registered by a fulfillment plugin. Examples: `shipping`, `digital` */
  type: FulfillmentType
}

/** Information needed by the selected fulfillment method to properly fulfill the order */
export type OrderFulfillmentGroupDataInput = {
  /** The mailing address to which this fulfillment group should be shipped */
  shippingAddress?: Maybe<AddressInput>
}

/** Input for an `OrderFulfillmentGroupItem` */
export type OrderFulfillmentGroupItemInput = {
  /** The date and time at which this item was first added to the source cart, if this is something you want to track */
  addedAt?: Maybe<Scalars['DateTime']>
  /**
   * The price of the item, in the `order.currencyCode` currency. This value is not trusted; the actual price
   * is confirmed by the Order service. However, providing this value prevents an order being created for an
   * amount that does not match what was shown to the shopper in order preview.
   */
  price: Scalars['Float']
  /** The product and chosen options */
  productConfiguration: ProductConfigurationInput
  /** The desired quantity of this item. This must be a positive integer. */
  quantity: Scalars['Int']
}

/** Response payload for the addOrderFulfillmentGroup mutation */
export type AddOrderFulfillmentGroupPayload = {
  __typename?: 'AddOrderFulfillmentGroupPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of the added fulfillment group */
  newFulfillmentGroupId: Scalars['ID']
  /** The updated order */
  order: Order
}

/** Input for the cancelOrderItem mutation */
export type CancelOrderItemInput = {
  /** Quantity to cancel. Must be equal to or less than the item quantity. */
  cancelQuantity: Scalars['Int']
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of the item order you want to cancel */
  itemId: Scalars['ID']
  /** ID of the order that has the item you want to cancel */
  orderId: Scalars['ID']
  /**
   * An optional free text reason for cancellation, which may be shown to operators
   * or to the user who placed the order.
   */
  reason?: Maybe<Scalars['String']>
}

/** Response payload for the cancelOrderItem mutation */
export type CancelOrderItemPayload = {
  __typename?: 'CancelOrderItemPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated order */
  order: Order
}

/** Input for the cancelOrderItem mutation */
export type CreateRefundInput = {
  /** Amount to cancel. Must be equal to or less than the remaining non-refunded payment amount for this payment method. */
  amount: Scalars['Float']
  /** ID of the order that has the item you want to cancel */
  orderId: Scalars['ID']
  /** ID of the payment that you want to refund */
  paymentId: Scalars['ID']
  /**
   * An optional free text reason for refund, which may be shown to operators
   * or to the user who requested the refund.
   */
  reason?: Maybe<Scalars['String']>
}

/** Response payload for the createRefund mutation */
export type CreateRefundPayload = {
  __typename?: 'CreateRefundPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated order */
  order: Order
}

/** Input for the moveOrderItems mutation */
export type MoveOrderItemsInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The ID of the order fulfillment group from which all the items are to be moved. */
  fromFulfillmentGroupId: Scalars['ID']
  /** The list of item IDs to move. The full quantity must be moved. */
  itemIds: Array<Maybe<Scalars['ID']>>
  /** ID of the order that has the items you want to move */
  orderId: Scalars['ID']
  /** The ID of the order fulfillment group to which all the items are to be moved. */
  toFulfillmentGroupId: Scalars['ID']
}

/** Response payload for the moveOrderItems mutation */
export type MoveOrderItemsPayload = {
  __typename?: 'MoveOrderItemsPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated order */
  order: Order
}

/** Input for the placeOrder mutation */
export type PlaceOrderInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The order to be placed, if payment is accepted */
  order: OrderInput
  /**
   * The information necessary to pay. Collect this information from the shopper during a checkout flow.
   * You need not provide any payment input if the total is zero.
   * The total of all payment input `amount` fields must add up to the order total. The first payment
   * method where the `amount` field is `null` will be charged the remainder due.
   */
  payments?: Maybe<Array<Maybe<PaymentInput>>>
}

/** Input for placing an order */
export type OrderInput = {
  /**
   * The ID of the cart that is becoming an order. This is optional, and you can create an order without ever
   * creating a cart. If you do have a cart, there are two good reasons to provide this. First, it serves as a
   * reference. Second, it allows the Cart service to automatically delete the related cart after the order is
   * created.
   */
  cartId?: Maybe<Scalars['String']>
  /** The code for the currency in which all values are being provided */
  currencyCode: Scalars['String']
  /**
   * An email address to use for order tracking and correspondence. If a logged in user is placing an order,
   * we recommend that you use their "orders" email address, if they have one, or their default email address.
   * Or you can ask them to provide any email address.
   */
  email: Scalars['String']
  /**
   * One or more fulfillment groups for the order. These are the actual orders that need to be fulfilled,
   * separate by shop, fulfillment type, and shipping origin or destination.
   */
  fulfillmentGroups: Array<Maybe<OrderFulfillmentGroupInput>>
  /**
   * The shop through which the order should be placed. Payment settings from this shop will be used. Note that
   * each fulfillment group also has a shop ID, which represents the shop that needs to fulfill that part of the
   * order, and those shop IDs may or may not match this one.
   */
  shopId: Scalars['String']
  /** The language used to place the order */
  ordererPreferredLanguage?: Maybe<Scalars['String']>
  /** Additional order fields */
  customFields?: Maybe<CustomOrderFieldsInput>
}

/** Input for an `OrderFulfillmentGroup` */
export type OrderFulfillmentGroupInput = {
  /** Information needed by the selected fulfillment method to properly fulfill the order */
  data?: Maybe<OrderFulfillmentGroupDataInput>
  /** The list of items to be ordered */
  items: Array<Maybe<OrderFulfillmentGroupItemInput>>
  /** The ID of the fulfillment method to be used for this order group */
  selectedFulfillmentMethodId: Scalars['ID']
  /** The shop that owns these items and needs to fulfill this part of the order */
  shopId: Scalars['ID']
  /**
   * The total price of the items, fulfillment, and taxes, for this group, less any discounts, in the
   * `order.currencyCode` currency. This value is not trusted; the actual total is calculated by the
   * Order service. However, providing this value prevents an order being created for an amount that
   * does not match what was shown to the shopper in order preview.
   */
  totalPrice?: Maybe<Scalars['Float']>
  /** The fulfillment type. Any valid type that has been registered by a fulfillment plugin. Examples: `shipping`, `digital` */
  type: FulfillmentType
}

/** Additional order fields */
export type CustomOrderFieldsInput = {
  /** The customer identification */
  customerNumberIdentification?: Maybe<Scalars['String']>
}

/** Input for adding order payments */
export type PaymentInput = {
  /**
   * Amount to charge, which must be less than or equal to the order total. This is assumed
   * to be in the same currency as the order. Set to `null` to charge the remaining amount
   * to this payment method, which might be the full order total if this is the only payment.
   */
  amount: Scalars['Float']
  /**
   * The billing address entered by the shopper. If omitted, the billing address on the order input
   * will be used. Some payment methods may not require a billing address but others will fail
   * authorization without one, so be sure that client UI code is aware of which payment methods
   * require collecting one.
   */
  billingAddress?: Maybe<AddressInput>
  /** Any additional user-provided input necessary to authorize and capture the payment */
  data?: Maybe<Scalars['JSONObject']>
  /** The name of the payment method to use for this payment */
  method: PaymentMethodName
}

/** The name of a payment method, which is how payment methods are keyed */
export enum PaymentMethodName {
  /** No payment method */
  None = 'none',
  /** Stripe Card payment method */
  StripeCard = 'stripe_card',
  /** IOU Example payment method */
  IouExample = 'iou_example',
  /** Epayco Credit payment method */
  EpaycoCredit = 'epayco_credit',
  /** Epayco type payment */
  EpaycoDebit = 'epayco_debit',
  /** Epayco type payment */
  EpaycoCash = 'epayco_cash',
  /** Nequi QR Code payment method */
  Nequi = 'nequi',
  /** BitPay payment method */
  Bitpay = 'bitpay',
}

/** Response payload for the placeOrder mutation */
export type PlaceOrderPayload = {
  __typename?: 'PlaceOrderPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** Orders that were created */
  orders: Array<Maybe<Order>>
  /** If you are not logged in, this will be a token that can be used for future requests */
  token?: Maybe<Scalars['String']>
}

/** Input for the splitOrderItem mutation */
export type SplitOrderItemInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of the item order you want to split */
  itemId: Scalars['ID']
  /** The quantity that will be transferred to a new order item on the same fulfillment group. */
  newItemQuantity: Scalars['Int']
  /** ID of the order that has the item you want to split */
  orderId: Scalars['ID']
}

/** Response payload for the splitOrderItem mutation */
export type SplitOrderItemPayload = {
  __typename?: 'SplitOrderItemPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The ID of the new order item that was created */
  newItemId: Scalars['ID']
  /** The updated order */
  order: Order
}

/** Input for the updateOrder mutation */
export type UpdateOrderInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** Set the order email to this */
  email?: Maybe<Scalars['String']>
  /** ID of the order to update */
  orderId: Scalars['ID']
  /** Set the current order status to this */
  status?: Maybe<Scalars['String']>
}

/** Response payload for the updateOrder mutation */
export type UpdateOrderPayload = {
  __typename?: 'UpdateOrderPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated order */
  order: Order
}

/** Input for the updateOrderFulfillmentGroup mutation */
export type UpdateOrderFulfillmentGroupInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of the order fulfillment group to update */
  orderFulfillmentGroupId: Scalars['ID']
  /** ID of the order to update */
  orderId: Scalars['ID']
  /** Set the current order fulfillment group status to this */
  status?: Maybe<Scalars['String']>
  /** Set this as the current order fulfillment group shipment tracking reference */
  tracking?: Maybe<Scalars['String']>
  /** Set this as the current order fulfillment group shipment tracking URL */
  trackingUrl?: Maybe<Scalars['String']>
}

/** Response payload for the updateOrderFulfillmentGroup mutation */
export type UpdateOrderFulfillmentGroupPayload = {
  __typename?: 'UpdateOrderFulfillmentGroupPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated order */
  order: Order
}

/** Input for the `approveOrderPayments` mutation */
export type ApproveOrderPaymentsInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The order ID */
  orderId: Scalars['ID']
  /** The IDs of one or more payments to approve for this order */
  paymentIds: Array<Maybe<Scalars['ID']>>
  /** The ID of the shop that owns this order */
  shopId: Scalars['ID']
}

/** Response from the `approveOrderPayments` mutation */
export type ApproveOrderPaymentsPayload = {
  __typename?: 'ApproveOrderPaymentsPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated order */
  order: Order
}

/** Input for the `captureOrderPayments` mutation */
export type CaptureOrderPaymentsInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The order ID */
  orderId: Scalars['ID']
  /** The IDs of one or more payments to capture for this order */
  paymentIds: Array<Maybe<Scalars['ID']>>
  /** The ID of the shop that owns this order */
  shopId: Scalars['ID']
}

/** Response from the `captureOrderPayments` mutation */
export type CaptureOrderPaymentsPayload = {
  __typename?: 'CaptureOrderPaymentsPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated order */
  order: Order
}

/** Input for the `enablePaymentMethodForShop` mutation */
export type EnablePaymentMethodForShopInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** True to enable it or false to disable it */
  isEnabled: Scalars['Boolean']
  /** The name of the payment method to enable or disable */
  paymentMethodName: Scalars['String']
  /** The ID of the shop for which this payment method should be enabled or disabled */
  shopId: Scalars['ID']
}

/** Response payload for the `enablePaymentMethodForShop` mutation */
export type EnablePaymentMethodForShopPayload = {
  __typename?: 'EnablePaymentMethodForShopPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The full list of payment methods for the shop */
  paymentMethods: Array<Maybe<PaymentMethod>>
}

/** Describes the input for creating a discount code */
export type CreateDiscountCodeInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The discount code to update */
  discountCode?: Maybe<DiscountCodeInput>
  /** The shop ID of the discount code to update */
  shopId: Scalars['ID']
}

/** Input type for a discount code */
export type DiscountCodeInput = {
  /** How the discount should be applied */
  calculation?: Maybe<DiscountCalculationInput>
  /** Discount Code */
  code: Scalars['String']
  /** Discount code conditions */
  conditions?: Maybe<DiscountConditionsInput>
  /** Description to describe the discount code */
  description?: Maybe<Scalars['String']>
  /**
   * Discount is allowed to be string or number.
   * it's a formula value (could be shipping code)
   */
  discount?: Maybe<Scalars['String']>
  /** Discount method type */
  discountMethod?: Maybe<DiscountMethod>
  /** Label to describe the code */
  label?: Maybe<Scalars['String']>
  /** History of transactions */
  transactions?: Maybe<Array<Maybe<DiscountTransactionInput>>>
}

/** Input type for discount calculation */
export type DiscountCalculationInput = {
  /** Discount code calculation method */
  method?: Maybe<DiscountCalculationMethod>
}

/** Discount conditions input type */
export type DiscountConditionsInput = {
  /** Account Limit */
  accountLimit?: Maybe<Scalars['Int']>
  /** Audience that may apply this discount code */
  audience?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Is this discount code enabled */
  enabled: Scalars['Boolean']
  /** Order conditions */
  order?: Maybe<DiscountConditionOrderInput>
  /** Permissions that may apply this discount code */
  permissions?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Products that may apply this discount code */
  products?: Maybe<Array<Maybe<Scalars['String']>>>
  /**
   * Number of times this code may be redeemed.
   * Setting to 100 means the first 100 customers may apply this code.
   * Setting this value to 0 will allow this code to be applied an infinite number of times.
   */
  redemptionLimit?: Maybe<Scalars['Int']>
  /** Tags that may be apply this discount code */
  tags?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Discount order conditions input type */
export type DiscountConditionOrderInput = {
  /** Order date range end */
  endDate?: Maybe<Scalars['DateTime']>
  /** Maximum order value */
  max?: Maybe<Scalars['Float']>
  /** Minimum order value */
  min: Scalars['Float']
  /** Order date range start */
  startDate?: Maybe<Scalars['DateTime']>
}

/** Discount transation input type */
export type DiscountTransactionInput = {
  /** Date the code was applied */
  appliedAt?: Maybe<Scalars['DateTime']>
  /** Cart id */
  cartId: Scalars['String']
  /** User id */
  userId: Scalars['String']
}

/** The response from the `createDiscountCode` mutation */
export type CreateDiscountCodePayload = {
  __typename?: 'CreateDiscountCodePayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The created discount code */
  discountCode?: Maybe<DiscountCode>
}

/** Describes the input for updating a discount code */
export type UpdateDiscountCodeInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The discount code to update */
  discountCode?: Maybe<DiscountCodeInput>
  /** The ID of the discount code to update */
  discountCodeId: Scalars['ID']
  /** The shop ID of the discount code to update */
  shopId: Scalars['ID']
}

/** The response from the `updateDiscountCode` mutation */
export type UpdateDiscountCodePayload = {
  __typename?: 'UpdateDiscountCodePayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated discount code */
  discountCode?: Maybe<DiscountCode>
}

/** Describes the input for removing a discount code */
export type DeleteDiscountCodeInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The discount code ID */
  discountCodeId: Scalars['ID']
  /** Shop ID */
  shopId: Scalars['ID']
}

/** The response from the `deleteDiscountCode` mutation */
export type DeleteDiscountCodePayload = {
  __typename?: 'DeleteDiscountCodePayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The deleted discount code */
  discountCode?: Maybe<DiscountCode>
}

/** Input for an `ApplyDiscountCodeToCartInput` */
export type ApplyDiscountCodeToCartInput = {
  /** Cart to add discount to */
  cartId: Scalars['ID']
  /** Discount code to add to cart */
  discountCode: Scalars['String']
  /** Shop cart belongs to */
  shopId: Scalars['ID']
  /** Cart token, if anonymous */
  token?: Maybe<Scalars['String']>
}

/** Response from the `applyDiscountCodeToCart` mutation */
export type ApplyDiscountCodeToCartPayload = {
  __typename?: 'ApplyDiscountCodeToCartPayload'
  /** The updated cart with discount code applied */
  cart: Cart
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Input for an `RemoveDiscountCodeFromCartInput` */
export type RemoveDiscountCodeFromCartInput = {
  /** Cart to add discount to */
  cartId: Scalars['ID']
  /** ID of the discount you want to remove from the cart */
  discountId: Scalars['ID']
  /** Shop cart belongs to */
  shopId: Scalars['ID']
  /** Cart token, if anonymous */
  token?: Maybe<Scalars['String']>
}

/** Response from the `removeDiscountCodeFromCart` mutation */
export type RemoveDiscountCodeFromCartPayload = {
  __typename?: 'RemoveDiscountCodeFromCartPayload'
  /** The updated cart with discount code removed */
  cart: Cart
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Input for the `CreateSurcharge` mutation */
export type CreateSurchargeInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The shop to create this surcharge for */
  shopId: Scalars['ID']
  /** This defines the surcharge that you want to create */
  surcharge: SurchargeInput
}

/** Defines a surcharge. */
export type SurchargeInput = {
  /** Amount. */
  amount: Scalars['Float']
  /** Attribute restrictions. */
  attributes?: Maybe<Array<Maybe<SurchargeAttributeRestrictionsInput>>>
  /** Destination restrictions. */
  destination?: Maybe<SurchargeDestinationRestrictionsInput>
  /** Messages by language. */
  messagesByLanguage: Array<Maybe<MessagesByLanguageInput>>
  /** Method IDs to apply this surcharge to. */
  methodIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** The type of this surcharge. Allowed types are `surcharge`. */
  type: SurchargeTypeEnum
}

/** Input to add a surcharge attribute restriction */
export type SurchargeAttributeRestrictionsInput = {
  /** The operator to use for value comparison */
  operator?: Maybe<Scalars['String']>
  /** The property to check */
  property?: Maybe<Scalars['String']>
  /** The type of this property */
  propertyType?: Maybe<SurchargePropertyType>
  /** The value to check for */
  value?: Maybe<Scalars['String']>
}

/** Input to add a surcharge destination restriction */
export type SurchargeDestinationRestrictionsInput = {
  /** Restrict for any of these destination countries */
  country?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Restrict for any of these destination postal codes */
  postal?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Restrict for any of these destination regions */
  region?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Input to add a surcharge message with language */
export type MessagesByLanguageInput = {
  /** The message for this language */
  content: Scalars['String']
  /** The language code */
  language: Scalars['String']
}

/** Response from the `CreateSurcharge` mutation */
export type CreateSurchargePayload = {
  __typename?: 'CreateSurchargePayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The created surcharge */
  surcharge: Surcharge
}

/** Input for the `deleteSurcharge` mutation */
export type DeleteSurchargeInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The shop that owns the method */
  shopId: Scalars['ID']
  /** The ID of the flat rate fulfillment method you want to delete */
  surchargeId: Scalars['ID']
}

/** Response from the `deleteSurcharge` mutation */
export type DeleteSurchargePayload = {
  __typename?: 'DeleteSurchargePayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The removed fulfillment method */
  surcharge: Surcharge
}

/** Input for the `updateSurcharge` mutation */
export type UpdateSurchargeInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The shop that owns the method */
  shopId: Scalars['ID']
  /** The updated surcharge. Pass the whole updated surcharge object without the ID. */
  surcharge: SurchargeInput
  /** The ID of the flat rate fulfillment surcharge you want to update */
  surchargeId: Scalars['ID']
}

/** Response from the `updateFlatRateFulfillmentMethod` mutation */
export type UpdateSurchargePayload = {
  __typename?: 'UpdateSurchargePayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated fulfillment surcharge */
  surcharge: Surcharge
}

/** Input for the `createFlatRateFulfillmentMethod` mutation */
export type CreateFlatRateFulfillmentMethodInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** This defines the flat rate fulfillment method that you want to create */
  method: FlatRateFulfillmentMethodInput
  /** The shop to create this flat rate fulfillment method for */
  shopId: Scalars['ID']
}

/** Defines a fulfillment method that has a fixed price. This type is provided by the `flat-rate` fulfillment plugin. */
export type FlatRateFulfillmentMethodInput = {
  /** The cost of this fulfillment method to the shop, if you track this */
  cost?: Maybe<Scalars['Float']>
  /** The fulfillment types for which this method may be used. For example, `shipping` or `digital`. */
  fulfillmentTypes: Array<Maybe<FulfillmentType>>
  /** The group to which this method belongs */
  group: Scalars['String']
  /** A fixed price to charge for handling costs when this fulfillment method is selected for an order */
  handling: Scalars['Float']
  /** Include this as a fulfillment option shown to shoppers during checkout? */
  isEnabled: Scalars['Boolean']
  /** The name of this method, for display in the user interface */
  label: Scalars['String']
  /** The name of this method, a unique identifier */
  name: Scalars['String']
  /** A fixed price to charge for fulfillment costs when this fulfillment method is selected for an order */
  rate: Scalars['Float']
}

/** Response from the `createFlatRateFulfillmentMethod` mutation */
export type CreateFlatRateFulfillmentMethodPayload = {
  __typename?: 'CreateFlatRateFulfillmentMethodPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The created fulfillment method */
  method: FlatRateFulfillmentMethod
}

/** Input for the `updateFlatRateFulfillmentMethod` mutation */
export type UpdateFlatRateFulfillmentMethodInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated method. Pass the whole updated method object without the ID. */
  method: FlatRateFulfillmentMethodInput
  /** The ID of the flat rate fulfillment method you want to update */
  methodId: Scalars['ID']
  /** The shop that owns the method */
  shopId: Scalars['ID']
}

/** Response from the `updateFlatRateFulfillmentMethod` mutation */
export type UpdateFlatRateFulfillmentMethodPayload = {
  __typename?: 'UpdateFlatRateFulfillmentMethodPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated fulfillment method */
  method: FlatRateFulfillmentMethod
}

/** Input for the `deleteFlatRateFulfillmentMethod` mutation */
export type DeleteFlatRateFulfillmentMethodInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The ID of the flat rate fulfillment method you want to delete */
  methodId: Scalars['ID']
  /** The shop that owns the method */
  shopId: Scalars['ID']
}

/** Response from the `deleteFlatRateFulfillmentMethod` mutation */
export type DeleteFlatRateFulfillmentMethodPayload = {
  __typename?: 'DeleteFlatRateFulfillmentMethodPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The removed fulfillment method */
  method: FlatRateFulfillmentMethod
}

/** Input for the `CreateFlatRateFulfillmentRestriction` mutation */
export type CreateFlatRateFulfillmentRestrictionInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** This defines the flat rate fulfillment method restriction that you want to create */
  restriction: FlatRateFulfillmentRestrictionInput
  /** The shop to create this flat rate fulfillment method restriction for */
  shopId: Scalars['ID']
}

/** Defines the input for a flat rate fulfillment method restriction. */
export type FlatRateFulfillmentRestrictionInput = {
  /** Attribute restrictions. Multiple attribute restrictions are evaluated with AND. If both destination and attribute restrictions are present, they evaluate with AND. */
  attributes?: Maybe<Array<Maybe<AttributeRestrictionsInput>>>
  /** Destination restrictions. If multiple destination restrictions are present, the most localized is the only one evaluated (i.e. evaluate postal if present, then region if present, then country). If both destination and attribute restrictions are present, they evaluate with AND. */
  destination?: Maybe<DestinationRestrictionsInput>
  /** Method IDs to apply this restriction to. If none, applies to all methods as a universal restriction. */
  methodIds?: Maybe<Array<Maybe<Scalars['ID']>>>
  /** The type of this restriction. Allowed types are `allow` or `deny`. */
  type: RestrictionTypeEnum
}

/** Input to create an attribute restriction condition */
export type AttributeRestrictionsInput = {
  /** The operator to use for value comparison */
  operator: Scalars['String']
  /** The property to check */
  property: Scalars['String']
  /** The type of this property */
  propertyType: Scalars['String']
  /** The value to check for */
  value: Scalars['String']
}

/** Input for a destination restriction condition */
export type DestinationRestrictionsInput = {
  /** Restrict for any of these destination countries */
  country?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Restrict for any of these destination postal codes */
  postal?: Maybe<Array<Maybe<Scalars['String']>>>
  /** Restrict for any of these destination regions */
  region?: Maybe<Array<Maybe<Scalars['String']>>>
}

/** Response from the `CreateFlatRateFulfillmentRestriction` mutation */
export type CreateFlatRateFulfillmentRestrictionPayload = {
  __typename?: 'CreateFlatRateFulfillmentRestrictionPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The created flat rate fulfillment method restriction */
  restriction: FlatRateFulfillmentRestriction
}

/** Input for the `deleteFlatRateFulfillmentRestriction` mutation */
export type DeleteFlatRateFulfillmentRestrictionInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The ID of the flat rate fulfillment method restriction you want to delete */
  restrictionId: Scalars['ID']
  /** The shop that owns the flat rate fulfillment method restriction */
  shopId: Scalars['ID']
}

/** Response from the `deleteFlatRateFulfillmentRestriction` mutation */
export type DeleteFlatRateFulfillmentRestrictionPayload = {
  __typename?: 'DeleteFlatRateFulfillmentRestrictionPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The removed flat rate fulfillment method restriction */
  restriction: FlatRateFulfillmentRestriction
}

/** Input for the `updateFlatRateFulfillmentRestriction` mutation */
export type UpdateFlatRateFulfillmentRestrictionInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated flat rate fulfillment method restriction. Pass the whole updated restriction object without the ID. */
  restriction: FlatRateFulfillmentRestrictionInput
  /** The ID of the flat rate fulfillment method restriction you want to update */
  restrictionId: Scalars['ID']
  /** The shop that owns the flat rate fulfillment method restriction */
  shopId: Scalars['ID']
}

/** Response from the `updateFlatRateFulfillmentMethod` mutation */
export type UpdateFlatRateFulfillmentRestrictionPayload = {
  __typename?: 'UpdateFlatRateFulfillmentRestrictionPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated flat rate fulfillment method restriction */
  restriction: FlatRateFulfillmentRestriction
}

/** The input for creating a tax rate */
export type CreateTaxRateInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** An optional country code to limit where this tax is applied based on destination address */
  country?: Maybe<Scalars['String']>
  /** An optional postal code to limit where this tax is applied based on destination address */
  postal?: Maybe<Scalars['String']>
  /** The tax rate. For example, 0.05 for a 5% sales tax. */
  rate: Scalars['Float']
  /** An optional region (e.g., state) to limit where this tax is applied based on destination address */
  region?: Maybe<Scalars['String']>
  /** Shop ID */
  shopId: Scalars['ID']
  /** Whether the `country`, `postal`, and `region` filters apply to the origin address or the destination address */
  sourcing?: Maybe<TaxSource>
  /** An optional tax code, to apply this tax rate to only products that have this tax code */
  taxCode?: Maybe<Scalars['String']>
}

/** The response from the `createTaxRate` mutation */
export type CreateTaxRatePayload = {
  __typename?: 'CreateTaxRatePayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The created tax rate */
  taxRate: TaxRate
}

/**
 * The input for updating a tax rate. Note that missing values will cause the field to be cleared, so
 * send all optional fields with every request unless they aren't currently set or you intend to clear them.
 */
export type UpdateTaxRateInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** An optional country code to limit where this tax is applied based on destination address */
  country?: Maybe<Scalars['String']>
  /** An optional postal code to limit where this tax is applied based on destination address */
  postal?: Maybe<Scalars['String']>
  /** The tax rate. For example, 0.05 for a 5% sales tax. */
  rate: Scalars['Float']
  /** An optional region (e.g., state) to limit where this tax is applied based on destination address */
  region?: Maybe<Scalars['String']>
  /** Shop ID */
  shopId: Scalars['ID']
  /** Whether the `country`, `postal`, and `region` filters apply to the origin address or the destination address */
  sourcing?: Maybe<TaxSource>
  /** An optional tax code, to apply this tax rate to only products that have this tax code */
  taxCode?: Maybe<Scalars['String']>
  /** ID of the tax rate you want to update */
  taxRateId: Scalars['ID']
}

/** The response from the `updateTaxRate` mutation */
export type UpdateTaxRatePayload = {
  __typename?: 'UpdateTaxRatePayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated tax rate */
  taxRate: TaxRate
}

/** Describes the input for removing a tax rate */
export type DeleteTaxRateInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** Shop ID */
  shopId: Scalars['ID']
  /** The tax rate ID */
  taxRateId: Scalars['ID']
}

/** The response from the `deleteTaxRate` mutation */
export type DeleteTaxRatePayload = {
  __typename?: 'DeleteTaxRatePayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The deleted tax rate */
  taxRate: TaxRate
}

/** Input for the `createNavigationItem` mutation */
export type CreateNavigationItemInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The navigation item to create */
  navigationItem: NavigationItemInput
}

/** NavigationItem input */
export type NavigationItemInput = {
  /** The draft/unpublished data for this navigation item */
  draftData?: Maybe<NavigationItemDataInput>
  /** An object storing additional metadata about the navigation item (such as its related tag) */
  metadata?: Maybe<Scalars['JSONObject']>
  /** Shop ID of the navigation item */
  shopId: Scalars['ID']
}

/** NavigationItemData input */
export type NavigationItemDataInput = {
  /** CSS class names to add to the menu item for display */
  classNames?: Maybe<Scalars['String']>
  /** The content for the navigation item, in one or more languages */
  content?: Maybe<Array<Maybe<NavigationItemContentInput>>>
  /** Whether the provided URL is relative or external */
  isUrlRelative?: Maybe<Scalars['Boolean']>
  /** Whether the navigation item should trigger a new tab/window to open when clicked */
  shouldOpenInNewWindow?: Maybe<Scalars['Boolean']>
  /** The URL for the navigation item to link to */
  url?: Maybe<Scalars['String']>
}

/** NavigationItem content input */
export type NavigationItemContentInput = {
  /** The language of the piece of navigation content */
  language: Scalars['String']
  /** The translated value, in plain text or markdown */
  value?: Maybe<Scalars['String']>
}

/** Response payload for the `createNavigationItem` mutation */
export type CreateNavigationItemPayload = {
  __typename?: 'CreateNavigationItemPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The created navigation item */
  navigationItem?: Maybe<NavigationItem>
}

/** Input for the `createNavigationTree` mutation */
export type CreateNavigationTreeInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The draft navigation items that make up this tree */
  draftItems?: Maybe<Array<Maybe<NavigationTreeItemInput>>>
  /** The name of the tree, for operator display purposes */
  name: Scalars['String']
  /** The ID of the shop this navigation tree belongs to */
  shopId: Scalars['ID']
}

/** NavigationTree item input */
export type NavigationTreeItemInput = {
  /** Whether the navigation item should display its children */
  expanded?: Maybe<Scalars['Boolean']>
  /** Whether the navigation item should be hidden from customers */
  isPrivate?: Maybe<Scalars['Boolean']>
  /** Whether the navigaton item is a secondary navigation item */
  isSecondary?: Maybe<Scalars['Boolean']>
  /** Whether the navigation ttem should shown in query results for customers and admins */
  isVisible?: Maybe<Scalars['Boolean']>
  /** The child navigation items */
  items?: Maybe<Array<Maybe<NavigationTreeItemInput>>>
  /** The ID of the navigation item */
  navigationItemId: Scalars['ID']
}

/** Response payload for the `createNavigationTree` mutation */
export type CreateNavigationTreePayload = {
  __typename?: 'CreateNavigationTreePayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The created navigation tree */
  navigationTree: NavigationTree
}

/** Input for the `deleteNavigationItem` mutation */
export type DeleteNavigationItemInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The ID of the navigation item to delete */
  id: Scalars['ID']
  /** The ID of the shop navigation item belongs to */
  shopId: Scalars['ID']
}

/** Response payload for the `deleteNavigationItem` mutation */
export type DeleteNavigationItemPayload = {
  __typename?: 'DeleteNavigationItemPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The deleted navigation item */
  navigationItem?: Maybe<NavigationItem>
}

/** Input for the `publishNavigationChanges` mutation */
export type PublishNavigationChangesInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The ID of the navigation tree */
  id: Scalars['ID']
  /** Shop ID of the navigation tree */
  shopId: Scalars['ID']
}

/** Response payload for the `publishNavigationChanges` mutation */
export type PublishNavigationChangesPayload = {
  __typename?: 'PublishNavigationChangesPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The navigation tree with updated items */
  navigationTree?: Maybe<NavigationTree>
}

/** Input for the `updateNavigationItem` mutation */
export type UpdateNavigationItemInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The ID of the navigation item to update */
  id: Scalars['ID']
  /** The field updates to apply */
  navigationItem: NavigationItemInput
  /** The ID of the shop navigation item belongs to */
  shopId: Scalars['ID']
}

/** Response payload for the `updateNavigationItem` mutation */
export type UpdateNavigationItemPayload = {
  __typename?: 'UpdateNavigationItemPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated navigation item */
  navigationItem?: Maybe<NavigationItem>
}

/** Input for the `updateNavigationTree` mutation */
export type UpdateNavigationTreeInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The ID of the navigation tree to update */
  id: Scalars['ID']
  /** The field updates to apply */
  navigationTree: NavigationTreeInput
  /** The ID of the shop navigation item belongs to */
  shopId: Scalars['ID']
}

/** NavigationTree input */
export type NavigationTreeInput = {
  /** The draft navigation items that make up this tree */
  draftItems?: Maybe<Array<Maybe<NavigationTreeItemInput>>>
  /** The name of the tree, for operator display purposes */
  name?: Maybe<Scalars['String']>
}

/** Response payload for the `updateNavigationTree` mutation */
export type UpdateNavigationTreePayload = {
  __typename?: 'UpdateNavigationTreePayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated navigation tree */
  navigationTree?: Maybe<NavigationTree>
}

/** Input for the `generateSitemaps` mutation */
export type GenerateSitemapsInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The ID of the shop to generate sitemap for */
  shopId: Scalars['ID']
}

/** Response for the `generateSitemaps` mutation */
export type GenerateSitemapsPayload = {
  __typename?: 'GenerateSitemapsPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** Whether the sitemap generation job was successfully scheduled */
  wasJobScheduled: Scalars['Boolean']
}

/** Input for the `deactivateSecondaryShop` mutation */
export type DeactivateShopInput = {
  /** ID of the secondary shop to deactivate */
  shopId: Scalars['ID']
  /** new value for active */
  active: Scalars['Boolean']
}

/** Response payload of `deactivateSecondaryShop` mutation */
export type DeactivateShopPayload = {
  __typename?: 'DeactivateShopPayload'
  /** The deactivate shop */
  shop: Shop
}

/** Input for the `addStorefrontToShop` mutation */
export type AddStorefrontToShopInput = {
  /** ID of the client connecting to hydra */
  clientId: Scalars['ID']
  /** Secret of the client connecting to hydra */
  secret: Scalars['String']
  /** ID of the shop to add the storefront */
  shopId: Scalars['ID']
  /** Name for the storefront */
  storefrontName: Scalars['String']
  /** Custom URI for the storefront */
  storefrontRedirectionURI?: Maybe<Scalars['String']>
  /** Template for the storefront */
  template?: Maybe<TemplateInput>
}

/** Input for the `addStorefrontToShop` mutation in the field `Template` */
export type TemplateInput = {
  /** ID of the storefront */
  _id: Scalars['ID']
  /** Description of the storefront */
  description: Scalars['String']
  /** Thumbnail/image URL of the storefront */
  media: Scalars['String']
  /** Name of the storefront */
  name: Scalars['String']
  /** Repository of the storefront */
  repository: Scalars['String']
}

/** Response payload of `addStorefrontToShop` mutation */
export type AddStorefrontToShopPayload = {
  __typename?: 'AddStorefrontToShopPayload'
  /** The updated shop */
  shop: Shop
}

/** AddHydraClientInput */
export type AddHydraClientInput = {
  /** AccountId that create the client */
  accountId?: Maybe<Scalars['String']>
  /** clientId */
  clientId: Scalars['String']
  /**
   * If `true`, this object should be considered deleted. Soft deleted objects are not
   * returned in query results unless you explicitly ask for them.
   */
  isDeleted: Scalars['Boolean']
  /** secret */
  secret: Scalars['String']
  /** shopId */
  shopId: Scalars['String']
  /** storefrontName */
  storefrontName: Scalars['String']
  /** storefrontRedirectionURI */
  storefrontRedirectionURI: Scalars['String']
  /** template or storefront */
  template: TemplateStoreFrontInput
}

/** input for the `addStorefrontToShop` mutation in the field `Template` */
export type TemplateStoreFrontInput = {
  /** ID of the storefront */
  _id: Scalars['ID']
  /** Description of the storefront */
  description: Scalars['String']
  /** Thumbnail/image URL of the storefront */
  media: Scalars['String']
  /** Name of the storefront */
  name: Scalars['String']
  /** Repository of the storefront */
  repository: Scalars['String']
}

/** AddHydraClientPayload */
export type AddHydraClientPayload = {
  __typename?: 'AddHydraClientPayload'
  /** The newly-created HydraClient */
  hydraClient: HydraClient
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The shop that owns the HydraClient */
  shopId: Scalars['ID']
}

/** UpdateHydraClientInput */
export type UpdateHydraClientInput = {
  /** shopId */
  shopId: Scalars['String']
  /** storefrontRedirectionURI */
  storefrontRedirectionURI?: Maybe<Scalars['String']>
  /** Name of the Storefront */
  storefrontName?: Maybe<Scalars['String']>
  /** secret */
  secret?: Maybe<Scalars['String']>
  /** template or storefront */
  template?: Maybe<Scalars['JSONObject']>
}

/** UpdateHydraClientPayload */
export type UpdateHydraClientPayload = {
  __typename?: 'UpdateHydraClientPayload'
  /** The updated HydraClient */
  hydraClient: HydraClient
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
}

/** Fields to create a new QR Code for nequi */
export type InputCreateQrCode = {
  /** The ID of the shop that is creating this code */
  shopId: Scalars['String']
  /** Total amount for the order that the client has to pay */
  amount: Scalars['String']
}

export type CreateQrCodePayload = {
  __typename?: 'CreateQRCodePayload'
  /** Response string from nequi to generate the QR code */
  codeQR: Scalars['String']
  /** Id of the request */
  requestId: Scalars['String']
}

/** Fields to refund a QR Code for nequi */
export type InputRefundQrCode = {
  /** The ID of the shop that is creating this code */
  shopId: Scalars['String']
  /** Response string from nequi to generate the QR code */
  QRCode: Scalars['String']
}

export type RefundQrCodePayload = {
  __typename?: 'RefundQRCodePayload'
  /** Response if the nequi QR code is captured */
  isCaptured: Scalars['Boolean']
  /** Response if the nequi QR code is refunded */
  isRefunded: Scalars['Boolean']
}

/** Data for a BitPay invoice payment */
export type InvoiceInput = {
  /** The BitPay charge currency */
  currency: Scalars['String']
  /** The BitPay charge price */
  price: Scalars['Float']
  /** The BitPay charge orderId */
  orderId?: Maybe<Scalars['String']>
  /** The BitPay charge redirect url */
  redirectURL?: Maybe<Scalars['String']>
  /** The BitPay charge buyer data */
  buyer: Buyer
  /** Bitpay token */
  bitpayToken?: Maybe<Scalars['String']>
  /** Shop Id */
  shopId: Scalars['String']
}

/** Buyer data for a BitPay invoice payment */
export type Buyer = {
  /** The BitPay charge email */
  email: Scalars['String']
  /** The BitPay charge email */
  name?: Maybe<Scalars['String']>
  /** The BitPay charge phone */
  phone?: Maybe<Scalars['String']>
  /** The BitPay charge address1 */
  address1?: Maybe<Scalars['String']>
  /** The BitPay charge address2 */
  address2?: Maybe<Scalars['String']>
  /** The BitPay charge locality */
  locality?: Maybe<Scalars['String']>
  /** The BitPay charge region */
  region?: Maybe<Scalars['String']>
  /** The BitPay charge postal code */
  postalCode?: Maybe<Scalars['Int']>
  /** The BitPay charge country */
  country?: Maybe<Scalars['String']>
  /** The BitPay charge notify */
  notify?: Maybe<Scalars['Boolean']>
}

export type BitPayPayload = {
  __typename?: 'BitPayPayload'
  /** Response invoice url from bitpay to pay */
  url: Scalars['String']
  /** Invoice ID */
  id: Scalars['String']
}

/** Data for getting a BitPay invoice data by ID */
export type InvoiceByIdInput = {
  /** Mutation input */
  invoiceId: Scalars['String']
  /** Bitpay token */
  bitpayToken?: Maybe<Scalars['String']>
  /** Shop Id */
  shopId: Scalars['String']
}

export type BitPayInvoicePayload = {
  __typename?: 'BitPayInvoicePayload'
  /** Invoice ID */
  id?: Maybe<Scalars['String']>
  /** Invoice Token */
  token: Scalars['String']
  /** Invoice URL */
  url?: Maybe<Scalars['String']>
  /** Invoice Status */
  status: Scalars['String']
  /** Invoice Price */
  price?: Maybe<Scalars['Float']>
  /** Invoice Currency */
  currency?: Maybe<Scalars['String']>
  /** Invoice order ID */
  orderId?: Maybe<Scalars['String']>
  /** Invoice time */
  invoiceTime?: Maybe<Scalars['Float']>
  /** Invoice expiration time */
  expirationTime?: Maybe<Scalars['Float']>
  /** Amount paid when the invoice got paid */
  amountPaid?: Maybe<Scalars['Float']>
  /** In case the invoice is undergoing a refund process */
  refundAddressRequestPending?: Maybe<Scalars['Boolean']>
  /** Buyer info */
  buyerProvidedInfo?: Maybe<InvoiceBuyer>
}

export type InvoiceBuyer = {
  __typename?: 'InvoiceBuyer'
  /** name of the buyer */
  name?: Maybe<Scalars['String']>
  /** phone number of the buyer */
  phoneNumber?: Maybe<Scalars['String']>
  /** selected wallet, mostly will be bitpay */
  selectedWallet?: Maybe<Scalars['String']>
  /** selected currency during transaction */
  selectedTransactionCurrency?: Maybe<Scalars['String']>
}

/** AddHomePageAssetInput */
export type AddHomePageAssetInput = {
  /** The AssetType for the HomePageAsset. */
  assetType: Scalars['String']
  /** The call to action for the HomePageAsset. */
  callToAction?: Maybe<Scalars['String']>
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The description for the HomePageAsset. */
  descriptionAsset: Scalars['String']
  /** Title to display to customers */
  displayTitle: Scalars['String']
  /** Hero media URL */
  heroMediaId?: Maybe<Scalars['String']>
  /** Whether the HomePageAsset is visible */
  isVisible: Scalars['Boolean']
  /** HomePageAsset metafields */
  metafields?: Maybe<Array<Maybe<MetafieldInput>>>
  /** Unique name of the HomePageAsset */
  name: Scalars['String']
  /** The shop that owns the HomePageAsset */
  shopId: Scalars['ID']
  /** The url to action for the HomePageAsset */
  uriAction?: Maybe<Scalars['String']>
}

/** AddHomePageAssetPayload */
export type AddHomePageAssetPayload = {
  __typename?: 'AddHomePageAssetPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The newly-created HomePageAsset */
  homePageAsset: HomePageAsset
  /** The shop that owns the HomePageAsset */
  shopId: Scalars['ID']
}

/** SetHomePageAssetHeroMediaInput */
export type SetHomePageAssetHeroMediaInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** File record document */
  fileRecord?: Maybe<Scalars['JSONObject']>
  /** ID of HomePageAsset to add the hero image record to */
  id: Scalars['ID']
  /** The shop that owns the HomePageAsset */
  shopId: Scalars['ID']
}

/** SetHomePageAssetHeroMediaPayload */
export type SetHomePageAssetHeroMediaPayload = {
  __typename?: 'SetHomePageAssetHeroMediaPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** HomePageAsset the hero image was added to */
  homePageAsset: HomePageAsset
}

/** RemoveHomePageAssetInput */
export type RemoveHomePageAssetInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of HomePageAsset to delete */
  id: Scalars['ID']
  /** The shop that owns the HomePageAsset */
  shopId: Scalars['ID']
}

/** RemoveHomePageAssetPayload */
export type RemoveHomePageAssetPayload = {
  __typename?: 'RemoveHomePageAssetPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The deleted HomePageAsset */
  homePageAsset: HomePageAsset
}

/** UpdateHomePageAssetInput */
export type UpdateHomePageAssetInput = {
  /** The AssetType for the HomePageAsset. */
  assetType: Scalars['String']
  /** The call to action for the HomePageAsset. */
  callToAction?: Maybe<Scalars['String']>
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The description for the HomePageAsset. */
  descriptionAsset?: Maybe<Scalars['String']>
  /** Title to display to customers */
  displayTitle: Scalars['String']
  /** Hero media URL */
  heroMediaId?: Maybe<Scalars['String']>
  /** ID of rule to modify */
  id: Scalars['ID']
  /** Whether the HomePageAsset is visible */
  isVisible: Scalars['Boolean']
  /** HomePageAsset metafields */
  metafields?: Maybe<Array<Maybe<MetafieldInput>>>
  /** Unique name of the HomePageAsset */
  name: Scalars['String']
  /** The shop that owns the HomePageAsset */
  shopId: Scalars['ID']
  /** The url to action for the HomePageAsset */
  uriAction?: Maybe<Scalars['String']>
}

/** UpdateHomePageAssetPayload */
export type UpdateHomePageAssetPayload = {
  __typename?: 'UpdateHomePageAssetPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated HomePageAsset */
  homePageAsset: HomePageAsset
}

/** AddPageInput */
export type AddPageInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The contents for the Page. */
  content: Scalars['String']
  /** Whether the Page is visible */
  isVisible: Scalars['Boolean']
  /** Page metafields */
  metafields?: Maybe<Array<Maybe<MetafieldInput>>>
  /** Unique name of the Page */
  name: Scalars['String']
  /** The shop that owns the Page */
  shopId: Scalars['ID']
}

/** AddPagePayload */
export type AddPagePayload = {
  __typename?: 'AddPagePayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The newly-created Page */
  page: Page
  /** The shop that owns the Page */
  shopId: Scalars['ID']
}

/** RemovePageInput */
export type RemovePageInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** ID of Page to delete */
  id: Scalars['ID']
  /** The shop that owns the Page */
  shopId: Scalars['ID']
}

/** RemovePagePayload */
export type RemovePagePayload = {
  __typename?: 'RemovePagePayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The deleted Page */
  page: Page
}

/** UpdatePageInput */
export type UpdatePageInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The contents for the Page. */
  content?: Maybe<Scalars['String']>
  /** ID of rule to modify */
  id: Scalars['ID']
  /** Whether the Page is visible */
  isVisible: Scalars['Boolean']
  /** Page metafields */
  metafields?: Maybe<Array<Maybe<MetafieldInput>>>
  /** Unique name of the Page */
  name: Scalars['String']
  /** The shop that owns the Page */
  shopId: Scalars['ID']
}

/** UpdatePagePayload */
export type UpdatePagePayload = {
  __typename?: 'UpdatePagePayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The updated Page */
  page: Page
}

/** Input for `deployShop` mutation */
export type DeployShopInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The shop that it's gonna be deployed */
  shopId: Scalars['ID']
}

/** Response payload for `deployShop` mutation */
export type DeployShopPayload = {
  __typename?: 'deployShopPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The deployed shop */
  shop: Shop
}

/** Input for the `paySubscription` mutation */
export type PaySubscriptionInput = {
  /** The shop that wants to pay the subscription plan */
  shopId: Scalars['ID']
  /** The subscription plan that the shop wants to subscribe to */
  subscriptionId: Scalars['ID']
  /**
   * The information necessary to pay.
   * You need not provide any payment input if the total is zero.
   */
  payment: PaymentInput
  /**
   * The code for the currency in which all values are being provided, to pay the subscription
   * we currently only support USD and COP
   */
  currencyCode: Scalars['String']
  /** Interval of time that user wants to automatically renew their subscription */
  billingCycle: SubscriptionBillingCycles
}

/** Billing Cycles */
export enum SubscriptionBillingCycles {
  /** The shop/client will be charged monthly and the subscription will renew automatically */
  Monthly = 'monthly',
  /** The shop/client will be charged annual and the subscription will renew automatically */
  Annual = 'annual',
}

/** Response payload for `paySubscription` mutation */
export type PaySubscriptionPayload = {
  __typename?: 'PaySubscriptionPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** Status of the transaction with payment gateway */
  status: Scalars['String']
  /** Response Message whether the transaction was succesfull or not */
  data: Scalars['String']
}

/** Input for the `createSubscriptionPlan` mutation */
export type CreateSubscriptionPlanInput = {
  /** Name for the new subscription */
  name: Scalars['String']
  /** Price */
  price: Scalars['Float']
  /** Available routes for the admin UI */
  routes: Array<Maybe<SubscriptionRouteInput>>
}

/** Input for the `createSubscriptionPlan` mutation */
export type SubscriptionRouteInput = {
  /** name of the UI plugin the route belongs to */
  name: Scalars['String']
  /** path of the route */
  path: Scalars['String']
  /** status of the route */
  active: Scalars['Boolean']
  /** some routes are required for the admin in order to function */
  required: Scalars['Boolean']
}

/** Input for the `updateSubscriptionPlan` mutation */
export type UpdateSubscriptionPlanInput = {
  /** Update for the subscription to be updated */
  id: Scalars['ID']
  /** Name for the subscription */
  name?: Maybe<Scalars['String']>
  /** Price for the subscription */
  price?: Maybe<Scalars['Float']>
  /** Available routes for the admin UI */
  routes?: Maybe<Array<Maybe<SubscriptionRouteInput>>>
}

/** Input for the `updatePaymentMethod` mutation */
export type UpdatePaymentMethodInput = {
  /** The shop ID */
  shopId: Scalars['ID']
  /** The name of the payment method to update the payment information */
  method?: Maybe<PaymentMethodName>
  /** Any additional user-provided input necessary to update the payment method and credit card information */
  data: Scalars['JSONObject']
}

/** Input for the `loadProductsAndTags` mutation */
export type LoadProductsAndTagsInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The shop ID */
  shopId: Scalars['String']
  /** The desired count of products to reach in the database */
  desiredProductCount: Scalars['Int']
  /** The desired count of tags to reach in the database */
  desiredTagCount: Scalars['Int']
}

/** Response for the `loadProductsAndTags` mutation */
export type LoadProductsAndTagsPayload = {
  __typename?: 'LoadProductsAndTagsPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The number of products created */
  productsCreated: Scalars['Int']
  /** The number of tags created */
  tagsCreated: Scalars['Int']
}

export type LoadOrdersInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The shop ID */
  shopId: Scalars['String']
  /** The desired count of orders to reach in the database */
  desiredOrderCount: Scalars['Int']
}

/** Response for the `loadProductsAndTags` mutation */
export type LoadOrdersPayload = {
  __typename?: 'LoadOrdersPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** The number of orders created */
  ordersCreated: Scalars['Int']
}

export type LoadProductImagesInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The shop ID */
  shopId: Scalars['String']
}

/** Response for the `loadProductImages` mutation */
export type LoadProductImagesPayload = {
  __typename?: 'LoadProductImagesPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  /** Whether data was loaded or not */
  wasDataLoaded: Scalars['Boolean']
}

export type RemoveDataInput = {
  /** An optional string identifying the mutation call, which will be returned in the response payload */
  clientMutationId?: Maybe<Scalars['String']>
  /** The shop ID */
  shopId: Scalars['String']
}

/** Response from the `removeAllData` mutation */
export type RemoveDataPayload = {
  __typename?: 'RemoveDataPayload'
  /** The same string you sent with the mutation params, for matching mutation calls with their responses */
  clientMutationId?: Maybe<Scalars['String']>
  wasDataRemoved: Scalars['Boolean']
}

/** Subscriptions allow you to request to get updated data whenever it changes */
export type Subscription = {
  __typename?: 'Subscription'
  /** A test subscription that returns an incremented number every 1 second for 10 seconds */
  tick: Scalars['Int']
}

/** Represents a catalog item that displays some non-product content */
export type CatalogItemContent = CatalogItem &
  Node & {
    __typename?: 'CatalogItemContent'
    /** The CatalogItemProduct ID */
    _id: Scalars['ID']
    /** The date and time at which this CatalogItem was first created */
    createdAt: Scalars['DateTime']
    /** The shop to which this catalog belongs */
    shop: Shop
    /** The date and time at which this CatalogItem was last updated */
    updatedAt: Scalars['DateTime']
  }

/** One product catalog for a particular shop */
export type Catalog = Node & {
  __typename?: 'Catalog'
  /** The Catalog ID */
  _id: Scalars['ID']
  /** The date and time at which this Catalog was first created */
  createdAt: Scalars['DateTime']
  /** The shop to which this catalog belongs */
  shop: Shop
  /** The date and time at which this Catalog was last updated */
  updatedAt: Scalars['DateTime']
}

/** type for the `addStorefrontToShop` mutation in the field `Template` */
export type TemplateStoreFront = {
  __typename?: 'TemplateStoreFront'
  /** ID of the storefront */
  _id: Scalars['ID']
  /** Description of the storefront */
  description: Scalars['String']
  /** Thumbnail/image URL of the storefront */
  media: Scalars['String']
  /** Name of the storefront */
  name: Scalars['String']
  /** Repository of the storefront */
  repository: Scalars['String']
}

/** A connection edge in which each node is a `HydraClientEdge` object */
export type HydraClientEdge = NodeEdge & {
  __typename?: 'HydraClientEdge'
  /** Cursor */
  cursor: Scalars['ConnectionCursor']
  /** Node */
  node?: Maybe<HydraClient>
}

/** The name of a analytic provide, which is how analytic providers are keyed */
export enum AnalyticProviderName {
  /** No payment method */
  None = 'none',
  /** Segment provider */
  SegmentProvider = 'segment_provider',
  /** Google provider */
  GoogleProvider = 'google_provider',
}
