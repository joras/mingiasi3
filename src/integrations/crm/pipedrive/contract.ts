import { initContract } from "@ts-rest/core";
import { operations } from "./generated/zod-types";
import { z } from "zod";

const c = initContract();

export const contract = c.router({
  getMembers: {
    method: "GET",
    path: "/persons",
    responses: {
      200:
        operations["getPersons"].responses["200"].content["application/json"],
    },
    query: z.object({
      api_token: z.string(),
    }),
    summary: "Create a post",
  },
});
