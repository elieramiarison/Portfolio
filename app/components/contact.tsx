"use client"
import { FaEnvelope, FaLinkedinIn, FaWhatsapp, FaFacebook } from "react-icons/fa";
import Link from "next/link"
import { Link as ScrollLink } from "react-scroll"

const Contact = () => {
    return (
        <section id="contact">
            <div className="flex flex-col justify-center items-center my-16 relative z-10">
                <div className="flex flex-col gap-6 text-start px-5 lg:w-[28rem] md:w-[28rem] sm:w-full w-full relative z-20">
                    <h1 className="text-3xl pb-3">Merci pour votre visite !</h1>
                    <h3>Donnez votre avis <ScrollLink to="review" smooth={true} duration={1000} offset={-70} className="cursor-pointer underline text-[#c000b0]">ici</ScrollLink></h3>
                    <div className="flex justify-between items-center gap-5">
                        <ScrollLink to="review" smooth={true} duration={1000} offset={-70}>
                            <button className="bg-gray-300 p-3 rounded-3xl cursor-pointer lg:text-base md:text-base sm:text-base text-sm text-black">
                                Voir les avis sur moi !
                            </button>
                        </ScrollLink>
                        <a
                            href="/CV_fullstack_elie.pdf"
                            download="CV_Elie_Ramiarison.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gradient-to-r from-[#c000b0] to-[#4a0a9d] p-3 lg:text-base md:text-base sm:text-base text-sm rounded-3xl text-white cursor-pointer"
                        >
                            Télécharger mon CV
                        </a>

                    </div>
                    <hr />
                    <div className='flex flex-col gap-2 w-full bg-gray-300 p-6 rounded-2xl'>
                        <h1 className="text-base text-center pt-3 text-black">Rejoignez-moi sur</h1>
                        <div className="flex justify-around gap-4">
                            <Link href='mailto:eliespirale1@gmail.com' target='_blank' className='cursor-pointer'>
                                <div className="bg-[#D44638] p-2 rounded-full w-fit">
                                    <FaEnvelope size={25} color="white" />
                                </div>
                            </Link>

                            <Link href='https://wa.me/+261342527004' target='_blank' className='cursor-pointer'>
                                <div className="bg-[#25D366] p-2 rounded-full w-fit">
                                    <FaWhatsapp size={25} color="white" />
                                </div>
                            </Link>


                            <Link href='https://www.linkedin.com/in/elie-ramiarison-ab59502bb' target='_blank' className='cursor-pointer'>
                                <div className="bg-[#0077B5] p-2 rounded-full w-fit">
                                    <FaLinkedinIn size={25} color="white" />
                                </div>
                            </Link>

                            <Link href='https://www.facebook.com/in/elie.ramiarison' target='_blank' className='cursor-pointer'>
                                <div className="bg-white rounded-full w-fit">
                                    <FaFacebook size={40} color="#1877F2" />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <img
                    src="/ab-wave.png"
                    alt="abstract"
                    width={100}
                    height={100}
                    className="absolute lg:w-[25rem] lg:h-[25rem] md:w-[24rem] md:h-[24rem] sm:w-[22rem] sm:h-[22rem] w-[19rem] h-[19rem] right-0 bottom-0 z-0 pointer-events-none"
                />
            </div>
        </section>
    )
}

export default Contact