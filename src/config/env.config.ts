import { z } from "zod";

const envSchema = z.object({
	PORT: z.coerce.number().default(5500),
	DATABASE_URL: z.string().url(),
	NODE_ENV: z.enum(["production", "development"]).default("production"),
});

export const env = envSchema.parse(process.env);
