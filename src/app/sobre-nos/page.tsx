import React from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";

const cards = [
    {
        icon: "/icon-1.png",
        alt: "Ícone Missão",
        title: "Nossa Missão",
        text: "Proporcionar soluções confiáveis, eficientes e sustentáveis em climatização de ambientes, atendendo às necessidades de nossos clientes com excelência em serviços e atendimento.",
        gradient: "from-blue-500 to-cyan-400",
        bg: "bg-blue-500/10",
    },
    {
        icon: "/icon-2.png",
        alt: "Ícone Visão",
        title: "Nossa Visão",
        text: "Ser reconhecidos como referência em locação de equipamentos de climatização de ambientes, contribuindo para a construção de um futuro mais sustentável e confortável.",
        gradient: "from-cyan-500 to-teal-400",
        bg: "bg-cyan-500/10",
    },
    {
        icon: "/icon-3.png",
        alt: "Ícone Valores",
        title: "Nossos Valores",
        text: "Integridade, responsabilidade, inovação, qualidade, sustentabilidade, respeito ao meio ambiente e aos clientes.",
        gradient: "from-indigo-500 to-blue-400",
        bg: "bg-indigo-500/10",
    },
];


const Sobre = () => {
    return (
        <>
            <Header />

            {/* Hero */}
            <div className="relative w-full h-screen min-h-[700px] overflow-hidden">
                <Image
                    src="/hero-img.png"
                    alt="Imagem de destaque"
                    fill
                    priority
                    className="object-cover object-[center_90%]"
                />

                {/* Overlay com gradiente mais sofisticado */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950/95 via-blue-900/70 to-blue-800/30" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Manchas de azul gelo */}
                <div className="absolute top-[10%] right-[5%] w-[500px] h-[500px] bg-sky-300/15 rounded-full blur-[150px] animate-float" />
                <div className="absolute bottom-[20%] left-[0%] w-[550px] h-[550px] bg-blue-300/10 rounded-full blur-[140px] animate-float" style={{ animationDelay: "3s" }} />
                <div className="absolute top-[40%] left-[30%] w-[350px] h-[350px] bg-cyan-200/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "5s" }} />

                <div className="absolute inset-0 z-10 container mx-auto px-6 md:px-12 text-white flex items-center">
                    <div className="max-w-2xl">
                        {/* Badge */}
                        <div
                            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up"
                            style={{ animationDelay: "0s" }}
                        >
                            <span className="w-2 h-2 bg-green-400 rounded-full" />
                            <span className="text-sm font-medium text-blue-100">
                                Atendemos todo o Rio de Janeiro
                            </span>
                        </div>

                        <h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-[1.1] animate-fade-in-up"
                            style={{ animationDelay: "0.15s" }}
                        >
                            Transforme seu ambiente com a{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
                                temperatura ideal
                            </span>
                        </h1>

                        <p
                            className="text-lg md:text-xl mb-10 text-blue-100/90 leading-relaxed max-w-xl animate-fade-in-up"
                            style={{ animationDelay: "0.3s" }}
                        >
                            Sua solução completa em climatização, conforto e eficiência energética para eventos, empresas e residências.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
                            style={{ animationDelay: "0.45s" }}
                        >
                            <Link
                                href="/portfolio"
                                className="bg-blue-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-400 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-400/40 hover:-translate-y-0.5 text-center"
                            >
                                Conheça nossos serviços
                            </Link>
                            <Link
                                href="/contato"
                                className="border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm text-center"
                            >
                                Fale conosco
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Waves */}
                <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
                    {/* Sombra sutil */}
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
                    {/* Wave principal - semi-transparente para as manchas passarem */}
                    <svg
                        className="relative w-full h-[140px]"
                        viewBox="0 0 1440 320"
                        preserveAspectRatio="none"
                    >
                        <defs>
                            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="rgba(255,255,255,0.85)" />
                                <stop offset="50%" stopColor="rgba(240,249,255,0.8)" />
                                <stop offset="100%" stopColor="rgba(255,255,255,0.85)" />
                            </linearGradient>
                        </defs>
                        <path
                            fill="url(#waveGradient)"
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

            {/* Sobre */}
            <section id="sobre" className="py-28 relative overflow-hidden scroll-mt-20">
                <div className="container mx-auto px-6 md:px-12 relative">
                    {/* Cabeçalho centralizado */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="inline-flex items-center gap-2 text-blue-600 font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in-up">
                            <span className="w-8 h-[2px] bg-blue-600" />
                            Sobre Nós
                            <span className="w-8 h-[2px] bg-blue-600" />
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-100">
                            Nos preocupamos com a{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">climatização</span>{" "}
                            do seu ambiente
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed animate-fade-in-up delay-200">
                            Somos uma empresa profissional de climatização de ambientes, oferecendo locação de climatizadores e ventiladores no Rio de Janeiro. Garantimos conforto e qualidade para o seu espaço.
                        </p>
                    </div>

                    {/* Cards - grid horizontal */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
                        {cards.map((card, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100/80 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Glow de fundo no hover */}
                                <div className={`absolute -bottom-10 -right-10 w-40 h-40 bg-gradient-to-br ${card.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />

                                {/* Ícone */}
                                <div className={`w-14 h-14 ${card.bg} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <Image src={card.icon} alt={card.alt} width={30} height={30} />
                                </div>

                                {/* Conteúdo */}
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                                    {card.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed relative z-10">
                                    {card.text}
                                </p>

                                {/* Linha decorativa inferior */}
                                <div className={`mt-6 h-1 w-0 bg-gradient-to-r ${card.gradient} rounded-full group-hover:w-16 transition-all duration-500`} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
};

export default Sobre;
