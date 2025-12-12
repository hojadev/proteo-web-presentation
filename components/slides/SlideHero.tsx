"use client";

import React from "react";
import SlideWrapper from "../SlideWrapper";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function SlideHero() {
    return (
        <SlideWrapper className="bg-gradient-to-br from-proteo-blue via-[#0a1525] to-black text-white relative overflow-hidden">
            {/* Geometric Pattern Background */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] border border-white/20 rounded-full" />
                <div className="absolute top-10 md:top-20 right-10 md:right-20 w-[300px] md:w-[500px] h-[300px] md:h-[500px] border border-white/10 rounded-full" />
                <div className="absolute bottom-0 left-0 w-[300px] md:w-[400px] h-[300px] md:h-[400px] border border-white/20 rounded-full -translate-x-1/2 translate-y-1/2" />
            </div>

            {/* Diagonal Lines */}
            <div className="absolute inset-0 opacity-5 hidden md:block">
                <div className="absolute top-0 left-1/4 w-px h-full bg-white rotate-12" />
                <div className="absolute top-0 left-1/2 w-px h-full bg-white -rotate-12" />
                <div className="absolute top-0 left-3/4 w-px h-full bg-white rotate-12" />
            </div>

            <div className="relative z-10 max-w-5xl w-full px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-center gap-2 md:gap-3 mb-4 md:mb-6">
                        <div className="w-8 md:w-12 h-1 bg-proteo-orange" />
                        <h2 className="text-proteo-orange font-bold tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm uppercase">
                            Proteo Industrial Diving
                        </h2>
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-6 md:mb-8 tracking-tight">
                        Buceo Industrial para la <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-proteo-accent to-blue-300">
                            Continuidad de su <br className="hidden md:block" />Ecosistema Hídrico
                        </span>
                    </h1>
                    <p className="text-lg md:text-xl lg:text-2xl text-slate-300 font-light max-w-3xl leading-relaxed border-l-4 border-proteo-orange pl-4 md:pl-6">
                        Mantenimiento especializado de maquinaria crítica en entornos de tratamiento de aguas servidas.
                    </p>
                </motion.div>
            </div>

            <motion.div
                className="absolute bottom-8 md:bottom-10 left-1/2 transform -translate-x-1/2 text-slate-400 flex flex-col items-center gap-2 md:gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
            >
                <span className="text-xs uppercase tracking-[0.15em] md:tracking-[0.2em] font-medium">Desliza para descubrir</span>
                <ArrowDown className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
        </SlideWrapper>
    );
}
