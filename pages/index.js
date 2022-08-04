import Head from "next/head"
import AboutUs from "../components/AboutUs"
import Gallery from "../components/Gallery"
import Hero from "../components/Hero"
import OurMissionAndVision from "../components/OurMissionAndVision"
import Sections from "../components/Sections"

const Home = () => {
  return(
    <div className="overflow-hidden">
      <Head>
        <title>Hmcs</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Hero />
      <OurMissionAndVision />
      <Sections />
      <AboutUs />
      <Gallery />
    </div>
  )
}
export default Home