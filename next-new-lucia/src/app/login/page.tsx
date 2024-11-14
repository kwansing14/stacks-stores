import Form from 'next/form';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { verify } from '@node-rs/argon2';
import { eq } from 'drizzle-orm';

import { db } from '@/db';
import { userTable } from '@/db/schema';
import { lucia } from '@/lib/auth';

export default async function Page() {
  async function login(formData: FormData) {
    'use server';

    const username = formData.get('username');

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

    if (typeof password !== 'string' || password.length < 6 || password.length > 255) {
      console.log('password invalid');
      return;
      // return {
      //   error: 'Invalid password',
      // };
    }

    const existingUser = await db.query.userTable.findFirst({
      where: eq(userTable.username, username),
    });

    if (!existingUser) {
      // NOTE:
      // Returning immediately allows malicious actors to figure out valid usernames from response times,
      // allowing them to only focus on guessing passwords in brute-force attacks.
      // As a preventive measure, you may want to hash passwords even for invalid usernames.
      // However, valid usernames can be already be revealed with the signup page among other methods.
      // It will also be much more resource intensive.
      // Since protecting against this is non-trivial,
      // it is crucial your implementation is protected against brute-force attacks with login throttling etc.
      // If usernames are public, you may outright tell the user that the username is invalid.
      console.log('username invalid');
      return;
      // return {
      //   error: 'Incorrect username or password',
      // };
    }

    const validPassword = await verify(existingUser.passwordHash, password, {
      memoryCost: 19456,
      timeCost: 2,
      outputLen: 32,
      parallelism: 1,
    });

    if (!validPassword) {
      console.log('password invalid');
      return;
      // return {
      //   error: 'Incorrect username or password',
      // };
    }

    const session = await lucia.createSession(existingUser.id, {});
    const sessionCookie = lucia.createSessionCookie(session.id);

    // @ts-expect-error cookies().set is working fine
    cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    return redirect('/');
  }
  return (
    <>
      <h1>Sign in</h1>
      <Form action={login}>
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
