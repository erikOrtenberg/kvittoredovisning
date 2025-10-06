import * as dotenv from "dotenv";
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	schema: './src/lib/server/db/schema.ts',
	dialect: 'sqlite',
	dbCredentials: {
		url: process.env.SQLITE_DB_PATH || "./src/lib/server/db/data.sqlite",
	},
	out: "./src/lib/server/db/migrations",
	verbose: true,
	strict: true
});
