import 'reflect-metadata';
import config from './config';
import express from 'express';

import Logger from './loaders/loggers';


async function startServer() {

  const app = express();

  await require('./loaders').default({ expressApp: app });

  app.listen(config.port, (err: any) => {

    if (err) {
      process.exit(1);
      return;
    }
    Logger.info(`
      ################################################
      🛡️  Server listening on port: ${config.port} 🛡️ 
      ################################################
    `);
  })
}

startServer();