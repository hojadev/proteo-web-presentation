"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { ShieldCheck, TrendingDown, Clock, Zap, Award, Target } from "lucide-react";

const metrics = [
    {
        icon: ShieldCheck,
        label: "Tasa de Accidentes",
        value: "0%",
        subtitle: "Últimos 2 años",
        color: "text-green-500",
        bgColor: "bg-green-50"
    },
    {
        icon: TrendingDown,
        label: "Ahorro en Cotización",
        value: "2.04%",
        subtitle: "vs. Alto Riesgo",
        color: "text-blue-500",
        bgColor: "bg-blue-50"
    },
    {
        icon: Clock,
        label: "Tiempo de Respuesta",
        value: "4 Hrs",
        subtitle: "6x más rápido",
        color: "text-proteo-orange",
        bgColor: "bg-orange-50"
    },
    {
        icon: Zap,
        label: "Tiempo de Fondo",
        value: "+40%",
        subtitle: "con Nitrox",
        color: "text-cyan-500",
        bgColor: "bg-cyan-50"
    },
    {
        icon: Award,
        label: "Experiencia Promedio",
        value: "8+ Años",
        subtitle: "Buzos certificados",
        color: "text-purple-500",
        bgColor: "bg-purple-50"
    },
    {
        icon: Target,
        label: "Reducción Fatiga",
        value: "-30%",
        subtitle: "Mayor precisión",
        color: "text-indigo-500",
        bgColor: "bg-indigo-50"
    }
];

export default function SlideClosure() {
    return (
        <SlideWrapper className="bg-gradient-to-br from-slate-900 via-proteo-blue to-slate-900 text-white relative overflow-hidden">
            {/* Decorative Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full" style={{
                    backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(249, 115, 22, 0.3) 0%, transparent 50%)'
                }} />
            </div>

            {/* Grid Pattern */}
            <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
                backgroundSize: '100px 100px'
            }} />

            <div className="relative z-10 w-full">
                <div className="text-center mb-8 md:mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="flex items-center justify-center gap-3 mb-6">
                            <div className="w-16 h-1 bg-proteo-orange" />
                            <span className="text-xs uppercase tracking-[0.3em] text-proteo-orange font-bold">Resumen Ejecutivo</span>
                            <div className="w-16 h-1 bg-proteo-orange" />
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                            Impacto Cuantificable
                        </h2>
                        <p className="text-slate-300 text-lg md:text-xl max-w-3xl mx-auto">
                            Datos concretos que respaldan nuestra propuesta de valor.
                        </p>
                    </motion.div>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">

                    {/* Left: Metrics Grid */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                        {metrics.map((metric, index) => (
                            <motion.div
                                key={index}
                                className={`${metric.bgColor} backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-white/10 hover:border-white/30 transition-all group`}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className={`${metric.color} mb-3 md:mb-4 group-hover:scale-110 transition-transform`}>
                                        <metric.icon className="w-8 h-8 md:w-10 md:h-10" />
                                    </div>
                                    <p className="text-xs text-slate-600 font-medium mb-2">{metric.label}</p>
                                    <p className={`text-2xl md:text-3xl font-bold ${metric.color} mb-1`}>{metric.value}</p>
                                    <p className="text-xs text-slate-500">{metric.subtitle}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Right: Summary & CTA */}
                    <div className="flex flex-col gap-6 md:gap-8">
                        {/* Bottom Summary */}
                        <motion.div
                            className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-6 md:p-8"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.6 }}
                        >
                            <div className="grid grid-cols-1 gap-6 text-center">
                                <div>
                                    <p className="text-proteo-orange font-bold text-sm mb-2 uppercase tracking-wider">Seguridad</p>
                                    <p className="text-3xl md:text-4xl font-bold mb-1">100%</p>
                                    <p className="text-sm text-slate-300">Aire Certificado</p>
                                </div>
                                <div>
                                    <p className="text-blue-400 font-bold text-sm mb-2 uppercase tracking-wider">Eficiencia</p>
                                    <p className="text-3xl md:text-4xl font-bold mb-1">99.8%</p>
                                    <p className="text-sm text-slate-300">Disponibilidad</p>
                                </div>
                                <div>
                                    <p className="text-green-400 font-bold text-sm mb-2 uppercase tracking-wider">Ahorro</p>
                                    <p className="text-3xl md:text-4xl font-bold mb-1">$5.8B</p>
                                    <p className="text-sm text-slate-300">Riesgo Evitado (SMA)</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 1.2, duration: 0.6 }}
                        >
                            <p className="text-xl md:text-2xl font-bold mb-4">
                                Diseñemos juntos la continuidad de 5 años
                            </p>
                            <div className="flex items-center justify-center gap-2 text-proteo-orange">
                                <div className="w-8 h-px bg-proteo-orange" />
                                <span className="text-sm uppercase tracking-widest">Proteo Industrial Diving</span>
                                <div className="w-8 h-px bg-proteo-orange" />
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </SlideWrapper>
    );
}
