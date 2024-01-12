export type CrmPerson = {
  provider: string;
  externalId: string;
  firstName: string;
  lastName: string;
  email: string;
  externalRawEntity: object;
};

export interface CrmService {
  getAllPersons(): Promise<CrmPerson[]>;
}
