"use client";

import React, { useState } from "react";
import SlideWrapper from "../SlideWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Zap, Heart, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";

const advantages = [
    {
        icon: Clock,
        title: "Mayor Tiempo de Fondo",
        description: "Menor contenido de nitrógeno permite prolongar inmersiones sin aumentar riesgo de descompresión. Más tiempo productivo en cada inmersión.",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: Zap,
        title: "Ciclo de Buceo Acelerado",
        description: "Menor carga de nitrógeno reduce el tiempo de espera entre inmersiones. Nuestro equipo puede realizar la siguiente inmersión más rápido.",
        color: "from-orange-500 to-yellow-500"
    },
    {
        icon: Heart,
        title: "Menor Fatiga",
        description: "Reducción de fatiga durante y después de inmersiones. Mejor recuperación cuando se requieren múltiples inmersiones en un día.",
        color: "from-red-500 to-pink-500"
    },
    {
        icon: TrendingUp,
        title: "Mayor Concentración",
        description: "Menor fatiga mantiene la concentración del buzo. Calidad constante en tareas complejas durante jornadas largas.",
        color: "from-purple-500 to-indigo-500"
    }
];

export default function SlideNitroxResponse() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextCard = () => {
        setCurrentIndex((prev) => (prev + 1) % advantages.length);
    };

    const prevCard = () => {
        setCurrentIndex((prev) => (prev - 1 + advantages.length) % advantages.length);
    };

    const currentCard = advantages[currentIndex];

    return (
        <SlideWrapper className="bg-gradient-to-br from-slate-50 to-cyan-50">
            <div className="w-full max-w-5xl mx-auto">
                {/* Header with Optional Badge */}
                <div className="text-center mb-10 md:mb-12">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full text-sm font-bold mb-6 shadow-lg"
                    >
                        SERVICIO OPCIONAL
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-bold text-proteo-blue mb-4">
                        Nitrox (EANx 32-36%)
                    </h2>
                    <p className="text-slate-600 text-lg max-w-3xl mx-auto">
                        Aire enriquecido que optimiza el rendimiento del equipo de buceo
                    </p>
                </div>

                {/* Carousel Container */}
                <div className="relative">
                    {/* Main Card */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            exit={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                            transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mx-auto max-w-2xl"
                        >
                            <div className={`w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br ${currentCard.color} flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                                <currentCard.icon className="w-10 h-10 md:w-12 md:h-12 text-white" />
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4 text-center">
                                {currentCard.title}
                            </h3>

                            <p className="text-slate-600 text-center leading-relaxed text-lg">
                                {currentCard.description}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={prevCard}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-slate-100 transition-all group"
                        aria-label="Previous"
                    >
                        <ChevronLeft className="w-6 h-6 text-slate-600 group-hover:text-proteo-blue" />
                    </button>

                    <button
                        onClick={nextCard}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white rounded-full p-3 shadow-lg hover:bg-slate-100 transition-all group"
                        aria-label="Next"
                    >
                        <ChevronRight className="w-6 h-6 text-slate-600 group-hover:text-proteo-blue" />
                    </button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 mt-8">
                    {advantages.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                    ? 'bg-proteo-blue w-8'
                                    : 'bg-slate-300 hover:bg-slate-400'
                                }`}
                            aria-label={`Go to card ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Bottom Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-10 bg-slate-800 p-6 md:p-8 rounded-2xl text-white text-center"
                >
                    <p className="text-lg leading-relaxed max-w-3xl mx-auto">
                        Nitrox permite completar tareas complejas con mayor eficiencia y menor fatiga,
                        disponible según los requerimientos específicos de cada proyecto.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
