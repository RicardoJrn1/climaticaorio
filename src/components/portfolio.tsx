import React from "react";
import Link from "next/link";

const Portfolio = () => {
    return (
        <section id="portfolio" className="py-24 relative overflow-hidden scroll-mt-20">
            <div className="container mx-auto px-6 md:px-12 relative">
                <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 rounded-3xl p-12 md:p-16 shadow-xl shadow-blue-700/20 overflow-hidden text-center">
                    {/* Decorativos */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-0 w-40 h-40 border border-white/30 rounded-full -translate-x-1/2 -translate-y-1/2" />
                        <div className="absolute bottom-0 right-0 w-60 h-60 border border-white/20 rounded-full translate-x-1/3 translate-y-1/3" />
                        <div className="absolute top-1/2 left-1/2 w-80 h-80 border border-white/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
                    </div>

                    <div className="relative">
                        <span className="inline-flex items-center gap-2 text-blue-200 font-semibold tracking-widest uppercase text-sm mb-6">
                            <span className="w-8 h-[2px] bg-blue-300" />
                            Portfólio
                            <span className="w-8 h-[2px] bg-blue-300" />
                        </span>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Veja nossos projetos em ação
                        </h2>
                        <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
                            Climatizadores, ventiladores industriais, tendas climatizadas e muito mais. Descubra como já transformamos centenas de ambientes no Rio de Janeiro.
                        </p>

                        <Link
                            href="/portfolio"
                            className="group inline-flex items-center gap-3 bg-white text-blue-700 px-10 py-5 rounded-full text-lg font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                        >
                            <span>Explorar portfólio</span>
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
    );
};

export default Portfolio;
