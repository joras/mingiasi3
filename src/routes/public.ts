import express from "express";

import { createPipeDriveService } from "../integrations/crm/pipedrive/service";
import { config } from "../config";
import { createMailChimpService } from "../integrations/marketing/mailchimp/service";
import { marketingCrmDifference } from "../diff/personDiff";

export const publicRoutes = express.Router();

const pipeDriveService = createPipeDriveService({
  apiToken: config.PIPEDRIVE_API_KEY,
});

const mailChimpService = createMailChimpService({
  apiToken: config.MAILCHIMP_API_KEY,
  datacenter: config.MAILCHIMP_API_DC,
});

publicRoutes.get("/difference", async (_req, res, next) => {
  try {
    const crmPersons = await pipeDriveService.getAllPersons();
    const marketingPersons = await mailChimpService.getAllPersons();

    const diff = marketingCrmDifference(marketingPersons, crmPersons);

    res.send(diff);
  } catch (e) {
    next(e);
  }
});
