"use client";

import React, { useState } from "react";
import SlideWrapper from "../SlideWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, Zap, Heart, TrendingUp, ChevronLeft, ChevronRight } from "lucide-react";
import Bubbles from "../Bubbles";

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
        <SlideWrapper className="bg-gradient-to-br from-slate-50 to-cyan-50 relative overflow-hidden">
            {/* Subtle water-themed background */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
                {/* Wavy lines */}
                <svg className="absolute bottom-0 w-full h-64" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="currentColor" className="text-cyan-300" fillOpacity="0.3" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,144C960,149,1056,139,1152,128C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                    <path fill="currentColor" className="text-blue-200" fillOpacity="0.2" d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>

                {/* Rising bubbles animation */}


                {/* Rising bubbles animation */}
                <Bubbles />
            </div>

            <div className="w-full max-w-5xl mx-auto relative z-10">
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

                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-proteo-blue mb-4">
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
                    className="mt-10 bg-gradient-to-r from-slate-800 via-cyan-900 to-slate-800 p-6 md:p-8 rounded-2xl text-white text-center relative overflow-hidden"
                >
                    {/* Decorative background elements */}
                    <div className="absolute inset-0 opacity-10">
                        <div className="absolute top-0 left-1/4 w-32 h-32 bg-cyan-400 rounded-full blur-3xl" />
                        <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-blue-500 rounded-full blur-3xl" />
                    </div>

                    {/* Subtle wave pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                            <pattern id="wave" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                                <path d="M0 20 Q10 10, 20 20 T40 20" fill="none" stroke="white" strokeWidth="0.5" />
                            </pattern>
                            <rect width="100%" height="100%" fill="url(#wave)" />
                        </svg>
                    </div>

                    <p className="text-lg leading-relaxed max-w-3xl mx-auto relative z-10">
                        Nitrox permite completar tareas complejas con mayor eficiencia y menor fatiga,
                        disponible según los requerimientos específicos de cada proyecto.
                    </p>
                </motion.div>
            </div>
        </SlideWrapper>
    );
}
