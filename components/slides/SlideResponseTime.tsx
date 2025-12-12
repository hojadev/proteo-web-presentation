"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Clock, AlertCircle, Zap, Calendar, Phone, CheckCircle2 } from "lucide-react";

export default function SlideResponseTime() {
    return (
        <SlideWrapper className="bg-gradient-to-br from-slate-900 via-slate-800 to-proteo-blue">
            <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col h-full justify-center">
                {/* Header */}
                <div className="text-center mb-6 md:mb-8 lg:mb-10">
                    <div className="flex items-center justify-center gap-3 mb-3 md:mb-4">
                        <div className="w-12 md:w-16 h-1 bg-proteo-orange" />
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-proteo-orange font-bold">Velocidad de Respuesta</span>
                        <div className="w-12 md:w-16 h-1 bg-proteo-orange" />
                    </div>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                        Tiempo de Respuesta
                    </h2>
                    <p className="text-slate-300 text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
                        Días vs horas: la diferencia entre emergencia y planificación
                    </p>
                </div>

                {/* VS Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-[1fr_auto_1fr] gap-4 md:gap-6 lg:gap-8 items-start">
                    {/* REACTIVO - Left Side */}
                    <div className="space-y-3 md:space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center md:text-right"
                        >
                            <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold mb-2 md:mb-4">
                                REACTIVO
                            </div>
                        </motion.div>

                        {/* Detección */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 p-4 md:p-5 rounded-xl h-[100px] md:h-[116px] flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-2 md:gap-3 mb-2 justify-end">
                                <h3 className="text-base md:text-lg font-bold text-white">Falla detectada</h3>
                                <AlertCircle className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                            </div>
                            <p className="text-xs md:text-sm text-slate-300 text-right">
                                Solo cuando el equipo deja de funcionar
                            </p>
                        </motion.div>

                        {/* Movilización */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 p-4 md:p-5 rounded-xl h-[100px] md:h-[116px] flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-2 md:gap-3 mb-2 justify-end">
                                <h3 className="text-base md:text-lg font-bold text-white">Movilización</h3>
                                <Phone className="w-5 h-5 md:w-6 md:h-6 text-red-400" />
                            </div>
                            <p className="text-xs md:text-sm text-slate-300 text-right">
                                Búsqueda de equipo disponible, coordinación urgente
                            </p>
                        </motion.div>

                        {/* Tiempo Total */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="bg-red-500/20 backdrop-blur-sm border-2 border-red-500 p-4 md:p-5 rounded-xl h-[100px] md:h-[116px] flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-2 md:gap-3 mb-2 justify-end">
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">Días o semanas</h3>
                                <Clock className="w-6 h-6 md:w-8 md:h-8 text-red-400" />
                            </div>
                            <p className="text-xs md:text-sm text-slate-300 text-right">
                                Tiempo total de respuesta
                            </p>
                        </motion.div>
                    </div>

                    {/* VS Divider - Only visible on XL */}
                    <div className="hidden xl:flex flex-col items-center justify-center h-full pt-10">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                            className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-proteo-orange to-red-500 flex items-center justify-center text-white font-bold text-xl lg:text-2xl shadow-2xl z-10"
                        >
                            VS
                        </motion.div>
                        <div className="w-1 flex-1 bg-gradient-to-b from-proteo-orange to-transparent -mt-10 pt-10" />
                    </div>

                    {/* PREVENTIVO - Right Side */}
                    <div className="space-y-3 md:space-y-4">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center md:text-left"
                        >
                            <div className="inline-block bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-bold mb-2 md:mb-4">
                                PREVENTIVO
                            </div>
                        </motion.div>

                        {/* Detección */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 p-4 md:p-5 rounded-xl h-[100px] md:h-[116px] flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-2 md:gap-3 mb-2">
                                <Calendar className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                                <h3 className="text-base md:text-lg font-bold text-white">Inspección programada</h3>
                            </div>
                            <p className="text-xs md:text-sm text-slate-300">
                                Detección temprana antes de la falla
                            </p>
                        </motion.div>

                        {/* Movilización */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="bg-emerald-500/10 backdrop-blur-sm border border-emerald-500/30 p-4 md:p-5 rounded-xl h-[100px] md:h-[116px] flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-2 md:gap-3 mb-2">
                                <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-emerald-400" />
                                <h3 className="text-base md:text-lg font-bold text-white">Movilización</h3>
                            </div>
                            <p className="text-xs md:text-sm text-slate-300">
                                Equipo listo, repuestos disponibles, planificado
                            </p>
                        </motion.div>

                        {/* Tiempo Total */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="bg-emerald-500/20 backdrop-blur-sm border-2 border-emerald-500 p-4 md:p-5 rounded-xl h-[100px] md:h-[116px] flex flex-col justify-center"
                        >
                            <div className="flex items-center gap-2 md:gap-3 mb-2">
                                <Zap className="w-6 h-6 md:w-8 md:h-8 text-emerald-400" />
                                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white">Respuesta en 1 día</h3>
                            </div>
                            <p className="text-xs md:text-sm text-slate-300">
                                Luego de la notificación
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-6 md:mt-8 lg:mt-10 bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl text-center"
                >
                    <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-proteo-orange mb-2 md:mb-3">
                        Respuesta más rápida con mantenimiento planificado
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-slate-200 leading-relaxed max-w-3xl mx-auto">
                        Con inspecciones programadas, Proteo detecta problemas antes de que se conviertan en fallas,
                        permitiendo una respuesta planificada y rápida que asegura continuidad operacional.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
