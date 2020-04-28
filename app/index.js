/* eslint-disable no-console */
import config from 'config';
import mongo from './database';
import server from './server';

async function start() {
  await mongo();
  server.listen(config.api.port, () => {
    console.log(`Server is listening on port ${config.api.port}`);
  });
}

start();
