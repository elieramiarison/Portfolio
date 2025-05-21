
const Disclaimer = () => {
    return (
        <div>
            <div className="my-10 flex justify-between items-center font-[inherit] pl-8">
                <div>
                    <h1 className="text-base font-semibold">Avertissement ⚠</h1>
                    <div className="text-[0.8rem] pt-4">
                        <h1>Ce site web est encore en cours de développement, certaines sections n&apos;ont pas encore été terminées. <br /> Si vous souhaitez en savoir plus sur moi, vous pouvez <a
                            href="/CV_fullstack_elie.pdf"
                            download="CV_Elie_Ramiarison.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#c000b0] underline">télécharger mon CV</a>😄.</h1>
                        <h1 className="pt-4">Merci !</h1>
                    </div>
                </div>
                <div
                    className="
                        absolute
                        right-0
                        z-[-1]
                        opacity-60
                        w-[5vw] md:w-[25vw]
                        h-[5vw] md:h-[25vw]
                    "
                    style={{
                        background: 'radial-gradient(50% 50% at 50% 50%, #4a0a9d 5%, rgba(0, 167, 255, 0) 60%)',
                        backgroundRepeat: 'no-repeat',
                        backgroundPositionX: '10vw',
                        backgroundPositionY: '50%',
                    }}
                ></div>
            </div>
        </div>
    )
}

export default Disclaimer