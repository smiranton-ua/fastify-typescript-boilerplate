require('dotenv').config();

import startServer from './server';

import { DbService } from './modules/db';

const startApp = async () => {
  try {
    await DbService.initDatabase();
    await startServer();
  } catch (ex) {
    console.error(ex);
  }
};

startApp();
