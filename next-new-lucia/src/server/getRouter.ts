import { Hono } from "hono";

export const getRouter = new Hono().get("/hello", async (c) => {
  return c.json({
    message: "this is a get message",
  });
});
