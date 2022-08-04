import Image from "next/image"

const Gallery = () => {
    return(
        <div className="flex flex-col items-center p-6 lg:p-10">
        <h2 className="text-black font-semibold text-2xl md:text-4xl">Sections</h2>
            <div className="bg-darkBlood w-32 h-1 mt-2.5"></div>
            <div className="flex mt-4">
                <div><Image src="/gal1.jpg" width={500} height={400} className="hover:scale-125 transition duration-700 hover:cursor-pointer" /></div>
                <div><Image src="/gal2.jpg" width={500} height={400} className="hover:scale-125 transition duration-700 hover:cursor-pointer" /></div>
            </div>
            <div className="flex -mt-1.5">
                <div><Image src="/gal3.jpg" width={500} height={400} className="hover:scale-125 transition duration-700 hover:cursor-pointer" /></div>
                <div><Image src="/gal4.jpg" width={500} height={400} className="hover:scale-125 transition duration-700 hover:cursor-pointer" /></div>
            </div>
            <div className="flex -mt-1.5">
                <div><Image src="/gal5.jpg" width={500} height={400} className="hover:scale-125 transition duration-700 hover:cursor-pointer" /></div>
                <div><Image src="/gal6.jpg" width={500} height={400} className="hover:scale-125 transition duration-700 hover:cursor-pointer" /></div>
            </div>
        </div>
    )
}
export default Gallery