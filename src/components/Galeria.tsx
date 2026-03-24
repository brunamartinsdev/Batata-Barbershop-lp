import Image from "next/image";

const fotos = [
    { src: "/images/corte.png", alt: "Corte masculino" },
    { src: "/images/barba.png", alt: "Barba em atendimento" },
    { src: "/images/barbearia.jpg", alt: "Espaço da barbearia" },
    { src: "/images/corte-detalhe.png", alt: "Detalhe de corte" },
    { src: "/images/corte-detalhe-2.png", alt: "Cliente na cadeira" },
    { src: "/images/barbearia-2.jpg", alt: "Ambiente interno" },
];

export function Galeria() {
    return (
        <section
            id="galeria"
            className="relative overflow-hidden bg-black px-6 py-20 text-white md:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-10 text-center">
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#A2E317]">
                        Galeria
                    </p>

                    <h2 className="mb-4 text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                        Nosso trabalho
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 sm:text-base">
                        Cortes, detalhes, ambiente e identidade em cada imagem.
                    </p>
                </div>

                <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
                    {fotos.map((foto, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden bg-zinc-900"
                        >
                            <div className="relative aspect-square overflow-hidden">
                                <Image
                                    src={foto.src}
                                    alt={foto.alt}
                                    fill
                                    className="object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                />
                            </div>

                            <div className="pointer-events-none absolute inset-0 bg-black/10 opacity-100 transition duration-300 group-hover:bg-black/0" />
                        </div>
                    ))}
                </div>
            </div>

            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-[#A2E317] to-transparent shadow-[0_0_15px_#A2E317]" />
        </section>
    );
}