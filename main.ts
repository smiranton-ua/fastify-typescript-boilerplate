require('dotenv').config();

import startServer from './src/server';

import databaseService from './src/modules/db/db.service';

const startApp = async () => {
  try {
    await databaseService.initDatabase();
    startServer();
  } catch (ex) {
    console.error(ex);
  }
};

startApp();
