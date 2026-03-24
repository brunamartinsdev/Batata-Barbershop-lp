"use client";

import { X } from "lucide-react";

type AgendarModalProps = {
    aberto: boolean;
    onFechar: () => void;
};

export function AgendarModal({ aberto, onFechar }: AgendarModalProps) {
    if (!aberto) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm">
            <div className="relative w-full max-w-md overflow-hidden bg-zinc-950 p-6 text-white shadow-2xl md:p-8">
                {/* molduras decorativas */}
                <div className="pointer-events-none absolute -right-2 -top-2 z-20 h-8 w-8 border-r-2 border-t-2 border-[#A2E317] md:-right-3 md:-top-3 md:h-10 md:w-10 md:border-r-4 md:border-t-4" />
                <div className="pointer-events-none absolute -bottom-2 -left-2 z-20 h-8 w-8 border-b-2 border-l-2 border-[#A2E317] md:-bottom-3 md:-left-3 md:h-10 md:w-10 md:border-b-4 md:border-l-4" />

                {/* fechar */}
                <button
                    type="button"
                    onClick={onFechar}
                    aria-label="Fechar modal"
                    className="absolute right-4 top-4 cursor-pointer text-zinc-400 transition duration-300 hover:text-[#A2E317]"
                >
                    <X size={24} />
                </button>

                {/* conteúdo */}
                <p className="mb-3 text-[10px] font-black uppercase tracking-[0.35em] text-[#A2E317]">
                    Agendamento
                </p>

                <h2 className="mb-3 text-2xl font-black uppercase leading-tight text-white md:text-3xl">
                    Escolha como deseja agendar
                </h2>

                <p className="mb-6 text-sm leading-relaxed text-zinc-200 md:text-base">
                    Agende seu horário na Batata Barber Shop & Tattoo pelo site ou
                    diretamente pelo WhatsApp.
                </p>

                <div className="flex flex-col gap-4">
                    <a
                        href="https://cashbarber.com.br/batatabarbershop"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.22em] text-black transition duration-300 hover:border-[#A2E317] hover:bg-[#A2E317] hover:scale-[1.02]"
                        style={{
                            clipPath:
                                "polygon(12% 0, 100% 0, 100% 70%, 88% 100%, 0 100%, 0 30%)",
                        }}
                    >
                        Agendar pelo site
                    </a>

                    <a
                        href="https://wa.me/5522992495516?text=Olá%20!%20Quero%20agendar%20um%20horário%20na%20Batata%20Barber%20Shop%20%26%20Tattoo."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center bg-[#A2E317] px-6 py-3 text-xs font-black uppercase tracking-[0.22em] text-black transition duration-300 hover:brightness-110 hover:scale-[1.02]"
                        style={{
                            clipPath:
                                "polygon(12% 0, 100% 0, 100% 70%, 88% 100%, 0 100%, 0 30%)",
                        }}
                    >
                        Agendar pelo WhatsApp
                    </a>
                </div>

                <div className="mt-6 h-[1px] w-full bg-gradient-to-r from-transparent via-[#A2E317] to-transparent shadow-[0_0_12px_#A2E317]" />
            </div>
        </div>
    );
}