import express from 'express';
import graphlHTTP from 'express-graphql';
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
        graphiql: true,
        rootValue: logger(req, res, graphQLParams),
      }))
    );
  }
}

export default new Server().server;
