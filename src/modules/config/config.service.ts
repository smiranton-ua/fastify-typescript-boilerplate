import {
  NO_JWT_SECRET,
  NO_MONGO_CONFIGURATION,
  NO_WEBSERVER_CONFIGURATION,
} from '../../constants/errors';

import { Config, MongoConfig, WebServerConfig } from './config.interface';

let instance: ConfigService;

class ConfigService {
  config: Config;

  constructor() {
    if ( instance ) {
      return instance;
    }
    instance = this;
    this.config = ConfigService.setAppConfig();
  }

  get appConfig(): Config {
    return this.config;
  }


  get getMongoConfig(): MongoConfig {
    if (!this.config.mongo) {
      throw new Error(NO_MONGO_CONFIGURATION);
    }
    return this.config.mongo;
  }

  get getWebServerConfig(): WebServerConfig {
    if (!this.config.webServer) {
      throw new Error(NO_WEBSERVER_CONFIGURATION);
    }

    return this.config.webServer;
  }

  static get isDevEnv(): boolean {
    return process.env.NODE_ENV?.toLowerCase() === 'development';
  }

  static get isProdEnv(): boolean {
    return process.env.NODE_ENV?.toLowerCase() === 'production';
  }

  static get isTestEnv(): boolean {
    return process.env.CONFIG_DIR?.toLowerCase() === 'test';
  }

  get getJwtSecret(): string {
    if (!this.config.jwtSecret) {
      throw new Error(NO_JWT_SECRET);
    }
    return this.config.jwtSecret;
  }

  private static readConfigFile(pathToFile: string): Config {
    try {
      return require(pathToFile);
    } catch (err) {
      console.log(err);
      throw err;
    }
  }

  private static setAppConfig(): Config {
    const defaultConfig = ConfigService.readConfigFile('../../../configs/appConfig.json');

    if (!process.env.CONFIG_DIR) {
      return defaultConfig;
    }

    const customConfig = ConfigService.readConfigFile(`../../../../configs/${process.env.CONFIG_DIR}/appConfig.json`);

    return { ...defaultConfig, ...customConfig };
  }
}

export default new ConfigService();
