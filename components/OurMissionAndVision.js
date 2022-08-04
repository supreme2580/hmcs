import Image from "next/image"

const OurMissionAndVision = () => {
    return(
        <div className="max-w-8xl flex justify-center">
            <div className="flex flex-col md:flex-row justify-between p-6 lg:p-10 space-y-3">
                <div className="flex-1 lg:mr-20 h-auto flex flex-col justify-center">
                    <h2 className="text-black font-semibold text-2xl md:text-4xl">Our Mission And Vision</h2>
                    <div className="bg-darkBlood w-32 h-1 mt-2.5"></div>
                    <div className="space-y-4 text-lg lg:max-w-2xl mt-2.5">
                        <p>We aim to produce excellent critical thinkers, problem solvers and innovators. Leaving no stone unturned, we prepare, we push and prop up our students towards deep knowledge and sound character</p>
                        <p>We cannot compromise the boundless potentials in our students; our passion is to unlock them and unleash them as invaluable assets to the world.</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image src="/principal.jpg" width={400} height={500} />
                </div>
            </div>
        </div>
        
    )
}

export default OurMissionAndVision