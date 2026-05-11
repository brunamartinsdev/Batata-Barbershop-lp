"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fotos = [
    { src: "/images/galeria/galeria.webp", alt: "Tratamento", layout: "vertical" },
    { src: "/images/galeria/galeria2.webp", alt: "Barba em atendimento", layout: "square" },
    { src: "/images/galeria/galeria3.webp", alt: "Espaço da barbearia", layout: "square" },
    { src: "/images/galeria/galeria4.webp", alt: "Corte", layout: "vertical" },
    { src: "/images/galeria/galeria5.webp", alt: "Detalhe de barba", layout: "square" },
    { src: "/images/galeria/galeria7.webp", alt: "Detalhe corte", layout: "square" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.1 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
    },
};

export function Galeria() {
    return (
        <section id="galeria" className="relative bg-black px-6 py-16 text-white md:px-10 lg:px-16">
            <motion.div
                className="mx-auto max-w-7xl"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={containerVariants}
            >
                <motion.div variants={itemVariants} className="mb-10 text-center">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#A2E317]">
                        Visual & Identidade
                    </p>
                    <h2 className="mb-4 text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                        Nosso Trabalho
                    </h2>
                </motion.div>

                <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
                    {fotos.map((foto, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`group relative overflow-hidden bg-zinc-900 border border-white/5 
                ${foto.layout === "vertical" ? "md:row-span-2 h-full" : "aspect-square"}`}
                        >
                            <div className="pointer-events-none absolute right-0 top-0 z-20 h-0 w-0 border-r border-t border-[#A2E317] opacity-0 transition-all duration-500 group-hover:h-6 group-hover:w-6 group-hover:opacity-100" />
                            <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-0 w-0 border-l border-b border-[#A2E317] opacity-0 transition-all duration-500 group-hover:h-6 group-hover:w-6 group-hover:opacity-100" />

                            <Image
                                src={foto.src}
                                alt={foto.alt}
                                fill
                                sizes="(max-width: 768px) 50vw, 25vw"
                                className="object-cover grayscale transition duration-700 group-hover:scale-110 group-hover:grayscale-0"
                            />

                        </motion.div>
                    ))}

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