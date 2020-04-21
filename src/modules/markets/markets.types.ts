import { Dictionary, NamePattern } from '../../types';
import { SelectionInterface } from '../selections';

export class LiveDataType {
  ScoreHome: string;
  ScoreAway: string;
}

export interface InMarketGroupType {
  id: string;
  sortingKey: number;
}

export class MarketType {
  _id: string;
  Name: string;
  NamePattern: NamePattern;
  LineTypeId: number;
  LineTypeName: string;
  ShortName: string;
  IsCastMarket: boolean;
}

export interface MarketInterface {
  _id: string;
  Name: string;
  NamePattern: NamePattern;
  BetslipLine: string;
  BetslipLinePattern: NamePattern;
  MarketType: MarketType;
  EventId: string;
  LeagueId: string;
  SportId: string;
  StartDate: string;
  Title?: string;
  ParticipantMapping?: string;
  Selections: SelectionInterface[];
  IsLive: boolean;
  IsSuspended: boolean;
  LiveData?: LiveDataType;
  Metadata: Dictionary<string>;
  Tags: string[];
  Groups: string[];
  InMarketGroups: InMarketGroupType[];
  CastMarkets?: string[];
}
