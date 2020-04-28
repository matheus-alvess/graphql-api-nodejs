import { Product } from '../../database/models/index';

export default {
  getProduct(root, { _id }) {
    return Product.findById(_id);
  },
  allProducts() {
    return Product.find();
  },
};
