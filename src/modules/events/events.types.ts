import { LiveGameStateType, GameScoreType, ParticipantType } from '../../types';
import { MarketInterface } from '../markets';

export interface SearchEventInterface {
  _id: string;
  EventName: string;
  SportName: string;
  SportId: string;
  LeagueName: string;
  LeagueId: string;
}

export interface EventInterface {
  _id: string;
  EventName: string;
  SportId: string;
  SportName: string;
  IsLive: boolean;
  IsGoingLive: boolean;
  LiveGameState?: LiveGameStateType;
  IsTopLeague: boolean;
  Participants: ParticipantType[];
  StartEventDate: string;
  LastUpdateDateTime: string;
  Score?: GameScoreType;
  MarketLinesCount: number;
  Markets: string[];
  LeagueId: string;
  LeagueName: string;
  IsRemoved?: boolean;
  Tags: string[];
  RegionId: string;
  RegionCode: string;
  RegionName: string;
  UrlEventName: string;
  UrlLeagueName: string;
  UrlRegionName: string;
  UrlSportName: string;
  TotalActiveMarketsCount: number;
  Type: string;
  GameTimeReceivedAt: string;
}

export interface EventApiInterface extends Omit<EventInterface, 'Markets'> {
  Markets: MarketInterface[];
}
