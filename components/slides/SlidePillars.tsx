"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Wrench, UserCheck, Shield } from "lucide-react";

const pillars = [
    {
        title: "Equipamiento",
        subtitle: "Tecnología de Soporte Vital",
        icon: Wrench,
        description: "Inversión constante en equipos de última generación.",
        metrics: [
            { label: "Bancos de Aire", value: "100% Certificados" },
            { label: "Análisis de Gas", value: "Pre-Inmersión" }
        ]
    },
    {
        title: "Grupo Humano",
        subtitle: "Experiencia Comprobada",
        icon: UserCheck,
        description: "Buzos especialistas con años de trayectoria.",
        metrics: [
            { label: "Años Promedio", value: "8+ Años" },
            { label: "Certificaciones", value: "Nitrox/DCS" }
        ]
    },
    {
        title: "Seguridad",
        subtitle: "Máxima Protección",
        icon: Shield,
        description: "Protocolos rigurosos que protegen al colaborador.",
        metrics: [
            { label: "Tasa Accidentes", value: "0%" },
            { label: "Cumplimiento", value: "ISO 45001" }
        ]
    },
];

export default function SlidePillars() {
    return (
        <SlideWrapper className="bg-slate-900 text-white relative">
            {/* Geometric Background Pattern */}
            <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-64 h-64 border-2 border-white rounded-full" />
                <div className="absolute bottom-1/4 right-0 w-80 h-80 border-2 border-white rounded-full" />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 border border-white/30 rounded-full" />
            </div>

            {/* Diagonal Grid Lines */}
            <div className="absolute inset-0 opacity-5 overflow-hidden pointer-events-none">
                {Array.from({ length: 8 }).map((_, i) => (
                    <div
                        key={i}
                        className="absolute top-0 h-full w-px bg-white"
                        style={{ left: `${(i + 1) * 12.5}%`, transform: 'rotate(15deg) translateX(-50%)' }}
                    />
                ))}
            </div>

            <div className="text-center mb-16 relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-16 h-1 bg-proteo-orange" />
                    <span className="text-xs uppercase tracking-[0.3em] text-proteo-orange font-bold">Pilares</span>
                    <div className="w-16 h-1 bg-proteo-orange" />
                </div>
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    Pilares de Servicio
                </motion.h2>
                <p className="text-slate-300 text-lg">La base de nuestra excelencia operativa</p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-8 w-full relative z-10">
                {pillars.map((pilar, index) => (
                    <motion.div
                        key={index}
                        className="flex-1 flex flex-col items-center text-center group cursor-pointer bg-slate-800/30 backdrop-blur-sm p-6 md:p-8 rounded-2xl border border-slate-700/50 hover:border-proteo-orange/50 transition-all"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-2 border-slate-700 flex items-center justify-center mb-4 md:mb-6 group-hover:border-proteo-orange group-hover:bg-proteo-orange/10 transition-all duration-500 relative overflow-hidden">
                            <div className="absolute inset-0 bg-proteo-orange/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 origin-center" />
                            <pilar.icon className="w-10 h-10 md:w-14 md:h-14 text-slate-300 group-hover:text-proteo-orange transition-colors duration-300 relative z-10" />
                        </div>

                        <h3 className="text-xl md:text-2xl font-bold mb-2 group-hover:text-proteo-orange transition-colors">{pilar.title}</h3>
                        <h4 className="text-sm md:text-base text-cyan-300 mb-3 md:mb-4 font-medium">{pilar.subtitle}</h4>
                        <p className="text-slate-200 text-xs md:text-sm mb-4 md:mb-6 leading-relaxed">{pilar.description}</p>

                        {/* Metrics */}
                        <div className="mt-auto w-full space-y-2 md:space-y-3 pt-4 md:pt-6 border-t border-slate-700/50">
                            {pilar.metrics.map((metric, idx) => (
                                <div key={idx} className="flex justify-between items-center text-xs md:text-sm">
                                    <span className="text-slate-300">{metric.label}</span>
                                    <span className="text-white font-bold">{metric.value}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </SlideWrapper>
    );
}
