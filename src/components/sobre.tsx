import React from "react";
import Link from "next/link";

const stats = [
    {
        value: "20+",
        label: "Anos de experiência",
        gradient: "from-blue-600 to-cyan-500",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5" />
            </svg>
        ),
    },
    {
        value: "500+",
        label: "Eventos atendidos",
        gradient: "from-cyan-500 to-teal-400",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
            </svg>
        ),
    },
    {
        value: "100%",
        label: "Compromisso com a satisfação",
        gradient: "from-indigo-500 to-blue-400",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
            </svg>
        ),
    },
];

const Sobre = () => {
    return (
        <section id="sobre" className="py-28 relative overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-6 md:px-12 relative">
                <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
                    {/* Lado esquerdo - números de impacto */}
                    <div className="w-full lg:w-1/2 space-y-5">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="group relative bg-white rounded-2xl p-6 shadow-sm border border-gray-100/80 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 flex items-center gap-6 overflow-hidden"
                            >
                                {/* Glow */}
                                <div className={`absolute -right-10 -bottom-10 w-32 h-32 bg-gradient-to-br ${stat.gradient} rounded-full opacity-0 group-hover:opacity-10 blur-2xl transition-opacity duration-500`} />

                                {/* Ícone */}
                                <div className={`shrink-0 w-14 h-14 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                    {stat.icon}
                                </div>

                                {/* Conteúdo */}
                                <div>
                                    <span className={`text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.gradient}`}>
                                        {stat.value}
                                    </span>
                                    <p className="text-gray-500 text-sm font-medium mt-1">{stat.label}</p>
                                </div>

                                {/* Linha lateral */}
                                <div className={`absolute left-0 top-0 w-1 h-0 bg-gradient-to-b ${stat.gradient} rounded-full group-hover:h-full transition-all duration-500`} />
                            </div>
                        ))}
                    </div>

                    {/* Lado direito - texto e CTA */}
                    <div className="w-full lg:w-1/2">
                        <span className="inline-flex items-center gap-2 text-blue-600 font-semibold tracking-widest uppercase text-sm mb-4">
                            <span className="w-8 h-[2px] bg-blue-600" />
                            Quem somos
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            Conforto térmico é com a{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                                Climatização Rio
                            </span>
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-5">
                            Somos especialistas em transformar ambientes com soluções de climatização eficientes e sustentáveis. Do planejamento à execução, cuidamos de cada detalhe para que você e seus convidados tenham a melhor experiência.
                        </p>
                        <Link
                            href="/sobre-nos"
                            className="group inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
                        >
                            <span>Saiba mais sobre nós</span>
                            <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sobre;
