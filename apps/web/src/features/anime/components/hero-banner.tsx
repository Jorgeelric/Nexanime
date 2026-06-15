import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Anime } from "@/types/anime";

type HeroBannerProps = {
  anime: Anime;
};

export function HeroBanner({ anime }: HeroBannerProps) {
  return (
    <section className="relative min-h-[560px] overflow-hidden">
      <div className="absolute inset-0 bg-zinc-950">
        {anime.bannerImage ? (
          <div
            className="absolute inset-0 bg-cover bg-center opacity-60"
            style={{ backgroundImage: `url(${anime.bannerImage})` }}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-900 via-zinc-950 to-red-950" />
        )}

        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/40" />
      </div>

      <div className="relative z-10 flex min-h-[560px] items-end px-4 pb-14 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="accent">{anime.type}</Badge>

            {anime.year && <Badge>{anime.year}</Badge>}

            {anime.episodes && (
              <Badge variant="muted">{anime.episodes} episódios</Badge>
            )}
          </div>

          <h1 className="text-4xl font-bold tracking-normal text-zinc-50 sm:text-6xl">
            {anime.title}
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-7 text-zinc-300 sm:text-lg">
            Uma prévia cinematográfica do destaque principal do NexAnime.
            Futuramente, esta descrição virá enriquecida pela nossa API usando
            dados do GoAnime e metadados externos.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button size="lg">Assistir agora</Button>
            <Button variant="secondary" size="lg">
              Ver detalhes
            </Button>
          </div>

          {anime.genres.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {anime.genres.map((genre) => (
                <Badge key={genre} variant="default">
                  {genre}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}