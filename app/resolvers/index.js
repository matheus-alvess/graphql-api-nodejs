import ProductQuery from './query/Product';
import ProductMutation from './mutation/Product';

export default {
  Query: {
    ...ProductQuery,
  },
  Mutation: {
    ...ProductMutation,
  },
  // Subscription: {},
};
