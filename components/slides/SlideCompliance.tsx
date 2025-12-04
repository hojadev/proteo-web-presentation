"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Users } from "lucide-react";

const cards = [
    {
        title: "Fidelidad Operativa",
        icon: ShieldCheck,
        highlight: "Cero Incidentes",
        text: "Dos años de operaciones sin accidentes. Un estándar que reduce el riesgo legal y los costos de mutualidad.",
        color: "text-proteo-orange",
    },
    {
        title: "Cumplimiento Normativo",
        icon: FileCheck,
        highlight: "Certificación ISO",
        text: "Prospección a largo plazo. Nuestra organización es su socio estratégico en la gestión de riesgos.",
        color: "text-proteo-accent",
    },
    {
        title: "Foco Humano",
        icon: Users,
        highlight: "Cultura Preventiva",
        text: "Organización con foco en colaboradores: Un equipo cuidado es un activo sin fallas. Alineados con la cultura Agrosuper.",
        color: "text-blue-400",
    },
];

export default function SlideCompliance() {
    return (
        <SlideWrapper className="bg-slate-50">
            <div className="mb-16 text-center">
                <motion.h2
                    className="text-3xl md:text-4xl font-bold text-proteo-blue mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Alta Fidelidad y Cumplimiento
                </motion.h2>
                <motion.div
                    className="h-1 w-24 bg-proteo-orange mx-auto rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: 96 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        className="bg-white p-8 rounded-2xl shadow-xl border border-slate-100 hover:shadow-2xl transition-shadow duration-300 relative overflow-hidden group"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                    >
                        <div className={`absolute top-0 left-0 w-1 h-full ${card.color.replace('text-', 'bg-')}`} />
                        <card.icon className={`w-12 h-12 ${card.color} mb-6`} />
                        <h3 className="text-xl font-bold text-slate-800 mb-2">{card.title}</h3>
                        <p className={`text-2xl font-bold ${card.color} mb-4`}>{card.highlight}</p>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                            {card.text}
                        </p>
                    </motion.div>
                ))}
            </div>
        </SlideWrapper>
    );
}
