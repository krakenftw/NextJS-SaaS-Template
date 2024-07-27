import { serial, text, timestamp, pgTable } from "drizzle-orm/pg-core";

export const userTable = pgTable("user", {
  id: text("id").primaryKey(),
  name: text("name"),
  email: text("email"),
  password: text("password"),
  createdAt: timestamp("created_at"),
  updatedAt: timestamp("updated_at"),
});

export type User = typeof userTable.$inferSelect;
