import { BaseService } from '../base';

import { LoggerType } from '../../types';
import { DbService } from '../db';

import { DB } from '../../constants';

class SelectionsService extends BaseService {
  protected readonly collection = DB.COLLECTION.SELECTIONS;

  constructor(protected readonly db: DbService, protected readonly logger: LoggerType) {
    super();
    logger.info(`Created Selections service`);
  }
}

export default SelectionsService;
