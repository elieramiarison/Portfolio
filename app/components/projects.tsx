"use client"

// import bay from "@/public/beyAft.jpg"
// import lightLogo from "@/public/lightMedia.png"
// import psyLogo from "@/public/psyKozy1.jpg"
// import elierms from "@/public/eliermsLogo.png"
// import eni from "@/public/th.jpeg"
// import rendezia from "@/public/rendezia.jpg"
// import ancien from "@/public/ancien-portfolio.jpg"
// import pharma from "@/public/pharma.jpg"
// import vitrine from "@/public/site-vitrine.jpg"
import { FaLink } from "react-icons/fa"
// import { useState } from "react"

const Projects = () => {
    // const [toggle, setToggle] = useState(false)

    // const table = {
    //     image: [rendezia, ancien, pharma, vitrine, bay],
    //     logo: [lightLogo, psyLogo, elierms, lightLogo, eni, elierms],
    //     title: ["VisionSpot", "ShowcaseHub", "SecureAccess", "PowerAdmin", "FrontCraft", "Portfolio"],
    //     // desc: [t('project1'), t('project2'), t('project3'), t('project4'), t('project5'), t('project6')]
    // }

    return (
        <section id="project">
            <div className="text-center text-white">
                <h1 className="text-3xl font-bold p-10">PROJETS</h1>
                <div className="flex flex-wrap justify-center gap-4">
                    <div className=" justify-center items-center gap-10 flex flex-wrap">
                        <div className="bg-[#4a0a9d69] backdrop-blur-3xl lg:p-4 md:p-4 sm:p-4 p-4 rounded-md">
                            <div className="relative group w-fit" >
                                <img src="/rendezia.jpg" alt="photo" width={100} height={100} className="lg:w-[24rem] lg:h-[14rem] md:w-[24rem] md:h-[14rem] sm:w-[24rem] sm:h-[14rem] w-[20rem] h-[10rem] object-cover" />
                                <a href="https://rendezia-rdv-medical.vercel.app/" target="blank" rel="noopener noreferrer" className="absolute bottom-2 right-5 bg-[#090909b6] text-sm px-4 py-1 rounded-2xl flex items-center gap-1 text-white
               opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">Jetez un oeil <FaLink size={12} /></a>
                            </div>
                            <div className="flex flex-col justify-start items-start pt-2 gap-2 lg:w-[24rem] md:w-[24rem] sm:w-[24rem] w-[20rem]">
                                <h1 className="text-start font-semibold">Rendezia - Plateforme de rendez-vous medicaux</h1>
                                <div className="flex gap-3">
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">Adobe XD</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">Next.JS</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">MongoDB</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">Framer motion</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" justify-center items-center gap-10 flex flex-wrap">
                        <div className="bg-[#4a0a9d69] backdrop-blur-3xl lg:p-4 md:p-4 sm:p-4 p-4 rounded-md">
                            <div className="relative group w-fit" >
                                <img src="/pharma.jpg" alt="photo" width={100} height={100} className="lg:w-[24rem] lg:h-[14rem] md:w-[24rem] md:h-[14rem] sm:w-[24rem] sm:h-[14rem] w-[20rem] h-[10rem] object-cover" />
                                <a href="https://github.com/elieramiarison/" target="blank" rel="noopener noreferrer" className="absolute bottom-2 right-5 bg-[#090909b6] text-sm px-4 py-1 rounded-2xl flex items-center gap-1 text-white
               opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">Jetez un oeil <FaLink size={12} /></a>
                            </div>
                            <div className="flex flex-col justify-start items-start pt-2 gap-2 lg:w-[24rem] md:w-[24rem] sm:w-[24rem] w-[20rem]">
                                <h1 className="text-start font-semibold">PharmaStock - Gestion de stockage des medicaments</h1>
                                <div className="flex gap-3">
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">Next.JS</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">Nest.JS</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">Postgres SQL</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" justify-center items-center gap-10 flex flex-wrap">
                        <div className="bg-[#4a0a9d69] backdrop-blur-3xl lg:p-4 md:p-4 sm:p-4 p-4 rounded-md">
                            <div className="relative group w-fit" >
                                <img src="/ancien-portfolio.jpg" alt="photo" width={100} height={100} className="lg:w-[24rem] lg:h-[14rem] md:w-[24rem] md:h-[14rem] sm:w-[24rem] sm:h-[14rem] w-[20rem] h-[10rem] object-cover" />
                                <a href="https://elierms.vercel.app/" target="blank" rel="noopener noreferrer" className="absolute bottom-2 right-5 bg-[#090909b6] text-sm px-4 py-1 rounded-2xl flex items-center gap-1 text-white
               opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">Jetez un oeil <FaLink size={12} /></a>
                            </div>
                            <div className="flex flex-col justify-start items-start pt-2 gap-2 lg:w-[24rem] md:w-[24rem] sm:w-[24rem] w-[20rem]">
                                <h1 className="text-start font-semibold">Mon ancien Portfolio</h1>
                                <div className="flex gap-3">
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">Adobe XD</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">React.JS</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">Vite</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">Framer motion</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" justify-center items-center gap-10 flex flex-wrap">
                        <div className="bg-[#4a0a9d69] backdrop-blur-3xl lg:p-4 md:p-4 sm:p-4 p-4 rounded-md">
                            <div className="relative group w-fit" >
                                <img src="/beyAft.jpg" alt="photo" width={100} height={100} className="lg:w-[24rem] lg:h-[14rem] md:w-[24rem] md:h-[14rem] sm:w-[24rem] sm:h-[14rem] w-[20rem] h-[10rem] object-cover" />
                            </div>
                            <div className="flex flex-col justify-start items-start pt-2 gap-2 lg:w-[24rem] md:w-[24rem] sm:w-[24rem] w-[20rem]">
                                <h1 className="text-start font-semibold">Site de reservation d&apos;une hotel</h1>
                                <div className="flex gap-3">
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">React.JS</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">Nest.JS</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">Postgres SQL</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">GSAP</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" justify-center items-center gap-10 flex flex-wrap">
                        <div className="bg-[#4a0a9d69] backdrop-blur-3xl p-4 rounded-md">
                            <div className="relative group w-fit" >
                                <img src="/back-off.jpg" alt="photo" width={100} height={100} className="lg:w-[24rem] lg:h-[14rem] md:w-[24rem] md:h-[14rem] sm:w-[24rem] sm:h-[14rem] w-[20rem] object-cover" />
                                <a href="https://github.com/elieramiarison/Projet-back-office" target="blank" rel="noopener noreferrer" className="absolute bottom-2 right-5 bg-[#090909b6] text-sm px-4 py-1 rounded-2xl flex items-center gap-1 text-white
               opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">Jetez un oeil <FaLink size={12} /></a>
                            </div>
                            <div className="flex flex-col justify-start items-start pt-2 gap-2">
                                <h1 className="text-start font-semibold">Back-office</h1>
                                <div className="flex gap-3">
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">React.JS</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">Express.JS</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">MongoDB</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" justify-center items-center gap-10 flex flex-wrap">
                        <div className="bg-[#4a0a9d69] backdrop-blur-3xl p-4 rounded-md">
                            <div className="relative group w-fit" >
                                <img src="/site-vitrine.jpg" alt="photo" width={100} height={100} className="lg:w-[24rem] lg:h-[14rem] md:w-[24rem] md:h-[14rem] sm:w-[24rem] sm:h-[14rem] w-[20rem] object-cover" />
                                <a href="https://site-vitrine-rho.vercel.app/" target="blank" rel="noopener noreferrer" className="absolute bottom-2 right-5 bg-[#090909b6] text-sm px-4 py-1 rounded-2xl flex items-center gap-1 text-white
               opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">Jetez un oeil <FaLink size={12} /></a>
                            </div>
                            <div className="flex flex-col justify-start items-start pt-2 gap-2">
                                <h1 className="text-start font-semibold">Site de presentation d&apos;une ville</h1>
                                <div className="flex gap-3">
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">HTML</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">CSS</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">JavaScript</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" justify-center items-center gap-10 flex flex-wrap">
                        <div className="bg-[#4a0a9d69] backdrop-blur-3xl p-4 rounded-md">
                            <div className="relative group w-fit" >
                                <img src="/psyKozy1.jpg" alt="photo" width={100} height={100} className="lg:w-[24rem] lg:h-[14rem] md:w-[24rem] md:h-[14rem] sm:w-[24rem] sm:h-[14rem] w-[20rem] object-cover" />
                            </div>
                            <div className="flex flex-col justify-start items-start pt-2 gap-2">
                                <h1 className="text-start font-semibold">Presentation d&apos;une assoiaciation</h1>
                                <div className="flex gap-3">
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">React.JS</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">Express.JS</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">MongoDB</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" justify-center items-center gap-10 flex flex-wrap">
                        <div className="bg-[#4a0a9d69] backdrop-blur-3xl p-4 rounded-md">
                            <div className="relative group w-fit" >
                                <img src="/portfolio2.jpg" alt="photo" width={100} height={100} className="lg:w-[24rem] lg:h-[14rem] md:w-[24rem] md:h-[14rem] sm:w-[24rem] sm:h-[14rem] w-[20rem] object-cover" />
                                <a href="https://elie-ramiarison.vercel.app/" target="blank" rel="noopener noreferrer" className="absolute bottom-2 right-5 bg-[#090909b6] text-sm px-4 py-1 rounded-2xl flex items-center gap-1 text-white
               opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">Jetez un oeil <FaLink size={12} /></a>
                            </div>
                            <div className="flex flex-col justify-start items-start pt-2 gap-2">
                                <h1 className="text-start font-semibold">Cette nouveau portfolio</h1>
                                <div className="flex gap-3">
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">React.JS</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">Express.JS</p>
                                    <p className="border-[1px] border-[#FF004B] rounded-xl lg:text-[0.7rem] md:text-[0.7rem] sm:text-[0.7rem] text-[0.6rem] px-2 py-1">MongoDB</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects