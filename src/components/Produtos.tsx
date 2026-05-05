"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const linhasProdutos = [
    {
        nome:"Linha Kannep",
        descricao:"Linha completa com leave-in, shampoo detox, condicionador detox e óleo para barba para cuidado, hidratação e finalização.",
        imagem:"/images/produtos/kannep.webp",
    },
    {
        nome:"Linha Turbo Dil",
        descricao:"Linha voltada para crescimento capilar e da barba, com tônicos que estimulam os fios e fortalecem desde a raiz.",
        imagem:"/images/produtos/dil.webp",
    },
    {
        nome:"Linha Goot Wood",
        descricao:"Linha premium para barba com balm e óleo que hidratam, alinham e garantem maciez e controle no dia a dia.",
        imagem:"/images/produtos/goot.webp",
    },
    {
        nome:"Linha Nerk",
        descricao:"Linha completa com pomadas, sprays e tratamentos para finalização, fixação e cuidados do cabelo no dia a dia.",
        imagem:"/images/produtos/nerk.webp",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

const cardVariant = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0 },
};


export function Produtos() {
    return (
        <section
            id="produtos"
            className="relative scroll-mt-28 bg-black px-4 py-16 text-white md:px-10 md:py-20 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">
                <motion.div
                    className="mb-12 text-center"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <motion.p
                        variants={fadeUp}
                        className="mb-3 text-[10px] md:text-xs font-bold uppercase tracking-[0.35em] text-[#A2E317]"
                    >
                        Produtos
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        className="mb-4 text-2xl font-black uppercase sm:text-4xl md:text-5xl leading-tight"
                    >
                        Trabalhamos com <br className="md:hidden" /> produtos profissionais
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        className="mx-auto max-w-2xl text-xs md:text-base leading-relaxed text-zinc-200"
                    >
                        Utilizamos e indicamos produtos de alta qualidade para garantir
                        resultado, cuidado e presença no seu estilo.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="mb-10 flex flex-col items-center justify-center gap-4 border border-white/10 bg-zinc-950 p-6 md:flex-row md:justify-between md:p-8"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
                        <Image
                            src="/images/logos/embaixador.webp"
                            alt="Embaixador Cosméticos"
                            width={80}
                            height={80}
                            className="h-auto w-16 md:w-24 object-contain grayscale"
                        />
                        <div>
                            <h3 className="text-lg font-bold uppercase text-[#A2E317]">
                                Embaixador Cosméticos
                            </h3>
                            <p className="mt-1 max-w-md text-[11px] md:text-sm leading-relaxed text-zinc-200">
                                Parceiro oficial com produtos de alta performance.
                            </p>
                        </div>
                    </div>
                    <span className="border border-[#A2E317] px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[#A2E317]">
                        Parceiro Oficial
                    </span>
                </motion.div>

                <motion.div
                    className="grid grid-cols-2 gap-3 md:gap-6 lg:grid-cols-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                >
                    {linhasProdutos.map((linha) => (
                        <motion.article
                            key={linha.nome}
                            variants={cardVariant}
                            whileHover={{ y: -5 }}
                            className="group relative flex flex-col overflow-hidden border border-white/5 bg-zinc-950 transition-colors hover:border-[#A2E317]/40"
                        >
                            <div className="relative aspect-[4/5] w-full overflow-hidden bg-zinc-900">
                                <Image
                                    src={linha.imagem}
                                    alt={linha.nome}
                                    fill
                                    className="object-cover transition duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 50vw, 25vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
                            </div>

                            <div className="flex flex-1 flex-col p-4 md:p-6">
                                <h4 className="mb-2 text-sm md:text-lg font-black uppercase text-white line-clamp-1">
                                    {linha.nome}
                                </h4>
                                <p className="text-[10px] md:text-sm leading-relaxed text-zinc-200 line-clamp-3 md:line-clamp-none">
                                    {linha.descricao}
                                </p>
                                <span className="mt-4 text-[9px] font-bold uppercase tracking-widest text-[#A2E317]">
                                    Verificar disponibilidade
                                </span>
                            </div>

                            <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-[#A2E317]/30 group-hover:border-[#A2E317]" />
                            <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-[#A2E317]/30 group-hover:border-[#A2E317]" />
                        </motion.article>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-12 flex justify-center px-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <motion.a
                        href="https://wa.me/5522992495516?text=..."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full md:w-auto bg-[#A2E317] px-6 py-4 text-center text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-black"
                        style={{
                            clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
                        }}
                    >
                        Ver preços no WhatsApp
                    </motion.a>
                </motion.div>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A2E317]/40 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A2E317] to-transparent blur-md opacity-60" />

                <div className="absolute top-0 left-[-30%] h-full w-[30%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shine_3s_linear_infinite]" />
            </div>
        </section>
    );
}