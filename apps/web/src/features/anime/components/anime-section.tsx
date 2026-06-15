import { SectionTitle } from "@/components/layout/section-title";
import type { Anime } from "@/types/anime";

import { AnimeCard } from "./anime-card";

type AnimeSectionProps = {
    eyebrow?: string;
    title: string;
    animes: Anime[];
}

export function AnimeSection({ eyebrow, title, animes }: AnimeSectionProps) {
    return (
        <section className="text-left">
            <SectionTitle eyebrow={eyebrow} title={title} />

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {animes.map((anime) => (
                    <AnimeCard
                        key={anime.id}
                        title={anime.title}
                        posterImage={anime.posterImage}
                        year={anime.year}
                        type={anime.type}
                        episodes={anime.episodes}
                    />
                ))}
            </div>
        </section>
    )
}