import { appRouter } from "@/server";
import { Hono } from "hono";
import { handle } from "hono/vercel";
import { z } from "zod";
import { zValidator } from "@hono/zod-validator";
export const runtime = "edge";

const app = new Hono().basePath("/api");

app.route("/", appRouter);

app.get(
  "/hello",
  zValidator(
    "json",
    z.object({
      message: z.string(),
    }),
  ),
  (c) => {
    // const { message } = c.req.valid("json");
    return c.json({
      message: "Hello from Hono!",
    });
  },
);

export const GET = handle(app);
export const POST = handle(app);
