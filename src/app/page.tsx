import { Galeria } from "@/components/Galeria";
import { Hero } from "@/components/Hero";
import { Mapa } from "@/components/Mapa";
import { Navbar } from "@/components/Navbar";
import { Produtos } from "@/components/Produtos";
import { Servicos } from "@/components/Servicos";
import { Sobre } from "@/components/Sobre";
import { Time } from "@/components/Time";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black pt-24 text-white">
      <Navbar></Navbar>
      <Hero></Hero>
      <Servicos></Servicos>
      <Produtos></Produtos>
      <Time></Time>
      <Sobre></Sobre>
      <Galeria></Galeria>
      <Mapa></Mapa>
      <Footer></Footer>
    </main>
      
    
  );
}
