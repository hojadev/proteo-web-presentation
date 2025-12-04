"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface DesktopSlideContainerProps {
    children: React.ReactNode;
}

export default function DesktopSlideContainer({ children }: DesktopSlideContainerProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = React.Children.count(children);
    const containerRef = useRef<HTMLDivElement>(null);

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown" && currentSlide < totalSlides - 1) {
                setCurrentSlide((prev) => prev + 1);
            } else if (e.key === "ArrowUp" && currentSlide > 0) {
                setCurrentSlide((prev) => prev - 1);
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [currentSlide, totalSlides]);

    // Mouse wheel navigation
    useEffect(() => {
        let isScrolling = false;
        const handleWheel = (e: WheelEvent) => {
            if (isScrolling) return;
            isScrolling = true;

            if (e.deltaY > 0 && currentSlide < totalSlides - 1) {
                setCurrentSlide((prev) => prev + 1);
            } else if (e.deltaY < 0 && currentSlide > 0) {
                setCurrentSlide((prev) => prev - 1);
            }

            setTimeout(() => {
                isScrolling = false;
            }, 800);
        };

        window.addEventListener("wheel", handleWheel, { passive: true });
        return () => window.removeEventListener("wheel", handleWheel);
    }, [currentSlide, totalSlides]);

    return (
        <div className="h-screen w-full overflow-hidden relative" ref={containerRef}>
            <motion.div
                className="h-full w-full"
                initial={false}
                animate={{ y: `-${currentSlide * 100}%` }}
                transition={{
                    type: "spring",
                    stiffness: 60,
                    damping: 25,
                    mass: 0.8,
                    restDelta: 0.001
                }}
            >
                {React.Children.map(children, (child, index) => (
                    <motion.div
                        key={index}
                        className="h-screen w-full relative"
                        initial={{ opacity: 0.3, scale: 0.95 }}
                        animate={{
                            opacity: currentSlide === index ? 1 : 0.3,
                            scale: currentSlide === index ? 1 : 0.95,
                            filter: currentSlide === index ? "blur(0px)" : "blur(2px)"
                        }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        {child}
                    </motion.div>
                ))}
            </motion.div>

            {/* Navigation Dots */}
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-3 z-50">
                {Array.from({ length: totalSlides }).map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentSlide(idx)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === idx
                                ? "bg-proteo-orange scale-125"
                                : "bg-proteo-muted/30 hover:bg-proteo-muted/60"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
