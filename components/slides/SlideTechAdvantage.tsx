"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, Users, Zap } from "lucide-react";
import Bubbles from "../Bubbles";

const advantages = [
    {
        icon: Shield,
        title: "Cero Riesgo de Fallo",
        description: "Eliminamos el principal punto de fallo en buceo industrial: la avería de compresores en ambientes hostiles. Fiabilidad operativa del suministro de gas.",
        color: "from-red-500 to-orange-500"
    },
    {
        icon: CheckCircle2,
        title: "Calidad Certificada",
        description: "Aire pre-analizado y certificado en origen. Cumplimiento garantizado con estándares de seguridad sin depender de mantenimiento en sitio.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Users,
        title: "Foco en la Tarea",
        description: "Nuestro equipo se concentra exclusivamente en inspección y mantenimiento. Sin tiempo perdido en mantenimiento de compresores (filtros, aceite).",
        color: "from-purple-500 to-indigo-500"
    },
    {
        icon: Zap,
        title: "Despliegue Ágil",
        description: "Movilización y desmovilización rápida de equipos. Capacidad escalable para trabajos con múltiples inmersiones o alto consumo de aire.",
        color: "from-orange-500 to-yellow-500"
    }
];

export default function SlideTechAdvantage() {
    return (
        <SlideWrapper className="bg-gradient-to-br from-slate-50 to-cyan-50 relative overflow-hidden">
            {/* Subtle water-themed background */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
                {/* Wavy lines */}
                <svg className="absolute bottom-0 w-full h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="currentColor" className="text-cyan-300" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    <path fill="currentColor" className="text-blue-200" fillOpacity="0.2" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>

                {/* Rising bubbles animation */}


                {/* Multiple bubbles with different sizes, positions, and speeds */}
                {/* Rising bubbles animation */}
                <Bubbles />

            </div>

            <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col h-full justify-center">
                <div className="text-center mb-2 md:mb-4 lg:mb-6">
                    <div className="flex items-center justify-center gap-2 mb-2 md:mb-3">
                        <div className="w-8 md:w-12 h-1 bg-proteo-orange" />
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-proteo-orange font-bold">Ventaja Operativa</span>
                        <div className="w-8 md:w-12 h-1 bg-proteo-orange" />
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-proteo-blue mb-2">
                        Bancos de Aire
                    </h2>
                    <p className="text-slate-600 text-xs md:text-sm lg:text-base max-w-3xl mx-auto">
                        Tecnología que optimiza la ejecución del servicio y elimina puntos de fallo
                    </p>
                </div>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 lg:gap-5">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-slate-50 p-3 md:p-4 rounded-xl border-l-4 border-transparent hover:border-proteo-orange transition-all group relative overflow-hidden"
                        >
                            {/* Subtle decorative circle */}
                            <div className={`absolute -top-8 -right-8 w-20 h-20 bg-gradient-to-br ${advantage.color} opacity-5 group-hover:opacity-10 transition-opacity rounded-full blur-2xl`} />

                            <div className={`w-8 h-8 md:w-10 md:h-10 rounded-lg bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform relative z-10`}>
                                <advantage.icon className="w-4 h-4 md:w-5 md:h-5 text-white" />
                            </div>
                            <h3 className="text-base md:text-lg lg:text-xl font-bold text-slate-800 mb-1 relative z-10">{advantage.title}</h3>
                            <p className="text-[10px] md:text-xs lg:text-sm text-slate-600 leading-relaxed relative z-10">{advantage.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-3 md:mt-5 lg:mt-6 bg-gradient-to-r from-slate-800 via-cyan-900 to-slate-800 p-3 md:p-4 lg:p-5 rounded-xl text-white text-center relative overflow-hidden"
                >
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-proteo-orange rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-cyan-400 rounded-full blur-3xl" />
                    </div>

                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px'
                    }} />

                    <p className="text-xs md:text-sm lg:text-base leading-relaxed max-w-3xl mx-auto relative z-10">
                        Los Bancos de Aire permiten que nuestro equipo se enfoque en lo importante:
                        el mantenimiento de sus equipos críticos, sin interrupciones técnicas.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
