import { NamePattern, Dictionary } from '../../types';

export interface SelectionsSettingsType {
  TemplateId: number; // 18233,
  MinBet: string; // "0.0500",
  MaxWin: string; //  "5000",
  ComboMinBet: string; //  "0.05",
  ComboMaxBet: string; //  "2500.00000",
  ComboMaxWin: string; //  "0.00000",
  SystemMaxBet: string; //  "2500.0000",
  SystemMaxWin: string; //  "0.0000",
  TeaserMaxBet: string; //  "1193.0000",
  TeaserMaxWin: string; //  "0.0000",
  ComboRate: string; //  "1.00",
  SingleSelectionRisk: number; //  "0",
  SingleSelectionSystemRisk: number; //  0,
  SingleSelectionTeaserRisk: 0;
  Move: string; //  "100.000",
  Percentage: string; //  "2.00",
  Step: string; //  "1.00",
  AutoAcceptPercentage: string; //  "0.00",
  LiveDelays: object; // {}, ???
  EnableWB: boolean; //  true,
  EnableComboWB: boolean; //   true,
  EnableCombos: boolean; //   true,
  EnableSingles: boolean; //   true,
  EnableTeasers: boolean; //   true,
  EnableSystems: boolean; //   true,
  IsOptional: boolean; //   false,
  CustomerAdvantagePercentageThreshold: number; //   7,
  SiteAdvantagePercentageThreshold: number; //   -15,
  PointsChangeThresholdUp: number; //   0.5,
  PointsChangeThresholdDown: number; //   -0.5,
  BestOddsGuaranteed: boolean; //   false,
  BuyPointsEnabled: boolean; //   true
}

export interface DisplayOddsType {
  American: string; // "−120"
  Decimal: string; // "1.83"
  Fractional: string; // "5/6"
  HK: string; // "0.83"
  Indo: string; //  "-1.20"
  Malay: string; //  "0.83"
}

export interface SelectionInterface {
  _id: string; // "0HC35974084N300_1"
  Side?: number;
  Type: number;
  BetslipLine: string; // "Chicago Bears -3"
  BetslipLinePattern: NamePattern;
  OutcomeType?: string; // "Home",
  Group: number; // 71098431,
  Name: string; // Chicago Bears
  TypeName: string; // "Spread"
  Title?: string;
  RelatedToId?: string;
  ParticipantMapping?: string;
  IsDisabled: boolean;
  TrueOdds: number; // 1.83333333
  DisplayOdds?: DisplayOddsType;
  DisplayOdd?: string;
  Points?: number;
  Payout?: number; // 20
  Probability: number; // 0.5224690082644627
  ExtractionMethodId: number; // 7
  PayoutAlignmentType: number; // 0
  Tags: string[];
  Metadata: Dictionary<any>;
  Status: number;
  NamePattern: NamePattern;
  OriginalOdds: number;
  CalculatedPayoutOdds: number;
  CalculatedPayoutDiscountAdjustedOdds: number;
  QAParam1: number;
  QAParam2: number;
  IsOption: boolean;
  Settings: SelectionsSettingsType;
  EventId: string;
  MarketId: string;
  _DATE_CLEANUP: Date; // ISODate("2019-08-14T10:13:47.571Z")
  IsRemoved: boolean;
}
