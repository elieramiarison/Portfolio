"use client"

import html from "../../public/html.svg"
import css from "../../public/css.svg"
import js from "../../public/js.svg"
import tailwind from "../../public/tailwind.svg"
import react from "../../public/react.svg"
import next from "../../public/next.svg"
import node from "../../public/node js.svg"
import express from "../../public/express.svg"
import ts from "../../public/ts.svg"
import php from "../../public/php.svg"
import postgres from "../../public/postrgres.png"
import prisma from "../../public/prism.svg"
import mongo from "../../public/mongodb.svg"
import mysql from "../../public/mysql.svg"
import git from "../../public/git.svg"
import github from "../../public/github.svg"
import docker from "../../public/docker.svg"
import postman from "../../public/postman.svg"
import figma from "../../public/figma.png"
import Image from "next/image"
import { useState } from "react"
import AnimatedSection1 from "../animation/animationdif"


const Skils = () => {
    const [front_, setFront_] = useState(true)
    const [back, setBack] = useState(false)
    const [db, setDb] = useState(false)
    const [outil, setOutil] = useState(false)
    const front = ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React JS", "Next JS"]
    const iconFront = [html, css, js, tailwind, react, next]
    const iconBack = [node, express, ts, php]
    const iconBd = [mongo, mysql, postgres, prisma]
    const iconOutils = [git, github, docker, postman, figma]
    const backend = ["Node JS", "Express JS", "TypeScript", "PHP"]
    const bd = ["MongoDB", "MySQL", "Postgres SQL", "Prisma"]
    const outils = ["Git", "GitHub", "Docker", "Postman", "Figma"]

    const handleFront = () => {
        setBack(false)
        setDb(false)
        setFront_(true)
        setOutil(false)
    }

    const handleBack = () => {
        setBack(true)
        setDb(false)
        setFront_(false)
        setOutil(false)
    }

    const handleDb = () => {
        setBack(false)
        setDb(true)
        setFront_(false)
        setOutil(false)
    }

    const handleOutils = () => {
        setBack(false)
        setDb(false)
        setFront_(false)
        setOutil(true)
    }

    return (
        <section id="skils">
            <div className="flex flex-col justify-center items-center gap-7 text-center py-24 text-white">
                <AnimatedSection1 delay={0.3}>
                    <h1 className="text-3xl font-bold">COMPETENCES</h1>
                </AnimatedSection1>
                <AnimatedSection1 delay={0.6}>
                    <div className="flex lg:gap-8 md:gap-8 sm:gap-5 gap-5">
                        <button
                            className={`relative py-1 cursor-pointer transition-colors duration-300 lg:text-base md:text-base sm:text-base text-sm ${front_ ? 'text-[#c000b0]' : 'text-white'
                                }`}
                            onClick={handleFront}
                        >
                            Frontend

                            <span
                                className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[#c000b0] to-[#4a0a9d] transition-all duration-300 ease-in-out ${front_ ? 'w-full' : 'w-0'
                                    }`}
                            ></span>
                        </button>

                        <button
                            className={`relative py-1 cursor-pointer transition-colors duration-300 lg:text-base md:text-base sm:text-base text-sm ${back ? 'text-[#c000b0]' : 'text-white'
                                }`}
                            onClick={handleBack}
                        >
                            Backend

                            <span
                                className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[#c000b0] to-[#4a0a9d] transition-all duration-300 ease-in-out ${back ? 'w-full' : 'w-0'
                                    }`}
                            ></span>
                        </button>

                        <button
                            className={`relative py-1 cursor-pointer transition-colors duration-300 lg:text-base md:text-base sm:text-base text-sm ${db ? 'text-[#c000b0]' : 'text-white'
                                }`}
                            onClick={handleDb}
                        >
                            Base des données

                            <span
                                className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[#c000b0] to-[#4a0a9d] transition-all duration-300 ease-in-out ${db ? 'w-full' : 'w-0'
                                    }`}
                            ></span>
                        </button>

                        <button
                            className={`relative py-1 cursor-pointer transition-colors duration-300 lg:text-base md:text-base sm:text-base text-sm ${outil ? 'text-[#c000b0]' : 'text-white'
                                }`}
                            onClick={handleOutils}
                        >
                            Outils

                            <span
                                className={`absolute left-0 bottom-0 h-[2px] bg-gradient-to-r from-[#c000b0] to-[#4a0a9d] transition-all duration-300 ease-in-out ${outil ? 'w-full' : 'w-0'
                                    }`}
                            ></span>
                        </button>
                    </div>
                </AnimatedSection1>

                <AnimatedSection1 delay={0.6}>
                    <div>

                        {front_ && (
                            <>
                                <h1 className="p-4 font-bold">FRONTEND</h1>
                                <div className="flex flex-wrap justify-center gap-8 w-full p-4 rounded-lg">

                                    {
                                        front.map((item, index) => (
                                            <div key={index} className="flex flex-col justify-center items-center gap-1 backdrop-blur-3xl bg-[#4a0a9d]/70 w-[9rem] h-[9rem] rounded-lg">
                                                <Image src={iconFront[index]} alt={item} width={70} height={70} />
                                                <h1>{item}</h1>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        )}


                        {back && (
                            <>
                                <h1 className="p-4 font-bold">BACKEND</h1>
                                <div className="flex flex-wrap justify-center gap-8 w-full p-4 rounded-lg">
                                    {
                                        backend.map((item, index) => (
                                            <div key={index} className="flex flex-col justify-center items-center gap-1 backdrop-blur-3xl bg-[#4a0a9d]/70 w-[9rem] h-[9rem] rounded-lg">
                                                <Image src={iconBack[index]} alt={item} width={70} height={70} />
                                                <h1>{item}</h1>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        )}

                        {db && (
                            <>
                                <h1 className="p-4 font-bold">BASE DE DONNEES</h1>
                                <div className="flex flex-wrap justify-center gap-8 w-full p-4 rounded-lg">
                                    {
                                        bd.map((item, index) => (
                                            <div key={index} className="flex flex-col justify-center items-center gap-1 backdrop-blur-3xl bg-[#4a0a9d]/70 w-[9rem] h-[9rem] rounded-lg">
                                                <Image src={iconBd[index]} alt={item} width={70} height={70} />
                                                <h1>{item}</h1>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        )}

                        {outil && (
                            <>
                                <h1 className="p-4 font-bold">OUTILS</h1>
                                <div className="flex flex-wrap justify-center gap-8 w-full p-4 rounded-lg">
                                    {
                                        outils.map((item, index) => (
                                            <div key={index} className="flex flex-col justify-center items-center gap-1 backdrop-blur-3xl bg-[#4a0a9d]/70 w-[9rem] h-[9rem] rounded-lg">
                                                <Image src={iconOutils[index]} alt={item} width={70} height={70} />
                                                <h1>{item}</h1>
                                            </div>
                                        ))
                                    }
                                </div>
                            </>
                        )}
                    </div>
                </AnimatedSection1>
                <div
                    className="
                        absolute
                        right-0
                        mt-[20rem]
                        z-[-1]
                        opacity-60
                        w-[5vw] md:w-[45vw]
                        h-[5vw] md:h-[45vw]
                    "
                    style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, #c000b0 5%, rgba(0, 167, 255, 0) 60%)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: '10vw',
                        backgroundPositionY: '50%',
                    }}
                ></div>
                <div
                    className="
                        absolute
                        right-0
                        mt-[40rem]
                        z-[-1]
                        opacity-60
                        w-[5vw] md:w-[45vw]
                        h-[5vw] md:h-[45vw]
                    "
                    style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, #4a0a9d 5%, rgba(0, 167, 255, 0) 60%)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: '10vw',
                        backgroundPositionY: '50%',
                    }}
                ></div>
            </div>
        </section>
    )
}

export default Skils