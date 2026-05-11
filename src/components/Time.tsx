"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, Variants } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AgendarModal } from "./AgendarModal";

const equipe = [
    { nome: "Batata", especialidade: "Barbeiro e Tatuador", imagem: "/images/barbeiros/batata.webp" },
    { nome: "Hyago", especialidade: "Barbeiro", imagem: "/images/barbeiros/hyago.webp" },
    { nome: "Igor", especialidade: "Barbeiro", imagem: "/images/barbeiros/igor.webp" },
    { nome: "Mário Jorge", especialidade: "Barbeiro", imagem: "/images/barbeiros/mariojorge.webp" },
    { nome: "Reinaldo", especialidade: "Barbeiro", imagem: "/images/barbeiros/reinaldo.webp" },
];

const fadeInVariant: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const containerVariant: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.15
        }
    }
};

export function Time() {
    const [modalAberto, setModalAberto] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [showArrows, setShowArrows] = useState(false);
    const [isReady, setIsReady] = useState(false);

    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const frame = requestAnimationFrame(() => setMounted(true));
        return () => cancelAnimationFrame(frame);
    }, []);

    const { scrollXProgress } = useScroll({
        container: carouselRef,
    });

    const scaleX = useSpring(scrollXProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const scroll = (dir: "esq" | "dir") => {
        if (!carouselRef.current) return;

        const amount = 320;
        carouselRef.current.scrollBy({
            left: dir === "dir" ? amount : -amount,
            behavior: "smooth",
        });
    };

    const checkOverflow = () => {
        const el = carouselRef.current;
        if (!el) return;

        setShowArrows(el.scrollWidth > el.clientWidth + 2);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsReady(true);
            checkOverflow();
        }, 250);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (!isReady) return;

        const el = carouselRef.current;
        if (!el) return;

        checkOverflow();

        const resizeObserver = new ResizeObserver(() => {
            checkOverflow();
        });

        resizeObserver.observe(el);

        return () => resizeObserver.disconnect();
    }, [isReady]);

    return (
        <section
            id="equipe"
            className="relative overflow-hidden bg-black py-20 text-white"
        >
            <div className={`mx-auto max-w-7xl px-6 transition-opacity duration-500 ${mounted ? "opacity-100" : "opacity-0"}`}>

                <motion.div
                    className="mb-12 flex flex-col items-center justify-between gap-6 md:flex-row md:items-end"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={fadeInVariant}
                >
                    <div className="text-center md:text-left">
                        <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#A2E317]">
                            Equipe de Elite
                        </p>
                        <h2 className="mb-4 text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                            Os Especialistas
                        </h2>
                    </div>

                    <motion.div
                        className="flex gap-3"
                        animate={{
                            opacity: showArrows ? 1 : 0,
                            scale: showArrows ? 1 : 0.9
                        }}
                        transition={{ duration: 0.2 }}
                        style={{ pointerEvents: showArrows ? "auto" : "none" }}
                    >
                        <motion.button
                            onClick={() => scroll("esq")}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            className="cursor-pointer flex h-11 w-11 items-center justify-center border border-white/40 bg-black text-white transition hover:bg-[#A2E317] hover:text-black"
                            aria-label="Mover cards de barbeiros para esquerda"
                        >
                            <ChevronLeft size={22} strokeWidth={3} />
                        </motion.button>

                        <motion.button
                            onClick={() => scroll("dir")}
                            whileTap={{ scale: 0.9 }}
                            whileHover={{ scale: 1.05 }}
                            className="cursor-pointer flex h-11 w-11 items-center justify-center border border-white/40 bg-black text-white transition hover:bg-[#A2E317] hover:text-black"
                            aria-label="Mover cards de barbeiros para direita"
                        >
                            <ChevronRight size={22} strokeWidth={3} />
                        </motion.button>
                    </motion.div>
                </motion.div>

                <motion.div
                    ref={carouselRef}
                    tabIndex={0}
                    role="region"
                    aria-label="Carrossel de profissionais da equipe"
                    className="flex snap-x snap-mandatory overflow-x-auto pb-8 pt-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#A2E317] focus-visible:ring-inset"
                    style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        WebkitOverflowScrolling: "touch"
                    }}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariant}
                >
                    <div className="flex gap-6 pr-10">

                        {equipe.map((barbeiro, index) => {
                            const isOwner = barbeiro.nome === "Batata";

                            return (
                                <motion.div
                                    key={index}
                                    variants={fadeInVariant}
                                    className={`group relative w-[250px] flex-shrink-0 snap-start overflow-hidden bg-[#A2E317]
                                        ${isOwner ? "ring-2 ring-[#A2E317]" : "border border-white/10"}`}
                                    style={{
                                        clipPath: "polygon(0 0, 100% 0, 100% 90%, 93% 100%, 0 100%)"
                                    }}
                                >
                                    <div className="relative h-[350px] w-full overflow-hidden">

                                        <Image
                                            src={barbeiro.imagem}
                                            alt={barbeiro.nome}
                                            fill
                                            className="object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
                                            sizes="280px"
                                        />

                                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                                        {isOwner && (
                                            <div className="absolute top-3 left-3 bg-black px-2 py-1 text-[10px] text-[#A2E317] uppercase tracking-widest font-bold">
                                                Proprietário
                                            </div>
                                        )}

                                        <div className="absolute bottom-6 left-5">
                                            <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#A2E317]">
                                                {barbeiro.especialidade}
                                            </p>
                                            <h3 className="text-2xl font-black uppercase leading-none text-white">
                                                {barbeiro.nome}
                                            </h3>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}

                    </div>
                </motion.div>

                <motion.div
                    className="relative mx-auto mt-8 h-[3px] w-full max-w-md bg-white/10"
                >
                    <motion.div
                        className="absolute h-full bg-[#A2E317]"
                        style={{
                            scaleX,
                            transformOrigin: "left",
                            width: "100%"
                        }}
                    />
                </motion.div>

                <motion.div
                    className="mt-16 flex justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                >
                    <button
                        onClick={() => setModalAberto(true)}
                        className="cursor-pointer bg-[#A2E317] px-12 py-5 text-sm font-black uppercase tracking-[0.3em] text-black transition hover:scale-105 active:scale-95 outline-none focus-visible:ring-4 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                        style={{
                            clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
                            backgroundColor: "#A2E317",
                            color: "#000000"
                        }}
                    >
                        Agendar Horário
                    </button>
                </motion.div>

            </div>
            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A2E317]/40 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A2E317] to-transparent blur-md opacity-60" />

                <div className="absolute top-0 left-[-30%] h-full w-[30%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shine_3s_linear_infinite]" />
            </div>
            <AgendarModal aberto={modalAberto} onFechar={() => setModalAberto(false)} />
        </section>
    );
}