import { Hono } from 'hono';

import { getRouter } from './getRouter';
import { postRouter } from './postRouter';

const app = new Hono();

/**
 * The base router. Include all the routes here from `./routes/*`
 */
export const appRouter = app.route('/postTest', postRouter).route('/getTest', getRouter);

/** Exported type definition for the hono/client. */
export type AppType = typeof appRouter;
