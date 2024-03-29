// type Price {
//   name: String!
//   price: Float!
// }

// input PriceInput {
//   name: String!
//   price: Float!
// }

// type Product {
//   id: ID!
//   name: String!
//   description: String!
//   listPrice: [Price!]!
//   defaultPrice: Int!
//   price: Float!
//   ratingsQuantity: Int!
//   ratingsAverage: Float!
//   images: [String]
//   quantity: Int!
//   stock: Boolean!
//   brand: String
//   Reviews: [Review]
//   createdAt: Date
//   updateAt: Date
// }

// type ProductPaginator {
//   items: [Product]!
//   currentPage: Int!
//   totalPages: Int!
// }

// extend type Query {
//   getProduct(id: ID!): Product
//   listProducts(
//     search: String
//     page: Int
//     limit: Int
//     sort: SortBy
//     filter: String
//   ): ProductPaginator
// }

// input ProductInput {
//   name: String!
//   description: String!
//   listPrice: [PriceInput!]!
//   price: Float!
//   defaultPrice: Int!
//   images: [String]
//   quantity: Int!
//   stock: Boolean
//   brand: String
// }

// extend type Mutation {
//   createProduct(input: ProductInput!): Product
//     @auth
//     @hasRole(roles: [Admin, Moderator])
//   updateProduct(id: ID!, input: ProductInput!): Product
//     @auth
//     @hasRole(roles: [Admin, Moderator])
// }
