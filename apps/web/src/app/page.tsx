import { Container } from "@/components/layout/container";
import { SectionTitle } from "@/components/layout/section-title";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { AnimeSection } from "@/features/anime/components/anime-section";
import { mockAnimes } from "@/features/anime/data/mock-animes";
import { HeroBanner } from "@/features/anime/components/hero-banner";
import { Navbar } from "@/components/layout/navbar";

export default function HomePage() {
  return (
    <main className="min-h-screen text-zinc-50">
       <Navbar />
    <HeroBanner anime={mockAnimes[0]} />

    <section className="py-12">
      <Container>
        <div className="rounded-md border border-white/10 bg-white/[0.03] p-5 text-left">
          <SectionTitle eyebrow="Design system" title="Base visual criada" />

          <div className="mb-4 flex flex-wrap gap-2">
            <Badge variant="accent">Novo</Badge>
            <Badge>HD</Badge>
            <Badge variant="muted">TV</Badge>
            <Badge variant="success">Disponível</Badge>
          </div>

          <p className="text-sm leading-6 text-zinc-400">
            Já temos botões, container e títulos de seção reutilizáveis para
            construir a interface do NexAnime com consistência.
          </p>

          <div className="mt-5 grid grid-cols-3 gap-3">
            <Skeleton className="aspect-[2/3]" />
            <Skeleton className="aspect-[2/3]" />
            <Skeleton className="aspect-[2/3]" />
          </div>
        </div>

        <div className="mt-10">
          <AnimeSection eyebrow="Preview" title="Cards de anime" animes={mockAnimes} />
        </div>
      </Container>
    </section>
  </main>
  );
}
