"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AgendarModal } from "./AgendarModal";

const links = [
    { id: "home", label: "Home" },
    { id: "services", label: "Serviços" },
    { id: "produtos", label: "Produtos" },
    { id: "equipe", label: "Equipe" },
    { id: "about", label: "Sobre" },
    { id: "contact", label: "Contato" },
];

const HEADER_OFFSET = 96;

export function Navbar() {
    const [menuAberto, setMenuAberto] = useState(false);
    const [modalAberto, setModalAberto] = useState(false);
    const [secaoAtiva, setSecaoAtiva] = useState("home");

    const toggleMenu = () => {
        setMenuAberto((prev) => !prev);
    };

    const abrirModal = () => {
        setModalAberto(true);
        setMenuAberto(false);
    };

    const fecharModal = () => {
        setModalAberto(false);
    };

    const navegarParaSecao = (id: string) => {
        const secao = document.getElementById(id);

        if (!secao) return;

        const top =
            secao.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET;

        setSecaoAtiva(id);
        setMenuAberto(false);

        window.history.pushState(null, "", `#${id}`);
        window.scrollTo({
            top,
            behavior: "smooth",
        });
    };

    useEffect(() => {
        const atualizarSecaoAtiva = () => {
            const secoes = links
                .map((link) => document.getElementById(link.id))
                .filter((secao): secao is HTMLElement => secao !== null);

            if (!secoes.length) return;

            const posicaoScroll = window.scrollY + HEADER_OFFSET + 120;

            let secaoAtual = links[0].id;

            for (const secao of secoes) {
                const topo = secao.offsetTop;
                const base = topo + secao.offsetHeight;

                if (posicaoScroll >= topo && posicaoScroll < base) {
                    secaoAtual = secao.id;
                    break;
                }

                if (posicaoScroll >= topo) {
                    secaoAtual = secao.id;
                }
            }

            setSecaoAtiva(secaoAtual);
        };

        atualizarSecaoAtiva();

        window.addEventListener("scroll", atualizarSecaoAtiva, { passive: true });
        window.addEventListener("resize", atualizarSecaoAtiva);
        window.addEventListener("load", atualizarSecaoAtiva);

        return () => {
            window.removeEventListener("scroll", atualizarSecaoAtiva);
            window.removeEventListener("resize", atualizarSecaoAtiva);
            window.removeEventListener("load", atualizarSecaoAtiva);
        };
    }, []);

    const linkDesktopClass = (id: string) =>
        `relative pb-2 transition duration-300 ${
            secaoAtiva === id ? "text-[#A2E317]" : "text-zinc-300 hover:text-[#A2E317]"
        }`;

    const underlineClass = (id: string) =>
        `absolute bottom-0 left-0 h-[2px] bg-[#A2E317] shadow-[0_0_8px_#A2E317] transition-all duration-300 ${
            secaoAtiva === id ? "w-full opacity-100" : "w-0 opacity-0"
        }`;

    const linkMobileClass = (id: string) =>
        `py-3 transition duration-300 ${
            secaoAtiva === id ? "text-[#A2E317]" : "text-zinc-300 hover:text-[#A2E317]"
        }`;

    return (
        <>
            <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/90 backdrop-blur">
                <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                    <div className="flex items-center gap-3">
                        <Link
                            href="#home"
                            onClick={(e) => {
                                e.preventDefault();
                                navegarParaSecao("home");
                            }}
                        >
                            <Image
                                src="/images/logo-batata.PNG"
                                alt="Batata Barber Shop"
                                width={80}
                                height={80}
                                className="h-14 w-auto object-contain"
                            />
                        </Link>
                    </div>

                    <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide md:flex">
                        {links.map((link) => (
                            <Link
                                key={link.id}
                                href={`#${link.id}`}
                                className={linkDesktopClass(link.id)}
                                onClick={(e) => {
                                    e.preventDefault();
                                    navegarParaSecao(link.id);
                                }}
                            >
                                {link.label}
                                <span className={underlineClass(link.id)} />
                            </Link>
                        ))}
                    </nav>

                    <div className="hidden md:block">
                        <button
                            type="button"
                            onClick={abrirModal}
                            className="cursor-pointer bg-[#A2E317] px-6 py-3 text-sm font-bold uppercase tracking-wider text-black transition duration-300 hover:opacity-90 hover:scale-[1.02]"
                            style={{
                                clipPath:
                                    "polygon(12% 0, 100% 0, 100% 70%, 88% 100%, 0 100%, 0 30%)",
                            }}
                        >
                            Agendar
                        </button>
                    </div>

                    <button
                        type="button"
                        onClick={toggleMenu}
                        aria-label={menuAberto ? "Fechar menu" : "Abrir menu"}
                        className="text-white transition hover:text-[#A2E317] md:hidden"
                    >
                        {menuAberto ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                <div
                    className={`overflow-hidden border-t border-white/10 bg-black transition-all duration-300 md:hidden ${
                        menuAberto ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                >
                    <nav className="flex flex-col items-center justify-center px-6 py-6 text-sm font-semibold uppercase tracking-widest">
                        {links.map((link) => (
                            <Link
                                key={link.id}
                                href={`#${link.id}`}
                                className={linkMobileClass(link.id)}
                                onClick={(e) => {
                                    e.preventDefault();
                                    navegarParaSecao(link.id);
                                }}
                            >
                                {link.label}
                            </Link>
                        ))}

                        <button
                            type="button"
                            onClick={abrirModal}
                            className="mt-6 cursor-pointer bg-[#A2E317] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition duration-300 hover:opacity-90 hover:scale-[1.02]"
                            style={{
                                clipPath:
                                    "polygon(12% 0, 100% 0, 100% 70%, 88% 100%, 0 100%, 0 30%)",
                            }}
                        >
                            Agendar
                        </button>
                    </nav>
                </div>
            </header>

            <AgendarModal aberto={modalAberto} onFechar={fecharModal} />
        </>
    );
}