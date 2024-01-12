// import { CrmPerson } from "../../integrations/crm/service";
// import { MarketingToolPerson } from "../../integrations/marketing/service";
import { CrmPerson } from "../../integrations/crm/service";
import { MarketingToolPerson } from "../../integrations/marketing/service";
import { marketingCrmDifference } from "../personDiff";

describe("marketingCrmDifference", () => {
  it("should return no common and no unique emails for empty inputs", () => {
    const result = marketingCrmDifference([], []);
    expect(result).toEqual({
      uniqueEmails: {
        crm: [],
        marketing: [],
      },
      commonEmails: [],
    });
  });

  it("should identify unique emails in both CRM and marketing lists", () => {
    const marketingPersons = [
      { email: "email1@maildomain.com" },
      { email: "email2@maildomain.com" },
      { email: "common1@domain.com" },
      { email: "common2@domain.com" },
    ];

    const crmPersons = [
      { email: "email1@crmdomain.com" },
      { email: "email2@crmdomain.com" },
      { email: "common1@domain.com" },
      { email: "common2@domain.com" },
    ];

    const result = marketingCrmDifference(
      marketingPersons as MarketingToolPerson[],
      crmPersons as CrmPerson[],
    );

    expect(result.uniqueEmails.marketing).toEqual([
      "email1@maildomain.com",
      "email2@maildomain.com",
    ]);
    expect(result.uniqueEmails.crm).toEqual([
      "email1@crmdomain.com",
      "email2@crmdomain.com",
    ]);
    expect(result.commonEmails).toEqual([
      "common1@domain.com",
      "common2@domain.com",
    ]);
  });
});
