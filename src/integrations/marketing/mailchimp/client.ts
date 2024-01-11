import { initClient } from "@ts-rest/core";
import { config } from "../../../config";
import { contract } from "./contract";

export const pipedriveClient = initClient(contract, {
  baseUrl: `https://${config.MAILCHIMP_API_DC}.api.mailchimp.com/3.0/`,
  baseHeaders: { Authorization: `Bearer ${config.MAILCHIMP_API_KEY}` },
});

export function getClients() {
  pipedriveClient.getListMembers({ params: { id: "bae1df6173" } });
}
