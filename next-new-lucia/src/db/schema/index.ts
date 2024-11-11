import { integer, sqliteTable } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: integer(),
});

export type Users = typeof users.$inferSelect;
