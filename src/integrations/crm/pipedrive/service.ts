import { ApiError } from "../../error";
import { CrmPerson, CrmService } from "../service";
import { createPipedriveClient, PipedrivePerson } from "./api/apiClient";

const SERVICE_NAME = "pipedrive_crm";

export type PipedriveConfiguration = {
  apiToken: string;
};

export function createPipeDriveService(
  configuration: PipedriveConfiguration,
): CrmService {
  const client = createPipedriveClient(configuration.apiToken);

  return {
    async getAllPersons() {
      const result = await client.getAllPersons();

      if (result.status === 200) {
        return (result.body.data ?? []).map(
          (person): CrmPerson => ({
            provider: SERVICE_NAME,
            externalId: person.id.toString(),
            firstName: person.first_name,
            lastName: person.last_name,
            email: findPrimaryEmail(person.email),
            externalRawEntity: person,
          }),
        );
      }

      throw new ApiError(
        "cannot fetch users from pipedrive",
        result.status,
        result.body,
      );
    },
  };
}

function findPrimaryEmail(emails: PipedrivePerson["email"]) {
  if (emails.length === 0) {
    throw "ERROR";
  }

  const primary = emails.find((email) => email.primary === true);
  return primary?.value ?? emails[0].value; // primary, or fall back to first
}
