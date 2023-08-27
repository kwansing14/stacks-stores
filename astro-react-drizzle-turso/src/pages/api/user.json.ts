import type { APIRoute } from 'astro';
import db, { schema } from '@/db/client';
import { eq } from 'drizzle-orm';

export const post: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { username } = body;

  const res = await db.insert(schema.users).values({ name: username });
  return {
    body: JSON.stringify({
      response: res,
    }),
  };
};

export const get: APIRoute = async () => {
  const users = await db.select().from(schema.users);
  return {
    body: JSON.stringify({
      users: users,
    }),
  };
};

export const del: APIRoute = async ({ request }) => {
  const body = await request.json();
  const { id } = body;

  const res = await db.delete(schema.users).where(eq(schema.users.id, id));
  return {
    body: JSON.stringify({
      response: res,
    }),
  };
};
