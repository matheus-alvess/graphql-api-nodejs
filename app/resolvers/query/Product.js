import { Product } from '../../database/models/index';

function getProduct(_, { _id }) {
  return Product.findById(_id);
}

function allProducts() {
  return Product.find();
}

export default {
  getProduct,
  allProducts,
};
