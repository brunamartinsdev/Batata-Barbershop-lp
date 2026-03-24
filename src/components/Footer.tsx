import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      id="Footer"
      className="relative overflow-hidden bg-black px-6 pb-8 pt-16 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-2 lg:grid-cols-4">
          {/* marca */}
          <div>
            <div className="mb-4">
              <Image
                src="/images/logo-batata.PNG"
                alt="Batata Barber Shop & Tattoo"
                width={90}
                height={90}
                className="h-auto w-16 object-contain sm:w-20"
              />
            </div>

            <h3 className="mb-3 text-lg font-black uppercase text-[#A2E317]">
              Batata Barber Shop & Tattoo
            </h3>

            <p className="max-w-xs text-sm leading-relaxed text-zinc-400">
              Estilo, atitude e personalidade em cada detalhe. Um espaço pensado
              para quem valoriza presença e experiência.
            </p>
          </div>

          {/* navegação */}
          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#A2E317]">
              Navegação
            </h4>

            <nav className="flex flex-col gap-3 text-sm text-zinc-400">
              <Link href="#home" className="transition hover:text-[#A2E317]">
                Início
              </Link>
              <Link href="#services" className="transition hover:text-[#A2E317]">
                Serviços
              </Link>
              <Link href="#equipe" className="transition hover:text-[#A2E317]">
                Equipe
              </Link>
              <Link href="#about" className="transition hover:text-[#A2E317]">
                Sobre
              </Link>
              <Link href="#galeria" className="transition hover:text-[#A2E317]">
                Galeria
              </Link>
              <Link href="#mapa" className="transition hover:text-[#A2E317]">
                Localização
              </Link>
            </nav>
          </div>

          {/* contato */}
          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#A2E317]">
              Contato
            </h4>

            <div className="space-y-3 text-sm text-zinc-400">
              <p>
                <span className="font-bold text-white">WhatsApp:</span>{" "}
                (00) 00000-0000
              </p>
              <p>
                <span className="font-bold text-white">Telefone:</span>{" "}
                (00) 0000-0000
              </p>
              <p>
                <span className="font-bold text-white">Instagram:</span>{" "}
                @batatabarbershop
              </p>
              <p>
                <span className="font-bold text-white">Endereço:</span>{" "}
                Rua Exemplo, 123 - Centro
              </p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="mb-4 text-sm font-black uppercase tracking-[0.25em] text-[#A2E317]">
              Agendamento
            </h4>

            <p className="mb-5 text-sm leading-relaxed text-zinc-400">
              Fale com a nossa equipe e escolha a melhor forma de agendar seu horário.
            </p>

            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#A2E317] px-6 py-3 text-xs font-black uppercase tracking-[0.25em] text-black transition hover:brightness-110"
              style={{
                clipPath:
                  "polygon(12% 0, 100% 0, 100% 70%, 88% 100%, 0 100%, 0 30%)",
              }}
            >
              Agendar agora
            </a>
          </div>
        </div>

        {/* rodapé inferior */}
        <div className="flex flex-col items-center justify-between gap-4 pt-6 text-center text-xs uppercase tracking-[0.2em] text-zinc-500 md:flex-row md:text-left">
          <p>© 2026 Batata Barber Shop & Tattoo. Todos os direitos reservados.</p>

          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#A2E317]"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/5500000000000"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#A2E317]"
            >
              WhatsApp
            </a>
            <a
              href="https://www.google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#A2E317]"
            >
              Mapa
            </a>
          </div>
        </div>
      </div>

      {/* linha neon */}
      <div className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#A2E317] to-transparent shadow-[0_0_15px_#A2E317]" />
    </footer>
  );
}