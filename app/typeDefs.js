const types = `
  type Product {
    _id: ID!
    title: String!
    qty: Int
  }
`;

const inputs = `
  input ProductInput {
    title: String!
    qty: Int
  }
`;

const baseTypes = `
  type Query {
    getProduct(_id: ID!): Product
    allProducts: [Product]
  }
  type Mutation {
    createProduct(input: ProductInput): Product
    updateProduct(_id: ID!, input: ProductInput): Product
    deleteProduct(_id: ID!): Product
  }
`;

export default `${types}${inputs}${baseTypes}`;
