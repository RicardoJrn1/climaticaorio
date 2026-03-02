import React from "react";
import Link from "next/link";
import Image from "next/image";

const servicos = [
    {
        title: "Locação de Climatizadores",
        description: "Climatizadores evaporativos ideais para eventos, galpões, igrejas e espaços abertos. Resfriamento natural e econômico.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
        ),
        gradient: "from-blue-500 to-cyan-400",
    },
    {
        title: "Ventiladores Industriais",
        description: "Ventiladores de alta potência para ambientes amplos, garantindo circulação de ar eficiente em qualquer espaço.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
            </svg>
        ),
        gradient: "from-cyan-500 to-teal-400",
    },
    {
        title: "Tendas e Coberturas",
        description: "Tendas climatizadas para eventos ao ar livre, casamentos, feiras e festivais com máximo conforto térmico.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
            </svg>
        ),
        gradient: "from-teal-500 to-emerald-400",
    },
    {
        title: "Manutenção Preventiva",
        description: "Serviço de manutenção e limpeza periódica dos equipamentos para garantir desempenho e durabilidade.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.25 5.25a2.121 2.121 0 01-3-3l5.25-5.25m10.043-8.253a4.5 4.5 0 01-3.18 7.713H15.5a1.5 1.5 0 00-1.5 1.5v.5a1.5 1.5 0 01-1.5 1.5H9.5a1.5 1.5 0 01-1.5-1.5v-.5A1.5 1.5 0 006.5 12H5.077a4.5 4.5 0 01-3.18-7.713L7.5 3m9 0l5.603 1.287" />
            </svg>
        ),
        gradient: "from-indigo-500 to-blue-400",
    },
    {
        title: "Climatização para Eventos",
        description: "Soluções completas de climatização para festas, shows, congressos e eventos corporativos de qualquer porte.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
        gradient: "from-blue-600 to-indigo-500",
    },
    {
        title: "Projetos Sob Medida",
        description: "Desenvolvemos projetos personalizados de climatização de acordo com a necessidade específica do seu espaço.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
            </svg>
        ),
        gradient: "from-violet-500 to-purple-400",
    },
];

const Portfolio = () => {
    return (
        <>
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

            {/* Grid de Serviços */}
            <section className="pb-28 relative overflow-hidden">
                <div className="container mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                        {servicos.map((servico, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100/80 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Glow de fundo */}
                                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${servico.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />

                                {/* Ícone */}
                                <div className={`w-16 h-16 bg-gradient-to-br ${servico.gradient} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {servico.icon}
                                </div>

                                {/* Conteúdo */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {servico.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {servico.description}
                                </p>

                                {/* Linha decorativa */}
                                <div className={`mt-6 h-1 w-0 bg-gradient-to-r ${servico.gradient} rounded-full group-hover:w-16 transition-all duration-500`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

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
        </>
    );
};

export default Portfolio;
