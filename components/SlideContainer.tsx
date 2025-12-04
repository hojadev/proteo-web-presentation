"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface SlideContainerProps {
    children: React.ReactNode[];
}

export default function SlideContainer({ children }: SlideContainerProps) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const totalSlides = React.Children.count(children);
    const [isScrolling, setIsScrolling] = useState(false);

    const nextSlide = useCallback(() => {
        if (currentSlide < totalSlides - 1) {
            setCurrentSlide((prev) => prev + 1);
        }
    }, [currentSlide, totalSlides]);

    const prevSlide = useCallback(() => {
        if (currentSlide > 0) {
            setCurrentSlide((prev) => prev - 1);
        }
    }, [currentSlide]);

    // Keyboard Navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowDown") nextSlide();
            if (e.key === "ArrowUp") prevSlide();
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [nextSlide, prevSlide]);

    // Wheel Navigation (Debounced)
    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (isScrolling) return;

            if (e.deltaY > 50) {
                nextSlide();
                setIsScrolling(true);
                setTimeout(() => setIsScrolling(false), 1000);
            } else if (e.deltaY < -50) {
                prevSlide();
                setIsScrolling(true);
                setTimeout(() => setIsScrolling(false), 1000);
            }
        };
        window.addEventListener("wheel", handleWheel);
        return () => window.removeEventListener("wheel", handleWheel);
    }, [nextSlide, prevSlide, isScrolling]);

    // Touch Navigation
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.targetTouches[0].clientY);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientY);
    };

    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > 50;
        const isRightSwipe = distance < -50;

        if (isLeftSwipe) nextSlide();
        if (isRightSwipe) prevSlide();

        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <div
            className="h-screen w-screen overflow-hidden bg-background text-foreground relative"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <motion.div
                className="h-full w-full"
                initial={false}
                animate={{ y: `-${currentSlide * 100}%` }}
                transition={{ type: "spring", stiffness: 50, damping: 20, mass: 1 }}
            >
                {React.Children.map(children, (child, index) => (
                    <div key={index} className="h-screen w-full relative">
                        {child}
                    </div>
                ))}
            </motion.div>

            {/* Navigation Dots */}
            <div className="fixed right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-50">
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
