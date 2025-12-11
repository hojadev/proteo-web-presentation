"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface MobileSlideContainerProps {
    children: React.ReactNode;
}

export default function MobileSlideContainer({ children }: MobileSlideContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const [visibleSlides, setVisibleSlides] = useState<Set<number>>(new Set([0]));

    // Track which slides are visible for lazy loading
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const slideIndex = parseInt(entry.target.getAttribute('data-slide-index') || '0');
                    if (entry.isIntersecting) {
                        setVisibleSlides(prev => new Set([...prev, slideIndex]));
                    }
                });
            },
            { threshold: 0.1 }
        );

        const slides = containerRef.current?.querySelectorAll('[data-slide-index]');
        slides?.forEach(slide => observer.observe(slide));

        return () => observer.disconnect();
    }, []);

    return (
        <div ref={containerRef} className="w-full">
            {React.Children.map(children, (child, index) => (
                <motion.div
                    key={index}
                    data-slide-index={index}
                    className="min-h-[100dvh] w-full relative"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{
                        duration: 0.5,
                        ease: [0.25, 0.1, 0.25, 1.0]
                    }}
                >
                    {/* Only render content if slide has been visible at least once */}
                    {visibleSlides.has(index) ? child : (
                        <div className="min-h-[100dvh] w-full flex items-center justify-center bg-slate-50">
                            <div className="text-slate-400">Cargando...</div>
                        </div>
                    )}
                </motion.div>
            ))}
        </div>
    );
}
