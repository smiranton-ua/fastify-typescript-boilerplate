import { BaseService } from '../base';

import { LoggerType } from '../../types';
import { DbService } from '../db';

import { DB } from '../../constants';

class MarketsService extends BaseService {
  protected readonly collection = DB.COLLECTION.MARKETS;

  constructor(protected readonly db: DbService, protected readonly logger: LoggerType) {
    super();
    logger.info(`Created Markets service`);
  }
}

export default MarketsService;
