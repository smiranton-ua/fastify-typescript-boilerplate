import startServer from "./server";
import databaseService from "./modules/db/db.service";

const startApp = async () => {
  await databaseService.getDatabase();
  startServer();
};

startApp();
