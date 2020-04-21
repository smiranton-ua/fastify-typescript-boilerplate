export interface NamePatternParameters {
  'PhraseClass{0}'?: string;
  'PhraseClass{1}'?: string;
  'PhraseClass{2}'?: string;
  'PhraseClass{3}'?: string;
  '{0}'?: string;
  '{1}'?: string;
  '{2}'?: string;
  '{3}'?: string;
}

export interface NamePattern {
  Pattern: string;
  Type: number;
  Parameters: NamePatternParameters;
}

export interface Dictionary<T> {
  [key: string]: T;
}

export interface LiveGameStateType {
  ClockRunning: boolean;
  ClockDirection: number;
  GameTime: number; // In seconds
  GamePart: number;
}

export interface GameScoreType {
  HomeScore: string;
  AwayScore: string;
  CombinedSecondTierScores: string[];
  AdditionalScores: Dictionary<any>;
}

export interface ParticipantType {
  _id: string;
  Name: string;
  VenueRole: string;
  Country: string;
  Metadata: object;
}
