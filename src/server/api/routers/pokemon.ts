import { z } from "zod";
import { PokemonClient } from "pokenode-ts";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const pokemonRouter = createTRPCRouter({
  getPokemonById: publicProcedure
    .input(z.object({ id: z.number().nullish() }))
    .query(async ({ input }) => {
      const pokemonApi = new PokemonClient();
      const pokemon = await pokemonApi.getPokemonById(input.id ?? 0);
      const name = pokemon.name;
      const image = pokemon.sprites;

      return { name, image };
    }),
});
