"use client";

import { X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";

type AgendarModalProps = Readonly<{
    aberto: boolean;
    onFechar: () => void;
}>;

const overlayVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
};

const modalVariants: Variants = {
    hidden: { opacity: 0, scale: 0.96, y: 18 },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: {
            duration: 0.3,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.07,
        },
    },
    exit: {
        opacity: 0,
        scale: 0.98,
        y: 10,
        transition: {
            duration: 0.2,
            ease: "easeInOut",
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.25,
            ease: "easeOut",
        },
    },
};

const modalClipPath =
    "polygon(7% 0, 100% 0, 100% 86%, 93% 100%, 0 100%, 0 14%)";

export function AgendarModal({
    aberto,
    onFechar,
}: AgendarModalProps) {
    return (
        <AnimatePresence>
            {aberto && (
                <motion.div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
                    variants={overlayVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onClick={onFechar}
                >
                    <motion.div
                        className="relative w-full max-w-md bg-[#A2E317]/30 p-[1px] shadow-[0_0_25px_rgba(162,227,23,0.15)]"
                        style={{ clipPath: modalClipPath }}
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div
                            className="relative w-full overflow-hidden bg-zinc-950 text-white"
                            style={{ clipPath: modalClipPath }}
                        >
                            <div className="pointer-events-none absolute -right-2 -top-2 z-20 h-8 w-8 border-r-2 border-t-2 border-[#A2E317] md:-right-3 md:-top-3 md:h-10 md:w-10 md:border-r-4 md:border-t-4" />
                            <div className="pointer-events-none absolute -bottom-2 -left-2 z-20 h-8 w-8 border-b-2 border-l-2 border-[#A2E317] md:-bottom-3 md:-left-3 md:h-10 md:w-10 md:border-b-4 md:border-l-4" />

                            <div className="relative z-10 px-7 pb-7 pt-7 md:px-9 md:pb-9 md:pt-9 pr-14 md:pr-16">
                                <motion.button
                                    type="button"
                                    onClick={onFechar}
                                    aria-label="Fechar modal"
                                    className="absolute right-5 top-5 cursor-pointer text-zinc-400 transition duration-300 hover:text-[#A2E317]"
                                    variants={itemVariants}
                                    whileHover={{ scale: 1.08, rotate: 90 }}
                                    whileTap={{ scale: 0.96 }}
                                >
                                    <X size={24} />
                                </motion.button>

                                <motion.p
                                    className="mb-3 text-[10px] font-black uppercase tracking-[0.35em] text-[#A2E317]"
                                    variants={itemVariants}
                                >
                                    Agendamento
                                </motion.p>

                                <motion.h2
                                    className="mb-3 text-2xl font-black uppercase leading-tight text-white md:text-3xl"
                                    variants={itemVariants}
                                >
                                    Escolha como deseja agendar
                                </motion.h2>

                                <motion.p
                                    className="mb-6 text-sm leading-relaxed text-zinc-200 md:text-base"
                                    variants={itemVariants}
                                >
                                    Agende seu horário na Batata Barber Shop & Tattoo pelo site ou
                                    diretamente pelo WhatsApp.
                                </motion.p>

                                <motion.div
                                    className="flex flex-col gap-4"
                                    variants={itemVariants}
                                >
                                    <motion.a
                                        href="https://cashbarber.com.br/batatabarbershop"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center bg-white px-6 py-3 text-center text-xs font-black uppercase tracking-[0.22em] text-black transition duration-300 hover:border-[#A2E317] hover:bg-[#A2E317]"
                                        style={{
                                            clipPath:
                                                "polygon(10% 0, 100% 0, 100% 82%, 90% 100%, 0 100%, 0 18%)",
                                        }}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Agendar pelo site
                                    </motion.a>

                                    <motion.a
                                        href="https://wa.me/5522992495516?text=Olá%20!%20Quero%20agendar%20um%20horário%20na%20Batata%20Barber%20Shop%20%26%20Tattoo."
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center justify-center bg-[#A2E317] px-6 py-3 text-center text-xs font-black uppercase tracking-[0.22em] text-black transition duration-300 hover:brightness-110"
                                        style={{
                                            clipPath:
                                                "polygon(10% 0, 100% 0, 100% 82%, 90% 100%, 0 100%, 0 18%)",
                                        }}
                                        whileHover={{ scale: 1.02, y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Agendar pelo WhatsApp
                                    </motion.a>
                                </motion.div>

                                <motion.div
                                    className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-[#A2E317] to-transparent shadow-[0_0_12px_#A2E317]"
                                    variants={itemVariants}
                                />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}