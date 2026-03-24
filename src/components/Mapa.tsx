export function Mapa() {
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-zinc-950 px-6 py-20 text-white md:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">
                {/* topo */}
                <div className="mb-12 text-center">
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#A2E317]">
                        Localização & Contato
                    </p>

                    <h2 className="mb-4 text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                        Venha conhecer a Batata
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                        Estamos prontos para receber você com estilo, cuidado e uma experiência
                        marcante do começo ao fim.
                    </p>
                </div>

                <div className="grid gap-8 md:grid-cols-[0.95fr_1.05fr]">
                    {/* informações */}
                    <div className="border border-white/10 bg-black p-6 md:p-8">
                        <div className="mb-6">
                            <h3 className="mb-2 text-lg font-black uppercase text-[#A2E317]">
                                Endereço
                            </h3>
                            <p className="text-sm leading-relaxed text-zinc-300">
                                Rua Exemplo da Barbearia, 123 <br />
                                Centro - Sua Cidade / UF <br />
                                CEP 00000-000
                            </p>
                        </div>

                        <div className="mb-6">
                            <h3 className="mb-2 text-lg font-black uppercase text-[#A2E317]">
                                Contatos
                            </h3>
                            <div className="space-y-2 text-sm text-zinc-300">
                                <p>
                                    <span className="font-bold text-white">WhatsApp:</span>{" "}
                                    (00) 00000-0000
                                </p>
                                <p>
                                    <span className="font-bold text-white">Telefone:</span>{" "}
                                    (00) 0000-0000
                                </p>
                                <p>
                                    <span className="font-bold text-white">Instagram:</span>{" "}
                                    @batatabarbershop
                                </p>
                            </div>
                        </div>

                        <div className="mb-8">
                            <h3 className="mb-2 text-lg font-black uppercase text-[#A2E317]">
                                Horário de funcionamento
                            </h3>
                            <div className="space-y-2 text-sm text-zinc-300">
                                <p>Segunda a Sexta: 09h às 20h</p>
                                <p>Sábado: 09h às 18h</p>
                                <p>Domingo: Fechado</p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <a
                                href="https://wa.me/5500000000000"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center bg-[#A2E317] px-6 py-3 text-xs font-black uppercase tracking-[0.25em] text-black transition hover:brightness-110"
                                style={{
                                    clipPath:
                                        "polygon(12% 0, 100% 0, 100% 70%, 88% 100%, 0 100%, 0 30%)",
                                }}
                            >
                                Falar no WhatsApp
                            </a>

                            <a
                                href="https://www.google.com/maps"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center border border-white bg-white px-6 py-3 text-xs font-black uppercase tracking-[0.25em] text-black transition hover:border-[#A2E317] hover:bg-[#A2E317]"
                                style={{
                                    clipPath:
                                        "polygon(12% 0, 100% 0, 100% 70%, 88% 100%, 0 100%, 0 30%)",
                                }}
                            >
                                Ver rota
                            </a>
                        </div>
                    </div>

                    {/* mapa */}
                    <div className="relative overflow-hidden border border-white/10 bg-black">
                        <div className="pointer-events-none absolute right-0 top-0 z-10 h-10 w-10 border-r-2 border-t-2 border-[#A2E317]" />
                        <div className="pointer-events-none absolute bottom-0 left-0 z-10 h-10 w-10 border-b-2 border-l-2 border-[#A2E317]" />

                        <iframe
                            title="Mapa da Batata Barber Shop & Tattoo"
                            src="https://www.google.com/maps?q=Rio%20de%20Janeiro&z=15&output=embed"
                            className="h-[420px] w-full border-0 grayscale"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#A2E317] to-transparent shadow-[0_0_15px_#A2E317]" />
        </section>
    );
}