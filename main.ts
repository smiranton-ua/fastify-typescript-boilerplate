require('dotenv').config();

import startServer from './src/server';

import { DbService } from './src/modules/db';

const startApp = async () => {
  try {
    await DbService.initDatabase();
    startServer();
  } catch (ex) {
    console.error(ex);
  }
};

startApp();
