"use client";

import React, { useState } from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Shield, AlertTriangle, TrendingDown } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

export default function SlideRiskMitigation() {
    const [contractCost, setContractCost] = useState(80000000); // Default 80M CLP

    const smaFineMax = 5800000000; // 5.8B CLP (7000 UTA)
    const riskReductionFactor = 0.95; // 95% risk reduction

    const data = [
        {
            name: "Inversión Anual",
            value: contractCost,
            label: "Contrato PM"
        },
        {
            name: "Riesgo Evitado",
            value: smaFineMax * riskReductionFactor,
            label: "Multa SMA"
        }
    ];

    const formatCurrency = (value: number) => {
        if (value >= 1000000000) {
            return `$${(value / 1000000000).toFixed(1)}B`;
        }
        return `$${(value / 1000000).toFixed(0)}M`;
    };

    const roi = ((smaFineMax * riskReductionFactor) / contractCost).toFixed(1);

    return (
        <SlideWrapper className="bg-gradient-to-br from-slate-900 via-proteo-blue to-slate-900 text-white">
            <div className="w-full max-w-6xl mx-auto">
                <div className="text-center mb-4 md:mb-6">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-16 h-1 bg-proteo-orange" />
                        <span className="text-xs uppercase tracking-[0.3em] text-proteo-orange font-bold">KPI de Eficiencia Hídrica</span>
                        <div className="w-16 h-1 bg-proteo-orange" />
                    </div>
                    <h2 className="text-xl md:text-3xl font-bold mb-2">
                        Mitigación de Riesgo Ambiental
                    </h2>
                    <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                        Protección contra multas SMA por fallas en tratamiento de Riles
                    </p>
                </div>

                {/* Contract Cost Input */}
                <div className="bg-white/10 backdrop-blur-md p-3 rounded-2xl border border-white/20 mb-4 max-w-md mx-auto">
                    <label className="block text-sm font-bold mb-1">
                        Costo Anual del Contrato PM (CLP)
                    </label>
                    <input
                        type="number"
                        value={contractCost}
                        onChange={(e) => setContractCost(Number(e.target.value))}
                        className="w-full px-4 py-3 bg-white/20 border-2 border-white/30 rounded-xl text-lg font-bold text-white focus:outline-none focus:border-proteo-orange transition-colors"
                        step="10000000"
                    />
                    <p className="text-xs text-slate-300 mt-2">Ajuste para ver el ROI de la inversión</p>
                </div>

                {/* Chart */}
                <div className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 mb-8">
                    <h3 className="text-xl font-bold mb-6 text-center">Inversión vs. Riesgo Evitado</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data}>
                                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                <XAxis dataKey="name" stroke="#e2e8f0" />
                                <YAxis stroke="#e2e8f0" tickFormatter={formatCurrency} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: '#1e293b',
                                        border: 'none',
                                        borderRadius: '12px',
                                        color: '#fff'
                                    }}
                                    formatter={(value: number) => [formatCurrency(value), "Valor"]}
                                />
                                <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                                    <Cell fill="#10b981" />
                                    <Cell fill="#f97316" />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                {/* ROI Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-green-500 to-emerald-600 p-3 text-center rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <Shield className="w-7 h-7" />
                            <h4 className="text-lg font-bold">Inversión Anual</h4>
                        </div>
                        <p className="text-4xl font-bold mb-2">{formatCurrency(contractCost)}</p>
                        <p className="text-sm opacity-90">Contrato PM Preventivo</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-gradient-to-br from-red-500 to-orange-600 p-3 text-center rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <AlertTriangle className="w-7 h-7" />
                            <h4 className="text-lg font-bold">Riesgo Máximo</h4>
                        </div>
                        <p className="text-4xl font-bold mb-2">$5.8B</p>
                        <p className="text-sm opacity-90">Multa SMA (7,000 UTA)</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="bg-gradient-to-br from-blue-500 to-cyan-600 p-3 text-center rounded-2xl"
                    >
                        <div className="flex items-center gap-3 mb-3">
                            <TrendingDown className="w-7 h-7" />
                            <h4 className="text-lg font-bold">ROI de Protección</h4>
                        </div>
                        <p className="text-4xl font-bold mb-2">{roi}x</p>
                        <p className="text-sm opacity-90">Retorno de Inversión</p>
                    </motion.div>
                </div>

                {/* Bottom Info */}
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-2 mt-8">
                    <p className="text-center text-lg font-bold mb-3">
                        La inversión en PM es una <span className="text-proteo-orange">póliza de seguro operacional</span>
                    </p>
                    <p className="text-center text-sm text-slate-300 max-w-3xl mx-auto">
                        La confiabilidad de los equipos sumergidos es la base del tratamiento de Riles.
                        Un mantenimiento deficiente puede llevar a fallas, derrames o malos olores, activando multas de la SMA.
                        Nuestro servicio avanzado protege a Agrosuper de este costo reputacional y financiero.
                    </p>
                </div>
            </div>
        </SlideWrapper>
    );
}
