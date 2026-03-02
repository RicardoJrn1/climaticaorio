import React from "react";
import Link from "next/link";
import Image from "next/image";

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
    );
};

export default Sobre;
