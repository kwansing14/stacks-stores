// import { config } from 'dotenv';

import { drizzle } from 'drizzle-orm/libsql';

import * as schema from '@/db/schema/index';
import { turso } from '@/lib/turso';

const db = drizzle(turso, { schema });

export { db, schema };
