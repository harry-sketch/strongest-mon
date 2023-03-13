import Image from "next/image";
import type { TPokemonType } from "./Showcase";

interface Props {
  pokemon?: TPokemonType;
  voteForStrongestHandler: () => void;
}

export const Pokemon: React.FC<Props> = ({
  pokemon,
  voteForStrongestHandler,
}) => (
  <div className="flex flex-col items-center justify-center gap-4 rounded-xl border border-slate-50 p-4 text-lg text-slate-100">
    {pokemon?.image.front_default ? (
      <Image
        src={pokemon?.image.front_default}
        alt={pokemon?.name}
        width={150}
        height={150}
        quality={100}
        priority
        className="object-cover "
      />
    ) : null}

    <div className=" text-xl font-bold capitalize text-slate-100">
      {pokemon?.name}
    </div>

    <button
      onClick={voteForStrongestHandler}
      type="button"
      className="rounded  border border-[#15162c] bg-[#2e026d] p-2 text-base text-slate-50"
    >
      Strongest
    </button>
  </div>
);
