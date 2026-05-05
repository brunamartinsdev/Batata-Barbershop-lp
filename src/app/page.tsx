"use client";

import { useEffect, useState } from "react";

import { Galeria } from "@/components/Galeria";
import { Hero } from "@/components/Hero";
import { Mapa } from "@/components/Mapa";
import { Navbar } from "@/components/Navbar";
import { Produtos } from "@/components/Produtos";
import { Servicos } from "@/components/Servicos";
import { Sobre } from "@/components/Sobre";
import { Time } from "@/components/Time";
import { Footer } from "@/components/Footer";
import { Carregamento } from "@/components/Carregamento";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1600);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Carregamento isLoading={loading} />

      {!loading && (
        <main className="min-h-screen bg-black pt-24 text-white">

          <Navbar />
          <Hero />
          <Servicos />
          <Time />
          <Produtos />
          <Sobre />
          <Galeria />
          <Mapa />
          <Footer />

        </main>
      )}
    </>
  );
}