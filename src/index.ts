import { Elysia } from "elysia";

const app = new Elysia();
const router = app.get("/", () => 'Hello worl wa');

export default {
  port: 7000,
  fetch: router.fetch
};