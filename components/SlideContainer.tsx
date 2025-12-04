"use client";

import React, { useState, useEffect } from "react";
import DesktopSlideContainer from "./DesktopSlideContainer";
import MobileSlideContainer from "./MobileSlideContainer";

interface SlideContainerProps {
    children: React.ReactNode;
}

export default function SlideContainer({ children }: SlideContainerProps) {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Show loading state while detecting viewport
    if (isMobile === null) {
        return (
            <div className="h-screen w-full flex items-center justify-center bg-slate-900">
                <div className="text-white text-lg">Cargando presentación...</div>
            </div>
        );
    }

    // Render appropriate container based on viewport
    return isMobile ? (
        <MobileSlideContainer>{children}</MobileSlideContainer>
    ) : (
        <DesktopSlideContainer>{children}</DesktopSlideContainer>
    );
}
