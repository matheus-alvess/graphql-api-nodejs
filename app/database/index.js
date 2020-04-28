import mongoose from 'mongoose';
import config from 'config';

export default async function () {
  return mongoose.connect(config.mongo.uri, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
}
