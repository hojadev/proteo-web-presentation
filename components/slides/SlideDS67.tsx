"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { TrendingDown, ShieldAlert, DollarSign } from "lucide-react";

export default function SlideDS67() {
    return (
        <SlideWrapper className="bg-slate-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-proteo-blue mb-4">
                    El Factor Humano como Ventaja Financiera
                </h2>
                <p className="text-slate-600 max-w-3xl mx-auto">
                    Bajo el D.S. N°67, la seguridad no es un gasto, es una estrategia de ahorro directo en la nómina.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full mx-auto">

                {/* Scenario A: High Risk */}
                <motion.div
                    className="bg-white p-8 rounded-3xl border-2 border-red-100 shadow-lg relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="absolute top-0 right-0 bg-red-100 text-red-600 px-4 py-1 rounded-bl-xl text-xs font-bold uppercase">
                        Escenario Reactivo
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                        <ShieldAlert className="w-10 h-10 text-red-500" />
                        <h3 className="text-2xl font-bold text-slate-800">Alto Riesgo</h3>
                    </div>

                    <div className="mb-6">
                        <p className="text-sm text-slate-500 mb-1">Cotización Adicional (CAD)</p>
                        <p className="text-5xl font-bold text-red-500">2.04%</p>
                        <p className="text-xs text-red-400 mt-2">Sobre Remuneraciones Imponibles</p>
                    </div>

                    <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="text-red-500">•</span> Riesgo de fatalidad por CO.
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="text-red-500">•</span> Alta Tasa de Siniestralidad (TST &gt; 193).
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-600">
                            <span className="text-red-500">•</span> Costos ocultos por reemplazos.
                        </li>
                    </ul>
                </motion.div>

                {/* Scenario B: Proteo Standard */}
                <motion.div
                    className="bg-slate-900 p-8 rounded-3xl border-2 border-proteo-blue shadow-2xl relative overflow-hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-xl text-xs font-bold uppercase">
                        Meta Estratégica
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                        <TrendingDown className="w-10 h-10 text-green-400" />
                        <h3 className="text-2xl font-bold text-white">Ahorro Directo</h3>
                    </div>

                    <div className="mb-6">
                        <p className="text-sm text-slate-400 mb-1">Cotización Adicional (CAD)</p>
                        <p className="text-5xl font-bold text-green-400">0.00%</p>
                        <p className="text-xs text-green-300 mt-2">Exención Total (TST 0-32)</p>
                    </div>

                    <ul className="space-y-3">
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                            <span className="text-green-400">✓</span> Eliminación de riesgo fatal (Bancos de Aire).
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                            <span className="text-green-400">✓</span> Tasa de Siniestralidad Controlada.
                        </li>
                        <li className="flex items-start gap-2 text-sm text-slate-300">
                            <span className="text-green-400">✓</span> Retorno inmediato de inversión.
                        </li>
                    </ul>
                </motion.div>

            </div>

            <div className="mt-12 text-center">
                <div className="inline-flex items-center gap-2 bg-blue-50 px-6 py-3 rounded-full border border-blue-100">
                    <DollarSign className="w-5 h-5 text-proteo-blue" />
                    <p className="text-sm font-medium text-proteo-blue">
                        La prevención paga su propia inversión a través del ahorro tributario recurrente.
                    </p>
                </div>
            </div>
        </SlideWrapper>
    );
}
