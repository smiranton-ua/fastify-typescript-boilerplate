import * as StatsdClient from 'statsd-client';
import { noop } from 'lodash';

import { TagsType, StatsdClientType } from '../stats';
import { StatisticConfigType } from '../config';
import { LoggerType } from '../../types';

const NODE_ENV = process.env.NODE_ENV?.toLowerCase();

class StatsClient {
  private sdc: StatsdClientType;

  constructor(
    private readonly logger: LoggerType,
    private readonly config: StatisticConfigType
  ) {
    switch (NODE_ENV) {
      case 'production':
        this.setProductionMode();
        break;
      case 'test':
        this.setTestMode();
        break;
      case 'development':
      default:
        this.setDevelopmentMode();
        break;
    }
    logger.info('Created Statistics service');
  }

  private setProductionMode() {
    this.sdc = new StatsdClient(this.config);
  }

  private setDevelopmentMode() {
    this.sdc = new Proxy(
      {},
      {
        get: () => (...args: any) => this.logger.info(args.join(' '))
      }
    );
  }

  private setTestMode() {
    this.sdc = new Proxy(
      {},
      {
        get: () => noop
      }
    );
  }

  public get statsConfig(): StatisticConfigType {
    return this.config;
  }

  public close(): StatsdClientType {
    return this.sdc.close();
  }

  public counter(metric: string, delta: number, tags?: TagsType): StatsdClientType {
    return this.sdc.counter(metric, delta, tags);
  }

  public decrement(metric: string, delta?: number, tags?: TagsType): StatsdClientType {
    return this.sdc.decrement(metric, delta, tags);
  }

  public formatTags(tags?: TagsType): string {
    return this.sdc.formatTags(tags);
  }

  public gauge(name: string, value: number, tags?: TagsType): StatsdClientType {
    return this.sdc.gauge(name, value, tags);
  }

  public gaugeDelta(name: string, delta: number, tags?: TagsType): StatsdClientType {
    return this.sdc.gaugeDelta(name, delta, tags);
  }

  public getChildClient(name: string): StatsdClientType {
    this.sdc.getChildClient(name);
  }

  public histogram(name: string, value: number, tags?: TagsType): StatsdClientType {
    return this.sdc.histogram(name, value, tags);
  }

  public increment(
    metric: string,
    delta?: number,
    tags?: TagsType
  ): StatsdClientType | undefined {
    return this.sdc.increment(metric, delta, tags);
  }

  public raw(rawData: string): StatsdClientType {
    return this.sdc.raw(rawData);
  }

  public set(name: string, value: number, tags?: TagsType): StatsdClientType {
    return this.sdc.set(name, value, tags);
  }

  public timing(
    name: string,
    startOrDuration: Date | number | string,
    tags?: TagsType
  ): StatsdClientType {
    return this.sdc.timing(name, startOrDuration, tags);
  }
}

export default StatsClient;
