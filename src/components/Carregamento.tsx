"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Carregamento({ isLoading }: { isLoading: boolean }) {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    role="alert"
                    aria-busy="true"
                    aria-label="Carregando Batata Barber Shop"
                    className="fixed inset-0 z- flex items-center justify-center bg-black"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{
                            scale: [0.9, 1.1, 0.95],
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative h-28 w-28"
                    >
                        <Image
                            src="/images/logos/logo-batata.webp"
                            alt="Logo Batata Barber Shop carregando"
                            fill
                            className="object-contain"
                            priority
                            sizes="112px"
                        />
                    </motion.div>

                    <span className="sr-only">Aguarde, o site está carregando...</span>
                </motion.div>
            )}
        </AnimatePresence>
    );
}