"use client";

import React, { useEffect, useState } from "react";

export default function Bubbles() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <>
            {/* Multiple bubbles with different sizes, positions, and speeds */}
            <div className="bubble" style={{ left: '5%', width: '8px', height: '8px', animationDuration: '8s', animationDelay: '0s' }} />
            <div className="bubble" style={{ left: '15%', width: '12px', height: '12px', animationDuration: '10s', animationDelay: '2s' }} />
            <div className="bubble" style={{ left: '25%', width: '6px', height: '6px', animationDuration: '7s', animationDelay: '1s' }} />
            <div className="bubble" style={{ left: '35%', width: '10px', height: '10px', animationDuration: '9s', animationDelay: '3s' }} />
            <div className="bubble" style={{ left: '45%', width: '7px', height: '7px', animationDuration: '8.5s', animationDelay: '0.5s' }} />
            <div className="bubble" style={{ left: '55%', width: '11px', height: '11px', animationDuration: '11s', animationDelay: '4s' }} />
            <div className="bubble" style={{ left: '65%', width: '9px', height: '9px', animationDuration: '9.5s', animationDelay: '1.5s' }} />
            <div className="bubble" style={{ left: '75%', width: '8px', height: '8px', animationDuration: '8s', animationDelay: '2.5s' }} />
            <div className="bubble" style={{ left: '85%', width: '13px', height: '13px', animationDuration: '12s', animationDelay: '3.5s' }} />
            <div className="bubble" style={{ left: '95%', width: '7px', height: '7px', animationDuration: '7.5s', animationDelay: '0.8s' }} />

            {/* More bubbles for density */}
            <div className="bubble" style={{ left: '10%', width: '5px', height: '5px', animationDuration: '6s', animationDelay: '4.5s' }} />
            <div className="bubble" style={{ left: '20%', width: '9px', height: '9px', animationDuration: '9s', animationDelay: '5s' }} />
            <div className="bubble" style={{ left: '30%', width: '11px', height: '11px', animationDuration: '10.5s', animationDelay: '1.2s' }} />
            <div className="bubble" style={{ left: '40%', width: '6px', height: '6px', animationDuration: '7s', animationDelay: '3.8s' }} />
            <div className="bubble" style={{ left: '50%', width: '10px', height: '10px', animationDuration: '9.5s', animationDelay: '2.2s' }} />
            <div className="bubble" style={{ left: '60%', width: '8px', height: '8px', animationDuration: '8.5s', animationDelay: '4.2s' }} />
            <div className="bubble" style={{ left: '70%', width: '12px', height: '12px', animationDuration: '11s', animationDelay: '0.3s' }} />
            <div className="bubble" style={{ left: '80%', width: '7px', height: '7px', animationDuration: '7.5s', animationDelay: '5.5s' }} />
            <div className="bubble" style={{ left: '90%', width: '9px', height: '9px', animationDuration: '9s', animationDelay: '1.8s' }} />
        </>
    );
}
