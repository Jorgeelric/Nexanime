"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "Início", href: "/" },
  { label: "Animes", href: "/animes" },
  { label: "Gêneros", href: "/genres" },
  { label: "Minha lista", href: "/my-list" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen((currentValue) => !currentValue);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-zinc-950/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-8">
          <a href="/" className="text-xl font-black tracking-normal text-red-500">
            NexAnime
          </a>

          <nav className="hidden items-center gap-5 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "text-sm font-medium text-zinc-300 transition-colors hover:text-white",
                  item.href === "/" && "text-white",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button variant="ghost" size="sm">
            Buscar
          </Button>

          <Button size="sm">Entrar</Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-zinc-100 transition-colors hover:bg-white/10 md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">
            {isOpen ? "Fechar menu" : "Abrir menu"}
          </span>
          <span className="flex flex-col gap-1.5">
            <span
              className={cn(
                "block h-0.5 w-5 rounded-full bg-current transition-transform",
                isOpen && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 rounded-full bg-current transition-opacity",
                isOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "block h-0.5 w-5 rounded-full bg-current transition-transform",
                isOpen && "-translate-y-2 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-zinc-950/95 px-4 py-4 shadow-2xl md:hidden">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium text-zinc-300 transition-colors hover:bg-white/10 hover:text-white",
                  item.href === "/" && "bg-white/10 text-white",
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <Button variant="secondary" size="sm" onClick={closeMenu}>
              Buscar
            </Button>

            <Button size="sm" onClick={closeMenu}>
              Entrar
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}