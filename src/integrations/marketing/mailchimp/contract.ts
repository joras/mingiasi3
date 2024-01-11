import { initContract } from "@ts-rest/core";
import { z } from "zod";

const c = initContract();

export const contract = c.router({
  getLists: {
    method: "GET",
    path: "/list",
    responses: {
      200: z.any(),
    },
    pathParams: z.object({
      id: z.string(),
    }),
    summary: "get all lists",
  },
  getListMembers: {
    method: "GET",
    path: "/list/{:id}/members",
    responses: {
      200: z.any(),
    },
    pathParams: z.object({
      id: z.string(),
    }),
    summary: "get all list members",
  },
});
