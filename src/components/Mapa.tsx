"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import type { Variants } from "framer-motion";

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 }
    }
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
    }
};

export function Mapa() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-zinc-950 px-6 py-16 text-white md:px-10 lg:px-16"
        >
            <motion.div
                className="mx-auto max-w-6xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.div variants={itemVariants} className="mb-10 text-center">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#A2E317]">
                        Localização & Contato
                    </p>

                    <h2 className="mb-4 text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                        Venha nos visitar
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-200 sm:text-base">
                        Estamos prontos para receber você com estilo e cuidado nos detalhes.
                    </p>
                </motion.div>

                <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col justify-between border border-white/5 bg-black p-6 md:p-8"
                    >
                        <div className="space-y-6">
                            <div>
                                <h3 className="mb-2 flex items-center gap-2 text-sm font-black uppercase text-[#A2E317]">
                                    <SiGooglemaps size={16} aria-hidden="true" role="presentation"/> Endereço
                                </h3>
                                <p className="text-xs leading-relaxed text-zinc-200">
                                    Rua Oliveira Botelho, 47 - Centro <br />
                                    Nova Friburgo - RJ | 28610-020
                                </p>
                            </div>

                            <div>
                                <h3 className="mb-2 text-sm font-black uppercase text-[#A2E317]">
                                    Contatos
                                </h3>
                                <div className="space-y-2 text-xs text-zinc-200">
                                    <p className="flex items-center gap-2">
                                        <span className="font-bold text-white uppercase text-[9px] tracking-widest bg-white/5 px-1.5 py-0.5">WhatsApp:</span>
                                        (22) 9 9249-5516
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="font-bold text-white uppercase text-[9px] tracking-widest bg-white/5 px-1.5 py-0.5">Instagram:</span>
                                        @batata.barbershop
                                    </p>
                                </div>
                            </div>

                            <div>
                                <h3 className="mb-2 text-sm font-black uppercase text-[#A2E317]">
                                    Funcionamento
                                </h3>
                                <div className="space-y-1.5 text-xs text-zinc-200">
                                    <p className="flex justify-between border-b border-white/5 pb-1">
                                        <span>Segunda e Sábado:</span>
                                        <span className="text-white font-bold">09h às 17h</span>
                                    </p>
                                    <p className="flex justify-between border-b border-white/5 pb-1">
                                        <span>Terça a Sexta:</span>
                                        <span className="text-white font-bold">09h às 19h</span>
                                    </p>
                                    <p className="flex justify-between text-zinc-300 italic">
                                        <span>Domingo:</span>
                                        <span>Fechado</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://wa.me/5522992495516"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-1 items-center justify-center gap-2 bg-[#A2E317] py-3 text-[10px] font-black uppercase tracking-widest text-black transition hover:brightness-110"
                                style={{
                                    clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
                                }}
                            >
                                <FaWhatsapp size={14} /> WhatsApp
                            </motion.a>

                            <motion.a
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                href="https://maps.app.goo.gl/qRvVMrS2mcn2rF9F6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-1 items-center justify-center border border-white/20 bg-transparent py-3 text-[10px] font-black uppercase tracking-widest text-white transition hover:bg-white hover:text-black"
                                style={{
                                    clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
                                }}
                            >
                                Ver rota
                            </motion.a>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={itemVariants}
                        className="group relative min-h-[300px] w-full overflow-hidden border border-white/10 bg-black md:h-auto"
                    >
                        <div className="pointer-events-none absolute right-0 top-0 z-20 h-6 w-6 border-r-2 border-t-2 border-[#A2E317] transition-all duration-500 group-hover:h-8 group-hover:w-8" />
                        <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-6 w-6 border-b-2 border-l-2 border-[#A2E317] transition-all duration-500 group-hover:h-8 group-hover:w-8" />

                        <iframe
                            title="Mapa da Batata Barber Shop & Tattoo"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.8797873722744!2d-42.536968!3d-22.282582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x978a3f89078697%3A0x6bd7f7f7f7f7f7f7!2sR.%20Oliveira%20Botelho%2C%2047%20-%20Centro%2C%20Nova%20Friburgo%20-%20RJ%2C%2028610-020!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
                            className="absolute inset-0 block h-full w-full border-0 grayscale invert-[0.9] contrast-[1.2] opacity-70 transition-all duration-700 group-hover:grayscale-0 group-hover:invert-0 group-hover:opacity-100"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </motion.div>

            <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A2E317]/40 to-transparent" />

                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A2E317] to-transparent blur-md opacity-60" />

                <div className="absolute top-0 left-[-30%] h-full w-[30%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shine_3s_linear_infinite]" />
            </div>
        </section>
    );
}