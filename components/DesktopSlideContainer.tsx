"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface DesktopSlideContainerProps {
    children: React.ReactNode;
}

export default function DesktopSlideContainer({ children }: DesktopSlideContainerProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const totalSlides = React.Children.count(children);
    const [visibleSlides, setVisibleSlides] = useState<Set<number>>(new Set([0]));

    // Smooth scroll behavior with snap to nearest slide
    useEffect(() => {
        const findNearestSlide = (direction: 'up' | 'down'): HTMLElement | null => {
            const slides = containerRef.current?.querySelectorAll('[data-slide-index]');
            if (!slides) return null;

            const viewportCenter = window.scrollY + window.innerHeight / 2;
            const slideArray = Array.from(slides) as HTMLElement[];

            if (direction === 'down') {
                // Find first slide below current position
                for (const slide of slideArray) {
                    const rect = slide.getBoundingClientRect();
                    const slideTop = window.scrollY + rect.top;
                    const slideCenter = slideTop + rect.height / 2;

                    if (slideCenter > viewportCenter + 100) {
                        return slide;
                    }
                }
            } else {
                // Find last slide above current position
                for (let i = slideArray.length - 1; i >= 0; i--) {
                    const slide = slideArray[i];
                    const rect = slide.getBoundingClientRect();
                    const slideTop = window.scrollY + rect.top;
                    const slideCenter = slideTop + rect.height / 2;

                    if (slideCenter < viewportCenter - 100) {
                        return slide;
                    }
                }
            }

            return null;
        };

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown") {
                e.preventDefault();
                const targetSlide = findNearestSlide('down');
                targetSlide?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            } else if (e.key === "ArrowUp") {
                e.preventDefault();
                const targetSlide = findNearestSlide('up');
                targetSlide?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

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
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.25, 0.1, 0.25, 1.0] // Smooth easing
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

            {/* Navigation Dots */}
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => {
                            const slideElement = document.querySelector(`[data-slide-index="${idx}"]`);
                            slideElement?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="w-3 h-3 rounded-full transition-all duration-300 bg-proteo-muted/30 hover:bg-proteo-orange hover:scale-125"
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
