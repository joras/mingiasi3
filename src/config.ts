import { resolve } from "path";
import { EnvType, load } from "ts-dotenv";

const schema = {
  PORT: {
    type: Number,
    default: 3000,
  },
  PIPEDRIVE_API_KEY: String,
  MAILCHIMP_API_KEY: String,
  MAILCHIMP_API_DC: String,
};

export type Env = EnvType<typeof schema>;

export let config: Env;

export function loadConfig(): void {
  config = load(schema, resolve(__dirname, "..", ".env"));
}
