import config from 'config';
import mongo from './database';
import server from './server';
import { logger } from './lib';

async function start() {
  await mongo();
  server.listen(config.api.port, () => {
    logger.info(`Server is listening on port ${config.api.port}`);
  });
}

start();
