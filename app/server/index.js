import express from 'express';
import graphlHTTP from 'express-graphql';
import config from 'config';
import schema from '../schema';
import { logger } from '../middlewares';

class Server {
  constructor() {
    this.server = express();
    this.routes();
  }

  routes() {
    this.server.use(
      '/graphql',
      graphlHTTP((req, res, graphQLParams) => ({
        schema,
        graphiql: config.get('env') !== 'production',
        rootValue: logger(req, res, graphQLParams),
      }))
    );
  }
}

export default new Server().server;
