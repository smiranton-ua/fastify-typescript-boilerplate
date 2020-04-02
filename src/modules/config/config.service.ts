import { Config, MongoConfig, WebServerConfig } from './config.types';

import {
  NO_WEBSERVER_CONFIGURATION,
  NO_MONGO_CONFIGURATION,
  NO_JWT_SECRET,
} from '../../constants/errors';

let instance: ConfigService;

class ConfigService {
  private configs: Config;

  constructor() {
    if (instance) {
      return instance;
    }
    instance = this;
    this.configs = this.setAppConfig();
  }

  public appConfig(): Config {
    return this.configs;
  }

  public get getMongoConfig(): MongoConfig {
    if (!this.configs.mongo) {
      throw new Error(NO_MONGO_CONFIGURATION);
    }
    return this.configs.mongo;
  }

  public get getWebServerConfig(): WebServerConfig {
    if (!this.configs.webServer) {
      throw new Error(NO_WEBSERVER_CONFIGURATION);
    }

    return this.configs.webServer;
  }

  public get isDevEnv(): boolean {
    return process.env.NODE_ENV?.toLowerCase() === 'development';
  }

  public get isProdEnv(): boolean {
    return process.env.NODE_ENV?.toLowerCase() === 'production';
  }

  public get isTestEnv(): boolean {
    return process.env.CONFIG_DIR?.toLowerCase() === 'test';
  }

  public getJwtSecret(): string {
    if (!this.configs.jwtSecret) {
      throw new Error(NO_JWT_SECRET);
    }
    return this.configs.jwtSecret;
  }

  private readConfigFile = (pathToFile: string): Config => {
    try {
      return require(pathToFile);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  private setAppConfig = (): Config => {
    const defaultConfig = this.readConfigFile('../../../configs/appConfig.json');

    if (!process.env.CONFIG_DIR) {
      return {
        ...defaultConfig,
        ...(process.env.REMOTE_MONGO_DB && { mongo: { mongoURL: process.env.REMOTE_MONGO_DB } }),
      };
    }

    const customConfig = this.readConfigFile(
      `../../../../configs/${process.env.CONFIG_DIR}/appConfig.json`,
    );

    return {
      ...defaultConfig,
      ...customConfig,
    };
  };

  public get getSwaggerCongif() {
    return {
      swaggerOption: {
        swagger: {
          info: {
            title: 'Notification manager swagger',
            description: 'testing the fastify swagger api',
            version: '0.1.0',
          },
          externalDocs: {
            url: 'https://swagger.io',
            description: 'Find more info here',
          },
          host: 'localhost',
          schemes: ['http'],
          consumes: ['application/json'],
          produces: ['application/json'],
          definitions: {},
        },
        exposeRoute: true,
      },
    };
  }
}

export default new ConfigService();
