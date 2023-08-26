import type { Config } from 'drizzle-kit';
import { loadEnv } from 'vite';
const { DATABASE_AUTH_TOKEN, DATABASE_URL } = loadEnv(
  process.env.NODE_ENV as string,
  process.cwd(),
  ''
);

export default {
  schema: './src/db/schema.ts',
  out: './src/db/drizzle/migrations',
  driver: 'turso',
  dbCredentials: {
    url: DATABASE_URL,
    authToken: DATABASE_AUTH_TOKEN,
  },
} satisfies Config;
