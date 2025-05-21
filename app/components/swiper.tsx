'use client'

import { motion, useAnimation } from "framer-motion";
import { useEffect, useCallback } from "react";
import js from "@/public/js.png"
import ts from "@/public/ts.png"
import next from "@/public/next.png"
import node from "@/public/node.png"
import react from "@/public/react.png"

import Image from "next/image";

const skils = [js, ts, node, react, next];

const MyAnimatedCarousel = () => {
    const controls = useAnimation();
    // const [offset, setOffset] = useState(0);
    // const CARD_WIDTH = 220;

    const startAutoScroll = useCallback(() => {
        controls.start({
            x: ["0%", "-100%"],
            transition: {
                duration: 15,
                ease: "linear",
                repeat: Infinity,
            },
        });
    }, [controls]);

    useEffect(() => {
        startAutoScroll();
    }, [startAutoScroll]);

    // const stopAndMove = async (direction: "left" | "right") => {
    //     await controls.stop();

    //     const newOffset = direction === "left"
    //         ? offset + CARD_WIDTH
    //         : offset - CARD_WIDTH;

    //     setOffset(newOffset);

    //     await controls.start({
    //         x: newOffset,
    //         transition: { duration: 0.8 },
    //     });

    //     setTimeout(() => {
    //         setOffset(0);
    //         startAutoScroll();
    //     }, 1000);
    // };

    return (
        <div className="p-5 relative">
            <div className="overflow-hidden lg:w-[50rem] md:w-[40rem] sm:w-[30rem] w-[20rem] relative z-0 mx-auto">
                <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-[#0a0a0afa] to-transparent z-10 pointer-events-none" />

                <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-[#0a0a0afa] to-transparent z-10 pointer-events-none" />

                <motion.div
                    animate={controls}
                >
                    <div className="flex gap-4 z-0">
                        {[...skils, ...skils].map((skill, index) => (
                            <div
                                key={index}
                                className="min-w-[200px] p-4 text-center text-white"
                            >
                                <Image src={skill} alt="logo" width={200} height={200} className="opacity-80" />
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default MyAnimatedCarousel;
