import { Db, MongoClient } from 'mongodb';

import { ConfigService, MongoConfig } from '../config';

class DatabaseService {
  protected dbConfig: MongoConfig;
  private connection: MongoClient;

  constructor() {
    this.dbConfig = ConfigService.getMongoConfig;
  }

  public async initDatabase(): Promise<Db> {
    this.connection = await this.setConnection();
    return this.connection.db(this.dbConfig.database);
  }

  public async closeConnection(forceClose: boolean = false): Promise<void> {
    return this.connection.close(forceClose);
  }

  protected async setConnection(): Promise<MongoClient> {
    const options = Object.assign(
      this.dbConfig.options ? this.dbConfig.options : {},
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );

    const connection = new MongoClient(this.dbConfig.mongoURL, options);

    if (!connection.isConnected()) {
      await connection.connect();
    }

    return connection;
  }
}

export default new DatabaseService();
