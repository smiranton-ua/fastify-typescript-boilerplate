import { util } from '../../utils';

import { EventInterface, EventApiInterface, SearchEventInterface } from './events.types';
import { SelectionsService, SelectionInterface } from '../selections';
import { MarketsService, MarketInterface } from '../markets';
import { BaseService } from '../base';

import { LoggerType } from '../../types';
import { DbService } from '../db';

import { EVENT_SEARCH_MODEL } from './events.dto';
import { DB } from '../../constants';

class EventsService extends BaseService {
  protected readonly collection = DB.COLLECTION.EVENTS;

  constructor(
    protected readonly db: DbService,
    protected readonly logger: LoggerType,
    protected readonly marketsService: MarketsService,
    protected readonly selectionsService: SelectionsService
  ) {
    super();
    logger.info(`Created Events service`);
  }

  private concatEventWithMarketsAndSelections(
    event: EventInterface,
    markets: MarketInterface[],
    selections: SelectionInterface[]
  ) {
    const marketsHash = util.convertArrayToHash(markets, '_id', false);
    const selectionsHash = util.convertArrayToHash(selections, 'MarketId', true);

    return {
      ...event,
      Markets: (event.Markets || []).reduce(
        (acc: MarketInterface[], marketId: string) => {
          const market = marketsHash[marketId];
          if (market) {
            acc.push({
              ...market,
              Selections: selectionsHash[market._id] || []
            });
          }
          return acc;
        },
        []
      )
    };
  }

  public async getEventById(
    eventId: string,
    operator: string
  ): Promise<EventApiInterface | undefined> {
    const database = DB.OPERATOR_DATABASE[operator];

    const [event, markets, selections] = await Promise.all([
      this.findById<EventInterface>(eventId, {}, database),
      this.marketsService.find<MarketInterface>({ EventId: eventId }, {}, database),
      this.selectionsService.find<SelectionInterface>({ EventId: eventId }, {}, database)
    ]);

    if (event) {
      return this.concatEventWithMarketsAndSelections(event, markets, selections);
    }
  }

  public searchEvents(
    search: string,
    limit: number = DB.DEFAULT_LIMIT,
    operator: string
  ): Promise<SearchEventInterface[]> {
    const database = DB.OPERATOR_DATABASE[operator];

    const query = {
      EventName: {
        $regex: `.*${search}.*`,
        $options: 'i'
      }
    };

    const projection = Object.keys(EVENT_SEARCH_MODEL).reduce((acc, key: string) => {
      acc[key] = 1;
      return acc;
    }, {});

    const options = {
      ...(limit > 0 && { limit }),
      projection
    };

    return this.find<SearchEventInterface>(query, options, database);
  }
}

export default EventsService;
