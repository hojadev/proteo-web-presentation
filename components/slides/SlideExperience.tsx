"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Shield, Wind } from "lucide-react";

export default function SlideExperience() {
    return (
        <SlideWrapper className="bg-white">
            {/* Geometric Accent Lines */}
            <div className="absolute top-0 left-0 w-1 h-20 md:h-32 bg-gradient-to-b from-proteo-orange to-transparent" />
            <div className="absolute bottom-0 right-0 w-1 h-20 md:h-32 bg-gradient-to-t from-proteo-blue to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 lg:gap-16 items-center w-full">

                {/* Left: Main Narrative (3 columns) */}
                <motion.div
                    className="lg:col-span-3"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                        <div className="w-12 md:w-16 h-1 bg-proteo-orange" />
                        <span className="text-xs uppercase tracking-[0.2em] md:tracking-[0.3em] text-proteo-orange font-bold">Inicio</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-proteo-blue mb-6 md:mb-8 leading-[1.1]">
                        Experiencia y <br />
                        <span className="text-proteo-orange">Alta Fidelidad</span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-600 mb-8 md:mb-12 leading-relaxed max-w-2xl">
                        Un equipo experto con foco en el colaborador. Nuestra operación se traduce en seguridad financiera y continuidad para Agrosuper.
                    </p>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 md:p-8 rounded-2xl shadow-lg border-l-4 border-green-500 relative overflow-hidden">
                        {/* Decorative Circle */}
                        <div className="absolute -top-10 -right-10 w-24 md:w-32 h-24 md:h-32 bg-green-100/50 rounded-full" />

                        <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6 relative z-10">
                            <div className="bg-white p-3 md:p-4 rounded-xl shadow-md">
                                <ShieldCheck className="w-8 md:w-10 h-8 md:h-10 text-green-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-xl md:text-2xl font-bold text-slate-800 mb-2">Cero Accidentes</h3>
                                <p className="text-xs md:text-sm text-green-700 font-medium mb-2 md:mb-3">Últimos 2 Años de Operación</p>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    Mientras la industria enfrenta tasas de siniestralidad críticas, nosotros mantenemos un estándar impecable que reduce sus costos de mutualidad.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Grid of Benefits (2 columns) */}
                <div className="lg:col-span-2 grid grid-cols-1 gap-4 md:gap-6">
                    <motion.div
                        className="bg-slate-50 p-5 md:p-6 rounded-xl border-l-4 border-proteo-blue hover:shadow-lg transition-all group"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <Award className="w-6 md:w-7 h-6 md:h-7 text-proteo-blue group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold text-slate-800 text-base md:text-lg">Mejora Continua</h3>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            En proceso de certificacion  <strong className="text-proteo-blue">ISO 9001, 14001 y 45001</strong>. Nuestro objetivo es mejorar continuamente nuestros procesos y cumplir con los estándares más altos de calidad y seguridad.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-slate-50 p-5 md:p-6 rounded-xl border-l-4 border-proteo-orange hover:shadow-lg transition-all group"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <Shield className="w-6 md:w-7 h-6 md:h-7 text-proteo-orange group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold text-slate-800 text-base md:text-lg">Bienestar del Equipo</h3>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Priorizamos la <strong className="text-proteo-orange">seguridad y salud</strong> de nuestros buzos. Un equipo protegido y cuidado es sinónimo de operaciones sin fallas.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-slate-50 p-5 md:p-6 rounded-xl border-l-4 border-cyan-500 hover:shadow-lg transition-all group"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <Wind className="w-6 md:w-7 h-6 md:h-7 text-cyan-500 group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold text-slate-800 text-base md:text-lg">Tecnología Avanzada</h3>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            <strong className="text-cyan-600">Bancos de Aire y Nitrox</strong> para máxima seguridad y eficiencia. Eliminamos riesgos de CO y extendemos tiempo de fondo.
                        </p>
                    </motion.div>
                </div>

            </div>
        </SlideWrapper>
    );
}
