"use client";

import React, { useState, useMemo } from "react";
import SlideWrapper from "../SlideWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Calculator, ArrowRight } from "lucide-react";

export default function SlideFinalInteractive() {
    const [accidents, setAccidents] = useState<string>("");
    const [downtime, setDowntime] = useState<string>("");
    const [showGraph, setShowGraph] = useState(false);

    const data = useMemo(() => {
        if (!showGraph) return [];

        const acc = Number(accidents) || 0;
        const down = Number(downtime) || 0;

        // Base preventive cost (flat)
        const preventiveBase = 50;

        // Reactive cost calculation
        // Each accident adds a huge spike
        // Downtime adds linear cost
        const reactiveBase = 80;
        const accidentCost = acc * 50; // Arbitrary high cost per accident
        const downtimeCost = down * 2; // Cost per hour

        return [
            { month: "Ene", Preventivo: preventiveBase, Reactivo: reactiveBase + (downtimeCost * 0.1) },
            { month: "Mar", Preventivo: preventiveBase, Reactivo: reactiveBase + (downtimeCost * 0.5) + (accidentCost * 0.5) }, // Crisis
            { month: "May", Preventivo: preventiveBase, Reactivo: reactiveBase + (downtimeCost * 0.2) },
            { month: "Jul", Preventivo: preventiveBase, Reactivo: reactiveBase + (downtimeCost * 0.1) },
            { month: "Sep", Preventivo: preventiveBase, Reactivo: reactiveBase + (downtimeCost * 0.8) + (accidentCost * 0.5) }, // Crisis
            { month: "Nov", Preventivo: preventiveBase, Reactivo: reactiveBase + (downtimeCost * 0.15) },
        ];
    }, [showGraph, accidents, downtime]);

    return (
        <SlideWrapper className="bg-slate-900 text-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    Productividad y Eficiencia
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Mantener el sistema productivo funcionando el mayor tiempo posible. Calcule el impacto real.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-12 items-center w-full max-w-6xl">

                {/* Input Section */}
                <div className="w-full lg:w-1/3 bg-slate-800 p-8 rounded-2xl border border-slate-700">
                    <div className="flex items-center gap-2 mb-6 text-proteo-orange">
                        <Calculator className="w-6 h-6" />
                        <span className="font-bold uppercase tracking-widest text-sm">Calculadora de Impacto</span>
                    </div>

                    <div className="space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-slate-300 mb-2">
                                Accidentes / Incidentes (Año)
                            </label>
                            <input
                                type="number"
                                placeholder="0"
                                value={accidents}
                                onChange={(e) => setAccidents(e.target.value)}
                                className="w-full bg-slate-900 border border-slate-600 rounded-xl p-4 text-white focus:border-proteo-orange outline-none transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-slate-300 mb-2">
                                Horas de No Operabilidad (Año)
                            </label>
                            <input
                                type="number"
                                placeholder="0"
                                value={downtime}
                                onChange={(e) => setDowntime(e.target.value)}
                                className="w-full bg-slate-900 border border-slate-600 rounded-xl p-4 text-white focus:border-proteo-orange outline-none transition-colors"
                            />
                        </div>

                        <button
                            onClick={() => setShowGraph(true)}
                            className="w-full bg-proteo-orange hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors flex items-center justify-center gap-2"
                        >
                            Calcular Impacto <ArrowRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                {/* Graph Section (Reveal) */}
                <div className="w-full lg:w-2/3 h-[400px] bg-white rounded-2xl p-4 relative overflow-hidden flex items-center justify-center">
                    <AnimatePresence>
                        {!showGraph ? (
                            <motion.div
                                className="text-center"
                                exit={{ opacity: 0, scale: 0.8 }}
                            >
                                <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Calculator className="w-10 h-10 text-slate-300" />
                                </div>
                                <p className="text-slate-400 font-medium">Ingrese los datos para revelar la proyección</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                className="w-full h-full"
                                initial={{ opacity: 0, filter: "blur(10px)" }}
                                animate={{ opacity: 1, filter: "blur(0px)" }}
                                transition={{ duration: 0.8 }}
                            >
                                <ResponsiveContainer width="100%" height="100%">
                                    <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 10 }}>
                                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                        <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} dy={10} />
                                        <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8' }} tickFormatter={(val) => `$${val}k`} />
                                        <Tooltip
                                            contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                                        />
                                        <Legend verticalAlign="top" height={36} />
                                        <Line
                                            type="monotone"
                                            dataKey="Reactivo"
                                            name="Costo Reactivo (Crisis)"
                                            stroke="#ef4444"
                                            strokeWidth={3}
                                            dot={{ r: 4, fill: '#ef4444' }}
                                            activeDot={{ r: 8 }}
                                        />
                                        <Line
                                            type="monotone"
                                            dataKey="Preventivo"
                                            name="Modelo Proteo"
                                            stroke="#0ea5e9"
                                            strokeWidth={3}
                                            dot={{ r: 4, fill: '#0ea5e9' }}
                                        />
                                    </LineChart>
                                </ResponsiveContainer>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </SlideWrapper>
    );
}
