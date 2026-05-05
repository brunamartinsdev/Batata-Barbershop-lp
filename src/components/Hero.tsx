"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram } from "react-icons/fa6";
import { useState } from "react";
import { AgendarModal } from "./AgendarModal";

const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

export function Hero() {
    const [modalAberto, setModalAberto] = useState(false);

    const abrirModal = () => setModalAberto(true);
    const fecharModal = () => setModalAberto(false);

    return (
        <section
            id="home"
            className="relative overflow-hidden bg-black px-6 py-6 text-white md:px-10 md:py-6 lg:px-16"
        >
            <div className="mx-auto grid min-h-[72svh] max-w-7xl grid-cols-1 items-center gap-6 md:min-h-[74svh] md:grid-cols-[1.05fr_0.95fr] md:gap-8">
                <div className="order-1 flex flex-col items-center justify-center text-center md:order-1 md:items-start md:text-left">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        className="mb-3 flex w-full justify-center md:justify-start"
                    >
                        <Image
                            src="/images/logos/logo-batata.webp"
                            alt="Batata Barber Shop & Tattoo"
                            width={120}
                            height={120}
                            className="h-auto w-14 object-contain sm:w-16 md:w-18 lg:w-20"
                            priority
                        />
                    </motion.div>

                    <motion.h1
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.65, delay: 0.08, ease: "easeOut" }}
                        className="mb-4 max-w-[12ch] font-black uppercase leading-[0.9] tracking-tight text-[#A2E317]"
                        style={{ fontSize: "clamp(2rem, 5vw, 4.8rem)" }}
                    >
                        Novo estilo, atitude e personalidade
                    </motion.h1>

                    <motion.p
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.65, delay: 0.16, ease: "easeOut" }}
                        className="mb-5 max-w-md text-sm leading-relaxed text-zinc-200 sm:text-[15px] md:mb-6"
                    >
                        Cortes, barba e tattoo com presença marcante, cuidado nos detalhes e
                        uma experiência pensada para o seu estilo.
                    </motion.p>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.65, delay: 0.24, ease: "easeOut" }}
                        className="flex w-full max-w-xs flex-col items-center gap-3 sm:max-w-none sm:flex-row sm:justify-center md:w-auto md:justify-start"
                    >
                        <motion.button
                            type="button"
                            onClick={abrirModal}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full min-w-[150px] cursor-pointer bg-[#A2E317] px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-black transition duration-300 hover:brightness-110 sm:w-auto md:px-8 md:py-3.5 md:text-xs"
                            style={{
                                clipPath:
                                    "polygon(12% 0, 100% 0, 100% 70%, 88% 100%, 0 100%, 0 30%)",
                            }}
                        >
                            Agendar
                        </motion.button>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full sm:w-auto"
                        >
                            <Link
                                href="#services"
                                className="flex w-full min-w-[150px] items-center justify-center border-2 border-white bg-white px-6 py-3 text-[11px] font-black uppercase tracking-[0.22em] text-black transition duration-300 hover:border-[#A2E317] hover:bg-[#A2E317] sm:w-auto md:px-8 md:py-3.5 md:text-xs"
                                style={{
                                    clipPath:
                                        "polygon(12% 0, 100% 0, 100% 70%, 88% 100%, 0 100%, 0 30%)",
                                }}
                            >
                                Serviços
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.65, delay: 0.32, ease: "easeOut" }}
                        className="mt-5 flex items-center gap-3 md:mt-6"
                    >
                        <a
                            href="https://www.instagram.com/batata.barbershop/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram da Batata Barber Shop & Tattoo"
                            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#A2E317]/50 bg-black/40 text-[#A2E317] transition duration-300 hover:scale-105 hover:border-[#A2E317] hover:bg-[#A2E317] hover:text-black"
                        >
                            <FaInstagram size={18} />
                        </a>

                        <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-300 sm:text-xs">
                            Siga no Instagram
                        </span>
                    </motion.div>
                </div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.75, delay: 0.18, ease: "easeOut" }}
                    className="order-2 flex w-full items-center justify-center md:order-2 md:justify-end"
                >
                    <div className="relative flex w-full justify-center md:justify-end">
                        <div className="absolute h-[280px] w-[220px] rounded-full bg-[#A2E317]/10 blur-3xl md:h-[360px] md:w-[280px]" />

                        <div className="relative w-full max-w-[220px] sm:max-w-[240px] md:max-w-[280px] lg:max-w-[320px]">
                            <div className="pointer-events-none absolute -right-2 -top-2 z-20 h-8 w-8 border-r-2 border-t-2 border-[#A2E317] md:-right-3 md:-top-3 md:h-10 md:w-10" />
                            <div className="pointer-events-none absolute -bottom-2 -left-2 z-20 h-8 w-8 border-b-2 border-l-2 border-[#A2E317] md:-bottom-3 md:-left-3 md:h-10 md:w-10" />

                            <motion.div
                                whileHover={{ scale: 1.015 }}
                                className="relative mx-auto w-full overflow-hidden bg-zinc-900 shadow-2xl"
                                style={{
                                    clipPath:
                                        "polygon(15% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 15%)",
                                }}
                            >
                                <div className="relative aspect-[9/14] max-h-[48vh] min-h-[280px] w-full md:max-h-[52vh]">
                                    <video
                                        autoPlay
                                        muted
                                        loop
                                        playsInline
                                        className="h-full w-full object-cover brightness-75 transition duration-500 md:brightness-60 md:hover:brightness-100"
                                    >
                                        <source src="/videos/barbearia.mp4" type="video/mp4" />
                                    </video>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.45, ease: "easeOut" }}
                className="mt-6 flex justify-center md:mt-3"
            >
                <a
                    href="#services"
                    className="group flex flex-col items-center gap-1 transition-transform hover:scale-105"
                >
                    <span className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#A2E317]/70 drop-shadow-[0_0_6px_#A2E317]">
                        Explorar
                    </span>

                    <svg
                        width="22"
                        height="22"
                        viewBox="0 0 24 24"
                        className="animate-bounce drop-shadow-[0_0_8px_#A2E317]"
                        fill="none"
                        stroke="#A2E317"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                </a>
            </motion.div>

            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[3px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A2E317] to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A2E317] to-transparent blur-md opacity-70" />

                <div className="absolute inset-0 bg-[#A2E317] opacity-20 blur-xl" />

                <div className="absolute top-0 left-[-40%] h-full w-[40%] bg-gradient-to-r from-transparent via-white/50 to-transparent animate-[shine_4s_linear_infinite]" />
            </div>
            <AgendarModal aberto={modalAberto} onFechar={fecharModal} />
        </section>
    );
}