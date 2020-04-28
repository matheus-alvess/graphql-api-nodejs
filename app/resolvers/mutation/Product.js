import { Product } from '../../database/models/index';

function createProduct(_, { input }) {
  return Product.create(input);
}

function updateProduct(_, { _id, input }) {
  return Product.findOneAndUpdate({ _id }, input, { new: true });
}

function deleteProduct(_, { _id }) {
  return Product.findOneAndRemove({ _id });
}

export default {
  createProduct,
  updateProduct,
  deleteProduct,
};
