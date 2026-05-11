"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, easeOut } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa6";
import { SiGooglemaps } from "react-icons/si";
import { AgendarModal } from "./AgendarModal";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: easeOut },
  },
};

export function Footer() {
  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => setModalAberto(true);
  const fecharModal = () => setModalAberto(false);

  return (
    <footer
      id="Footer"
      className="relative overflow-hidden bg-black px-6 pb-12 pt-20 text-white md:px-10 lg:px-16"
    >
      <motion.div
        className="mx-auto max-w-7xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <div className="grid gap-12 border-b border-white/10 pb-16 text-center md:grid-cols-2 md:text-left lg:grid-cols-4">

          <motion.div variants={itemVariants} className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex justify-center md:justify-start">
              <Image
                src="/images/logos/logo-batata.webp"
                alt="Batata Barber Shop & Tattoo"
                width={70}
                height={70}
                className="h-auto w-14 object-contain"
              />
            </div>
            <h3 className="text-base font-black uppercase tracking-tight text-[#A2E317]">
              Batata Barber Shop <br /> & Tattoo
            </h3>
            <p className="mx-auto max-w-[25ch] text-xs leading-relaxed text-zinc-400 md:mx-0">
              Estilo, atitude e personalidade em cada detalhe. Um espaço pensado
              para quem valoriza presença.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#A2E317]">
              Navegação
            </h4>
            <nav className="flex flex-col gap-3 text-[13px] text-zinc-400">
              {["Início", "Serviços", "Equipe", "Produtos", "Sobre", "Contato"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase() === 'início' ? 'home' : item.toLowerCase()}`}
                  className="transition duration-300 hover:text-[#A2E317] md:hover:translate-x-1"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#A2E317]">
              Contato
            </h4>
            <div className="flex flex-col gap-4 text-[13px] text-zinc-400">
              <p className="flex flex-col gap-1">
                <span className="font-bold text-[10px] uppercase tracking-widest text-white">WhatsApp</span>
                (22) 9 9249-5516
              </p>
              <p className="flex flex-col gap-1">
                <span className="font-bold text-[10px] uppercase tracking-widest text-white">Instagram</span>
                @batata.barbershop
              </p>
              <a
                href="https://maps.app.goo.gl/qRvVMrS2mcn2rF9F6"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col gap-1 transition hover:text-white"
              >
                <span className="font-bold text-[10px] uppercase tracking-widest text-white">Endereço</span>
                Rua Oliveira Botelho, 47 - Centro <br />
                Nova Friburgo - RJ
              </a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col items-center gap-6 md:items-start">
            <h4 className="text-xs font-black uppercase tracking-[0.25em] text-[#A2E317]">
              Agendamento
            </h4>

            <div className="flex gap-3">
              {[
                {
                  icon: <FaInstagram size={16} />,
                  href: "https://www.instagram.com/batata.barbershop/",
                  label: "Siga a Batata Barber Shop no Instagram"
                },
                {
                  icon: <FaWhatsapp size={16} />,
                  href: "https://wa.me/5522992495516",
                  label: "Fale conosco pelo WhatsApp"
                },
                {
                  icon: <SiGooglemaps size={16} />,
                  href: "https://maps.app.goo.gl/qRvVMrS2mcn2rF9F6",
                  label: "Veja nossa localização no Google Maps"
                }
              ].map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#A2E317]/30 bg-white/5 text-[#A2E317] transition-all duration-300 hover:border-[#A2E317] hover:bg-[#A2E317] hover:text-black focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#A2E317] focus-visible:ring-offset-2 focus-visible:ring-offset-black"
                >
                  <span aria-hidden="true">
                    {social.icon}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.button
              onClick={abrirModal}
              whileHover={{ scale: 1.02, filter: "brightness(1.1)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full cursor-pointer bg-[#A2E317] px-8 py-3.5 text-[11px] font-black uppercase tracking-[0.2em] text-black transition-all duration-300 sm:w-auto"
              style={{
                clipPath: "polygon(12% 0, 100% 0, 100% 70%, 88% 100%, 0 100%, 0 30%)",
              }}
            >
              Agendar agora
            </motion.button>
          </motion.div>
        </div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center justify-between gap-6 pt-10 text-[10px] uppercase tracking-[0.3em] text-zinc-500 md:flex-row"
        >
          <p className="text-center md:text-left text-zinc-400">© 2026 Batata Barber Shop & Tattoo.</p>
          <div className="flex items-center gap-2 text-[9px] tracking-[0.1em]">
            <span className="text-zinc-400">Desenvolvido por</span>
            <strong className="text-zinc-300">Bruna Martins Combat</strong>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="absolute top-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-[#A2E317] to-transparent shadow-[0_0_20px_rgba(162,227,23,0.4)]"
      />

      <AgendarModal aberto={modalAberto} onFechar={fecharModal} />
    </footer>
  );
}