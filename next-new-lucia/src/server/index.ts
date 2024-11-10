import { Hono } from "hono";
import { postRouter } from "./postRouter";
import { getRouter } from "./getRouter";

const app = new Hono();

/**
 * The base router. Include all the routes here from `./routes/*`
 */
export const appRouter = app
  .route("/postTest", postRouter)
  .route("/getTest", getRouter);

/** Exported type definition for the hono/client. */
export type AppType = typeof appRouter;
