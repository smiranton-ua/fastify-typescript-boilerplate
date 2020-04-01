import { Collection } from 'mongodb';
import { Database } from './base.types';

class BaseService {
  private db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  protected getCollection(name: string): Promise<Collection> {
    return this.db.getCollection(name);
  }
}

export default BaseService;
