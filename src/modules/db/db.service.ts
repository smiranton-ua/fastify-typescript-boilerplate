import { Db, MongoClient } from 'mongodb';

import { ConfigService, MongoConfig } from '../config';

class DatabaseService {
  protected dbConfig: MongoConfig;
  private connection: MongoClient;

  constructor() {
    this.dbConfig = ConfigService.getMongoConfig;
  }

  async initDatabase(): Promise<Db> {
    this.connection = await this.setConnection();
    return this.connection.db(this.dbConfig.database);
  }

  async closeDatabaseConnection(forceClose: boolean = false): Promise<void> {
    return this.connection.close(forceClose);
  }

  protected async setConnection(): Promise<MongoClient> {
    let connection: MongoClient;
    const options = !this.dbConfig.options
      ? { useNewUrlParser: true, useUnifiedTopology: true }
      : Object.assign(this.dbConfig.options, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
    console.log(this.dbConfig.mongoURL);

    connection = new MongoClient(this.dbConfig.mongoURL, options);

    if (!connection.isConnected()) {
      await connection.connect();
    }
    return connection;
  }
}

export default new DatabaseService();
