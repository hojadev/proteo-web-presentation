"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Shield, CheckCircle2, Users, Zap } from "lucide-react";

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
                <div className="bubble" style={{ left: '5%', width: '8px', height: '8px', animationDuration: '8s', animationDelay: '0s' }} />
                <div className="bubble" style={{ left: '15%', width: '12px', height: '12px', animationDuration: '10s', animationDelay: '2s' }} />
                <div className="bubble" style={{ left: '25%', width: '6px', height: '6px', animationDuration: '7s', animationDelay: '1s' }} />
                <div className="bubble" style={{ left: '35%', width: '10px', height: '10px', animationDuration: '9s', animationDelay: '3s' }} />
                <div className="bubble" style={{ left: '45%', width: '7px', height: '7px', animationDuration: '8.5s', animationDelay: '0.5s' }} />
                <div className="bubble" style={{ left: '55%', width: '11px', height: '11px', animationDuration: '11s', animationDelay: '4s' }} />
                <div className="bubble" style={{ left: '65%', width: '9px', height: '9px', animationDuration: '9.5s', animationDelay: '1.5s' }} />
                <div className="bubble" style={{ left: '75%', width: '8px', height: '8px', animationDuration: '8s', animationDelay: '2.5s' }} />
                <div className="bubble" style={{ left: '85%', width: '13px', height: '13px', animationDuration: '12s', animationDelay: '3.5s' }} />
                <div className="bubble" style={{ left: '95%', width: '7px', height: '7px', animationDuration: '7.5s', animationDelay: '0.8s' }} />

                {/* More bubbles for density */}
                <div className="bubble" style={{ left: '10%', width: '5px', height: '5px', animationDuration: '6s', animationDelay: '4.5s' }} />
                <div className="bubble" style={{ left: '20%', width: '9px', height: '9px', animationDuration: '9s', animationDelay: '5s' }} />
                <div className="bubble" style={{ left: '30%', width: '11px', height: '11px', animationDuration: '10.5s', animationDelay: '1.2s' }} />
                <div className="bubble" style={{ left: '40%', width: '6px', height: '6px', animationDuration: '7s', animationDelay: '3.8s' }} />
                <div className="bubble" style={{ left: '50%', width: '10px', height: '10px', animationDuration: '9.5s', animationDelay: '2.2s' }} />
                <div className="bubble" style={{ left: '60%', width: '8px', height: '8px', animationDuration: '8.5s', animationDelay: '4.2s' }} />
                <div className="bubble" style={{ left: '70%', width: '12px', height: '12px', animationDuration: '11s', animationDelay: '0.3s' }} />
                <div className="bubble" style={{ left: '80%', width: '7px', height: '7px', animationDuration: '7.5s', animationDelay: '5.5s' }} />
                <div className="bubble" style={{ left: '90%', width: '9px', height: '9px', animationDuration: '9s', animationDelay: '1.8s' }} />
            </div>

            <div className="w-full max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-10 md:mb-12">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-16 h-1 bg-proteo-orange" />
                        <span className="text-xs uppercase tracking-[0.3em] text-proteo-orange font-bold">Ventaja Operativa</span>
                        <div className="w-16 h-1 bg-proteo-orange" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-proteo-blue mb-4">
                        Bancos de Aire
                    </h2>
                    <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                        Tecnología que optimiza la ejecución del servicio y elimina puntos de fallo
                    </p>
                </div>

                {/* Advantages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                    {advantages.map((advantage, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-slate-50 p-6 md:p-8 rounded-2xl border-l-4 border-transparent hover:border-proteo-orange transition-all group relative overflow-hidden"
                        >
                            {/* Subtle decorative circle */}
                            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br opacity-5 group-hover:opacity-10 transition-opacity rounded-full blur-2xl"
                                style={{ background: `linear-gradient(to bottom right, ${advantage.color.split(' ')[1]}, ${advantage.color.split(' ')[3]})` }}
                            />

                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10`}>
                                <advantage.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3 relative z-10">{advantage.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed relative z-10">{advantage.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-10 bg-gradient-to-r from-slate-800 via-cyan-900 to-slate-800 p-6 md:p-8 rounded-2xl text-white text-center relative overflow-hidden p-6 md:p-8 rounded-2xl text-white text-center relative overflow-hidden"
                >
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-proteo-orange rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-40 h-40 bg-cyan-400 rounded-full blur-3xl" />
                    </div>

                    {/* Subtle pattern overlay */}
                    <div className="absolute inset-0 opacity-5" style={{
                        backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                        backgroundSize: '32px 32px'
                    }} />

                    <p className="text-lg leading-relaxed max-w-3xl mx-auto relative z-10">
                        Los Bancos de Aire permiten que nuestro equipo se enfoque en lo importante:
                        el mantenimiento de sus equipos críticos, sin interrupciones técnicas.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
