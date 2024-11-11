import { createClient } from '@libsql/client';

// import '../../envConfig.ts';

export const turso = createClient({
  url: process.env.DATABASE_URL,
  authToken: process.env.DATABASE_AUTH_TOKEN,
  // url: DATABASE_URL,
  // authToken: DATABASE_AUTH_TOKEN,
});
