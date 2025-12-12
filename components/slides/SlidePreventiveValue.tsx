"use client";

import React, { useState } from "react";
import SlideWrapper from "../SlideWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, AlertTriangle, TrendingUp, Shield, DollarSign, XCircle, Hammer, CloudOff } from "lucide-react";

export default function SlidePreventiveValue() {
    const [activeTab, setActiveTab] = useState<"reactive" | "preventive">("reactive");

    const aspects = [
        {
            title: "Costos",
            reactive: "Reparaciones de emergencia con costos impredecibles.",
            preventive: "Presupuesto predecible y controlado.",
            iconReactive: DollarSign,
            iconPreventive: TrendingUp
        },
        {
            title: "Operación",
            reactive: "Interrupciones inesperadas. Riesgo de incumplimiento.",
            preventive: "Continuidad garantizada. Cumplimiento asegurado.",
            iconReactive: XCircle,
            iconPreventive: Shield
        },
        {
            title: "Equipos",
            reactive: "Desgaste acelerado. Vida útil reducida.",
            preventive: "Vida útil extendida. Confiabilidad sostenida.",
            iconReactive: Hammer,
            iconPreventive: Calendar
        },
        {
            title: "Planificación",
            reactive: "Gestión reactiva sin control sobre el futuro.",
            preventive: "Visión a largo plazo con control total.",
            iconReactive: CloudOff,
            iconPreventive: TrendingUp
        }
    ];

    return (
        <SlideWrapper className="bg-gradient-to-br from-proteo-blue via-slate-800 to-slate-900">
            <div className="w-full max-w-6xl mx-auto relative z-10 flex flex-col h-full justify-center">
                {/* Header */}
                <div className="text-center mb-6 md:mb-8">
                    <div className="flex items-center justify-center gap-3 mb-3 md:mb-4">
                        <div className="w-12 md:w-16 h-1 bg-proteo-orange" />
                        <span className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-proteo-orange font-bold">Valor a Largo Plazo</span>
                        <div className="w-12 md:w-16 h-1 bg-proteo-orange" />
                    </div>
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-3">
                        Dos Enfoques de Mantenimiento
                    </h2>
                    <p className="text-slate-300 text-sm md:text-base lg:text-lg max-w-3xl mx-auto">
                        Cambie la incertidumbre de la falla por la seguridad de la planificación
                    </p>
                </div>

                {/* Toggle */}
                <div className="flex justify-center mb-6 md:mb-8 lg:mb-10">
                    <div className="bg-slate-800/50 backdrop-blur-sm p-1 md:p-1.5 rounded-full flex relative border border-slate-700">
                        <motion.div
                            layout
                            className="absolute bg-gradient-to-r from-proteo-orange to-red-500 rounded-full shadow-lg"
                            initial={false}
                            animate={{
                                x: activeTab === "reactive" ? 0 : "100%",
                                width: "50%"
                            }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                            style={{ top: 4, bottom: 4, left: 4 }}
                        />
                        <button
                            onClick={() => setActiveTab("reactive")}
                            className={`relative z-10 px-6 md:px-10 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold transition-colors ${activeTab === "reactive" ? "text-white" : "text-slate-400 hover:text-white"
                                }`}
                        >
                            Enfoque Reactivo
                        </button>
                        <button
                            onClick={() => setActiveTab("preventive")}
                            className={`relative z-10 px-6 md:px-10 py-2 md:py-3 rounded-full text-xs md:text-sm font-bold transition-colors ${activeTab === "preventive" ? "text-white" : "text-slate-400 hover:text-white"
                                }`}
                        >
                            Enfoque Preventivo
                        </button>
                    </div>
                </div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
                    <AnimatePresence mode="wait">
                        {aspects.map((aspect, index) => (
                            <motion.div
                                key={aspect.title + activeTab}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ delay: index * 0.1, duration: 0.4 }}
                                className={`p-4 md:p-6 rounded-xl md:rounded-2xl border backdrop-blur-sm transition-all ${activeTab === "preventive"
                                    ? "bg-emerald-900/20 border-emerald-500/30 hover:border-emerald-500/50"
                                    : "bg-red-900/10 border-red-500/30 hover:border-red-500/50"
                                    }`}
                            >
                                <div className="flex items-start gap-3 md:gap-4">
                                    <div className={`p-2 md:p-3 rounded-lg md:rounded-xl shrink-0 ${activeTab === "preventive" ? "bg-emerald-500/20 text-emerald-400" : "bg-red-500/20 text-red-400"
                                        }`}>
                                        {activeTab === "preventive" ? <aspect.iconPreventive className="w-5 h-5 md:w-6 md:h-6" /> : <aspect.iconReactive className="w-5 h-5 md:w-6 md:h-6" />}
                                    </div>
                                    <div>
                                        <h3 className={`text-base md:text-lg font-bold mb-1 md:mb-2 ${activeTab === "preventive" ? "text-emerald-400" : "text-red-400"
                                            }`}>
                                            {aspect.title}
                                        </h3>
                                        <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                                            {activeTab === "preventive" ? aspect.preventive : aspect.reactive}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>

                {/* Bottom Insight */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 md:mt-8 lg:mt-10 text-center"
                >
                    <p className={`text-base md:text-lg font-medium ${activeTab === "preventive" ? "text-emerald-400" : "text-red-400"}`}>
                        {activeTab === "preventive"
                            ? "Resultado: Control total de costos y continuidad operativa garantizada."
                            : "Resultado: Incertidumbre financiera y riesgo crítico de detención de planta."}
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
