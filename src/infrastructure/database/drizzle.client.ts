import { env } from "@/config/env.config";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { exemple } from "../../../drizzle/schema/exemple-schema";

export const pg = postgres(env.POSTGRES_URL);
export const db = drizzle(pg, {
	schema: {
		exemple,
	},
});
