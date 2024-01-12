import { initClient } from "@ts-rest/core";
import { contract } from "./apiContract";

export type PaginationOptions = {
  offset: number;
  amount: number;
};

/* return raw mailchimp API client */
export function createMailChimpClient(apiKey: string, apiDataCenter: string) {
  const mailchimpClient = initClient(contract, {
    baseUrl: `https://${apiDataCenter}.api.mailchimp.com/3.0/`,
    baseHeaders: { Authorization: `Bearer ${apiKey}` },
  });

  return {
    async getLists(pagination: PaginationOptions) {
      return await mailchimpClient.getLists({
        query: {
          offset: pagination.offset ?? 0,
          count: pagination.amount ?? 10,
        },
      });
    },

    async getListMembers(pagination: PaginationOptions, listId: string) {
      return mailchimpClient.getListMembers({
        params: {
          list_id: listId,
        },
        query: {
          offset: pagination.offset ?? 0,
          count: pagination.amount ?? 10,
        },
      });
    },
  };
}
