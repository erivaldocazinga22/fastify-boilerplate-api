import type { Config } from "drizzle-kit";
import { env } from "./src/config/env.config";

export default {
	schema: "./drizzle/schema/*",
	out: "./drizzle/migrations",
	dialect: "postgresql",
	dbCredentials: {
		url: env.POSTGRES_URL,
	},
} satisfies Config;
