import { Redis } from "@upstash/redis";

export const redis = new Redis({
  url: "https://us1-credible-stork-39666.upstash.io",
  token: process.env.REDIS_KEY!,
});
