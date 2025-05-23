import Image from 'next/image'
import React from 'react'
import AnimatedSection1 from '../animation/animationdif'

const About = () => {
    return (
        <section id='about'>
            <div className='flex justify-center items-center'>
                <div className='flex flex-col justify-center text-center max-w-5xl w-5xl text-white'>
                    <AnimatedSection1 delay={0.3}>
                        <h1 className='font-bold p-12 md:text-3xl text-2xl'>A PROPOS DE MOI</h1>
                    </AnimatedSection1>
                    <div className='flex justify-center items-center'>
                        <Image src="/abstract.svg" alt='abstract' width={100} height={100} className='lg:w-[28rem] lg:h-[28rem] md:w-[26rem] md:h-[26rem] sm:w-[23rem] sm:h-[23rem] w-[16rem] h-[16rem] z-[-5rem] absolute lg:left-10 md:left-10 sm:left-10 left-[-2rem] lg:top-[40rem] md:top-[37rem] sm:top-[62rem] top-[58rem]' />
                        <div className='md:w-[35rem] sm:w-[30rem] w-[25rem]'>
                            <AnimatedSection1 delay={0.6}>
                                <h3 className='z-[20rem] relative font-[Gilroy-light, Arial, Helvetica, sans-serif] md:text-base sm:text-sm text-sm px-5'>
                                    Fort d&apos;une solide expérience dans le développement web, je suis un développeur Fullstack JavaScript passionné par les technologies web, en particulier JavaScript et ses frameworks. Je combine mes compétences techniques avec une forte capacité d&apos;adaptation, ce qui me permet de relever des défis complexes et de m&apos;intégrer rapidement dans des projets en cours.
                                </h3>
                            </AnimatedSection1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About