"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { AlertTriangle, Droplets, Scale } from "lucide-react";

export default function SlideContext() {
    return (
        <SlideWrapper className="bg-slate-900 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-6xl">

                {/* Left: The Problem */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <AlertTriangle className="w-8 h-8 text-red-500" />
                        <h2 className="text-sm font-bold text-red-500 tracking-widest uppercase">Diagnóstico de Alto Riesgo</h2>
                    </div>
                    <h3 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                        El Costo Oculto del <br />
                        <span className="text-slate-400">Mantenimiento Reactivo</span>
                    </h3>
                    <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                        El buceo en PTAS no es solo técnico; es una función crítica de mitigación financiera. Una falla en equipos sumergidos (bombas, aireadores) colapsa el tratamiento de Riles.
                    </p>

                    <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-2xl">
                        <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                            <Scale className="w-5 h-5 text-yellow-500" /> Impacto Regulatorio (SMA)
                        </h4>
                        <p className="text-slate-400 text-sm mb-4">
                            Incumplimientos ambientales por olores o riles pueden derivar en multas catastróficas.
                        </p>
                        <div className="flex items-end gap-2">
                            <span className="text-4xl font-bold text-white">7,000</span>
                            <span className="text-sm text-slate-400 mb-2">UTA (Unidades Tributarias Anuales)</span>
                        </div>
                        <p className="text-xs text-red-400 mt-1">Riesgo potencial de ~$5.800 Millones CLP</p>
                    </div>
                </motion.div>

                {/* Right: The Strategic Value */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="absolute -inset-4 bg-proteo-blue/30 blur-2xl rounded-full" />
                    <div className="relative bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
                        <div className="mb-8">
                            <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                <Droplets className="w-6 h-6 text-blue-400" />
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2">Continuidad Hídrica</h4>
                            <p className="text-slate-400">
                                Soporte directo a la meta de reutilización del <strong className="text-white">37.4% de agua</strong> en procesos productivos.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-sm text-slate-300">Cumplimiento ESG & ODS</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-sm text-slate-300">Protección Reputacional</span>
                            </div>
                            <div className="flex items-center gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/50">
                                <div className="w-2 h-2 rounded-full bg-green-500" />
                                <span className="text-sm text-slate-300">Bioseguridad Garantizada</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </SlideWrapper>
    );
}
