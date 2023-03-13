const MaxPokemonId = 5;

export const getRandomPokemonId: (notSameNumber?: number) => number = (
  notSameNumber
) => {
  const pokemonNumber = Math.floor(Math.random() * (MaxPokemonId + 1) - 1);

  if (pokemonNumber !== notSameNumber) return pokemonNumber;

  return getRandomPokemonId(notSameNumber);
};

export const getOptionsFoVoting = () => {
  const firstId = getRandomPokemonId();
  const secondId = getRandomPokemonId(firstId);

  return [firstId, secondId];
};
