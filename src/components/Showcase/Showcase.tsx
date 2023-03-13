import { useState } from "react";
import { getOptionsFoVoting } from "(~/)/utils/helpers";
import { api } from "(~/)/utils/api";
import type { RouterOutputs } from "(~/)/utils/api";
import { Pokemon } from "./Pokemon";

export type TPokemonType = RouterOutputs["pokemon"]["getPokemonById"];

export const Showcase: React.FC = () => {
  //    Local States
  const [ids, updateIds] = useState<number[]>(() => getOptionsFoVoting());

  const [firstId, secondId] = ids;

  const { data: firstPokemon, isLoading: isFirstPokemonLoading } =
    api.pokemon.getPokemonById.useQuery(
      {
        id: firstId,
      },
      {
        enabled: firstId !== undefined,
      }
    );

  const {
    data: secondPokemon,
    isLoading: isSecondPokemonLoading,
    refetch,
  } = api.pokemon.getPokemonById.useQuery(
    {
      id: secondId,
    },
    {
      enabled: secondId !== undefined,
    }
  );

  const castVoting = api.pokemon.castVote.useMutation({
    onSuccess: () => {
      void refetch();
    },
  });

  const voteForStrongestHandler = (selectedId: number | undefined) => {
    if (!selectedId) return;

    if (selectedId === firstId) {
      castVoting.mutate({ votedFor: firstId, votedAgainst: secondId });
    } else {
      castVoting.mutate({ votedFor: secondId, votedAgainst: firstId });
    }

    updateIds(getOptionsFoVoting());
  };

  if (isFirstPokemonLoading || isSecondPokemonLoading)
    return <div className="text-lg text-slate-50">Loading...</div>;

  return (
    <div className="flex items-center">
      <Pokemon
        pokemon={firstPokemon}
        voteForStrongestHandler={() => voteForStrongestHandler(firstId)}
      />

      <div className="p-4 text-slate-50">vs</div>
      <Pokemon
        pokemon={secondPokemon}
        voteForStrongestHandler={() => voteForStrongestHandler(secondId)}
      />
    </div>
  );
};
