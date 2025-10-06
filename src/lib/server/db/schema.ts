import { sql } from "drizzle-orm";
import { timestamp } from "drizzle-orm/mysql-core";
import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

const permissions = sqliteTable("permissions", {
	id: integer("id", { mode: "number" })
		.primaryKey({ autoIncrement: true })
		.notNull(),
	name: text("name")
		.notNull(),
});

const users = sqliteTable("users", {
	id: integer("id", { mode: "number" })
		.primaryKey({ autoIncrement: true })
		.notNull(),
	name: text("name").notNull(),
	password: text("password").notNull(),
});

const userToPermission = sqliteTable("user_to_permission", {
	userId: integer("permissionId", { mode: "number" })
		.notNull(),
	permissionId: integer("permissionId", { mode: "number" })
		.notNull(),
});

type InsertUserParams = typeof users.$inferInsert;
type InsertPermissionParams = typeof permissions.$inferInsert;
type InsertUserToPermissionParams = typeof userToPermission.$inferInsert;

export {
	users,
	permissions,
	userToPermission,
	type InsertUserParams,
	type InsertPermissionParams,
	type InsertUserToPermissionParams,
};
