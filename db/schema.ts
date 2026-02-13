import { sql } from "drizzle-orm";
import { pgTable, text, timestamp } from "drizzle-orm/pg-core";

export const user = pgTable("user", {
	id: text("id")
		.primaryKey()
		.default(sql`gen_random_uuid()`),
	name: text("name"),
	email: text("email").notNull().unique(),
	organizationId: text("organization_id").notNull(),
	createdAt: timestamp("created_at").defaultNow(),
	updatedAt: timestamp("updated_at").defaultNow(),
	image: text("image"),
});
