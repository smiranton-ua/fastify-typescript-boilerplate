import { Collection } from 'mongodb';
import { Database } from './base.types';

class BaseService {
  protected db: Database;

  constructor(db: Database) {
    this.db = db;
  }

  protected getCollection(name: string): Promise<Collection> {
    return this.db.collection(name);
  }
}

export default BaseService;
