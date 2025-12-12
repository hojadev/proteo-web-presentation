"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Shield, Wind, CheckCircle2, Clock, FileText, TrendingUp } from "lucide-react";

const metrics = [
    { icon: Shield, label: "0% Accidentes", description: "Historial seguridad" },
    { icon: Wind, label: "Bancos de Aire", description: "Cero riesgo fallo" },
    { icon: Clock, label: "1 día", description: "Respuesta planificada" },
    { icon: FileText, label: "Informes", description: "Cada actividad" },
    { icon: TrendingUp, label: "Descuentos", description: "Segun plan seleccionado" },
    { icon: CheckCircle2, label: "ISO", description: "Certificaciones en proceso" },
];

const highlights = [
    {
        title: "Tecnología",
        items: ["Bancos de Aire", "Nitrox opcional", "Cero CO (Monóxido de Carbono)"]
    },
    {
        title: "Servicio",
        items: ["Respuesta rápida", "Plan preventivo", "Trazabilidad"]
    }
];

export default function SlideFinalSummary() {
    return (
        <SlideWrapper className="bg-gradient-to-br from-slate-900 via-slate-800 to-proteo-blue">
            <div className="w-full max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-3">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1">
                            PROTEO CHILE
                        </h1>
                        <p className="text-base md:text-lg lg:text-xl text-proteo-orange font-bold mb-1">
                            Buceo Industrial
                        </p>
                        <div className="w-16 md:w-20 h-1 bg-proteo-orange mx-auto" />
                    </motion.div>
                </div>

                {/* Metrics Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 mb-3">
                    {metrics.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.08, duration: 0.3 }}
                            className="bg-white/10 backdrop-blur-sm border border-white/30 p-2 rounded-xl text-center hover:bg-white/15 transition-all"
                        >
                            <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-1">
                                <metric.icon className="w-3 h-3 md:w-4 md:h-4 text-white" />
                            </div>
                            <h3 className="text-[10px] md:text-xs font-bold text-white mb-0.5">{metric.label}</h3>
                            <p className="text-[9px] md:text-[10px] text-slate-300">{metric.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-3">
                    {highlights.map((highlight, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                            className="bg-white/10 backdrop-blur-sm border border-white/30 p-3 rounded-xl"
                        >
                            <h3 className="text-xs md:text-sm lg:text-base font-bold text-proteo-orange mb-1 md:mb-2">{highlight.title}</h3>
                            <ul className="space-y-1">
                                {highlight.items.map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-2 text-[10px] md:text-xs text-slate-200">
                                        <div className="w-1 h-1 bg-proteo-orange rounded-full" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Value Props */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-3 mb-3">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.7, duration: 0.4 }}
                        className="bg-white/10 backdrop-blur-sm border border-white/30 p-3 rounded-xl"
                    >
                        <h3 className="text-xs md:text-sm font-bold text-white mb-1 md:mb-2">Plan Preventivo</h3>
                        <ul className="space-y-1 text-[10px] md:text-xs text-slate-200">
                            <li>• Respuestas más rápida</li>
                            <li>• Descuentos multianuales</li>
                            <li>• Detección temprana</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8, duration: 0.4 }}
                        className="bg-white/10 backdrop-blur-sm border border-white/30 p-3 rounded-xl"
                    >
                        <h3 className="text-xs md:text-sm font-bold text-white mb-1 md:mb-2">Diferenciación</h3>
                        <ul className="space-y-1 text-[10px] md:text-xs text-slate-200">
                            <li>• Tecnología única en Chile</li>
                            <li>• Nitrox para productividad</li>
                            <li>• ISO 9001, 14001, 45001 en proceso</li>
                        </ul>
                    </motion.div>
                </div>

                {/* Footer */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="text-center border-t border-white/20 pt-2"
                >
                    <p className="text-slate-300 text-xs md:text-sm">
                        Continuidad operacional con excelencia técnica
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
