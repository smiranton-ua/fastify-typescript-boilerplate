import { SocketOptions } from 'mongodb';

export interface MongoConfig {
  mongoURL: string;
  database?: string;
  options?: {
    maxStalenessSeconds?: number;
    replicaSet?: string;
    secondaryAcceptableLatencyMS?: number;
    connectWithNoPrimary?: boolean;
    socketOptions?: SocketOptions;
  };
}

export interface WebServerConfig {
  apiDocumentationPath: string;
  basePath: string;
  corsOptions: boolean;
  globalPathPrefix: string;
  hostname: string;
  httpPort: number;
  httpsPort?: number;
  title: string;
}

export interface Config {
  mongo: MongoConfig;
  webServer: WebServerConfig;
  jwtSecret: string;
}
