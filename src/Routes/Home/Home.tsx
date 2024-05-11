import Hero from "./Hero/Hero"
import HomeFooter from "./Home-footer/HomeFooter"
import "./Home.scss"
import MiddleSection from "./MiddleSection/MiddleSection"

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <Hero />
        <MiddleSection/>
        <HomeFooter />
      </div>
    </div>
  )
}

export default Home