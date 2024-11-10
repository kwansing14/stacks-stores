import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { z } from "zod";

export const postRouter = new Hono().post(
  "/",
  zValidator(
    "json",
    z.object({
      message: z.string(),
    }),
  ),
  (c) => {
    const { message } = c.req.valid("json");
    return c.json({
      message: message,
    });
  },
);
