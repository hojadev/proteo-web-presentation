"use client";

import React, { useState } from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { Calendar, AlertTriangle, TrendingUp, Shield, DollarSign, XCircle, Hammer, CloudOff } from "lucide-react";

export default function SlidePreventiveValue() {
    const [activeTab, setActiveTab] = useState<"reactive" | "preventive">("reactive");

    const approaches = {
        reactive: {
            title: "Enfoque Reactivo",
            subtitle: "Actuar cuando falla",
            color: "from-red-500 to-orange-500",
            aspects: [
                {
                    icon: DollarSign,
                    label: "Costos",
                    description: "Reparaciones de emergencia con costos impredecibles. Paradas no planificadas afectan presupuestos."
                },
                {
                    icon: XCircle,
                    label: "Operación",
                    description: "Interrupciones inesperadas del tratamiento de Riles. Riesgo de incumplimiento ambiental."
                },
                {
                    icon: Hammer,
                    label: "Equipos",
                    description: "Desgaste acelerado por falta de mantenimiento. Vida útil reducida de activos críticos."
                },
                {
                    icon: CloudOff,
                    label: "Planificación",
                    description: "Imposible proyectar a largo plazo. Gestión reactiva sin control sobre el futuro."
                }
            ]
        },
        preventive: {
            title: "Enfoque Preventivo",
            subtitle: "Planificar para evitar",
            color: "from-green-500 to-emerald-500",
            aspects: [
                {
                    icon: Calendar,
                    label: "Costos",
                    description: "Presupuesto predecible y controlado. Inversión planificada que evita gastos de emergencia."
                },
                {
                    icon: Shield,
                    label: "Operación",
                    description: "Continuidad operacional garantizada. Cumplimiento ambiental sin interrupciones."
                },
                {
                    icon: TrendingUp,
                    label: "Equipos",
                    description: "Vida útil extendida de activos críticos. Confiabilidad sostenida en el tiempo."
                },
                {
                    icon: Calendar,
                    label: "Planificación",
                    description: "Visión a largo plazo con control total. Socio estratégico en gestión de riesgos."
                }
            ]
        }
    };

    const current = approaches[activeTab];

    return (
        <SlideWrapper className="bg-gradient-to-br from-proteo-blue via-slate-800 to-slate-900">
            <div className="w-full max-w-6xl mx-auto">
                <div className="text-center mb-10 md:mb-12">
                    <div className="flex items-center justify-center gap-3 mb-6">
                        <div className="w-16 h-1 bg-proteo-orange" />
                        <span className="text-xs uppercase tracking-[0.3em] text-proteo-orange font-bold">Valor a Largo Plazo</span>
                        <div className="w-16 h-1 bg-proteo-orange" />
                    </div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                        Dos Enfoques de Mantenimiento
                    </h2>
                    <p className="text-slate-300 text-lg max-w-3xl mx-auto">
                        La diferencia entre reaccionar a problemas o prevenirlos
                    </p>
                </div>

                {/* Toggle */}
                <div className="flex justify-center mb-10">
                    <div className="bg-white/10 backdrop-blur-sm p-1.5 rounded-full flex relative shadow-inner border border-white/20">
                        <motion.div
                            className={`absolute top-1.5 bottom-1.5 w-[calc(50%-6px)] rounded-full shadow-md z-0 bg-gradient-to-r ${current.color}`}
                            animate={{ left: activeTab === "reactive" ? "6px" : "50%" }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                        <button
                            onClick={() => setActiveTab("reactive")}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors ${activeTab === "reactive" ? "text-white" : "text-slate-300"
                                }`}
                        >
                            Reactivo
                        </button>
                        <button
                            onClick={() => setActiveTab("preventive")}
                            className={`relative z-10 px-8 py-3 rounded-full text-sm font-bold transition-colors ${activeTab === "preventive" ? "text-white" : "text-slate-300"
                                }`}
                        >
                            Preventivo
                        </button>
                    </div>
                </div>

                {/* Content */}
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                >
                    <div className="text-center mb-8">
                        <h3 className={`text-3xl font-bold bg-gradient-to-r ${current.color} bg-clip-text text-transparent mb-2`}>
                            {current.title}
                        </h3>
                        <p className="text-slate-300">{current.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {current.aspects.map((aspect, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.1, duration: 0.3 }}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 hover:border-proteo-orange transition-all"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${current.color} flex items-center justify-center shadow-lg`}>
                                        <aspect.icon className="w-5 h-5 text-white" />
                                    </div>
                                    <h4 className="font-bold text-white">{aspect.label}</h4>
                                </div>
                                <p className="text-sm text-slate-200 leading-relaxed">{aspect.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="mt-10 bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-2xl text-white text-center"
                >
                    <h3 className="text-2xl font-bold mb-3 text-proteo-orange">
                        Un Plan Preventivo es una Inversión Estratégica
                    </h3>
                    <p className="text-slate-200 leading-relaxed max-w-3xl mx-auto">
                        Proteo ofrece mantenimiento preventivo planificado que protege sus activos,
                        asegura continuidad operacional y permite proyectar a largo plazo con confianza.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
