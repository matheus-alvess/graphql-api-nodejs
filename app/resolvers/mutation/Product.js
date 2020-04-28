import { Product } from '../../database/models/index';

export default {
  createProduct(root, { input }) {
    return Product.create(input);
  },
  updateProduct(root, { _id, input }) {
    return Product.findOneAndUpdate({ _id }, input, { new: true });
  },
  deleteProduct(root, { _id }) {
    return Product.findOneAndRemove({ _id });
  },
};
