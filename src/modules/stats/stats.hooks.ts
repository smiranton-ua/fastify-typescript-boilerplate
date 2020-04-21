import { StatsHookRequestType, StatsHookReplyType, StatsService } from '../stats';
import { LoggerType } from '../../types';

import { STATS } from '../../constants';

class StatsHooks {
  constructor(
    private readonly logger: LoggerType,
    private readonly service: StatsService
  ) {
    logger.info('Created Statistics hooks');
  }

  public sendStatsOnRequest(name: string) {
    return (request: StatsHookRequestType, _: StatsHookReplyType, done: Function) => {
      const now = new Date();
      const key = `${name}.${STATS.SUFFIX.COUNTER_IN}`;

      this.service.increment(key, 1);

      request.startAt = now;

      done();
    };
  }

  public sendStatsOnResponse(name: string) {
    return (request: StatsHookRequestType, _: StatsHookReplyType, done: Function) => {
      const keyI = `${name}.${STATS.SUFFIX.COUNTER_OUT}`;
      const keyT = `${name}.${STATS.SUFFIX.TIMER}`;

      this.service.increment(keyI, 1);
      this.service.timing(keyT, request.startAt);

      request.startAt = null;

      done();
    };
  }
}

export default StatsHooks;
