"use client";

import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent, href: string) => {
        if (href === "/") {
            if (pathname === "/") {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        } else if (href.startsWith("#")) {
            e.preventDefault();
            const el = document.querySelector(href);
            if (el) el.scrollIntoView({ behavior: "smooth" });
        }
    };

    const links = [
        { href: "/", label: "Home" },
        { href: "/sobre-nos", label: "Sobre" },
        { href: "/portfolio", label: "Portfólio" },
        { href: "/contato", label: "Contato" },
    ];

    return (
        <nav className={`flex justify-between items-center px-6 md:px-12 py-4 transition-all duration-500 fixed top-0 left-0 w-full z-50 ${isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent"}`}>
            {/* Logo */}
            <Link href="/" className="flex items-center" onClick={(e) => handleNavClick(e, "/")}>
                <Image src="/logo-climatizacao.webp" alt="Logo Climatização Rio" width={140} height={140} priority />
            </Link>

            {/* Links Desktop */}
            <ul className="hidden md:flex items-center space-x-8">
                {links.map((link) => (
                    <li key={link.href}>
                        <Link
                            href={link.href}
                            className={`link-underline text-sm uppercase tracking-wider transition-colors duration-300 ${isScrolled ? "text-gray-800 hover:text-blue-600" : "text-white hover:text-blue-300"} ${pathname === link.href ? "font-bold" : "font-medium"}`}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            {link.label}
                        </Link>
                    </li>
                ))}
                <li>
                    <Link
                        href="/contato"
                        className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${isScrolled ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg" : "bg-white/15 text-white border border-white/30 hover:bg-white/25 backdrop-blur-sm"}`}
                    >
                        Orçamento
                    </Link>
                </li>
            </ul>

            {/* Botão Hamburger Mobile */}
            <button
                className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Abrir menu"
            >
                <span className={`block w-6 h-0.5 transition-all duration-300 ${isScrolled ? "bg-gray-800" : "bg-white"} ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`} />
                <span className={`block w-6 h-0.5 transition-all duration-300 ${isScrolled ? "bg-gray-800" : "bg-white"} ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-6 h-0.5 transition-all duration-300 ${isScrolled ? "bg-gray-800" : "bg-white"} ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>

            {/* Menu Mobile */}
            <div className={`absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 md:hidden overflow-hidden ${isMobileMenuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"}`}>
                <ul className="flex flex-col py-4">
                    {links.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={`block px-6 py-3 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors ${pathname === link.href ? "font-bold text-blue-600" : ""}`}
                                onClick={(e) => {
                                    setIsMobileMenuOpen(false);
                                    handleNavClick(e, link.href);
                                }}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                    <li className="px-6 pt-3">
                        <Link
                            href="/contato"
                            className="block text-center bg-blue-600 text-white px-5 py-2.5 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            Solicitar Orçamento
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;
