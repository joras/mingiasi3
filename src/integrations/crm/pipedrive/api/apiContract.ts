import { initContract } from "@ts-rest/core";
import { z } from "zod";
import { PersonResponse } from "./generated/zod-types-manual";

const c = initContract();

export const contract = c.router({
  getPersons: {
    method: "GET",
    path: "/persons",
    responses: {
      200: PersonResponse,
    },
    query: z.object({
      api_token: z.string(),
      start: z.number().int().optional(),
      limit: z.number().int().optional(),
    }),
    summary: "get all persons",
    validateResponseOnClient: true,
  },
});
