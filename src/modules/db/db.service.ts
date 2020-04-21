import { Db, MongoClient } from 'mongodb';

import { MongoConfigType } from '../config';
import { LoggerType } from '../../types';

class DatabaseClient {
  private static instance: DatabaseClient;
  private connection: MongoClient;
  private storage = {};

  private constructor(
    private readonly configs: MongoConfigType,
    private readonly logger: LoggerType
  ) {
    this.logger.info('Cretaed DB service');
  }

  public static getInstance(
    configs: MongoConfigType,
    logger: LoggerType
  ): DatabaseClient {
    if (!DatabaseClient.instance) {
      DatabaseClient.instance = new DatabaseClient(configs, logger);
    }
    return DatabaseClient.instance;
  }

  private async setConnection(): Promise<void> {
    if (!this.connection) {
      const { url, options = {} } = this.configs;

      const dbOptions = Object.assign(options, {
        useNewUrlParser: true,
        useUnifiedTopology: true
      });

      this.connection = new MongoClient(url, dbOptions);
    }

    if (!this.connection.isConnected()) {
      await this.connection.connect();
    }
  }

  public async getDatabase(database: string): Promise<Db> {
    await this.setConnection();

    if (!this.storage[database]) {
      this.storage[database] = this.connection.db(database);
    }

    return this.storage[database];
  }

  public async closeConnection(forceClose: boolean = false): Promise<void> {
    const result = await this.connection.close(forceClose);

    this.connection = null;
    this.storage = {};

    return result;
  }

  public get defaultDatabaseName(): string {
    return this.configs.database;
  }
}

export default DatabaseClient;
