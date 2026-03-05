import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "../../components/header";
import Footer from "../../components/footer";
import EventGallery from "../../components/event-gallery";

const Portfolio = () => {
    return (
        <>
            <Header />

            {/* Hero do Portfólio */}
            <div className="relative w-full h-[75vh] min-h-[700px] overflow-hidden">
                <Image
                    src="/hero-portfolio.png"
                    alt="Portfólio Climatização Rio"
                    fill
                    priority
                    className="object-cover object-center"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/70 to-blue-800/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Manchas de azul gelo */}
                <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-sky-300/15 rounded-full blur-[150px] animate-float" />
                <div className="absolute bottom-[20%] left-[0%] w-[550px] h-[550px] bg-blue-300/10 rounded-full blur-[140px] animate-float" style={{ animationDelay: "3s" }} />

                {/* Conteúdo */}
                <div className="absolute inset-0 z-30 container mx-auto px-6 md:px-12 pt-2 text-white flex items-center">
                    <div className="max-w-2xl">
                        <div
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up"
                            style={{ animationDelay: "0s" }}
                        >
                            <span className="w-2 h-2 bg-green-400 rounded-full" />
                            <span className="text-sm font-medium text-blue-100">
                                Nosso Portfólio
                            </span>
                        </div>

                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] animate-fade-in-up"
                            style={{ animationDelay: "0.15s" }}
                        >
                            Levamos muito a sério todos os nossos clientes.
                        </h1>

                        <p
                            className="text-lg md:text-xl mb-10 text-white font-light leading-relaxed max-w-xl animate-fade-in-up"
                            style={{ animationDelay: "0.3s" }}
                        >
                            Conheça os casos em que a Climatização Rio fez a diferença. Nossos projetos refletem a promessa de ambientes confortáveis e clientes satisfeitos.
                        </p>

                        <div
                            className="animate-fade-in-up"
                            style={{ animationDelay: "0.45s" }}
                        >
                        </div>
                    </div>
                </div>

                {/* Wave */}
                <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
                    <svg
                        className="absolute bottom-0 left-0 w-full h-[140px] translate-y-[6px]"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <path
                            fill="rgba(0,0,0,0.15)"
                            d="M0,170
                            C120,140 240,130 360,140
                            C520,156 640,210 720,220
                            C800,230 920,200 1080,176
                            C1220,156 1340,150 1440,168
                            L1440,320 L0,320 Z"
                        />
                    </svg>
                    <svg
                        className="relative w-full h-[140px]"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="waveGradientPortfolio" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
                                <stop offset="50%" stopColor="rgba(240,249,255,0.8)" />
                                <stop offset="100%" stopColor="rgba(255,255,255,0.85)" />
                            </linearGradient>
                        </defs>
                        <path
                            fill="url(#waveGradientPortfolio)"
                            d="M0,170
                            C120,140 240,130 360,140
                            C520,156 640,210 720,220
                            C800,230 920,200 1080,176
                            C1220,156 1340,150 1440,168
                            L1440,320 L0,320 Z"
                        />
                    </svg>
                </div>
            </div>

            {/* Galeria de Eventos */}
            <EventGallery />

            {/* CTA */}
            <section className="pb-28 relative">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-12 md:p-16 shadow-xl shadow-blue-700/20 overflow-hidden text-center">
                        {/* Decorativos */}
                        <div className="absolute inset-0 opacity-10">
                            <div className="absolute top-0 left-0 w-40 h-40 border border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
                            <div className="absolute bottom-0 right-0 w-60 h-60 border border-white/20 rounded-full translate-x-1/3 translate-y-1/3" />
                        </div>

                        <div className="relative">
                            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                Precisa de climatização para seu espaço?
                            </h2>
                            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
                                Entre em contato e receba um orçamento personalizado. Atendemos todo o Rio de Janeiro.
                            </p>
                            <Link
                                href="/contato"
                                className="group inline-flex items-center gap-3 bg-white text-blue-700 px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                            >
                                Solicitar Orçamento
                                <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                    </svg>
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Portfolio;
