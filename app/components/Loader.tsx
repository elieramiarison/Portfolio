"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Loader() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        // let interval: NodeJS.Timeout;
        const interval: NodeJS.Timeout = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(interval);
    }, []);

    const radius = 70;
    const stroke = 10;
    const normalizedRadius = radius - stroke / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset =
        circumference - (progress / 100) * circumference;

    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                background: "#fff",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position: "fixed",
                top: 0,
                left: 0,
                zIndex: 9999,
            }}
        >
            <svg height={radius * 2} width={radius * 2}>
                <circle
                    stroke="#ddd"
                    fill="transparent"
                    strokeWidth={stroke}
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                />
                <motion.circle
                    stroke="#c000b0"
                    fill="transparent"
                    strokeWidth={stroke}
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    r={normalizedRadius}
                    cx={radius}
                    cy={radius}
                    animate={{ strokeDashoffset }}
                    transition={{ duration: 0.2 }}
                />
                <text
                    x="50%"
                    y="50%"
                    dominantBaseline="middle"
                    textAnchor="middle"
                    fill="#c000b0"
                    fontSize="20px"
                    fontWeight="bold"
                >
                    {progress}%
                </text>
            </svg>
        </div>
    );
}
