import express from "express";
import { pipedriveClient } from "../integrations/crm/pipedrive/client";
import { config } from "../config";
import { getClients } from "../integrations/marketing/mailchimp/client";

export const publicRoutes = express.Router();

publicRoutes.get("/difference", async (_req, res) => {
  const members = await pipedriveClient.getMembers({
    query: { api_token: config.PIPEDRIVE_API_KEY },
  });

  const clients = await getClients();

  res.send(
    { pipedrive: members, mailchimp: clients },
  );
});
