import "./Hero.scss"
import { FaArrowRight } from "react-icons/fa6"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { useEffect, useState } from "react";
import axios from "axios";
import HeroImg1 from "../../../assets/images/heroImg1.png"
import HeroImg2 from "../../../assets/images/heroImg2.png"
import HeroImg3 from "../../../assets/images/heroImg3.png"
const Hero = () => {
    const [heroProducts, setHeroProducts] = useState<any>([])
    useEffect(() => {
        axios("https://dummyjson.com/products")
            .then(response => setHeroProducts(response.data.products))
            .catch(error => console.log(error))
    }, [])
    console.log(heroProducts)
    return (
        <div className="hero">
            <div className="hero__wrapper">
                <Swiper navigation={true} rewind={true} autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }} modules={[Navigation, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="hero__content">
                            <div className="hero__heading">
                                <h4>Super savings at the Brand Outlet</h4>
                                <p>Up to 60% off the brands you love.</p>
                                <a href="#">Shop now <FaArrowRight /></a>
                            </div>
                            <div className="hero__cards">
                                <div className="hero__card">
                                    <img src={HeroImg1} alt="" />
                                </div>
                                <div className="hero__card">
                                    <img src={HeroImg2} alt="" />
                                </div>
                                <div className="hero__card">
                                    <img src={HeroImg3} alt="" />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="second-hero__content">
                            <div className="hero__heading">
                                <h4>Celebrate your many sides</h4>
                                <p>Luxury accessories, hair care and skin care items for you.</p>
                                <a href="#">Shop now <FaArrowRight /></a>
                            </div>
                            <div className="hero__cards">
                                <img src="https://i.ebayimg.com/00/s/NTgxWDE2MDA=/z/8goAAOSwWmtmHkC7/$_57.JPG" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="third-hero__content">
                            <div className="hero__headers">
                                <h4>May the collectibles be with you</h4>
                                <p>Discover a variety of action figures, cards, toys and more.</p>
                                <a href="#">Find yours<FaArrowRight /></a>
                            </div>
                            <div className="hero__cards">
                                <img src="https://i.ebayimg.com/00/s/ODI2WDIyNzY=/z/fPoAAOSwZE5mHTet/$_57.JPG" alt="" />
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="fourth-hero__content">
                            <div className="hero__titles">
                                <h4>Shop the latest trends</h4>
                                <p>Discover our latest collection of clothing and accessories.</p>
                                <a href="#">Shop now<FaArrowRight /></a>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Hero