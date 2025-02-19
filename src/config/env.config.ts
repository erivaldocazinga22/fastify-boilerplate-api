import { z } from "zod";

const envSchema = z.object({
	PORT: z.coerce.number().default(5500),
	POSTGRES_URL: z.string().url(),
	REDIS_URL: z.string().url(),
	NODE_ENV: z.enum(["production", "development"]).default("production"),
});

export const env = envSchema.parse(process.env);
