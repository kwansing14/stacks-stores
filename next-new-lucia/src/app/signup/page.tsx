import Form from 'next/form';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { hash } from '@node-rs/argon2';
import { eq } from 'drizzle-orm';
import { generateIdFromEntropySize } from 'lucia';

import { db } from '@/db';
import { userTable } from '@/db/schema';
import { lucia } from '@/lib/auth';

export default async function Page() {
  async function signup(formData: FormData) {
    'use server';
    const username = formData.get('username');
    // username must be between 4 ~ 31 characters, and only consists of lowercase letters, 0-9, -, and _
    // keep in mind some database (e.g. mysql) are case insensitive

    if (
      typeof username !== 'string' ||
      username.length < 3 ||
      username.length > 31 ||
      !/^[a-z0-9_-]+$/.test(username)
    ) {
      console.log('username invalid');
      return;
      // return {
      //   error: 'Invalid username',
      // };
    }
    const password = formData.get('password');
    if (typeof password !== 'string' || password.length < 3 || password.length > 255) {
      console.log('password invalid');
      return;
      // return {
      //   error: 'Invalid password',
      // };
    }

    const passwordHash = await hash(password, {
      // recommended minimum parameters
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });
    const userId = generateIdFromEntropySize(10); // 16 characters long

    const existingUser = await db.query.userTable.findFirst({
      where: eq(userTable.username, username),
    });

    if (existingUser) {
      console.log('existingUser found');
      return;
    }
    // TODO: check if username is already used
    await db.insert(userTable).values({
      id: userId,
      username: username,
      passwordHash: passwordHash,
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    // @ts-expect-error cookies().set is working fine
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect('/');
  }

  return (
    <>
      <h1>Create an account</h1>
      <Form action={signup}>
        <label htmlFor="username">Username</label>
        <input className="text-black" name="username" id="username" />
        <br />
        <label htmlFor="password">Password</label>
        <input className="text-black" type="password" name="password" id="password" />
        <br />
        <button>Continue</button>
      </Form>
    </>
  );
}
