"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";

const metrics = [
    { label: "Accidentes", value: "0%", period: "2 años" },
    { label: "MTBF", value: "1,200h", period: "Preventivo" },
    { label: "Cumplimiento", value: "97%", period: "Schedule" },
    { label: "CAD Ahorro", value: "2.04%", period: "vs. Alto Riesgo" },
    { label: "Riesgo SMA", value: "$5.8B", period: "Evitado" },
    { label: "Experiencia", value: "8+ años", period: "Promedio" },
    { label: "Tiempo Fondo", value: "+40%", period: "con Nitrox" },
    { label: "Respuesta", value: "4hrs", period: "6x más rápido" },
    { label: "Fatiga", value: "-30%", period: "Reducción" },
    { label: "Aire", value: "100%", period: "Certificado" },
    { label: "Disponibilidad", value: "99.8%", period: "Operativa" },
    { label: "ISO", value: "45001", period: "Cumplimiento" }
];

export default function SlideFinalSummary() {
    return (
        <SlideWrapper className="bg-gradient-to-br from-slate-900 via-proteo-blue to-black text-white">
            <div className="w-full max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-3 tracking-tight">
                            PROTEO CHILE
                        </h1>
                        <div className="flex items-center justify-center gap-3 mb-8">
                            <div className="w-24 h-1 bg-proteo-orange" />
                            <p className="text-lg md:text-xl text-slate-300 uppercase tracking-[0.3em]">Buceo Industrial</p>
                            <div className="w-24 h-1 bg-proteo-orange" />
                        </div>
                    </motion.div>
                </div>

                {/* Metrics Grid - Compact */}
                <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 mb-10">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.05, duration: 0.3 }}
                            className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20 hover:bg-white/15 transition-all text-center"
                        >
                            <p className="text-xs text-slate-400 mb-1">{metric.label}</p>
                            <p className="text-xl md:text-2xl font-bold text-white mb-0.5">{metric.value}</p>
                            <p className="text-xs text-slate-500">{metric.period}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Section - Compact */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
                        <p className="text-sm text-slate-400 mb-2">Tecnología</p>
                        <p className="text-lg font-bold">Bancos de Aire + Nitrox</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
                        <p className="text-sm text-slate-400 mb-2">Equipo</p>
                        <p className="text-lg font-bold">Certificaciones Internacionales</p>
                    </div>
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 text-center">
                        <p className="text-sm text-slate-400 mb-2">Gestión</p>
                        <p className="text-lg font-bold">Reportes Técnicos Detallados</p>
                    </div>
                </motion.div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                    className="text-center mt-12"
                >
                    <p className="text-xl md:text-2xl font-bold mb-3">
                        Continuidad operacional garantizada
                    </p>
                    <div className="flex items-center justify-center gap-2 text-proteo-orange text-sm">
                        <div className="w-8 h-px bg-proteo-orange" />
                        <span className="uppercase tracking-widest font-bold">2025</span>
                        <div className="w-8 h-px bg-proteo-orange" />
                    </div>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
