import { SocketOptions } from 'mongodb';

export interface MongoConfigType {
  url: string;
  database?: string;
  options?: {
    maxStalenessSeconds?: number;
    replicaSet?: string;
    secondaryAcceptableLatencyMS?: number;
    connectWithNoPrimary?: boolean;
    socketOptions?: SocketOptions;
  };
}

export interface StatisticConfigType {
  host: string;
  ports: string;
  prefix: string;
}

export interface WebServerConfigType {
  apiDocumentationPath: string;
  basePath: string;
  corsOptions: boolean;
  globalPathPrefix: string;
  hostname: string;
  httpPort: number;
  httpsPort?: number;
  title: string;
}

export interface ConfigType {
  stats: StatisticConfigType;
  mongo: MongoConfigType;
  webServer: WebServerConfigType;
  jwtSecret: string;
}
