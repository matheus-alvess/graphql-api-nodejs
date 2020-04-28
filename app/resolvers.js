import { Product } from './database/models';

export const resolvers = {
  Query: {
    getProduct(root, { _id }) {
      return Product.findById(_id);
    },
    allProducts() {
      return Product.find();
    },
  },
  Mutation: {
    createProduct(root, { input }) {
      return Product.create(input);
    },
    updateProduct(root, { _id, input }) {
      return Product.findOneAndUpdate({ _id }, input, { new: true });
    },
    deleteProduct(root, { _id }) {
      return Product.findOneAndRemove({ _id });
    },
  },
};
