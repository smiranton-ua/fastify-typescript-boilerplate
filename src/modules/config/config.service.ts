import {
  StatisticConfigType,
  WebServerConfigType,
  MongoConfigType,
  ConfigType
} from './config.types';

import { SELECTION_MODEL } from '../selections';
import { MARKET_MODEL } from '../markets';
import { EVENT_MODEL } from '../events';
import { ERRORS } from '../../constants';

class ConfigService {
  private configs: ConfigType;

  constructor() {
    this.configs = this.setAppConfig();
  }

  public get appConfig(): ConfigType {
    return this.configs;
  }

  public get getMongoConfig(): MongoConfigType {
    if (!this.configs.mongo) {
      throw new Error(ERRORS.NO_MONGO_CONFIGURATION);
    }
    return this.configs.mongo;
  }

  public get getWebServerConfig(): WebServerConfigType {
    if (!this.configs.webServer) {
      throw new Error(ERRORS.NO_WEBSERVER_CONFIGURATION);
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
    return process.env.NODE_ENV?.toLowerCase() === 'test';
  }

  public getJwtSecret(): string {
    if (!this.configs.jwtSecret) {
      throw new Error(ERRORS.NO_JWT_SECRET);
    }
    return this.configs.jwtSecret;
  }

  private readConfigFile = (pathToFile: string): ConfigType => {
    try {
      return require(pathToFile);
    } catch (err) {
      console.log(err);
      throw err;
    }
  };

  private setAppConfig = (): ConfigType => {
    const defaultConfig = this.readConfigFile(
      '../../../configs/development/appConfig.json'
    );

    console.log(process.env.CONFIG_DIR);
    if (!process.env.CONFIG_DIR) {
      return defaultConfig;
    }

    const customConfig = this.readConfigFile(
      `../../../configs/${process.env.CONFIG_DIR}/appConfig.json`
    );

    return {
      ...defaultConfig,
      ...customConfig
    };
  };

  public get getStatisticsConfig(): StatisticConfigType {
    return this.configs.stats;
  }

  public get getSwaggerConfig() {
    const { httpPort, hostname, apiDocumentationPath } = this.getWebServerConfig;
    return {
      routePrefix: apiDocumentationPath,
      exposeRoute: true,
      swagger: {
        validatorUrl: null,
        info: {
          title: 'Operator settings',
          description: 'Operator settings api documentation',
          version: '1.0.0'
        },
        host: `${hostname}:${httpPort}`,
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
        components: {
          schemas: {
            user: {
              properties: {
                id: {
                  type: 'integer'
                },
                name: {
                  type: 'string'
                }
              }
            }
          }
        },
        definitions: {
          Event: {
            $id: 'Event',
            type: 'object',
            properties: EVENT_MODEL
          },
          Market: {
            $id: 'Market',
            type: 'object',
            properties: MARKET_MODEL
          },
          Selection: {
            $id: 'Selection',
            type: 'object',
            properties: SELECTION_MODEL
          }
        }
      }
    };
  }
}

export default new ConfigService();
