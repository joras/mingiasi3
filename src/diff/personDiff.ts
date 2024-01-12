import { CrmPerson } from "../integrations/crm/service";
import { MarketingToolPerson } from "../integrations/marketing/service";

export function marketingCrmDifference(
  marketingPersons: MarketingToolPerson[],
  crmPersons: CrmPerson[],
) {
  const marketingEmails = new Set(marketingPersons.map(({ email }) => email));
  const crmEmails = new Set(crmPersons.map(({ email }) => email));

  const crmUnique = [...crmEmails].filter(
    (email) => !marketingEmails.has(email),
  );

  const marketingUnique = [...marketingEmails].filter(
    (email) => !crmEmails.has(email),
  );

  const commonEmails = [...marketingEmails].filter((email) =>
    crmEmails.has(email),
  );

  return {
    uniqueEmails: {
      crm: crmUnique,
      marketing: marketingUnique,
    },
    commonEmails,
  };
}
