"use client";

import React, { useState } from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell } from "recharts";

export default function SlideFinalInteractive() {
    const [mounted, setMounted] = useState(false);
    const [activeView, setActiveView] = useState<"daily" | "projection">("daily");
    const [projectionPeriod, setProjectionPeriod] = useState<"12" | "36" | "60">("12");

    React.useEffect(() => {
        setMounted(true);
    }, []);

    // Daily Comparison Data
    const dailyData = [
        {
            name: "Plan Diario",
            value: 5285000,
            color: "#ef4444", // Red - Expensive
            description: "Contratación por mantencion reactiva, día único",
            savings: 0
        },
        {
            name: "Plan Quincenal",
            value: 4678000,
            color: "#f97316", // Orange - Middle
            description: "Contratacion plan quincenal",
            savings: 11.5
        },
        {
            name: "Plan Mensual",
            value: 3255000,
            color: "#10b981", // Green - Best
            description: "Contratacion plan mensual",
            savings: 38.4
        }
    ];

    // Projection Data Generation
    const generateProjectionData = (months: number) => {
        const data = [];
        const dailyMonthlyCost = 5285000;
        const fortnightlyMonthlyCost = 4678000;
        const monthlyMonthlyCost = 3255000;

        // Determine step based on total months
        // 12 months -> step 1 (monthly)
        // 36/60 months -> step 12 (yearly)
        const step = months > 12 ? 12 : 1;

        for (let i = 0; i <= months; i += step) {
            let label = '';
            if (i === 0) label = 'Inicio';
            else if (months > 12) label = `Año ${i / 12}`;
            else label = `Mes ${i}`;

            data.push({
                month: label,
                PlanDiario: dailyMonthlyCost * i,
                PlanQuincenal: fortnightlyMonthlyCost * i,
                PlanMensual: monthlyMonthlyCost * i,
            });
        }
        return data;
    };

    const projectionData = generateProjectionData(Number(projectionPeriod));

    const formatCurrency = (value: number) => {
        return new Intl.NumberFormat('es-CL', {
            style: 'currency',
            currency: 'CLP',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0
        }).format(value);
    };

    const formatCompactCurrency = (value: number) => {
        if (value >= 1000000) {
            return `$${(value / 1000000).toFixed(0)}M`;
        }
        return `$${(value / 1000).toFixed(0)}k`;
    };

    const CustomTooltip = ({ active, payload, label }: any) => {
        if (active && payload && payload.length) {
            if (activeView === "daily") {
                const dataPoint = payload[0].payload;
                return (
                    <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl">
                        <p className="text-white font-bold mb-1">{label}</p>
                        <p className="text-2xl font-bold text-white mb-2">
                            {formatCurrency(dataPoint.value)}
                        </p>
                        <p className="text-xs text-slate-400 mb-2">
                            {dataPoint.description}
                        </p>
                        {dataPoint.savings > 0 && (
                            <div className="bg-green-500/20 text-green-400 px-2 py-1 rounded text-xs font-bold inline-block">
                                Ahorro: {dataPoint.savings}%
                            </div>
                        )}
                    </div>
                );
            } else {
                return (
                    <div className="bg-slate-900 border border-slate-700 p-4 rounded-xl shadow-xl">
                        <p className="text-white font-bold mb-2">{label}</p>
                        <div className="space-y-2">
                            <p className="text-[#ef4444] font-bold text-sm">
                                Plan Diario: {formatCurrency(payload[0].value)}
                            </p>
                            <p className="text-[#f97316] font-bold text-sm">
                                Plan Quincenal: {formatCurrency(payload[1].value)}
                            </p>
                            <p className="text-[#10b981] font-bold text-sm">
                                Plan Mensual: {formatCurrency(payload[2].value)}
                            </p>
                            <div className="pt-2 border-t border-slate-700 mt-2">
                                <p className="text-xs text-slate-400 mb-1">Diferencia Acumulada:</p>
                                <p className="text-white font-bold text-sm">
                                    vs Quincenal: <span className="text-orange-400">{formatCurrency(payload[0].value - payload[1].value)}</span>
                                </p>
                                <p className="text-white font-bold text-sm">
                                    vs Mensual: <span className="text-green-400">{formatCurrency(payload[0].value - payload[2].value)}</span>
                                </p>
                            </div>
                        </div>
                    </div>
                );
            }
        }
        return null;
    };

    if (!mounted) return null;

    return (
        <SlideWrapper className="bg-gradient-to-br from-slate-900 via-slate-800 to-proteo-blue">
            <div className="w-full max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="w-12 h-1 bg-proteo-orange" />
                        <span className="text-xs uppercase tracking-[0.3em] text-proteo-orange font-bold">
                            {activeView === "daily" ? "Comparativa de Costos" : "Proyección de Ahorro"}
                        </span>
                        <div className="w-12 h-1 bg-proteo-orange" />
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                        {activeView === "daily" ? "Comparativa Planes" : "Valor en el Tiempo"}
                    </h2>

                    {/* Main Toggle */}
                    <div className="flex justify-center mb-6">
                        <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-full flex relative shadow-inner border border-white/20">
                            <motion.div
                                className="absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full shadow-md z-0 bg-proteo-orange"
                                animate={{ left: activeView === "daily" ? "6px" : "50%" }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            />
                            <button
                                onClick={() => setActiveView("daily")}
                                className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors w-40 ${activeView === "daily" ? "text-white" : "text-slate-300"}`}
                            >
                                Valor Diario
                            </button>
                            <button
                                onClick={() => setActiveView("projection")}
                                className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors w-40 ${activeView === "projection" ? "text-white" : "text-slate-300"}`}
                            >
                                Proyección
                            </button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] lg:grid-cols-[1fr_300px] gap-4 md:gap-6 lg:gap-8 items-center">
                    {/* Chart Area */}
                    <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-4 md:p-6 rounded-2xl h-[350px] md:h-[400px] lg:h-[450px] relative">
                        {activeView === "projection" && (
                            <div className="absolute top-6 right-6 z-10 flex gap-2">
                                <button
                                    onClick={() => setProjectionPeriod("12")}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors border ${projectionPeriod === "12"
                                        ? "bg-proteo-blue border-proteo-blue text-white"
                                        : "bg-transparent border-slate-600 text-slate-400 hover:border-slate-400"
                                        }`}
                                >
                                    1 Año
                                </button>
                                <button
                                    onClick={() => setProjectionPeriod("36")}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors border ${projectionPeriod === "36"
                                        ? "bg-proteo-blue border-proteo-blue text-white"
                                        : "bg-transparent border-slate-600 text-slate-400 hover:border-slate-400"
                                        }`}
                                >
                                    3 Años
                                </button>
                                <button
                                    onClick={() => setProjectionPeriod("60")}
                                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors border ${projectionPeriod === "60"
                                        ? "bg-proteo-blue border-proteo-blue text-white"
                                        : "bg-transparent border-slate-600 text-slate-400 hover:border-slate-400"
                                        }`}
                                >
                                    5 Años
                                </button>
                            </div>
                        )}

                        <ResponsiveContainer width="100%" height="100%">
                            {activeView === "daily" ? (
                                <BarChart data={dailyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                    <XAxis
                                        dataKey="name"
                                        stroke="#94a3b8"
                                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <YAxis
                                        stroke="#94a3b8"
                                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                                        axisLine={false}
                                        tickLine={false}
                                        tickFormatter={(value) => `$${value / 1000000}M`}
                                    />
                                    <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(255,255,255,0.05)' }} />
                                    <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                                        {dailyData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            ) : (
                                <LineChart data={projectionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" vertical={false} />
                                    <XAxis
                                        dataKey="month"
                                        stroke="#94a3b8"
                                        tick={{ fill: '#94a3b8', fontSize: 10 }}
                                        axisLine={false}
                                        tickLine={false}
                                    // Removed interval prop to let Recharts handle it or show all points since we have fewer now
                                    />
                                    <YAxis
                                        stroke="#94a3b8"
                                        tick={{ fill: '#94a3b8', fontSize: 12 }}
                                        axisLine={false}
                                        tickLine={false}
                                        tickFormatter={formatCompactCurrency}
                                    />
                                    <Tooltip content={<CustomTooltip />} />
                                    <Legend wrapperStyle={{ paddingTop: '20px' }} />
                                    <Line
                                        type="monotone"
                                        dataKey="PlanDiario"
                                        name="Plan Diario"
                                        stroke="#ef4444"
                                        strokeWidth={3}
                                        dot={{ r: 4, strokeWidth: 2 }}
                                        activeDot={{ r: 6 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="PlanQuincenal"
                                        name="Plan Quincenal"
                                        stroke="#f97316"
                                        strokeWidth={3}
                                        dot={{ r: 4, strokeWidth: 2 }}
                                        activeDot={{ r: 6 }}
                                    />
                                    <Line
                                        type="monotone"
                                        dataKey="PlanMensual"
                                        name="Plan Mensual"
                                        stroke="#10b981"
                                        strokeWidth={3}
                                        dot={{ r: 4, strokeWidth: 2 }}
                                        activeDot={{ r: 6 }}
                                    />
                                </LineChart>
                            )}
                        </ResponsiveContainer>
                    </div>

                    {/* Legend / Details */}
                    <div className="space-y-4">
                        {activeView === "daily" ? (
                            <>
                                {dailyData.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="bg-white/5 border border-white/10 p-4 rounded-xl hover:bg-white/10 transition-colors group"
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                                                <span className="text-sm font-bold text-white">{item.name}</span>
                                            </div>
                                            {item.savings > 0 && (
                                                <span className="text-xs font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded">
                                                    -{item.savings}%
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-2xl font-bold text-white mb-1">
                                            {formatCurrency(item.value)}
                                        </p>
                                        <p className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                ))}
                                <div className="mt-6 p-4 bg-proteo-blue/30 rounded-xl border border-proteo-blue/50">
                                    <p className="text-sm text-center text-blue-200">
                                        <strong className="text-white">Insight:</strong> Contratar mensualmente reduce el costo en un <strong className="text-green-400">38%</strong>.
                                    </p>
                                </div>
                            </>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="bg-slate-900/50 border border-slate-700 p-6 rounded-xl"
                            >
                                <h3 className="text-lg font-bold text-white mb-4">Proyección {projectionPeriod} Meses</h3>

                                <div className="space-y-4">
                                    <div>
                                        <p className="text-xs text-slate-400 mb-1">Costo Plan Diario</p>
                                        <p className="text-lg font-bold text-[#ef4444]">
                                            {formatCompactCurrency(projectionData[projectionData.length - 1].PlanDiario)}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-400 mb-1">Costo Plan Quincenal</p>
                                        <p className="text-lg font-bold text-[#f97316]">
                                            {formatCompactCurrency(projectionData[projectionData.length - 1].PlanQuincenal)}
                                        </p>
                                    </div>

                                    <div>
                                        <p className="text-xs text-slate-400 mb-1">Costo Plan Mensual</p>
                                        <p className="text-lg font-bold text-[#10b981]">
                                            {formatCompactCurrency(projectionData[projectionData.length - 1].PlanMensual)}
                                        </p>
                                    </div>

                                    <div className="pt-4 border-t border-slate-700">
                                        <p className="text-sm text-slate-300 mb-1">Ahorro Máximo Proyectado</p>
                                        <p className="text-2xl font-bold text-white">
                                            {formatCompactCurrency(projectionData[projectionData.length - 1].PlanDiario - projectionData[projectionData.length - 1].PlanMensual)}
                                        </p>
                                        <p className="text-xs text-green-400 mt-1">
                                            Eligiendo Plan Mensual vs Diario
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </SlideWrapper>
    );
}
