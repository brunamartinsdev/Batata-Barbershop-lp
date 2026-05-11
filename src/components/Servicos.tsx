"use client";

import { useState, useCallback, memo } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

// Lazy loading: Remove o peso do modal do bundle inicial da página
const AgendarModal = dynamic(() => import("./AgendarModal").then(mod => mod.AgendarModal), { ssr: false });

type ItemLista = {
    titulo: string;
    preco: string;
    observacao?: string;
};

type Pacote = {
    titulo: string;
    descricao: string;
    preco: string;
    destaque?: boolean;
};

const servicos: ItemLista[] = [
    {
        titulo: "Corte tesoura + máquina",
        preco: "R$ 50,00",
    },
    {
        titulo: "Corte máquina",
        preco: "R$ 40,00",
    },
    {
        titulo: "Barba completa",
        preco: "R$ 35,00",
    },
    {
        titulo: "Alisamento americano",
        preco: "R$ 50,00",
    },
    {
        titulo: "Barba + pezinho",
        preco: "R$ 35,00",
    },
    {
        titulo: "Pigmentação de barba",
        preco: "R$ 20,00",
    },
    {
        titulo: "Platinado",
        preco: "A partir de R$ 160,00",
    },
    {
        titulo: "Luzes platinado",
        preco: "R$ 140,00",
    },
];

const combos: ItemLista[] = [
    {
        titulo: "Combo 1 — Tesoura/máquina + barba",
        preco: "R$ 70,00",
    },
    {
        titulo: "Combo 2 — Máquina degradê + barba",
        preco: "R$ 60,00",
    },
    {
        titulo: "Combo 3 — Máquina simples + barba",
        preco: "R$ 55,00",
    },
];

const pacotes: Pacote[] = [
    {
        titulo: "Plano Prime Corte",
        preco: "R$ 89,99",
        descricao: "1x por semana, até 4x no mês, com a equipe de segunda a quinta.",
    },
    {
        titulo: "Plano Prime Corte e Barba",
        preco: "R$ 149,99",
        descricao: "Plano mais completo para manter corte e barba sempre em dia.",
        destaque: true,
    },
    {
        titulo: "Plano Prime Barba",
        preco: "R$ 89,99",
        descricao: "Ideal para quem quer manter a barba alinhada com frequência.",
    },
];

