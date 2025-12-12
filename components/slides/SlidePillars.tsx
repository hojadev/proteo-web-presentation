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
            { label: "En Proceso", value: "ISO 45001" }
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

            <div className="text-center mb-6 md:mb-10 relative z-10">
                <div className="flex items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4">
                    <div className="w-10 md:w-16 h-1 bg-proteo-orange" />
                    <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-proteo-orange font-bold">Pilares</span>
                    <div className="w-10 md:w-16 h-1 bg-proteo-orange" />
                </div>
                <motion.h2
                    className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                >
                    Pilares de Servicio
                </motion.h2>
                <p className="text-slate-300 text-sm md:text-base lg:text-lg">La base de nuestra excelencia operativa</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 w-full relative z-10 px-4">
                {pillars.map((pilar, index) => (
                    <motion.div
                        key={index}
                        className="flex flex-col items-center text-center group cursor-pointer bg-slate-800/30 backdrop-blur-sm p-3 md:p-4 rounded-xl md:rounded-2xl border border-slate-700/50 hover:border-proteo-orange/50 transition-all h-full"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        whileHover={{ y: -10 }}
                    >
                        <div className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 border-slate-700 flex items-center justify-center mb-2 md:mb-3 group-hover:border-proteo-orange group-hover:bg-proteo-orange/10 transition-all duration-500 relative overflow-hidden shrink-0">
                            <div className="absolute inset-0 bg-proteo-orange/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500 origin-center" />
                            <pilar.icon className="w-6 h-6 md:w-8 md:h-8 text-slate-300 group-hover:text-proteo-orange transition-colors duration-300 relative z-10" />
                        </div>

                        <h3 className="text-base md:text-lg font-bold mb-0.5 md:mb-1 group-hover:text-proteo-orange transition-colors">{pilar.title}</h3>
                        <h4 className="text-[10px] md:text-xs text-cyan-300 mb-1 md:mb-2 font-medium">{pilar.subtitle}</h4>
                        <p className="text-slate-200 text-[10px] md:text-xs mb-2 md:mb-3 leading-relaxed">{pilar.description}</p>

                        {/* Metrics */}
                        <div className="mt-auto w-full space-y-1 md:space-y-1.5 pt-2 md:pt-3 border-t border-slate-700/50">
                            {pilar.metrics.map((metric, idx) => (
                                <div key={idx} className="flex justify-between items-center text-[9px] md:text-[10px]">
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
