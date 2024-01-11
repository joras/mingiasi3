import { resolve } from "path";
import { EnvType, load } from "ts-dotenv";

const schema = {
  PORT: {
    type: Number,
    default: 3000,
  },
};

export type Env = EnvType<typeof schema>;

export let config: Env;

export function loadConfig(): void {
  config = load(schema, resolve(__dirname, "..", ".env"));
}
