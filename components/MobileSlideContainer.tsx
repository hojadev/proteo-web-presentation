"use client";

import React from "react";

interface MobileSlideContainerProps {
    children: React.ReactNode;
}

export default function MobileSlideContainer({ children }: MobileSlideContainerProps) {
    return (
        <div className="w-full">
            {React.Children.map(children, (child, index) => (
                <div key={index} className="w-full">
                    {child}
                </div>
            ))}
        </div>
    );
}
