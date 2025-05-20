"use client"
import { useEffect, useState } from 'react';

export default function MouseFollower() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div
            className="pointer-events-none fixed top-0 left-0 z-[9999] w-10 h-10 rounded-full bg-[#fff]/85 backdrop-blur-2xl transform -translate-x-1/2 -translate-y-1/2 transition-transform duration-75"
            style={{
                transform: `translate(${position.x}px, ${position.y}px)`
            }}
        ></div>
    );
}
