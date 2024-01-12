export type MarketingToolPerson = {
  provider: string;
  externalId: string;
  fullName?: string;
  email: string;
  externalRawEntity: object;
};

export interface MarketingToolService {
  getAllPersons(): Promise<MarketingToolPerson[]>;
}
