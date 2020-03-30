require('dotenv').config();

import { DatabaseService } from './modules/db';

import startServer from './server';

(async () => {
  try {
    await DatabaseService.initialize();
    await startServer();
  } catch (ex) {
    console.error(ex);
  }
})();
