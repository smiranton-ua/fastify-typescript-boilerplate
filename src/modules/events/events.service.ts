import { BaseService } from '../base';

class EventsService extends BaseService {
  public async searchEvents(search: string | undefined) {
    if (!search) {
      return [];
    }
    // TODO search events in the database
    // const eventsCollection = await this.getCollection('Events');
    return [];
  }

  public async ensureIndexes() {
    // const eventsCollection = await this.getCollection('Events');
    // await eventsCollection.createIndex({ EventName: 1 }, { unique: true });
  }
}

export default EventsService;
