import {
  CollectionAggregationOptions,
  DeleteWriteOpResultObject,
  BulkWriteResult,
  FindOneOptions,
  FilterQuery,
  Collection
} from 'mongodb';

import { DbService } from '../db';

class BaseService {
  protected collection: string;
  protected db: DbService;

  protected async getCollection(database?: string): Promise<Collection> {
    const currentDb = await this.db.getDatabase(database);
    return currentDb.collection(this.collection);
  }

  public async aggregate<T>(
    pipeline: object[],
    options: CollectionAggregationOptions & { limit?: number; offset?: number } = {},
    database: string = this.db.defaultDatabaseName
  ): Promise<T[]> {
    const updPipeline = [...pipeline];

    if (options && options.offset) {
      updPipeline.push([{ $skip: options.offset }]);
    }

    if (options && options.limit) {
      updPipeline.push([{ $limit: options.limit }]);
    }

    const collection = await this.getCollection(database);
    return collection.aggregate<T>(pipeline, options).toArray();
  }

  public async bulkCreate<T extends Object>(
    entities: T[],
    database: string = this.db.defaultDatabaseName
  ): Promise<BulkWriteResult> {
    const collection = await this.getCollection(database);
    const bulk = collection.initializeUnorderedBulkOp();
    entities.forEach((entity) => bulk.insert(entity));
    return bulk.execute();
  }

  public async find<T>(
    query: FilterQuery<T> = {},
    options: FindOneOptions = {},
    database: string = this.db.defaultDatabaseName
  ): Promise<T[]> {
    const collection = await this.getCollection(database);
    return collection.find<T>(query, options).toArray();
  }

  public async findById<T>(
    entityId: string,
    options: FindOneOptions = {},
    database: string = this.db.defaultDatabaseName
  ): Promise<T> {
    const query = { _id: entityId } as FilterQuery<T>;

    const collection = await this.getCollection(database);
    const [elem] = await collection.find<T>(query, options).toArray();

    return elem;
  }

  public async remove<T>(
    query: FilterQuery<T> = {},
    options: FindOneOptions = {},
    database: string = this.db.defaultDatabaseName
  ): Promise<DeleteWriteOpResultObject> {
    const collection = await this.getCollection(database);
    return collection.deleteMany(query, options);
  }
}

export default BaseService;
