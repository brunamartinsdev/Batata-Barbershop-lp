"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function Sobre() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-black px-6 py-20 text-white md:px-10 lg:px-16"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 md:grid-cols-2 md:gap-14">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mx-auto w-full max-w-[320px] sm:max-w-[420px] md:max-w-[400px]"
        >
          <div className="pointer-events-none absolute -right-1 -top-1 z-20 h-12 w-12 border-r-4 border-t-4 border-[#A2E317] md:-right-2 md:-top-2" />
          <div className="pointer-events-none absolute -bottom-1 -left-1 z-20 h-12 w-12 border-b-4 border-l-4 border-[#A2E317] md:-bottom-2 md:-left-2" />

          <div
            className="relative aspect-[4/5] overflow-hidden bg-zinc-900 shadow-2xl"
            style={{
              clipPath: "polygon(12% 0, 100% 0, 100% 88%, 88% 100%, 0 100%, 0 12%)",
            }}
          >
            <Image
              src="/images/sobre/sobre.webp"
              alt="Fachada da barbearia"
              fill
              className="object-cover brightness-50 transition duration-500 hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20, y: 20 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="absolute -bottom-6 -right-4 z-30 w-[40%] flex flex-col items-end md:-bottom-10 md:-right-8"
          >
            <div className="mb-2 bg-black/80 px-2 py-1 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.15em] text-white backdrop-blur-sm border-r-2 border-[#A2E317] whitespace-nowrap">
              Tiago &quot;Batata&quot; • Fundador
            </div>

            <div
              className="relative w-full aspect-square overflow-hidden border border-white/10 shadow-2xl"
              style={{
                clipPath: "polygon(12% 0, 100% 0, 100% 85%, 85% 100%, 0 100%, 0 12%)",
              }}
            >
              <Image
                src="/images/sobre/fundador.webp"
                alt="Tiago Batata atendendo"
                fill
                className="object-cover transition duration-500 hover:scale-110"
                sizes="200px"
              />
            </div>
          </motion.div>

          <div className="pointer-events-none absolute -bottom-10 -right-10 h-full w-full bg-[#A2E317]/10 blur-[100px] opacity-50" />
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p className="mb-3 text-xs font-black uppercase tracking-[0.35em] text-[#A2E317]">
            Sobre a Batata
          </p>

          <h2 className="mb-5 text-2xl font-black uppercase leading-tight sm:text-2xl md:text-3xl lg:text-4xl">
            Mais do que visual. <br />
            Uma experiência com identidade.
          </h2>

          <p className="mb-4 text-sm leading-relaxed text-zinc-300 sm:text-base">
            A Batata Barber Shop & Tattoo nasceu com a proposta de unir estilo,
            atitude e cuidado em um só espaço. Idealizada por{" "}
            <span className="font-semibold text-white">
              Tiago Silva, o Batata
            </span>{" "}
            — fundador, barbeiro e tatuador —, a barbearia carrega sua identidade
            em cada detalhe, do atendimento à finalização.
          </p>

          <p className="mb-8 text-sm leading-relaxed text-zinc-300 sm:text-base">
            Nosso objetivo é criar um ambiente onde cada cliente se sinta
            confiante, bem atendido e representado pelo próprio estilo.
          </p>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {[
              { value: "+6k", label: "Atendimentos" },
              { value: "6x", label: "Melhor da Cidade" },
              { value: "Top", label: "Experiência", hideMobile: true },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`flex flex-col justify-center border border-white/10 bg-zinc-950 p-4 text-center transition-all hover:border-[#A2E317]/40 hover:bg-zinc-900/50 ${item.hideMobile ? "hidden sm:flex" : "flex"
                  }`}
              >
                <strong className="text-2xl font-black text-[#A2E317] md:text-4xl">
                  {item.value}
                </strong>
                <span className="mt-1 text-[9px] font-bold uppercase tracking-[0.1em] text-zinc-500 md:text-[10px]">
                  {item.label}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A2E317]/40 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#A2E317] to-transparent blur-md opacity-60" />

        <div className="absolute top-0 left-[-30%] h-full w-[30%] bg-gradient-to-r from-transparent via-white/40 to-transparent animate-[shine_3s_linear_infinite]" />
      </div>
    </section>
  );
}