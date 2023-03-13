import { createTRPCRouter } from "(~/)/server/api/trpc";
import { exampleRouter } from "(~/)/server/api/routers/example";
import { pokemonRouter } from "./routers/pokemon";

export const appRouter = createTRPCRouter({
  example: exampleRouter,
  pokemon: pokemonRouter,
});

export type AppRouter = typeof appRouter;
