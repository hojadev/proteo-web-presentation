import React from "react";
import { cn } from "@/lib/utils";

interface SlideWrapperProps {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export default function SlideWrapper({ children, className, id }: SlideWrapperProps) {
    return (
        <section
            id={id}
            className={cn(
                "w-full flex flex-col justify-center items-center px-8 md:px-20 lg:px-32 py-16 relative",
                "min-h-[100dvh] md:h-[100dvh]",
                className
            )}
        >
            {/* Decorative Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-proteo-blue/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-proteo-orange/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="w-full max-w-[1400px] mx-auto flex flex-col justify-center relative z-10">
                {children}
            </div>
        </section>
    );
}
