import { initClient } from "@ts-rest/core";
import { contract } from "./contract";

export const pipedriveClient = initClient(contract, {
  baseUrl: "https://api.pipedrive.com/v1",
  baseHeaders: {},
});
