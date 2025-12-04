"use client";

import React, { useState, useMemo } from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

export default function SlideSavings() {
    const [downtimeHours, setDowntimeHours] = useState(48); // Default 48 hours

    const data = useMemo(() => {
        // Base cost for preventive maintenance (flat)
        const preventiveBase = 50000;
        // Reactive cost scales heavily with downtime hours
        // Assuming $5000 per hour of downtime + base reactive repair cost
        const hourlyCost = 5000;
        const reactiveBase = 20000;

        return [
            { month: "Ene", Preventivo: preventiveBase, Reactivo: reactiveBase + (downtimeHours * 0.1 * hourlyCost) },
            { month: "Mar", Preventivo: preventiveBase, Reactivo: reactiveBase + (downtimeHours * 0.8 * hourlyCost) }, // Crisis peak
            { month: "May", Preventivo: preventiveBase, Reactivo: reactiveBase + (downtimeHours * 0.2 * hourlyCost) },
            { month: "Jul", Preventivo: preventiveBase, Reactivo: reactiveBase + (downtimeHours * 0.1 * hourlyCost) },
            { month: "Sep", Preventivo: preventiveBase, Reactivo: reactiveBase + (downtimeHours * 0.9 * hourlyCost) }, // Crisis peak
            { month: "Nov", Preventivo: preventiveBase, Reactivo: reactiveBase + (downtimeHours * 0.15 * hourlyCost) },
        ];
    }, [downtimeHours]);

    return (
        <SlideWrapper className="bg-white">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-proteo-blue mb-2">
                    Prevención que Garantiza la Producción
                </h2>
                <p className="text-slate-500">Visualice el impacto financiero de la inactividad.</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center w-full max-w-6xl">
                {/* Controls */}
                <div className="w-full lg:w-1/3 bg-slate-50 p-8 rounded-2xl border border-slate-200">
                    <label className="block text-sm font-bold text-slate-700 mb-4">
                        Horas de Inactividad de Planta al Año
                    </label>
                    <div className="flex items-center gap-4 mb-2">
                        <input
                            type="number"
                            value={downtimeHours}
                            onChange={(e) => setDowntimeHours(Number(e.target.value))}
                            className="w-full p-4 text-2xl font-bold text-proteo-blue border border-slate-300 rounded-xl focus:ring-2 focus:ring-proteo-orange focus:border-transparent outline-none transition-all"
                        />
                        <span className="text-slate-400 font-medium">Hrs</span>
                    </div>
                    <input
                        type="range"
                        min="0"
                        max="200"
                        value={downtimeHours}
                        onChange={(e) => setDowntimeHours(Number(e.target.value))}
                        className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-proteo-orange"
                    />
                    <p className="text-xs text-slate-400 mt-4 leading-relaxed">
                        Ajuste las horas para simular el costo real de las paradas no planificadas frente a nuestro modelo de mantenimiento continuo.
                    </p>
                </div>

                {/* Chart */}
                <div className="w-full lg:w-2/3 h-[400px] bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} dy={10} />
                            <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} tickFormatter={(value) => `$${value / 1000}k`} />
                            <Tooltip
                                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
                            />
                            <Legend verticalAlign="top" height={36} iconType="circle" />
                            <Line
                                type="monotone"
                                dataKey="Reactivo"
                                name="Reactivo / Bajo Estándar"
                                stroke="#ef4444"
                                strokeWidth={3}
                                dot={{ r: 4, fill: '#ef4444' }}
                                activeDot={{ r: 8 }}
                            />
                            <Line
                                type="monotone"
                                dataKey="Preventivo"
                                name="Servicio Proteo"
                                stroke="#0ea5e9"
                                strokeWidth={3}
                                dot={{ r: 4, fill: '#0ea5e9' }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </SlideWrapper>
    );
}
