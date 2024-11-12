import { Hono } from 'hono';

import { db } from '@/db';
import { users } from '@/db/schema';

export const getRouter = new Hono().get('/hello', async (c) => {
  const result = await db.select().from(users);
  return c.json({
    message: result[0].id,
  });
});
