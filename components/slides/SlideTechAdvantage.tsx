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
        <SlideWrapper className="bg-white">
            <div className="w-full max-w-6xl mx-auto">
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
                            className="bg-slate-50 p-6 md:p-8 rounded-2xl border-l-4 border-transparent hover:border-proteo-orange transition-all group"
                        >
                            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${advantage.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <advantage.icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-800 mb-3">{advantage.title}</h3>
                            <p className="text-sm text-slate-600 leading-relaxed">{advantage.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-10 bg-slate-800 p-6 md:p-8 rounded-2xl text-white text-center"
                >
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        Los Bancos de Aire permiten que nuestro equipo se enfoque en lo importante:
                        el mantenimiento de sus equipos críticos, sin interrupciones técnicas.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
