type Servico = {
    titulo: string;
    descricao: string;
    preco: string;
};

type Pacote = {
    titulo: string;
    descricao: string;
    preco: string;
    destaque?: boolean;
};

const servicos: Servico[] = [
    {
        titulo: "Corte",
        descricao: "Corte personalizado com acabamento preciso e atenção aos detalhes.",
        preco: "R$ 35",
    },
    {
        titulo: "Barba",
        descricao: "Modelagem, alinhamento e finalização para valorizar seu estilo.",
        preco: "R$ 25",
    },
    {
        titulo: "Tattoo",
        descricao: "Sessões e artes com personalidade, traço marcante e cuidado profissional.",
        preco: "Sob consulta",
    },
];

const pacotes: Pacote[] = [
    {
        titulo: "Corte + Barba",
        descricao: "Visual completo para quem quer praticidade e presença.",
        preco: "R$ 55",
        destaque: true,
    },
    {
        titulo: "Combo Premium",
        descricao: "Corte, barba e finalização especial para uma experiência diferenciada.",
        preco: "R$ 70",
    },
    {
        titulo: "Sessão Tattoo + Corte",
        descricao: "Pacote especial para renovar o visual por completo.",
        preco: "Sob consulta",
    },
];

export function Servicos() {
    return (
        <section
            id="services"
            className="relative overflow-hidden bg-zinc-950 px-6 py-20 text-white md:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">
                {/* topo */}
                <div className="mb-12 text-center">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#A2E317]">
                        Serviços & Pacotes
                    </p>

                    <h2 className="mb-4 text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                        Escolha a experiência que combina com você
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                        Da manutenção do visual ao combo completo, cada atendimento é pensado
                        para destacar sua identidade com estilo, cuidado e personalidade.
                    </p>
                </div>

                {/* serviços */}
                <div className="mb-16">
                    <div className="mb-6 flex items-center gap-3">
                        <div className="h-[2px] w-10 bg-[#A2E317]" />
                        <h3 className="text-lg font-bold uppercase tracking-[0.25em] text-[#A2E317]">
                            Serviços
                        </h3>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {servicos.map((servico) => (
                            <article
                                key={servico.titulo}
                                className="group relative overflow-hidden border border-white/10 bg-black p-6 transition duration-300 hover:-translate-y-1 hover:border-[#A2E317]/60"
                            >
                                <div className="absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-[#A2E317]" />
                                <div className="absolute bottom-0 left-0 h-10 w-10 border-b-2 border-l-2 border-[#A2E317]" />

                                <div className="relative z-10">
                                    <h4 className="mb-3 text-xl font-black uppercase text-white">
                                        {servico.titulo}
                                    </h4>

                                    <p className="mb-6 min-h-[72px] text-sm leading-relaxed text-zinc-400">
                                        {servico.descricao}
                                    </p>

                                    <div className="flex items-center justify-between">
                                        <span className="text-lg font-black text-[#A2E317]">
                                            {servico.preco}
                                        </span>

                                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-zinc-500 transition group-hover:text-white">
                                            Saiba mais
                                        </span>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* pacotes */}
                <div>
                    <div className="mb-6 flex items-center gap-3">
                        <div className="h-[2px] w-10 bg-[#A2E317]" />
                        <h3 className="text-lg font-bold uppercase tracking-[0.25em] text-[#A2E317]">
                            Pacotes
                        </h3>
                    </div>

                    <div className="grid gap-6 md:grid-cols-3">
                        {pacotes.map((pacote) => (
                            <article
                                key={pacote.titulo}
                                className={`relative overflow-hidden border p-6 transition duration-300 hover:-translate-y-1 ${pacote.destaque
                                        ? "border-[#A2E317] bg-[#A2E317] text-black shadow-[0_0_30px_rgba(162,227,23,0.18)]"
                                        : "border-white/10 bg-black text-white hover:border-[#A2E317]/60"
                                    }`}
                            >
                                {pacote.destaque && (
                                    <span className="mb-4 inline-block border border-black/20 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em]">
                                        Mais pedido
                                    </span>
                                )}

                                <h4 className="mb-3 text-xl font-black uppercase">
                                    {pacote.titulo}
                                </h4>

                                <p
                                    className={`mb-6 min-h-[72px] text-sm leading-relaxed ${pacote.destaque ? "text-black/80" : "text-zinc-400"
                                        }`}
                                >
                                    {pacote.descricao}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-lg font-black">{pacote.preco}</span>

                                    <span
                                        className={`text-xs font-bold uppercase tracking-[0.2em] ${pacote.destaque ? "text-black/70" : "text-zinc-500"
                                            }`}
                                    >
                                        Agende
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>

                {/* botão final */}
                <div className="mt-12 flex justify-center">
                    <a
                        href="#contact"
                        className="bg-[#A2E317] px-8 py-3 text-xs font-black uppercase tracking-[0.3em] text-black transition hover:brightness-110"
                        style={{
                            clipPath:
                                "polygon(12% 0, 100% 0, 100% 70%, 88% 100%, 0 100%, 0 30%)",
                        }}
                    >
                        Agendar agora
                    </a>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#A2E317] to-transparent shadow-[0_0_15px_#A2E317]" />
        </section>
    );
}