const beneficiosPacotes = [
    "Atendimento com a equipe, exceto Batata",
    "De segunda a quinta",
    "1x por semana, até 4x no mês",
    "10% de desconto em produtos e serviços extras",
    "20% de desconto na conta de luz em contas acima de R$ 250,00 e sem placa solar",
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

const listItemVariant = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

// O memo evita que a lista inteira de serviços seja renderizada novamente ao abrir/fechar o modal
const ListaPrecos = memo(function ListaPrecos({
    titulo,
    itens,
}: {
    titulo: string;
    itens: ItemLista[];
}) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
        >
            <div className="mb-6 flex items-center gap-3">
                <div className="h-[2px] w-10 bg-[#A2E317]" />
                <h3 className="text-lg font-bold uppercase tracking-[0.25em] text-[#A2E317]">
                    {titulo}
                </h3>
            </div>

            <motion.div
                className="overflow-hidden border border-white/10 bg-black"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
            >
                {itens.map((item, index) => (
                    <motion.div
                        key={item.titulo}
                        variants={listItemVariant}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        tabIndex={0}
                        className={`flex items-center justify-between gap-4 px-5 py-4 transition-colors duration-300 hover:bg-white/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A2E317] ${index !== itens.length - 1 ? "border-b border-white/10" : ""
                            }`}
                    >
                        <div>
                            <p className="text-sm font-medium leading-relaxed text-zinc-200">
                                {item.titulo}
                            </p>
                            {item.observacao && (
                                <p className="mt-1 text-xs text-zinc-500">{item.observacao}</p>
                            )}
                        </div>

                        <span className="shrink-0 text-sm font-black text-[#A2E317]">
                            {item.preco}
                        </span>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
});

const btnStyle = {
    clipPath: "polygon(12% 0, 100% 0, 100% 70%, 88% 100%, 0 100%, 0 30%)",
};

export function Servicos() {
    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = useCallback(() => setModalAberto(true), []);
    const fecharModal = useCallback(() => setModalAberto(false), []);

    return (
        <section
            id="services"
            tabIndex={0}
            className="relative overflow-hidden bg-zinc-950 px-6 py-16 text-white md:px-10 md:py-20 lg:px-16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A2E317]"
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
                        Serviços, combos e pacotes
                    </motion.p>

                    <motion.h2
                        variants={fadeUp}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-4 text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl"
                    >
                        Escolha o que combina com seu estilo
                    </motion.h2>

                    <motion.p
                        variants={fadeUp}
                        transition={{ duration: 0.65, ease: "easeOut" }}
                        className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-200 sm:text-base"
                    >
                        Do atendimento avulso aos planos com benefícios, tudo pensado para
                        manter seu visual em dia sem poluir a experiência.
                    </motion.p>
                </motion.div>

                <div className="space-y-10">
                    <ListaPrecos titulo="Serviços" itens={servicos} />

                    <ListaPrecos titulo="Combos" itens={combos} />

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.15 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                    >
                        <div className="mb-6 flex items-center gap-3">
                            <div className="h-[2px] w-10 bg-[#A2E317]" />
                            <h3 className="text-lg font-bold uppercase tracking-[0.25em] text-[#A2E317]">
                                Pacotes
                            </h3>
                        </div>

                        <motion.div
                            className="grid gap-6 md:grid-cols-3"
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                        >
                            {pacotes.map((pacote) => (
                                <motion.article
                                    key={pacote.titulo}
                                    variants={listItemVariant}
                                    transition={{ duration: 0.5, ease: "easeOut" }}
                                    whileHover={{ y: -6, scale: 1.01 }}
                                    tabIndex={0}
                                    className={`relative flex h-full overflow-hidden border p-6 transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A2E317] ${pacote.destaque
                                        ? "border-[#A2E317] bg-[#A2E317] text-black shadow-[0_0_30px_rgba(162,227,23,0.18)]"
                                        : "border-white/10 bg-black text-white hover:border-[#A2E317]/60"
                                        }`}
                                >
                                    <div className="flex h-full w-full flex-col">
                                        {pacote.destaque ? (
                                            <span className="mb-4 inline-block border border-black/20 px-3 py-1 text-[10px] font-black uppercase tracking-[0.25em] self-start">
                                                Mais completo
                                            </span>
                                        ) : (
                                            <div className="mb-4 h-[30px]" />
                                        )}

                                        <h4 className="mb-3 text-xl font-black uppercase">
                                            {pacote.titulo}
                                        </h4>

                                        <p
                                            className={`mb-6 min-h-[72px] text-sm leading-relaxed ${pacote.destaque ? "text-black/90" : "text-zinc-200"
                                                }`}
                                        >
                                            {pacote.descricao}
                                        </p>

                                        <div className="mt-auto flex items-center justify-between">
                                            <span className="text-lg font-black">{pacote.preco}</span>

                                            <span
                                                className={`text-xs font-bold uppercase tracking-[0.2em] ${pacote.destaque ? "text-black/70" : "text-zinc-300"
                                                    }`}
                                            >
                                                Prime
                                            </span>
                                        </div>
                                    </div>
                                </motion.article>
                            ))}
                        </motion.div>

                        <motion.div
                            className="mt-6 overflow-hidden border border-[#A2E317]/20 bg-black/60"
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.15 }}
                            transition={{ duration: 0.55, delay: 0.08, ease: "easeOut" }}
                        >
                            <div className="border-b border-[#A2E317]/20 px-6 py-4">
                                <h4 className="text-sm font-black uppercase tracking-[0.25em] text-[#A2E317]">
                                    Benefícios dos pacotes
                                </h4>
                            </div>

                            <motion.div
                                className="grid gap-3 px-6 py-5 md:grid-cols-2"
                                variants={staggerContainer}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.15 }}
                            >
                                {beneficiosPacotes.map((item) => (
                                    <motion.div
                                        key={item}
                                        variants={listItemVariant}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        tabIndex={0}
                                        className="flex items-start gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A2E317] rounded-sm"
                                    >
                                        <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#A2E317]" />
                                        <p className="text-sm leading-relaxed text-zinc-300">
                                            {item}
                                        </p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>

                <motion.div
                    className="mt-12 flex justify-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                >
                    <motion.button
                        type="button"
                        onClick={abrirModal}
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        className="cursor-pointer bg-[#A2E317] px-8 py-3 text-xs font-black uppercase tracking-[0.3em] text-black transition hover:brightness-110"
                        style={btnStyle}
                    >
                        Agendar agora
                    </motion.button>
                </motion.div>
            </div>

            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A2E317]/40 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A2E317] to-transparent blur-md opacity-60" />

                <div className="absolute top-0 left-[-30%] h-full w-[30%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shine_3s_linear_infinite]" />
            </div>

            <AgendarModal aberto={modalAberto} onFechar={fecharModal} />
        </section>
    );
}