import { BaseService } from '../base';

class EventsService extends BaseService {
  private readonly collectionName = 'Events';

  public async searchEvents(search: string | undefined) {
    if (!search) {
      return [];
    }

    const db = await this.getCollection(this.collectionName);
    // TODO judt for testing purpose
    const events = await db.find({ EventName: 'World Cup 2021 - Winner' }).toArray();

    return events;
  }

  public async ensureIndexes() {
    // const eventsCollection = await this.getCollection(this.collectionName);
    // await eventsCollection.createIndex({ EventName: 1 }, { unique: true });
  }
}

export default EventsService;
