import express from 'express';
import graphlHTTP from 'express-graphql';
import schema from '../schema';
import { logger } from '../middlewares';

class Server {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(logger);
  }

  routes() {
    this.server.use(
      '/graphql',
      graphlHTTP({
        schema,
        graphiql: true,
      })
    );
  }
}

export default new Server().server;
