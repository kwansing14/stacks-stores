import { Hono } from 'hono';

import { db } from '@/db';
import { users } from '@/db/schema';

export const getRouter = new Hono().get('/hello', async (c) => {
  const result = await db.select().from(users);
  console.log('----------------');
  console.log(result);
  return c.json({
    message: 'this is a get message',
  });
});
