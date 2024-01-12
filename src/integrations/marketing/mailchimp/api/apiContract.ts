import { initContract } from "@ts-rest/core";
import { z } from "zod";
import ListMember from "./generated/ListMembers";
import Lists from "./generated/ListResponse";

const c = initContract();

export const contract = c.router({
  getLists: {
    method: "GET",
    path: "/lists",
    responses: {
      200: z.object({ lists: z.array(Lists) }),
    },
    query: z.object({
      offset: z.number().int().optional(),
      count: z.number().int().optional(),
    }),
    summary: "get all lists",
    validateResponseOnClient: true,
  },
  getListMembers: {
    method: "GET",
    path: "/lists/:list_id/members",
    responses: {
      200: z.object({ members: z.array(ListMember) }),
    },
    pathParams: z.object({
      list_id: z.string(),
    }),
    query: z.object({
      offset: z.number().int().optional(),
      count: z.number().int().optional(),
    }),
    summary: "get all list clients",
    validateResponseOnClient: true,
  },
});
