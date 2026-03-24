import Image from "next/image";

const produtos = [
    {
        nome: "Pomada Modeladora",
        descricao: "Fixação forte com acabamento natural.",
        imagem: "/images/produto-1.jpg",
    },
    {
        nome: "Óleo para Barba",
        descricao: "Hidratação e brilho para a barba.",
        imagem: "/images/produto-2.jpg",
    },
    {
        nome: "Shampoo Masculino",
        descricao: "Limpeza profunda para cabelo e barba.",
        imagem: "/images/produto-3.jpg",
    },
];

export function Produtos() {
    return (
        <section
            id="produtos"
            className="relative bg-black px-6 py-20 text-white md:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">
                {/* Título */}
                <div className="mb-12 text-center">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#A2E317]">
                        Produtos & Parceiros
                    </p>

                    <h2 className="mb-4 text-3xl font-black uppercase sm:text-4xl md:text-5xl">
                        Trabalhamos com produtos profissionais
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm text-zinc-400 sm:text-base">
                        Utilizamos e indicamos produtos de alta qualidade para garantir o
                        melhor resultado no seu estilo.
                    </p>
                </div>

                {/* Parceiro */}
                <div className="mb-14 flex flex-col items-center justify-center gap-6 border border-white/10 bg-zinc-950 p-8 md:flex-row md:justify-between">
                    <div className="flex items-center gap-6">
                        <Image
                            src="/images/embaixador.jpg"
                            alt="Embaixador Cosméticos"
                            width={120}
                            height={120}
                            className="h-auto w-24 object-contain"
                        />

                        <div>
                            <h3 className="text-xl font-bold uppercase text-[#A2E317]">
                                Embaixador Cosméticos
                            </h3>
                            <p className="mt-1 max-w-md text-sm text-zinc-400">
                                Produtos profissionais de alta qualidade para cabelo e barba,
                                garantindo estilo, fixação e cuidado no dia a dia.
                            </p>
                        </div>
                    </div>

                    <span className="border border-[#A2E317] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#A2E317]">
                        Parceiro Oficial
                    </span>
                </div>

                {/* Produtos */}
                <div className="grid gap-6 md:grid-cols-3">
                    {produtos.map((produto) => (
                        <article
                            key={produto.nome}
                            className="group relative overflow-hidden border border-white/10 bg-zinc-950 transition hover:-translate-y-1 hover:border-[#A2E317]/60"
                        >
                            {/* imagem */}
                            <div className="h-44 w-full overflow-hidden">
                                <Image
                                    src={produto.imagem}
                                    alt={produto.nome}
                                    width={400}
                                    height={300}
                                    className="h-full w-full object-cover grayscale transition duration-300 group-hover:grayscale-0"
                                />
                            </div>

                            {/* conteúdo */}
                            <div className="p-6">
                                <h4 className="mb-2 text-lg font-bold uppercase">
                                    {produto.nome}
                                </h4>

                                <p className="text-sm text-zinc-400">
                                    {produto.descricao}
                                </p>
                            </div>

                            {/* cantos decorativos */}
                            <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-[#A2E317]" />
                            <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-[#A2E317]" />
                        </article>
                    ))}
                </div>
            </div>

            {/* linha neon */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#A2E317] to-transparent" />
        </section>
    );
}