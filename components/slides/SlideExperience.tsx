"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { ShieldCheck, Award, Users, TrendingDown } from "lucide-react";

export default function SlideExperience() {
    return (
        <SlideWrapper className="bg-white">
            {/* Geometric Accent Lines */}
            <div className="absolute top-0 left-0 w-1 h-32 bg-gradient-to-b from-proteo-orange to-transparent" />
            <div className="absolute bottom-0 right-0 w-1 h-32 bg-gradient-to-t from-proteo-blue to-transparent" />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center w-full">

                {/* Left: Main Narrative (3 columns) */}
                <motion.div
                    className="lg:col-span-3"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-16 h-1 bg-proteo-orange" />
                        <span className="text-xs uppercase tracking-[0.3em] text-proteo-orange font-bold">Inicio</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-proteo-blue mb-8 leading-[1.1]">
                        Experiencia y <br />
                        <span className="text-proteo-orange">Alta Fidelidad</span>
                    </h2>
                    <p className="text-xl text-slate-600 mb-12 leading-relaxed max-w-2xl">
                        Un equipo experto con foco en el colaborador. Nuestra operación se traduce en seguridad financiera y continuidad para Agrosuper.
                    </p>

                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg border-l-4 border-green-500 relative overflow-hidden">
                        {/* Decorative Circle */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 bg-green-100/50 rounded-full" />

                        <div className="flex items-start gap-6 relative z-10">
                            <div className="bg-white p-4 rounded-xl shadow-md">
                                <ShieldCheck className="w-10 h-10 text-green-600" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-2xl font-bold text-slate-800 mb-2">Cero Accidentes</h3>
                                <p className="text-sm text-green-700 font-medium mb-3">Últimos 2 Años de Operación</p>
                                <p className="text-sm text-slate-700 leading-relaxed">
                                    Mientras la industria enfrenta tasas de siniestralidad críticas, nosotros mantenemos un estándar impecable que reduce sus costos de mutualidad.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right: Grid of Benefits (2 columns) */}
                <div className="lg:col-span-2 grid grid-cols-1 gap-6">
                    <motion.div
                        className="bg-slate-50 p-6 rounded-xl border-l-4 border-proteo-blue hover:shadow-lg transition-all group"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <Award className="w-7 h-7 text-proteo-blue group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold text-slate-800 text-lg">Cumplimiento ISO</h3>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Estándares internacionales que permiten una <strong className="text-proteo-blue">prospección a largo plazo</strong>. Somos su socio estratégico en gestión de riesgos.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-slate-50 p-6 rounded-xl border-l-4 border-proteo-orange hover:shadow-lg transition-all group"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <Users className="w-7 h-7 text-proteo-orange group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold text-slate-800 text-lg">Foco en Colaboradores</h3>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Una organización centrada en las personas. Un equipo cuidado y capacitado es un activo operativo sin fallas.
                        </p>
                    </motion.div>

                    <motion.div
                        className="bg-slate-50 p-6 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-all group"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <TrendingDown className="w-7 h-7 text-green-500 group-hover:scale-110 transition-transform" />
                            <h3 className="font-bold text-slate-800 text-lg">Eficiencia de Costos</h3>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">
                            Menor siniestralidad = Menores costos en mutuales. La seguridad paga su propia inversión.
                        </p>
                    </motion.div>
                </div>

            </div>
        </SlideWrapper>
    );
}
