"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Carregamento({ isLoading }: { isLoading: boolean }) {
    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{
                            scale: [0.9, 1.15, 0.95],
                            opacity: 1,
                        }}
                        transition={{
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative w-28 h-28"
                    >
                        <Image
                            src="/images/logos/logo-batata.webp"
                            alt="Logo"
                            fill
                            className="object-contain"
                            priority
                        />
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}