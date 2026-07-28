import { Elysia } from "elysia";
import { db } from "@/database";

export const drizzlePlugin = new Elysia({
  name: "drizzle",
}).decorate("db", db);
