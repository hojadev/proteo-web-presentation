"use client";

import React, { useState } from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { TrendingUp, AlertTriangle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function SlideMTBF() {
    const [mtbfScenario, setMtbfScenario] = useState<"reactive" | "preventive">("reactive");

    const reactiveData = [
        { month: "Mes 1", mtbf: 150 },
        { month: "Mes 3", mtbf: 180 },
        { month: "Mes 6", mtbf: 200 },
        { month: "Mes 9", mtbf: 220 },
        { month: "Mes 12", mtbf: 250 }
    ];

    const preventiveData = [
        { month: "Mes 1", mtbf: 300 },
        { month: "Mes 3", mtbf: 450 },
        { month: "Mes 6", mtbf: 650 },
        { month: "Mes 9", mtbf: 900 },
        { month: "Mes 12", mtbf: 1200 }
    ];

    const currentData = mtbfScenario === "reactive" ? reactiveData : preventiveData;

    return (
        <SlideWrapper className="bg-white">
            <div className="w-full max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-16 h-1 bg-proteo-orange" />
                        <span className="text-xs uppercase tracking-[0.3em] text-proteo-orange font-bold">KPI de Confiabilidad</span>
                        <div className="w-16 h-1 bg-proteo-orange" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-proteo-blue mb-4">
                        Tiempo Medio Entre Fallas (MTBF)
                    </h2>
                    <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                        Mayor MTBF = Mayor confiabilidad del activo = Continuidad operacional garantizada
                    </p>
                </div>

                {/* Toggle Scenario */}
                <div className="flex justify-center mb-8">
                    <div className="bg-slate-100 p-1.5 rounded-full flex relative shadow-inner">
                        <motion.div
                            className="absolute top-1.5 bottom-1.5 w-1/2 bg-white rounded-full shadow-md z-0"
                            animate={{ left: mtbfScenario === "reactive" ? "6px" : "50%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        <button
                            onClick={() => setMtbfScenario("reactive")}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors ${mtbfScenario === "reactive" ? "text-proteo-blue" : "text-slate-500"
                                }`}
                        >
                            Escenario Reactivo
                        </button>
                        <button
                            onClick={() => setMtbfScenario("preventive")}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors ${mtbfScenario === "preventive" ? "text-proteo-blue" : "text-slate-500"
                                }`}
                        >
                            Preventivo con Nitrox
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                    {/* Chart */}
                    <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border-2 border-slate-200">
                        <h3 className="text-xl font-bold text-slate-800 mb-4">Proyección MTBF (Horas)</h3>
                        <div className="h-80">
                            <ResponsiveContainer width="100%" height="100%">
                                <LineChart data={currentData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                    <XAxis dataKey="month" stroke="#64748b" />
                                    <YAxis stroke="#64748b" />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Legend />
                                    <Line
                                        type="monotone"
                                        dataKey="mtbf"
                                        stroke={mtbfScenario === "reactive" ? "#ef4444" : "#10b981"}
                                        strokeWidth={3}
                                        name="MTBF (horas)"
                                        dot={{ r: 6 }}
                                    />
                                </LineChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Info Cards */}
                    <div className="space-y-4">
                        {mtbfScenario === "reactive" ? (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-gradient-to-br from-red-50 to-orange-50 p-6 rounded-2xl border-l-4 border-red-500"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <AlertTriangle className="w-6 h-6 text-red-600" />
                                    <h4 className="text-lg font-bold text-slate-800">Mantenimiento Reactivo</h4>
                                </div>
                                <p className="text-sm text-slate-700 mb-4">
                                    Bajo MTBF indica fallas frecuentes. Inspecciones superficiales con aire convencional no detectan problemas a tiempo.
                                </p>
                                <div className="bg-white p-4 rounded-xl">
                                    <p className="text-xs text-slate-600 mb-1">MTBF Proyectado (12 meses)</p>
                                    <p className="text-3xl font-bold text-red-600">250 hrs</p>
                                    <p className="text-xs text-slate-500 mt-2">Riesgo de paradas no planificadas</p>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border-l-4 border-green-500"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <TrendingUp className="w-6 h-6 text-green-600" />
                                    <h4 className="text-lg font-bold text-slate-800">Preventivo con Nitrox</h4>
                                </div>
                                <p className="text-sm text-slate-700 mb-4">
                                    Alto MTBF gracias a inspecciones profundas. Nitrox permite +40% tiempo de fondo para mantenimiento de calidad superior.
                                </p>
                                <div className="bg-white p-4 rounded-xl">
                                    <p className="text-xs text-slate-600 mb-1">MTBF Proyectado (12 meses)</p>
                                    <p className="text-3xl font-bold text-green-600">1,200 hrs</p>
                                    <p className="text-xs text-slate-500 mt-2">+380% vs. Reactivo</p>
                                </div>
                            </motion.div>
                        )}

                        <div className="bg-slate-800 p-6 rounded-2xl text-white">
                            <p className="text-sm font-bold mb-2">Fórmula MTBF</p>
                            <p className="text-xs text-slate-300 mb-3">
                                MTBF = Tiempo total de operación / Número de fallos
                            </p>
                            <p className="text-xs italic text-slate-400">
                                "Mayor MTBF significa menos interrupciones y mayor rentabilidad operativa para Agrosuper."
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
}
