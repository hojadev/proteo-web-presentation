"use client";

import React, { useState } from "react";
import SlideWrapper from "../SlideWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Wind, Droplets, Activity, AlertTriangle, CheckCircle2, TrendingUp } from "lucide-react";

export default function SlideTechAdvantage() {
    const [mode, setMode] = useState<"compressor" | "banks">("compressor");

    return (
        <SlideWrapper className="bg-slate-50 relative">
            {/* Decorative Grid Pattern */}
            <div className="absolute inset-0 opacity-[0.03] overflow-hidden pointer-events-none">
                <div className="absolute inset-0" style={{
                    backgroundImage: 'linear-gradient(#0F172A 1px, transparent 1px), linear-gradient(90deg, #0F172A 1px, transparent 1px)',
                    backgroundSize: '50px 50px'
                }} />
            </div>

            {/* Diagonal Accent */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-proteo-blue/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            <div className="mb-12 text-center relative z-10">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="w-16 h-1 bg-proteo-orange" />
                    <span className="text-xs uppercase tracking-[0.3em] text-proteo-orange font-bold">Desarrollo</span>
                    <div className="w-16 h-1 bg-proteo-orange" />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-proteo-blue mb-4">
                    Estrategia de Huella Hídrica y Seguridad
                </h2>
                <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
                    Invertir en el buzo protege su planta. La calidad del aire es un factor crítico de continuidad operacional.
                </p>
            </div>

            {/* Toggle Switch */}
            <div className="flex justify-center mb-12 relative z-10">
                <div className="bg-slate-200 p-1.5 rounded-full flex relative shadow-inner">
                    <motion.div
                        className="absolute top-1.5 bottom-1.5 w-1/2 bg-white rounded-full shadow-md z-0"
                        animate={{ left: mode === "compressor" ? "6px" : "50%" }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                    <button
                        onClick={() => setMode("compressor")}
                        className={`relative z-10 px-10 py-4 rounded-full text-sm font-bold transition-colors ${mode === "compressor" ? "text-proteo-blue" : "text-slate-500"}`}
                    >
                        Compresor Tradicional
                    </button>
                    <button
                        onClick={() => setMode("banks")}
                        className={`relative z-10 px-10 py-4 rounded-full text-sm font-bold transition-colors ${mode === "banks" ? "text-proteo-blue" : "text-slate-500"}`}
                    >
                        Bancos de Aire
                    </button>
                </div>
            </div>

            <div className="max-w-6xl w-full mx-auto min-h-[450px] relative z-10">
                <AnimatePresence mode="wait">
                    {mode === "compressor" ? (
                        <motion.div
                            key="compressor"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        >
                            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-10 rounded-3xl border-2 border-red-100 shadow-xl relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-red-100/50 rounded-full" />
                                <h3 className="text-3xl font-bold text-red-600 mb-8 flex items-center gap-3 relative z-10">
                                    <AlertTriangle className="w-8 h-8" /> Riesgo Fatal: Toxicidad CO
                                </h3>
                                <ul className="space-y-6 relative z-10">
                                    <li className="flex items-start gap-4">
                                        <div className="bg-red-100 p-3 rounded-xl text-red-600 shadow-sm"><Wind className="w-6 h-6" /></div>
                                        <div>
                                            <span className="font-bold text-slate-800 text-lg block mb-1">Monóxido de Carbono</span>
                                            <p className="text-sm text-slate-600 leading-relaxed">Compresores a combustión mal ubicados generan CO. Un riesgo de muerte silenciosa e inmediata.</p>
                                            <p className="text-xs text-red-600 font-bold mt-2">Riesgo: CRÍTICO</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-red-100 p-3 rounded-xl text-red-600 shadow-sm"><Droplets className="w-6 h-6" /></div>
                                        <div>
                                            <span className="font-bold text-slate-800 text-lg block mb-1">Contaminación Cruzada</span>
                                            <p className="text-sm text-slate-600 leading-relaxed">Aceite y partículas en el aire respirable. Impacto directo en la salud pulmonar del buzo.</p>
                                            <p className="text-xs text-orange-600 font-bold mt-2">Impacto: ALTO</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-red-100 p-3 rounded-xl text-red-600 shadow-sm"><Activity className="w-6 h-6" /></div>
                                        <div>
                                            <span className="font-bold text-slate-800 text-lg block mb-1">Impacto Financiero (TSIM)</span>
                                            <p className="text-sm text-slate-600 leading-relaxed">Un accidente fatal dispara la Tasa de Siniestralidad y la cotización de seguro.</p>
                                            <p className="text-xs text-red-600 font-bold mt-2">Costo: HASTA 2.04% NÓMINA</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-72 h-72 bg-slate-200 rounded-full flex items-center justify-center shadow-2xl border-8 border-white relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20" />
                                    <span className="text-slate-400 font-bold text-2xl relative z-10">Compresor</span>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="banks"
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                        >
                            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-3xl border-2 border-blue-100 shadow-xl relative overflow-hidden">
                                <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-100/50 rounded-full" />
                                <h3 className="text-3xl font-bold text-proteo-blue mb-8 flex items-center gap-3 relative z-10">
                                    <CheckCircle2 className="w-8 h-8 text-green-500" /> Solución: Bancos de Aire
                                </h3>
                                <ul className="space-y-6 relative z-10">
                                    <li className="flex items-start gap-4">
                                        <div className="bg-blue-100 p-3 rounded-xl text-proteo-blue shadow-sm"><Wind className="w-6 h-6" /></div>
                                        <div>
                                            <span className="font-bold text-slate-800 text-lg block mb-1">Calidad de Aire Superior</span>
                                            <p className="text-sm text-slate-600 leading-relaxed">Evita daños a largo plazo. Suministro limpio y constante.</p>
                                            <p className="text-xs text-green-600 font-bold mt-2">Pureza: 100% CERTIFICADA</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-blue-100 p-3 rounded-xl text-proteo-blue shadow-sm"><Droplets className="w-6 h-6" /></div>
                                        <div>
                                            <span className="font-bold text-slate-800 text-lg block mb-1">Huella Hídrica Positiva</span>
                                            <p className="text-sm text-slate-600 leading-relaxed">Más amigable con el ecosistema. Elimina contaminantes en sitio.</p>
                                            <p className="text-xs text-blue-600 font-bold mt-2">Reducción: -40% EMISIONES</p>
                                        </div>
                                    </li>
                                    <li className="flex items-start gap-4">
                                        <div className="bg-blue-100 p-3 rounded-xl text-proteo-blue shadow-sm"><TrendingUp className="w-6 h-6" /></div>
                                        <div>
                                            <span className="font-bold text-slate-800 text-lg block mb-1">Sostenibilidad</span>
                                            <p className="text-sm text-slate-600 leading-relaxed">Alineado con su estrategia de reducción de impacto ambiental.</p>
                                            <p className="text-xs text-green-600 font-bold mt-2">Ahorro: 0% COTIZACIÓN ADICIONAL</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="flex justify-center">
                                <div className="w-72 h-72 bg-blue-100 rounded-full flex items-center justify-center border-8 border-white shadow-2xl relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20" />
                                    <span className="text-proteo-blue font-bold text-2xl relative z-10">Banco de Aire</span>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </SlideWrapper>
    );
}
