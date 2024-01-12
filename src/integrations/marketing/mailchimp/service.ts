import { ApiError } from "../../error";
import { MarketingToolService } from "../service";
import { createMailChimpClient } from "./api/apiClient";
import { fetchWithPagination } from "./util";
const SERVICE_NAME = "mailchimp";

export type MailChimpConfiguration = {
  apiToken: string;
  datacenter: string;
};

export function createMailChimpService(
  configuration: MailChimpConfiguration,
): MarketingToolService {
  const client = createMailChimpClient(
    configuration.apiToken,
    configuration.datacenter,
  );

  async function getList() {
    return fetchWithPagination(async (pagination) => {
      const listResponse = await client.getLists(pagination);
      if (listResponse.status === 200) {
        return listResponse.body.lists;
      }

      throw new ApiError(
        "cannot fetch lists from mailchimp",
        listResponse.status,
        listResponse.body,
      );
    });
  }

  async function getListMembers(listId: string) {
    return fetchWithPagination(async (pagination) => {
      const membersResponse = await client.getListMembers(pagination, listId);
      if (membersResponse.status === 200) {
        return membersResponse.body.members;
      }

      throw new ApiError(
        "cannot fetch members from mailchimp",
        membersResponse.status,
        membersResponse.body,
      );
    });
  }

  return {
    async getAllPersons() {
      const lists = await getList();
      const allMembers = (
        await Promise.all(lists.map(({ id }) => getListMembers(id)))
      ).flat();

      return allMembers.map((member) => ({
        provider: SERVICE_NAME,
        externalId: member.id,
        email: member.email_address,
        fullName: member.full_name,
        externalRawEntity: member,
      }));
    },
  };
}
