"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { FileText, CheckCircle2 } from "lucide-react";

export default function SlideReporting() {
    return (
        <SlideWrapper className="bg-slate-50">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full max-w-6xl">

                {/* Left: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-3xl md:text-5xl font-bold text-proteo-blue mb-6 leading-tight">
                        Reportabilidad <br />
                        <span className="text-proteo-orange">Técnica y Precisa</span>
                    </h2>
                    <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Entregamos informes técnicos diseñados específicamente para sus KPIs. Datos claros para la toma de decisiones.
                    </p>

                    <ul className="space-y-4">
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                            <span className="text-slate-700 font-medium">Horas de Mantenimiento de Equipos</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                            <span className="text-slate-700 font-medium">Costo por Trabajador (Eficiencia)</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <CheckCircle2 className="w-6 h-6 text-green-500" />
                            <span className="text-slate-700 font-medium">Avance de Presupuesto</span>
                        </li>
                    </ul>
                </motion.div>

                {/* Right: Document Visual */}
                <motion.div
                    className="relative flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Stack of Reports */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-64 h-80 bg-slate-200 rounded-lg shadow-lg rotate-6" />
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-64 h-80 bg-slate-100 rounded-lg shadow-lg -rotate-3" />

                    {/* Main Report */}
                    <div className="relative w-64 h-80 bg-white rounded-lg shadow-2xl p-6 border border-slate-200 flex flex-col">
                        <div className="flex items-center gap-2 mb-6">
                            <FileText className="w-8 h-8 text-proteo-blue" />
                            <div className="h-2 w-24 bg-slate-200 rounded-full" />
                        </div>
                        <div className="space-y-3 mb-auto">
                            <div className="h-2 w-full bg-slate-100 rounded-full" />
                            <div className="h-2 w-full bg-slate-100 rounded-full" />
                            <div className="h-2 w-3/4 bg-slate-100 rounded-full" />
                        </div>

                        <div className="mt-6 pt-6 border-t border-slate-100">
                            <div className="flex justify-between items-end">
                                <div>
                                    <p className="text-[10px] text-slate-400 uppercase">KPI: Disponibilidad</p>
                                    <p className="text-xl font-bold text-proteo-blue">99.8%</p>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </SlideWrapper>
    );
}
