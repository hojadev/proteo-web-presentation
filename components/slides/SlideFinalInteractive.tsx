"use client";

import React, { useState } from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Calendar, TrendingDown, DollarSign } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function SlideFinalInteractive() {
    const [annualBudget, setAnnualBudget] = useState(60000000);
    const [contractYears, setContractYears] = useState(3);
    const [useNitrox, setUseNitrox] = useState(false);

    const getDiscount = (years: number) => {
        if (years >= 5) return 0.15;
        if (years >= 3) return 0.10;
        return 0;
    };

    const discount = getDiscount(contractYears);
    const discountedAnnual = annualBudget * (1 - discount);
    const nitroxCost = useNitrox ? discountedAnnual * 0.08 : 0;
    const preventiveAnnual = discountedAnnual + nitroxCost;

    // Reactivo más realista: 1.8x (emergencias + deterioro + riesgos)
    const reactiveAnnual = annualBudget * 1.8;

    const totalPreventive = preventiveAnnual * contractYears;
    const totalReactive = reactiveAnnual * contractYears;
    const totalSavings = totalReactive - totalPreventive;

    const chartData = [
        {
            name: `${contractYears} ${contractYears === 1 ? 'Año' : 'Años'}`,
            Preventivo: totalPreventive / 1000000,
            Reactivo: totalReactive / 1000000
        }
    ];

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0
        }).format(value);
    };

    return (
        <SlideWrapper className="bg-gradient-to-br from-slate-900 via-slate-800 to-proteo-blue">
            <div className="w-full max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-6">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-1 bg-proteo-orange" />
                        <span className="text-xs uppercase tracking-[0.3em] text-proteo-orange font-bold">Proyección</span>
                        <div className="w-12 h-1 bg-proteo-orange" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                        Plan Preventivo Multianual
                    </h2>
                    <p className="text-slate-300 text-sm max-w-2xl mx-auto">
                        Descuentos por contrato a largo plazo vs mantenimiento reactivo
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left: Inputs */}
                    <div className="space-y-4">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
                            <label className="block text-xs font-bold text-white mb-2">
                                Presupuesto Anual Base (CLP)
                            </label>
                            <input
                                type="number"
                                value={annualBudget}
                                onChange={(e) => setAnnualBudget(Number(e.target.value))}
                                className="w-full px-3 py-2 bg-white/20 border-2 border-white/30 rounded-lg text-base font-bold text-white focus:outline-none focus:border-proteo-orange"
                                step="5000000"
                            />
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
                            <label className="block text-xs font-bold text-white mb-2">
                                Años de Contrato (3+ años: descuento)
                            </label>
                            <input
                                type="number"
                                value={contractYears}
                                onChange={(e) => setContractYears(Number(e.target.value))}
                                className="w-full px-3 py-2 bg-white/20 border-2 border-white/30 rounded-lg text-base font-bold text-white focus:outline-none focus:border-proteo-orange"
                                min="1"
                                max="10"
                            />
                            <p className="text-xs text-green-300 mt-1 font-bold">
                                {contractYears >= 5 ? '✓ 15% descuento' : contractYears >= 3 ? '✓ 10% descuento' : 'Sin descuento'}
                            </p>
                        </div>

                        <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-400/30 p-4 rounded-xl">
                            <div className="flex items-center justify-between">
                                <div>
                                    <h3 className="text-sm font-bold text-white">Nitrox (Opcional)</h3>
                                    <p className="text-xs text-slate-300">+8% | Mayor eficiencia</p>
                                </div>
                                <button
                                    onClick={() => setUseNitrox(!useNitrox)}
                                    className={`relative w-12 h-6 rounded-full transition-colors ${useNitrox ? 'bg-green-500' : 'bg-slate-600'
                                        }`}
                                >
                                    <div
                                        className={`absolute top-1 w-4 h-4 bg-white rounded-full shadow-md transition-transform ${useNitrox ? 'translate-x-7' : 'translate-x-1'
                                            }`}
                                    />
                                </button>
                            </div>
                        </div>

                        {/* Results Cards */}
                        <div className="grid grid-cols-3 gap-2">
                            <div className="bg-blue-500/20 backdrop-blur-sm border border-blue-400 p-3 rounded-lg text-center">
                                <Calendar className="w-5 h-5 text-blue-300 mx-auto mb-1" />
                                <p className="text-[10px] text-slate-300 mb-1">Preventivo</p>
                                <p className="text-sm font-bold text-white">{(totalPreventive / 1000000).toFixed(0)}M</p>
                            </div>
                            <div className="bg-orange-500/20 backdrop-blur-sm border border-orange-400 p-3 rounded-lg text-center">
                                <DollarSign className="w-5 h-5 text-orange-300 mx-auto mb-1" />
                                <p className="text-[10px] text-slate-300 mb-1">Reactivo</p>
                                <p className="text-sm font-bold text-white">{(totalReactive / 1000000).toFixed(0)}M</p>
                            </div>
                            <div className="bg-green-500/20 backdrop-blur-sm border border-green-400 p-3 rounded-lg text-center">
                                <TrendingDown className="w-5 h-5 text-green-300 mx-auto mb-1" />
                                <p className="text-[10px] text-slate-300 mb-1">Ahorro</p>
                                <p className="text-sm font-bold text-white">{(totalSavings / 1000000).toFixed(0)}M</p>
                            </div>
                        </div>
                    </div>

                    {/* Right: Chart */}
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-4 rounded-xl">
                        <h3 className="text-base font-bold text-white mb-3 text-center">
                            Comparativa Total
                        </h3>
                        <div className="h-64">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={chartData}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
                                    <XAxis dataKey="name" stroke="#e2e8f0" style={{ fontSize: '12px' }} />
                                    <YAxis stroke="#e2e8f0" style={{ fontSize: '12px' }} />
                                    <Tooltip
                                        contentStyle={{
                                            backgroundColor: '#1e293b',
                                            border: 'none',
                                            borderRadius: '8px',
                                            fontSize: '12px',
                                            color: '#fff'
                                        }}
                                        formatter={(value: number) => [`${value.toFixed(0)}M CLP`, ""]}
                                    />
                                    <Legend />
                                    <Bar dataKey="Preventivo" fill="#3b82f6" radius={[8, 8, 0, 0]} />
                                    <Bar dataKey="Reactivo" fill="#f97316" radius={[8, 8, 0, 0]} />
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                        <p className="text-xs text-center text-slate-300 mt-2">
                            Ahorro total: <strong className="text-green-300">{formatCurrency(totalSavings)}</strong>
                        </p>
                    </div>
                </div>

                {/* Disclaimer */}
                <div className="mt-6 bg-white/10 backdrop-blur-sm border-l-4 border-proteo-orange p-4 rounded-lg">
                    <p className="text-xs text-slate-200 leading-relaxed">
                        <strong className="text-proteo-orange">Nota:</strong> El costo reactivo incluye: visitas de reparación de emergencia,
                        mayor deterioro acelerado de equipos, posibles sanciones de la SMA (Superintendencia del Medio Ambiente),
                        paradas no planificadas y costos de oportunidad por interrupciones operacionales.
                    </p>
                </div>
            </div>
        </SlideWrapper>
    );
}
