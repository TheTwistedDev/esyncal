import type { Config } from "drizzle-kit";
import * as dotenv from "dotenv";
dotenv.config();

export default {
  schema: "./src/lib/server/db/schema.ts",
  out: "./drizzle",
  driver: 'mysql2',
  dbCredentials: {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    connectionString: process.env.DB_URL!,
  }
} satisfies Config