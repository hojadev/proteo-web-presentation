"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Zap, Clock, TrendingUp } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from "recharts";

const data = [
    { name: "Outsourcing Reactivo", time: 24, color: "#94a3b8" },
    { name: "Proteo (Preventivo)", time: 4, color: "#f97316" },
];

export default function SlideNitroxResponse() {
    return (
        <SlideWrapper className="bg-white relative">
            {/* Decorative Circles */}
            <div className="absolute top-10 left-10 w-32 h-32 border-2 border-proteo-blue/10 rounded-full pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-40 h-40 border-2 border-proteo-orange/10 rounded-full pointer-events-none" />
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-proteo-accent/5 rounded-full blur-2xl pointer-events-none" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl relative z-10">
                {/* Nitrox Section */}
                <motion.div
                    className="bg-gradient-to-br from-blue-50 to-cyan-50 p-10 rounded-3xl shadow-xl border-2 border-blue-100 flex flex-col justify-center relative overflow-hidden"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="absolute -top-16 -right-16 w-48 h-48 bg-blue-100/30 rounded-full" />

                    <div className="flex items-center gap-4 mb-8 relative z-10">
                        <div className="bg-white p-4 rounded-xl shadow-md">
                            <Zap className="w-10 h-10 text-proteo-accent" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-slate-800">El Factor Nitrox</h3>
                            <span className="text-sm text-proteo-orange bg-orange-100 px-3 py-1 rounded-full font-bold">OPCIONAL</span>
                        </div>
                    </div>

                    <p className="text-slate-700 leading-relaxed mb-8 text-lg relative z-10">
                        El uso de Nitrox extiende el <strong className="text-proteo-blue">Límite Sin Descompresión (LND)</strong>, permitiendo más tiempo efectivo de fondo para inspecciones detalladas.
                    </p>

                    <div className="space-y-4 relative z-10">
                        <div className="bg-white p-5 rounded-xl border-l-4 border-proteo-accent shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-bold text-slate-600">Tiempo de Fondo</span>
                                <TrendingUp className="w-5 h-5 text-green-500" />
                            </div>
                            <p className="text-2xl font-bold text-proteo-blue">+40% Mayor</p>
                            <p className="text-xs text-slate-500 mt-1">vs. Aire Convencional</p>
                        </div>

                        <div className="bg-white p-5 rounded-xl border-l-4 border-green-500 shadow-sm">
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-sm font-bold text-slate-600">Fatiga del Buzo</span>
                                <TrendingUp className="w-5 h-5 text-green-500" />
                            </div>
                            <p className="text-2xl font-bold text-green-600">-30% Reducción</p>
                            <p className="text-xs text-slate-500 mt-1">Mayor precisión técnica</p>
                        </div>
                    </div>

                    <div className="bg-slate-800 p-5 rounded-xl mt-6 relative z-10">
                        <p className="text-sm font-medium text-slate-200 italic">
                            "Menor fatiga = Mayor precisión técnica = <span className="text-proteo-orange font-bold">Aumento del MTBF</span> de sus activos."
                        </p>
                    </div>
                </motion.div>

                {/* Response Time Chart */}
                <motion.div
                    className="bg-gradient-to-br from-slate-50 to-slate-100 p-10 rounded-3xl shadow-xl border-2 border-slate-200 relative overflow-hidden"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-orange-100/30 rounded-full" />

                    <div className="flex items-center gap-4 mb-8 relative z-10">
                        <div className="bg-white p-4 rounded-xl shadow-md">
                            <Clock className="w-10 h-10 text-proteo-orange" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-slate-800">Tiempo de Respuesta</h3>
                            <p className="text-sm text-slate-500">Horas promedio ante incidentes críticos</p>
                        </div>
                    </div>

                    <div className="h-72 w-full mb-6 relative z-10">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                                <XAxis type="number" hide />
                                <YAxis dataKey="name" type="category" width={180} tick={{ fontSize: 13, fill: '#64748B', fontWeight: 600 }} />
                                <Tooltip
                                    cursor={{ fill: 'transparent' }}
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', padding: '12px' }}
                                    formatter={(value: number) => [`${value} horas`, "Tiempo"]}
                                />
                                <Bar dataKey="time" radius={[0, 12, 12, 0]} barSize={50}>
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-proteo-orange/10 p-5 rounded-xl border-l-4 border-proteo-orange relative z-10">
                        <p className="text-sm font-bold text-slate-800 mb-2">Ventaja Competitiva</p>
                        <p className="text-2xl font-bold text-proteo-orange">6x Más Rápido</p>
                        <p className="text-xs text-slate-600 mt-2">*Tiempo estimado basado en disponibilidad inmediata vs coordinación externa.</p>
                    </div>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
