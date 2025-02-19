import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const exemple = pgTable("nome-da-table", {
	id: uuid("id").primaryKey().defaultRandom(),
	name: text(),
	email: text().unique(),
	creadtedAt: timestamp("created_at").defaultNow(),
});
