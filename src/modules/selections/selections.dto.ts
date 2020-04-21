export const PATTERN_MODEL = {
  'PhraseClass{0}': { type: 'string' },
  'PhraseClass{1}': { type: 'string' },
  'PhraseClass{2}': { type: 'string' },
  'PhraseClass{3}': { type: 'string' },
  '{0}': { type: 'string' },
  '{1}': { type: 'string' },
  '{2}': { type: 'string' },
  '{3}': { type: 'string' }
};

export const SELECTION_MODEL = {
  _id: { type: 'string' },
  Side: { type: 'number' },
  Type: { type: 'number' },
  BetslipLine: { type: 'string' },
  BetslipLinePattern: {
    type: 'object',
    properties: PATTERN_MODEL
  },
  OutcomeType: { type: 'string' },
  Group: { type: 'number' },
  Name: { type: 'string' },
  TypeName: { type: 'string' },
  Title: { type: 'string' },
  RelatedToId: { type: 'string' },
  ParticipantMapping: { type: 'string' },
  IsDisabled: { type: 'boolean' },
  TrueOdds: { type: 'number' },
  DisplayOdds: {
    type: 'object',
    properties: {
      American: { type: 'string' },
      Decimal: { type: 'string' },
      Fractional: { type: 'string' },
      HK: { type: 'string' },
      Indo: { type: 'string' },
      Malay: { type: 'string' }
    }
  },
  DisplayOdd: { type: 'string' },
  Points: { type: 'number' },
  Payout: { type: 'number' },
  Probability: { type: 'number' },
  ExtractionMethodId: { type: 'number' },
  PayoutAlignmentType: { type: 'number' },
  Tags: { type: 'array', items: { type: 'string' } },
  Metadata: { type: 'object' },
  Status: { type: 'number' },
  NamePattern: {
    type: 'object',
    properties: PATTERN_MODEL
  },
  OriginalOdds: { type: 'number' },
  CalculatedPayoutOdds: { type: 'number' },
  CalculatedPayoutDiscountAdjustedOdds: { type: 'number' },
  QAParam1: { type: 'number' },
  QAParam2: { type: 'number' },
  IsOption: { type: 'boolean' },
  Settings: { type: 'object' },
  EventId: { type: 'string' },
  MarketId: { type: 'string' },
  IsRemoved: { type: 'boolean' },
  _DATE_CLEANUP: { type: 'string' }
};
