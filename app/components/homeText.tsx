"use client"
import Image from 'next/image'
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import MyAnimatedCarousel from './swiper';
import { AnimatedTypingText } from '../animation/animationdif';
import Link from 'next/link';

const HomeText = () => {

    // const ref = useRef(null)
    // const isInView = useInView(ref, { once: true })
    // const mainControls = useAnimation()
    // const slideControls = useAnimation()

    // useEffect(() => {
    //     if (isInView) {
    //         mainControls.start("visible")
    //         slideControls.start("visible")
    //     }
    // }, [isInView])

    return (
        <section id='home'>
            <div className='flex flex-col justify-center items-center w-full'>
                <div className='flex 
      lg:flex-row lg:text-start lg:w-5xl lg:mt-28 lg:w-[61rem]
      md:flex-row md:justify-between md:text-start md:w-[48rem] md:mt-32
      sm:flex-col sm:mt-[14rem]
      flex-col items-center max-w-5xl gap-12 mt-[11rem]'>

                    <div className='flex flex-col md:text-start sm:justify-center justify-center sm:text-center text-center relative z-[20rem] lg:gap-2 md:gap-2 sm:gap-2.5 gap-0'>
                        <h1 className='font-semibold lg:text-6xl md:text-5xl sm:text-6xl text-[2.5rem] text-white'>Hello, je suis</h1>
                        <h1 className="font-sans lg:text-6xl md:text-5xl sm:text-6xl text-[2.5rem] bg-gradient-to-r from-[#c000b0] to-[#4a0a9d] bg-clip-text text-transparent">
                            Elie Ramiarison
                        </h1>
                        <AnimatedTypingText />
                        <div className='lg:my-3.5 md:my-3.5 sm:my-4 my-5'>
                            <a
                                href="/CV_fullstack_elie.pdf"
                                download="CV_Elie_Ramiarison.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className='bg-gradient-to-r from-[#c000b0] to-[#4a0a9d] py-2.5 px-3 rounded-xl text-white cursor-pointer'> {/* Correction cursor-pointe -> cursor-pointer */}
                                Télécharger mon CV
                            </a>
                        </div>
                        <div className='flex md:justify-start items-start sm:justify-center justify-center sm:text-center gap-2'>
                            {/* <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 75 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                initial="hidden"
                                animate={slideControls}
                                transition={{ duration: 0.5, delay: 0.25 }}
                            > */}
                            <Link
                                href='https://www.linkedin.com/in/elie-ramiarison-ab59502bb'
                                target='_blank'
                                className='cursor-pointer'
                            >
                                <FaLinkedin size={30} color="#0077b5" />
                            </Link>

                            <Link href='https://wa.me/+261342527004' target='_blank' className='cursor-pointer' rel="noopener noreferrer">
                                <FaWhatsapp size={30} color="#25D366" />
                            </Link>

                            <Link href='mailto:eliespirale1@gmail.com' target='_blank' className='cursor-pointer' rel="noopener noreferrer">
                                <MdOutlineMailOutline size={30} color="#D44638" />
                            </Link>

                            <Link href='https://github.com/elieramiarison/' target='_blank' className='cursor-pointer' rel="noopener noreferrer">
                                <FaGithub size={30} color="#fff" />
                            </Link>
                            {/* </motion.div> */}
                        </div>
                    </div>

                    <div className='relative bg-[#a5079f] px-20 pt-8 mt-10 rounded-full'>
                        <div
                            className="absolute top-14 right-2 z-0 opacity-80 w-[5vw] md:w-[30vw] h-[5vw] md:h-[30vw] pointer-events-none" // AJOUT pointer-events-none
                            style={{
                                background: 'radial-gradient(50% 50% at 50% 50%, #0a0a0a 20%, rgba(0, 167, 255, 0) 60%)',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                        ></div>
                        <div
                            className="absolute top-10 right-0 z-0 opacity-60 md:w-[20vw] md:h-[20vw] h-[5vw] w-[5vw] pointer-events-none" // AJOUT pointer-events-none
                            style={{
                                background: 'radial-gradient(50% 50% at 50% 50%, #0a0a0a 5%, rgba(0, 167, 255, 0) 60%)',
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'center',
                            }}
                        ></div>

                        <img
                            src="/hero.png"
                            alt="Elie"
                            width={100}
                            height={100}
                            className="lg:w-[14rem] lg:h-[22rem] md:w-[12rem] md:h-[20rem] sm:w-[11rem] sm:h-[18rem] w-[8rem] h-[15rem] rounded-b-full relative z-10 pointer-events-none select-none" draggable={false}
                        />
                    </div>

                    <Image src="/abstract4.png" alt='abstract' width={100} height={100} className='w-20 h-50 absolute right-0 lg:top-14 md:top-14 sm:top-20 top-[4.8rem] z-[-5rem] opacity-55 pointer-events-none' />

                    <Image src="/sv.svg" alt='abstract' width={100} height={100} className='w-10 h-10 absolute lg:right-[27rem] lg:left-auto md:right-[20rem] md:left-auto sm:left-5 left-8 top-20 opacity-80 color-[#c000b0] pointer-events-none' />

                    <Image src="/sv2.svg" alt='abstract' width={100} height={100} className='w-8 h-8 absolute lg:left-20 lg:right-auto md:left-20 md:right-auto sm:right-5 right-5 bottom-[6rem] opacity-80 color-[#c000b0] lg:top-[30rem] md:top-[30rem] sm:top-[28rem] top-[28rem] pointer-events-none' />

                    <div
                        className="
          absolute
          lg:top-32 md:top-32 sm:top-[14rem] top-[15rem] 
          left-0
          z-[1]
          opacity-60
          w-[75vw] md:w-[65vw]
          h-[80vw] md:h-[65vw]
          pointer-events-none"
                        style={{
                            background: 'radial-gradient(50% 50% at 50% 50%, #4a0a9d 5%, rgba(0, 167, 255, 0) 60%)',
                            backgroundRepeat: 'no-repeat',
                            backgroundPositionX: '-30vw',
                            backgroundPositionY: '50%',
                        }}
                    ></div>

                </div>
                <MyAnimatedCarousel />
            </div>
        </section>

    )
}

export default HomeText