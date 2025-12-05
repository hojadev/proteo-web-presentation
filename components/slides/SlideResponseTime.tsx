"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Clock, AlertCircle, Zap, Calendar, Phone, CheckCircle2 } from "lucide-react";

export default function SlideResponseTime() {
    return (
        <SlideWrapper className="bg-gradient-to-br from-slate-900 via-slate-800 to-proteo-blue">
            <div className="w-full max-w-7xl mx-auto">
                <div className="text-center mb-8 md:mb-10">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-16 h-1 bg-proteo-orange" />
                        <span className="text-xs uppercase tracking-[0.3em] text-proteo-orange font-bold">Velocidad de Respuesta</span>
                        <div className="w-16 h-1 bg-proteo-orange" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Tiempo de Respuesta
                    </h2>
                    <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                        Días vs horas: la diferencia entre emergencia y planificación
                    </p>
                </div>

                {/* VS Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 items-start">
                    {/* REACTIVO - Left Side */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center lg:text-right"
                        >
                            <div className="inline-block bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                                REACTIVO
                            </div>
                        </motion.div>

                        {/* Detección */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 p-6 rounded-xl"
                        >
                            <div className="flex items-center gap-3 mb-3 justify-end">
                                <h3 className="text-lg font-bold text-white">Falla detectada</h3>
                                <AlertCircle className="w-8 h-8 text-red-400" />
                            </div>
                            <p className="text-sm text-slate-300 text-right">
                                Solo cuando el equipo deja de funcionar
                            </p>
                        </motion.div>

                        {/* Movilización */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="bg-red-500/10 backdrop-blur-sm border border-red-500/30 p-6 rounded-xl"
                        >
                            <div className="flex items-center gap-3 mb-3 justify-end">
                                <h3 className="text-lg font-bold text-white">Movilización</h3>
                                <Phone className="w-8 h-8 text-red-400" />
                            </div>
                            <p className="text-sm text-slate-300 text-right">
                                Búsqueda de equipo disponible, coordinación urgente
                            </p>
                        </motion.div>

                        {/* Tiempo Total */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="bg-red-500/20 backdrop-blur-sm border-2 border-red-500 p-6 rounded-xl"
                        >
                            <div className="flex items-center gap-3 mb-3 justify-end">
                                <h3 className="text-2xl font-bold text-white">Días o semanas</h3>
                                <Clock className="w-10 h-10 text-red-400" />
                            </div>
                            <p className="text-sm text-slate-300 text-right">
                                Tiempo total de respuesta
                            </p>
                        </motion.div>
                    </div>

                    {/* VS Divider */}
                    <div className="hidden lg:flex flex-col items-center justify-center">
                        <motion.div
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: 0.4, duration: 0.5, type: "spring" }}
                            className="w-20 h-20 rounded-full bg-gradient-to-br from-proteo-orange to-red-500 flex items-center justify-center text-white font-bold text-2xl shadow-2xl"
                        >
                            VS
                        </motion.div>
                        <div className="w-1 flex-1 bg-gradient-to-b from-proteo-orange to-transparent mt-4" />
                    </div>

                    {/* PREVENTIVO - Right Side */}
                    <div className="space-y-6">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5 }}
                            className="text-center lg:text-left"
                        >
                            <div className="inline-block bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-4">
                                PREVENTIVO
                            </div>
                        </motion.div>

                        {/* Detección */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                            className="bg-green-500/10 backdrop-blur-sm border border-green-500/30 p-6 rounded-xl"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <Calendar className="w-8 h-8 text-green-400" />
                                <h3 className="text-lg font-bold text-white">Inspección programada</h3>
                            </div>
                            <p className="text-sm text-slate-300">
                                Detección temprana antes de la falla
                            </p>
                        </motion.div>

                        {/* Movilización */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="bg-green-500/10 backdrop-blur-sm border border-green-500/30 p-6 rounded-xl"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <CheckCircle2 className="w-8 h-8 text-green-400" />
                                <h3 className="text-lg font-bold text-white">Movilización</h3>
                            </div>
                            <p className="text-sm text-slate-300">
                                Equipo listo, repuestos disponibles, planificado
                            </p>
                        </motion.div>

                        {/* Tiempo Total */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                            className="bg-green-500/20 backdrop-blur-sm border-2 border-green-500 p-6 rounded-xl"
                        >
                            <div className="flex items-center gap-3 mb-3">
                                <Zap className="w-10 h-10 text-green-400" />
                                <h3 className="text-2xl font-bold text-white">4 horas</h3>
                            </div>
                            <p className="text-sm text-slate-300">
                                Tiempo promedio de respuesta
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-10 bg-white/10 backdrop-blur-md border border-white/20 p-6 md:p-8 rounded-2xl text-center"
                >
                    <h3 className="text-2xl font-bold text-proteo-orange mb-3">
                        Respuesta 6x más rápida con mantenimiento preventivo
                    </h3>
                    <p className="text-slate-200 leading-relaxed max-w-3xl mx-auto">
                        Con inspecciones programadas, Proteo detecta problemas antes de que se conviertan en fallas,
                        permitiendo una respuesta planificada y rápida que asegura continuidad operacional.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
