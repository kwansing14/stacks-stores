import { AppType } from "@/server";
import { hc } from "hono/client";

export const client = hc<AppType>("/api");
