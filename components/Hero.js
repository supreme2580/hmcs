import Link from "next/link"

const Hero = () => {

    function sideNav() {
        if (typeof document != "undefined") {
            document.querySelector(".sidenav").classList.toggle("-translate-x-full")
        }
    }

    return(
        <div className="w-screen h-screen bg-[url('/bg.jpg')] bg-center bg-cover bg-no-repeat">
            <div className="flex justify-between items-center space-x-10 py-5 px-6 md:px-10">
                <h1 className="text-lg sm:text-2xl xl:text-4xl text-white font-semibold tracking-wide xl:tracking-widest">Holy Mary Comprehensive School</h1>
                <button className="lg:hidden sidenavBtn p-2" onClick={sideNav}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
                <div className="hidden lg:flex flex-1 justify-between tracking-widest space-x-5">
                    <Link href="/"><a className="text-lg text-white font-semibold">Home</a></Link>
                    <Link href="/"><a className="text-lg text-white font-semibold">Sign In</a></Link>
                    <Link href="/"><a className="text-lg text-white font-semibold">Join Us</a></Link>
                    <Link href="/"><a className="text-lg text-white font-semibold">About Us</a></Link>
                    <Link href="/"><a className="text-lg text-white font-semibold">Contact Us</a></Link>
                </div>
            </div>
            <div className="w-64 bg-darkBlood fixed inset-y-0 left-0 p-5 transition duration-200 ease-in-out -translate-x-full lg:hidden sidenav z-50">
                <div className="flex flex-col space-y-5 tracking-widest">
                    <div className="text-white text-2xl font-semibold">Quick Links</div>
                    <Link href="/"><a className="text-lg text-white font-semibold w-auto">Home</a></Link>
                    <Link href="/"><a className="text-lg text-white font-semibold w-auto">Sign In</a></Link>
                    <Link href="/"><a className="text-lg text-white font-semibold w-auto">Join Us</a></Link>
                    <Link href="/"><a className="text-lg text-white font-semibold w-auto">About Us</a></Link>
                    <Link href="/"><a className="text-lg text-white font-semibold w-auto">Contact Us</a></Link>
                </div>
            </div>
            <div className="max-w-xl sm:mt-16 2xl:mt-64  p-6 lg:p-10 space-y-5 bg-darkBlood bg-opacity-60 md:bg-opacity-100">
                <h1 className="text-white font-bold text-4xl tracking-wide lg:tracking-widest">Holy Mary Comprehensive School</h1>
                <p className="text-white tracking-widest text-lg lg:text-xl">High standards in teaching and assessment rapidly get pupils reading, spelling and writing proficiently. Pupils are exposed to multimodal learning which develops their all-round intelligence</p>
                <div><Link href="/"><a className="text-white tracking-widest bg-transparent border-white border-2 p-2.5 rounded-lg hover:bg-darkBlood">Get started</a></Link></div>
            </div>
        </div>
    )
}
export default Hero