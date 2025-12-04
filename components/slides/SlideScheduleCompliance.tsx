"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { CheckCircle2, Calendar, TrendingUp } from "lucide-react";

export default function SlideScheduleCompliance() {
    const compliance = 97; // 97% compliance rate
    const targetCompliance = 95;

    return (
        <SlideWrapper className="bg-white">
            <div className="w-full max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-16 h-1 bg-proteo-orange" />
                        <span className="text-xs uppercase tracking-[0.3em] text-proteo-orange font-bold">KPI de Gestión</span>
                        <div className="w-16 h-1 bg-proteo-orange" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-proteo-blue mb-4">
                        Cumplimiento de Horarios
                    </h2>
                    <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                        Profesionalismo en la ejecución del plan de mantenimiento preventivo
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Gauge Chart */}
                    <div className="flex flex-col items-center">
                        <div className="relative w-80 h-80">
                            {/* Background Circle */}
                            <svg className="w-full h-full transform -rotate-90">
                                <circle
                                    cx="160"
                                    cy="160"
                                    r="140"
                                    stroke="#e2e8f0"
                                    strokeWidth="20"
                                    fill="none"
                                />
                                {/* Progress Circle */}
                                <motion.circle
                                    cx="160"
                                    cy="160"
                                    r="140"
                                    stroke="#10b981"
                                    strokeWidth="20"
                                    fill="none"
                                    strokeLinecap="round"
                                    strokeDasharray={`${2 * Math.PI * 140}`}
                                    initial={{ strokeDashoffset: 2 * Math.PI * 140 }}
                                    animate={{ strokeDashoffset: 2 * Math.PI * 140 * (1 - compliance / 100) }}
                                    transition={{ duration: 2, ease: "easeOut" }}
                                />
                                {/* Target Marker */}
                                <circle
                                    cx="160"
                                    cy="160"
                                    r="140"
                                    stroke="#f97316"
                                    strokeWidth="4"
                                    fill="none"
                                    strokeDasharray={`${2 * Math.PI * 140 * (targetCompliance / 100)} ${2 * Math.PI * 140}`}
                                    strokeLinecap="round"
                                    opacity="0.5"
                                />
                            </svg>

                            {/* Center Text */}
                            <div className="absolute inset-0 flex flex-col items-center justify-center">
                                <motion.p
                                    className="text-7xl font-bold text-green-600"
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5, duration: 0.5 }}
                                >
                                    {compliance}%
                                </motion.p>
                                <p className="text-sm text-slate-600 mt-2">Cumplimiento Actual</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 mt-6">
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-green-500 rounded-full" />
                                <span className="text-sm text-slate-600">Actual: {compliance}%</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <div className="w-4 h-4 bg-proteo-orange rounded-full" />
                                <span className="text-sm text-slate-600">Meta: {targetCompliance}%</span>
                            </div>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2 }}
                            className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-500"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <CheckCircle2 className="w-7 h-7 text-green-600" />
                                <h4 className="text-xl font-bold text-slate-800">Superando la Meta</h4>
                            </div>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                Nuestro cumplimiento del <strong className="text-green-600">97%</strong> supera el objetivo del 95%,
                                demostrando que el programa de mantenimiento preventivo es sostenible y confiable.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-2xl border-l-4 border-blue-500"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <Calendar className="w-7 h-7 text-blue-600" />
                                <h4 className="text-xl font-bold text-slate-800">Ventaja Nitrox</h4>
                            </div>
                            <p className="text-sm text-slate-700 leading-relaxed">
                                La mayor eficiencia del buzo con Nitrox (+40% tiempo de fondo) nos permite mantener el cumplimiento
                                por encima del 95%, asegurando que su infraestructura nunca quede expuesta a fallas no prevenidas.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6 }}
                            className="bg-slate-800 p-6 rounded-2xl text-white"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <TrendingUp className="w-7 h-7 text-proteo-orange" />
                                <h4 className="text-xl font-bold">Fórmula</h4>
                            </div>
                            <p className="text-sm mb-3 text-slate-300">
                                Cumplimiento (%) = (Tareas PM completadas a tiempo / Total tareas PM programadas) × 100
                            </p>
                            <div className="bg-white/10 p-4 rounded-xl">
                                <p className="text-xs italic text-slate-300">
                                    "Un alto cumplimiento evita que las tareas preventivas se vuelvan reactivas,
                                    protegiendo la continuidad operacional de Agrosuper."
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
}
