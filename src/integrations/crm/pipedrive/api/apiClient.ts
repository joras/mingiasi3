import { initClient } from "@ts-rest/core";
import { contract } from "./apiContract";
import { Person } from "./generated/zod-types-manual";
import { z } from "zod";

export type PipedrivePerson = z.infer<typeof Person>;

export function createPipedriveClient(token: string) {
  const pipedriveClient = initClient(contract, {
    baseUrl: "https://api.pipedrive.com/v1",
    baseHeaders: {},
  });

  return {
    async getAllPersons() {
      return await pipedriveClient.getPersons({
        query: { api_token: token },
      });
    },
  };
}
