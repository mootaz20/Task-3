import BestDeal from "../components/BestDeal/BestDeal"
import Contact from "../components/Contact/Contact"
import CounterContainer from "../components/CounterContainer/CounterContainer"
import Featured from "../components/Featured/Featured"
import Hero from "../components/Hero/Hero"
import Properties from "../components/Properties/Properties"
import VideoView from "../components/VideoView/VideoView"

const Home = () => {
  return (
    <>
    <Hero />
     <Featured />
    <VideoView />
    <CounterContainer />
    <BestDeal />
    <Properties />
    <Contact />
    </>
  )
}

export default Home
