"use client";

import React, { useState } from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { DollarSign, Shield } from "lucide-react";

export default function SlideTST() {
    const [payroll, setPayroll] = useState(50000000); // Default 50M CLP

    const tstLevels = [
        { range: "0 - 32", tst: 16, cad: 0.00, label: "Meta (Proteo)", color: "green" },
        { range: "65 - 96", tst: 80, cad: 0.68, label: "Riesgo Medio", color: "yellow" },
        { range: "193 - 224", tst: 208, cad: 2.04, label: "Riesgo Alto", color: "red" }
    ];

    const calculateCost = (cadPercent: number) => {
        return (payroll * cadPercent) / 100;
    };

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', minimumFractionDigits: 0 }).format(value);
    };

    return (
        <SlideWrapper className="bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="w-full max-w-6xl mx-auto">
                <div className="text-center mb-8 md:mb-12">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-16 h-1 bg-proteo-orange" />
                        <span className="text-xs uppercase tracking-[0.3em] text-proteo-orange font-bold">KPI de Seguridad</span>
                        <div className="w-16 h-1 bg-proteo-orange" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-proteo-blue mb-4">
                        Tasa de Siniestralidad Total (TST)
                    </h2>
                    <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                        Seguridad humana = Ahorro directo en cotización adicional diferenciada (D.S. N°67)
                    </p>
                </div>

                {/* Payroll Input */}
                <div className="bg-white p-6 rounded-2xl shadow-lg mb-8 max-w-md mx-auto">
                    <label className="block text-sm font-bold text-slate-700 mb-3">
                        Nómina Anual Estimada (CLP)
                    </label>
                    <input
                        type="number"
                        value={payroll}
                        onChange={(e) => setPayroll(Number(e.target.value))}
                        className="w-full px-4 py-3 border-2 border-slate-300 rounded-xl text-lg font-bold text-proteo-blue focus:outline-none focus:border-proteo-orange transition-colors"
                        step="1000000"
                    />
                    <p className="text-xs text-slate-500 mt-2">Ajuste para ver el impacto monetario</p>
                </div>

                {/* TST Table */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                    <table className="w-full">
                        <thead className="bg-proteo-blue text-white">
                            <tr>
                                <th className="px-4 md:px-6 py-4 text-left text-sm font-bold">Rango TST</th>
                                <th className="px-4 md:px-6 py-4 text-left text-sm font-bold">CAD (%)</th>
                                <th className="px-4 md:px-6 py-4 text-left text-sm font-bold">Costo Anual</th>
                                <th className="px-4 md:px-6 py-4 text-left text-sm font-bold">Estado</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tstLevels.map((level, index) => {
                                const cost = calculateCost(level.cad);
                                const savings = calculateCost(2.04) - cost;

                                return (
                                    <motion.tr
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`border-b border-slate-200 ${level.color === "green" ? "bg-green-50" :
                                                level.color === "yellow" ? "bg-yellow-50" :
                                                    "bg-red-50"
                                            }`}
                                    >
                                        <td className="px-4 md:px-6 py-4 font-bold text-slate-800">{level.range}</td>
                                        <td className="px-4 md:px-6 py-4">
                                            <span className={`text-lg font-bold ${level.color === "green" ? "text-green-600" :
                                                    level.color === "yellow" ? "text-yellow-600" :
                                                        "text-red-600"
                                                }`}>
                                                {level.cad.toFixed(2)}%
                                            </span>
                                        </td>
                                        <td className="px-4 md:px-6 py-4">
                                            <span className="text-lg font-bold text-slate-800">
                                                {formatCurrency(cost)}
                                            </span>
                                        </td>
                                        <td className="px-4 md:px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-bold ${level.color === "green" ? "bg-green-200 text-green-800" :
                                                    level.color === "yellow" ? "bg-yellow-200 text-yellow-800" :
                                                        "bg-red-200 text-red-800"
                                                }`}>
                                                {level.label}
                                            </span>
                                        </td>
                                    </motion.tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>

                {/* Savings Highlight */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-6 rounded-2xl text-white">
                        <div className="flex items-center gap-3 mb-3">
                            <Shield className="w-8 h-8" />
                            <h4 className="text-lg font-bold">Proteo: TST 0-32</h4>
                        </div>
                        <p className="text-3xl font-bold mb-2">{formatCurrency(calculateCost(0.00))}</p>
                        <p className="text-sm opacity-90">Costo Anual (CAD 0.00%)</p>
                        <p className="text-xs mt-3 bg-white/20 p-3 rounded-lg">
                            Bancos de Aire eliminan riesgo de CO, manteniendo TSIM en cero.
                        </p>
                    </div>

                    <div className="bg-gradient-to-br from-proteo-orange to-red-500 p-6 rounded-2xl text-white">
                        <div className="flex items-center gap-3 mb-3">
                            <DollarSign className="w-8 h-8" />
                            <h4 className="text-lg font-bold">Ahorro vs. Riesgo Alto</h4>
                        </div>
                        <p className="text-3xl font-bold mb-2">{formatCurrency(calculateCost(2.04) - calculateCost(0.00))}</p>
                        <p className="text-sm opacity-90">Ahorro Anual Proyectado</p>
                        <p className="text-xs mt-3 bg-white/20 p-3 rounded-lg">
                            La seguridad paga su propia inversión.
                        </p>
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
}
