import { pick } from 'lodash';

import { MARKET_MODEL } from '../markets';

export const EVENT_MODEL = {
  _id: { type: 'string' },
  EventName: { type: 'string' },
  SportId: { type: 'string' },
  SportName: { type: 'string' },
  IsLive: { type: 'boolean' },
  IsGoingLive: { type: 'boolean' },
  LiveGameState: {
    type: 'object',
    properties: {
      ClockRunning: { type: 'boolean' },
      ClockDirection: { type: 'number' },
      GameTime: { type: 'number' },
      GamePart: { type: 'number' }
    }
  },
  IsTopLeague: { type: 'boolean' },
  Participants: {
    type: 'array',
    items: {
      type: 'object',
      properties: {
        _id: { type: 'string' },
        Name: { type: 'string' },
        VenueRole: { type: 'string' },
        Country: { type: 'string' },
        Metadata: { type: 'object' }
      }
    }
  },
  StartEventDate: { type: 'string' },
  LastUpdateDateTime: { type: 'string' },
  Score: {
    type: 'object',
    properties: {
      HomeScore: { type: 'string' },
      AwayScore: { type: 'string' },
      CombinedSecondTierScores: {
        type: 'array',
        items: { type: 'string' }
      },
      AdditionalScores: { type: 'object' }
    }
  },
  MarketLinesCount: { type: 'number' },
  Markets: {
    type: 'array',
    items: {
      type: 'object',
      properties: MARKET_MODEL
    }
  },
  LeagueId: { type: 'string' },
  LeagueName: { type: 'string' },
  IsRemoved: { type: 'boolean' },
  Tags: { type: 'object', items: { type: 'string' } },
  RegionId: { type: 'string' },
  RegionCode: { type: 'string' },
  RegionName: { type: 'string' },
  UrlEventName: { type: 'string' },
  UrlLeagueName: { type: 'string' },
  UrlRegionName: { type: 'string' },
  UrlSportName: { type: 'string' },
  TotalActiveMarketsCount: { type: 'number' },
  Type: { type: 'string' },
  GameTimeReceivedAt: { type: 'string' }
};

export const EVENT_SEARCH_MODEL = pick(EVENT_MODEL, [
  '_id',
  'EventName',
  'SportId',
  'SportName',
  'LeagueId',
  'LeagueName',
  'IsLive',
  'Participants',
  'Score',
  'LiveGameState',
  'StartEventDate'
]);
