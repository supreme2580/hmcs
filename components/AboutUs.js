import Image from "next/image"

const AboutUs = () => {
    return(
        <div className="max-w-8xl flex justify-center">
            <div className="flex flex-col md:flex-row justify-between p-6 lg:p-10 space-y-3">
                <div className="flex-1 lg:mr-20 h-auto flex flex-col justify-center">
                    <h2 className="text-black font-semibold text-2xl md:text-4xl">About Us</h2>
                    <div className="bg-darkBlood w-32 h-1 mt-2.5"></div>
                    <div className="space-y-4 text-lg lg:max-w-2xl 2xl:max-w-4xl mt-2.5">
                        <p>Give your child the perfect start from a very young age to read, spell and write perfectly. Also, your child will be trained to handle real-world problems with background knowledge and research. Our vision is to train students that will top the chart at any level of education, with the goal of creating a tree of leaders in society and the world at large.</p>
                    </div>
                </div>
                <div className="flex justify-center">
                    <Image src="/bestedu.jpg" width={400} height={500} />
                </div>
            </div>
        </div>
    )
}
export default AboutUs