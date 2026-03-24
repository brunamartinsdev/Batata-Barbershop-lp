import Image from "next/image";

type Barbeiro = {
    nome: string;
    especialidade: string;
    descricao: string;
    imagem: string;
    whatsapp: string;
};

const equipe: Barbeiro[] = [
    {
        nome: "Batata",
        especialidade: "Cortes modernos e barba",
        descricao:
            "Especialista em cortes com personalidade, acabamento preciso e atendimento focado na experiência do cliente.",
        imagem: "/images/barbeiro-1.jpg",
        whatsapp: "https://wa.me/5500000000000?text=Olá! Quero agendar com o Batata.",
    },
    {
        nome: "Gabriel",
        especialidade: "Fade e navalhado",
        descricao:
            "Mandando bem nos degradês, alinhamentos e estilos que pedem técnica, cuidado e presença.",
        imagem: "/images/barbeiro-2.jpg",
        whatsapp: "https://wa.me/5500000000000?text=Olá! Quero agendar com o Gabriel.",
    },
    {
        nome: "Lucas",
        especialidade: "Barba e finalização",
        descricao:
            "Focado em barba, modelagem e finalização para valorizar cada detalhe do visual.",
        imagem: "/images/barbeiro-3.jpg",
        whatsapp: "https://wa.me/5500000000000?text=Olá! Quero agendar com o Lucas.",
    },
];

export function Time() {
    return (
        <section
            id="equipe"
            className="relative overflow-hidden bg-[#A2E317] px-6 py-20 text-black md:px-10 lg:px-16"
        >
            <div className="mx-auto max-w-7xl">
                {/* topo */}
                <div className="mb-12 text-center">
                    <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-black/70">
                        Nossa equipe
                    </p>

                    <h2 className="mb-4 text-3xl font-black uppercase tracking-tight sm:text-4xl md:text-5xl">
                        Escolha quem vai cuidar do seu estilo
                    </h2>

                    <p className="mx-auto max-w-2xl text-sm leading-relaxed text-black/75 sm:text-base">
                        Profissionais com estilos diferentes, técnicas apuradas e o mesmo
                        compromisso: entregar presença, cuidado e personalidade em cada atendimento.
                    </p>
                </div>

                {/* cards */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {equipe.map((barbeiro) => (
                        <article
                            key={barbeiro.nome}
                            className="group relative overflow-hidden border border-black/15 bg-black text-white shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition duration-300 hover:-translate-y-1"
                        >
                            {/* molduras */}
                            <div className="absolute right-0 top-0 h-10 w-10 border-r-2 border-t-2 border-[#A2E317]" />
                            <div className="absolute bottom-0 left-0 h-10 w-10 border-b-2 border-l-2 border-[#A2E317]" />

                            {/* imagem */}
                            <div className="h-72 w-full overflow-hidden">
                                <Image
                                    src={barbeiro.imagem}
                                    alt={barbeiro.nome}
                                    width={500}
                                    height={600}
                                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                                />
                            </div>

                            {/* conteúdo */}
                            <div className="p-6">
                                <p className="mb-2 text-xs font-bold uppercase tracking-[0.3em] text-[#A2E317]">
                                    {barbeiro.especialidade}
                                </p>

                                <h3 className="mb-3 text-2xl font-black uppercase">
                                    {barbeiro.nome}
                                </h3>

                                <p className="mb-6 text-sm leading-relaxed text-zinc-300">
                                    {barbeiro.descricao}
                                </p>

                                <a
                                    href={barbeiro.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center bg-[#A2E317] px-6 py-3 text-xs font-black uppercase tracking-[0.25em] text-black transition hover:brightness-110"
                                    style={{
                                        clipPath:
                                            "polygon(12% 0, 100% 0, 100% 70%, 88% 100%, 0 100%, 0 30%)",
                                    }}
                                >
                                    Agendar com {barbeiro.nome}
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>

            {/* detalhe de linha */}
            <div className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-transparent via-black/80 to-transparent" />
        </section>
    );
}