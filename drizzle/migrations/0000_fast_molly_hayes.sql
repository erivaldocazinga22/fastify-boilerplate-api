CREATE TABLE "nome-da-table" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"name" text,
	"email" text,
	"created_at" timestamp DEFAULT now(),
	CONSTRAINT "nome-da-table_email_unique" UNIQUE("email")
);
