"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const linhasProdutos = [
    {
        nome:"Linha Kannep",
        descricao:"Linha completa com leave-in, shampoo detox, condicionador detox e óleo para barba para cuidado, hidratação e finalização.",
        imagem:"/images/kannep.png",
    },
    {
        nome:"Linha Turbo Dil",
        descricao:"Linha voltada para crescimento capilar e da barba, com tônicos que estimulam os fios e fortalecem desde a raiz.",
        imagem:"/images/dil.png",
    },
    {
        nome:"Linha Goot Wood",
        descricao:"Linha premium para barba com balm e óleo que hidratam, alinham e garantem maciez e controle no dia a dia.",
        imagem:"/images/goot.png",
    },
    {
        nome:"Linha Nerk",
        descricao:"Linha completa com pomadas, sprays e tratamentos para finalização, fixação e cuidados do cabelo no dia a dia.",
        imagem:"/images/nerk.png",
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
            className="relative scroll-mt-28 bg-black px-6 py-16 text-white md:px-10 md:py-20 lg:px-16"
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
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#A2E317]"
                    >
                        Produtos
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-4 text-3xl font-black uppercase sm:text-4xl md:text-5xl"
                    >
                        Trabalhamos com produtos profissionais
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-200 sm:text-base"
                    >
                        Utilizamos e indicamos produtos de alta qualidade para garantir
                        resultado, cuidado e presença no seu estilo.
                    </motion.p>
                </motion.div>

                <motion.div
                    className="mb-14 flex flex-col items-center justify-center gap-6 border border-white/10 bg-zinc-950 p-8 md:flex-row md:justify-between"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <div className="flex flex-col items-center gap-6 text-center md:flex-row md:text-left">
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
                            <p className="mt-1 max-w-md text-sm leading-relaxed text-zinc-200">
                                Parceiro com produtos profissionais para cabelo e barba,
                                unindo qualidade, performance e cuidado no dia a dia.
                            </p>
                        </div>
                    </div>

                    <span className="border border-[#A2E317] px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#A2E317]">
                        Parceiro Oficial
                    </span>
                </motion.div>

                <motion.div
                    className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {linhasProdutos.map((linha) => (
                        <motion.article
                            key={linha.nome}
                            variants={cardVariant}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            whileHover={{ y: -6, scale: 1.01 }}
                            className="group relative overflow-hidden border border-white/10 bg-zinc-950 transition hover:border-[#A2E317]/60"
                        >
                            <div className="relative w-full aspect-[4/5] bg-black flex items-center justify-center">
                                <Image
                                    src={linha.imagem}
                                    alt={linha.nome}
                                    width={500}
                                    height={500}
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex min-h-[200px] flex-col p-6">
                                <h4 className="mb-3 text-lg font-bold uppercase text-white">
                                    {linha.nome}
                                </h4>

                                <p className="text-sm leading-relaxed text-zinc-200">
                                    {linha.descricao}
                                </p>

                                <span className="mt-auto pt-6 text-xs font-bold uppercase tracking-[0.2em] text-[#A2E317]">
                                    Consulte disponibilidade
                                </span>
                            </div>

                            <div className="absolute right-0 top-0 h-8 w-8 border-r-2 border-t-2 border-[#A2E317]" />
                            <div className="absolute bottom-0 left-0 h-8 w-8 border-b-2 border-l-2 border-[#A2E317]" />
                        </motion.article>
                    ))}
                </motion.div>

                <motion.div
                    className="mt-12 flex justify-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <motion.a
                        href="https://wa.me/5522992495516?text=Olá!%20Quero%20ver%20os%20produtos%20disponíveis%20e%20os%20valores%20da%20Embaixador%20Cosméticos."
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="bg-[#A2E317] px-8 py-3 text-center text-xs font-black uppercase tracking-[0.3em] text-black transition hover:brightness-110"
                        style={{
                            clipPath:
                                "polygon(12% 0, 100% 0, 100% 70%, 88% 100%, 0 100%, 0 30%)",
                        }}
                    >
                        Ver produtos e valores no WhatsApp
                    </motion.a>
                </motion.div>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#A2E317] to-transparent shadow-[0_0_15px_#A2E317]" />
        </section>
    );
}