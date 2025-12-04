"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Tablet, FileText, BarChart3, CheckCircle } from "lucide-react";

export default function SlideGMAO() {
    return (
        <SlideWrapper className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl">

                {/* Left: Concept */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-proteo-blue mb-6">
                        Gestión Digitalizada <br />
                        <span className="text-proteo-accent">(GMAO / CMMS)</span>
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        La seguridad y eficiencia deben ser auditables. Nuestra plataforma digital centraliza la trazabilidad para la toma de decisiones.
                    </p>

                    <ul className="space-y-6">
                        <li className="flex gap-4">
                            <div className="bg-blue-100 p-3 rounded-xl h-fit">
                                <FileText className="w-6 h-6 text-proteo-blue" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Trazabilidad de Seguridad</h3>
                                <p className="text-sm text-slate-500">Registro inmutable de mezclas de gas, tiempos de fondo y estado del buzo. Evidencia para D.S. N°67.</p>
                            </div>
                        </li>
                        <li className="flex gap-4">
                            <div className="bg-orange-100 p-3 rounded-xl h-fit">
                                <BarChart3 className="w-6 h-6 text-proteo-orange" />
                            </div>
                            <div>
                                <h3 className="font-bold text-slate-800">Análisis MTBF</h3>
                                <p className="text-sm text-slate-500">Monitoreo del Tiempo Medio Entre Fallas. Demostración empírica de la confiabilidad de sus activos.</p>
                            </div>
                        </li>
                    </ul>
                </div>

                {/* Right: Mockup */}
                <motion.div
                    className="relative"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="bg-slate-900 rounded-3xl p-2 shadow-2xl border-4 border-slate-800">
                        <div className="bg-slate-800 rounded-2xl overflow-hidden">
                            {/* Fake UI Header */}
                            <div className="bg-slate-900 px-6 py-4 flex items-center justify-between border-b border-slate-700">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                                    <div className="w-3 h-3 rounded-full bg-green-500" />
                                </div>
                                <div className="text-xs text-slate-400 font-mono">PROTEO_GMAO_SYSTEM</div>
                            </div>

                            {/* Fake UI Body */}
                            <div className="p-6 space-y-4">
                                <div className="flex justify-between items-center mb-4">
                                    <h4 className="text-white font-bold">Orden de Trabajo #4092</h4>
                                    <span className="bg-green-500/20 text-green-400 text-xs px-2 py-1 rounded">En Progreso</span>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-slate-700/50 p-3 rounded-lg">
                                        <p className="text-xs text-slate-400">Activo</p>
                                        <p className="text-sm text-white font-medium">Bomba Sumergible 04</p>
                                    </div>
                                    <div className="bg-slate-700/50 p-3 rounded-lg">
                                        <p className="text-xs text-slate-400">Mezcla Gas</p>
                                        <p className="text-sm text-white font-medium">Nitrox 32% (Cert.)</p>
                                    </div>
                                </div>

                                <div className="bg-slate-700/30 p-4 rounded-lg border border-slate-600/50">
                                    <div className="flex items-center gap-2 mb-2">
                                        <CheckCircle className="w-4 h-4 text-proteo-accent" />
                                        <span className="text-sm text-slate-300">Checklist Pre-Inmersión</span>
                                    </div>
                                    <div className="space-y-2 pl-6">
                                        <div className="h-1.5 w-3/4 bg-slate-600 rounded-full" />
                                        <div className="h-1.5 w-1/2 bg-slate-600 rounded-full" />
                                    </div>
                                </div>

                                <div className="mt-4 pt-4 border-t border-slate-700 flex justify-between items-end">
                                    <div>
                                        <p className="text-xs text-slate-400">MTBF Actual</p>
                                        <p className="text-xl font-bold text-white">2,450 Hrs</p>
                                    </div>
                                    <div className="text-xs text-green-400">+15% vs Q1</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Floating Element */}
                    <motion.div
                        className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl flex items-center gap-3"
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <Tablet className="w-8 h-8 text-proteo-blue" />
                        <div>
                            <p className="text-xs text-slate-500 font-bold uppercase">Acceso Cliente</p>
                            <p className="text-sm font-bold text-proteo-blue">Portal 24/7</p>
                        </div>
                    </motion.div>
                </motion.div>

            </div>
        </SlideWrapper>
    );
}
