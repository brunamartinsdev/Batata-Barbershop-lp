export function Sobre() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-6 py-20 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">
        
        {/* Lado do Vídeo */}
        <div className="relative">
          <div className="pointer-events-none absolute -right-3 -top-3 z-20 h-12 w-12 border-r-4 border-t-4 border-[#A2E317]" />
          <div className="pointer-events-none absolute -bottom-3 -left-3 z-20 h-12 w-12 border-b-4 border-l-4 border-[#A2E317]" />

          <div
            className="aspect-[4/5] overflow-hidden bg-zinc-900 shadow-2xl"
            style={{
              clipPath:
                "polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 12%)",
            }}
          >
            <video
              src="/videos/Sobre.mp4" // Caminho do seu vídeo na pasta public
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover grayscale brightness-75 transition-all duration-500 hover:grayscale-0"
            />
          </div>
        </div>

        {/* texto */}
        <div>
          <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#A2E317]">
            Sobre a Batata
          </p>

          <h2 className="mb-5 text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
            Mais do que visual. <br />
            Uma experiência com identidade.
          </h2>

          <p className="mb-4 text-sm leading-relaxed text-zinc-400 sm:text-base">
            A Batata Barber Shop & Tattoo nasceu com a proposta de unir estilo,
            atitude e cuidado em um só espaço. Aqui, cada detalhe importa:
            do atendimento à finalização, tudo é pensado para oferecer uma
            experiência marcante e personalizada.
          </p>

          <p className="mb-6 text-sm leading-relaxed text-zinc-400 sm:text-base">
            Nosso objetivo é criar um ambiente onde cada cliente se sinta
            confiante, bem atendido e representado pelo próprio estilo —
            seja no corte, na barba ou na tattoo.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            <div className="border border-white/10 bg-zinc-950 p-4 text-center">
              <strong className="block text-2xl font-black text-[#A2E317]">
                +500
              </strong>
              <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                Atendimentos
              </span>
            </div>

            <div className="border border-white/10 bg-zinc-950 p-4 text-center">
              <strong className="block text-2xl font-black text-[#A2E317]">
                100%
              </strong>
              <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                Estilo
              </span>
            </div>

            <div className="border border-white/10 bg-zinc-950 p-4 text-center">
              <strong className="block text-2xl font-black text-[#A2E317]">
                Premium
              </strong>
              <span className="text-xs uppercase tracking-[0.25em] text-zinc-400">
                Experiência
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#A2E317] to-transparent shadow-[0_0_15px_#A2E317]" />
    </section>
  );
}