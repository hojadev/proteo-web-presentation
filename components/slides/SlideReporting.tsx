"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { FileText, Calendar, TrendingUp, Shield } from "lucide-react";
import Bubbles from "../Bubbles";

export default function SlideReporting() {
    return (
        <SlideWrapper className="bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
            {/* Subtle water-themed background */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
                {/* Wavy lines */}
                <svg className="absolute bottom-0 w-full h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="currentColor" className="text-cyan-300" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    <path fill="currentColor" className="text-blue-200" fillOpacity="0.2" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>

                {/* Rising bubbles animation */}


                {/* Multiple bubbles */}
                {/* Rising bubbles animation */}
                <Bubbles />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-10 items-center w-full max-w-6xl mx-auto relative z-10">

                {/* Left: Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="mb-4 md:mb-5">
                        <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                            <div className="w-8 md:w-12 h-1 bg-proteo-orange" />
                            <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-proteo-orange font-bold">Control Periódico</span>
                        </div>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-proteo-blue mb-2 md:mb-3">
                            Informes Técnicos
                        </h2>
                        <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed mb-1 md:mb-2">
                            Entregamos informes en cada actividad de mantenimiento preventivo ejecutada
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4">
                        <div className="flex md:flex-col items-start md:items-center text-left md:text-center gap-3 md:gap-2">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                                <Calendar className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                            </div>
                            <div>
                                <h3 className="text-sm md:text-xs lg:text-sm font-bold text-slate-800 mb-0.5 md:mb-1">Seguimiento</h3>
                                <p className="text-xs md:text-[10px] lg:text-xs text-slate-600 leading-tight">Evidencia de cumplimiento del plan preventivo</p>
                            </div>
                        </div>

                        <div className="flex md:flex-col items-start md:items-center text-left md:text-center gap-3 md:gap-2">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                                <TrendingUp className="w-4 h-4 md:w-5 md:h-5 text-green-600" />
                            </div>
                            <div>
                                <h3 className="text-sm md:text-xs lg:text-sm font-bold text-slate-800 mb-0.5 md:mb-1">Tendencias</h3>
                                <p className="text-xs md:text-[10px] lg:text-xs text-slate-600 leading-tight">Detecta patrones antes de que se conviertan en fallas</p>
                            </div>
                        </div>

                        <div className="flex md:flex-col items-start md:items-center text-left md:text-center gap-3 md:gap-2">
                            <div className="w-8 h-8 md:w-10 md:h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                                <Shield className="w-4 h-4 md:w-5 md:h-5 text-purple-600" />
                            </div>
                            <div>
                                <h3 className="text-sm md:text-xs lg:text-sm font-bold text-slate-800 mb-0.5 md:mb-1">Trazabilidad</h3>
                                <p className="text-xs md:text-[10px] lg:text-xs text-slate-600 leading-tight">Documentación para auditorías ISO y SMA</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Report Visual */}
                <motion.div
                    className="relative flex justify-center"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Stack of Reports */}
                    <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-56 md:w-64 h-72 md:h-80 bg-slate-200 rounded-lg shadow-lg rotate-6" />
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-56 md:w-64 h-72 md:h-80 bg-slate-100 rounded-lg shadow-lg -rotate-3" />

                    {/* Main Report */}
                    <div className="relative w-56 md:w-64 h-72 md:h-80 bg-white rounded-lg shadow-2xl p-4 md:p-5 border border-slate-200 flex flex-col">
                        {/* Header */}
                        <div className="flex items-center gap-2 md:gap-3 mb-4 pb-3 border-b border-slate-100">
                            <FileText className="w-6 h-6 md:w-8 md:h-8 text-proteo-blue" />
                            <div className="flex-1">
                                <div className="h-1.5 md:h-2 w-24 md:w-32 bg-slate-200 rounded-full mb-1.5 md:mb-2" />
                                <div className="h-1 md:h-1.5 w-16 md:w-20 bg-slate-100 rounded-full" />
                            </div>
                        </div>

                        {/* Content Lines */}
                        <div className="space-y-3 mb-auto">
                            <div>
                                <div className="h-1 md:h-1.5 w-20 bg-blue-200 rounded-full mb-1.5" />
                                <div className="h-1.5 md:h-2 w-full bg-slate-100 rounded-full" />
                                <div className="h-1.5 md:h-2 w-full bg-slate-100 rounded-full" />
                                <div className="h-1.5 md:h-2 w-3/4 bg-slate-100 rounded-full" />
                            </div>
                            <div>
                                <div className="h-1 md:h-1.5 w-20 bg-green-200 rounded-full mb-1.5" />
                                <div className="h-1.5 md:h-2 w-full bg-slate-100 rounded-full" />
                                <div className="h-1.5 md:h-2 w-5/6 bg-slate-100 rounded-full" />
                            </div>
                        </div>

                        {/* Bottom Section */}
                        <div className="mt-4 pt-4 border-t border-slate-100">
                            <div className="flex items-center gap-2 md:gap-3">
                                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-blue-100 flex items-center justify-center">
                                    <FileText className="w-4 h-4 md:w-5 md:h-5 text-proteo-blue" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-[8px] md:text-[10px] text-slate-400 uppercase tracking-wide">Reporte Técnico</p>
                                    <p className="text-[10px] md:text-xs font-bold text-proteo-blue">Detallado y Trazable</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </SlideWrapper>
    );
}
