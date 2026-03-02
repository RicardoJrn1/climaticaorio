import React from "react";
import Link from "next/link";

const Contato = () => {
    const canais = [
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ),
            label: "Ligue para nós",
            value: "(21) 98080-4151",
            color: "from-blue-500 to-blue-600",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ),
            label: "Envie um e-mail",
            value: "contato@climatizacaorio.com.br",
            color: "from-cyan-500 to-blue-500",
        },
        {
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ),
            label: "Nossa localização",
            value: "Rio de Janeiro, RJ",
            color: "from-blue-600 to-indigo-600",
        },
    ];

    return (
        <section className="py-24 relative overflow-hidden -mt-35">

            <div className="container mx-auto px-6 md:px-12 relative">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Texto */}
                    <div className="w-full lg:w-1/2">
                        <span className="inline-flex items-center gap-2 text-blue-600 font-semibold tracking-widest uppercase text-sm mb-4 animate-fade-in-up">
                            <span className="w-8 h-[2px] bg-blue-600" />
                            Contato
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight animate-fade-in-up delay-100">
                            Fale{" "}
                            <span className="text-blue-600">conosco</span>
                        </h2>
                        <p className="text-gray-500 text-lg mb-10 leading-relaxed animate-fade-in-up delay-200">
                            Estamos prontos para atender você. Se tiver interesse em nossos serviços, clique no botão abaixo para preencher nosso formulário de orçamento ou entre em contato diretamente pelos nossos canais.
                        </p>
                        <Link href="/contato" className="group inline-flex items-center gap-3 bg-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 animate-fade-in-up delay-200">
                            <span>Solicitar Orçamento</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </Link>
                    </div>

                    {/* Cards de contato */}
                    <div className="w-full lg:w-1/2 animate-fade-in-up delay-200">
                        <div className="grid grid-cols-1 gap-5">
                            {canais.map((canal, index) => (
                                <div
                                    key={index}
                                    className="group bg-white p-7 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-500 flex items-center gap-6 hover:-translate-y-1"
                                >
                                    <div className={`w-14 h-14 bg-gradient-to-br ${canal.color} rounded-2xl flex items-center justify-center text-white shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                        {canal.icon}
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-400 font-medium uppercase tracking-wider mb-1">{canal.label}</p>
                                        <p className="text-xl font-bold text-gray-900 break-all">{canal.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contato;
