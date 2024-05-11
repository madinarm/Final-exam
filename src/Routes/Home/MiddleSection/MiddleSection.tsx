import axios from "axios"
import { ReactNode, useEffect, useState } from "react"
import "./MiddleSection.scss"
import { Link } from "react-router-dom"
import EbayBlue from "../../../assets/images/ebayBlue.png"
import { LiaArrowRightSolid } from "react-icons/lia"
import Featured from "../../../assets/images/featured.png"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";
const MiddleSection = () => {
    const [products, setProducts] = useState<any>([])
    const [stuff, setStuff] = useState<any>([])
    useEffect(() => {
        axios("https://dummyjson.com/products")
            .then(response => setProducts(response.data.products))
            .catch(error => console.log(error))
    }, [])
    useEffect(() => {
        axios("https://dummyjson.com/products")
            .then(response => setStuff(response.data.products))
            .catch(error => console.log(error))
    }, [])
    console.log(products)
    return (
        <div className="middle-section">
            <div className="middle-section__wrapper">
                <div className="category">
                    {
                        products.slice(17, 24).map((product: any) => (
                            <Link to={`/category/${product.category}`} className="middle-section__card" key={product.id}>
                                <img src={product.images[0]} alt="" />
                                <h4>{product.title}</h4>
                            </Link>
                        ))
                    }
                </div>
                <div className="middle-section__header">
                    <p>Score these trending kicks</p>
                    <a href="#">See all <LiaArrowRightSolid /></a>
                </div>
            </div>
            <div className="featuree">
                <div className="feature">
                    <p>Featured</p>
                    <img src={EbayBlue} alt="" />
                    <h5>Deals made easy all year long.</h5>
                    <span>Free shipping. Best prices.</span>
                    <button>Get your thing <LiaArrowRightSolid /> </button>
                </div>
                <div>
                    <img src={Featured} alt="" />
                </div>
            </div>
            <div className="category__wrapper">
                <div className="middle-section__header">
                    <p>Today's Deals – All With Free Shipping</p>
                    <a href="#">See all <LiaArrowRightSolid /></a>
                </div>
                <Swiper navigation={true} spaceBetween={10} modules={[Navigation]} slidesPerView={6} className="mySwiper">
                    {stuff.map((category: {
                        category: string; price: ReactNode; images: string[]; id: string | number; title: string; }) => {
                        const { } = category
                        return (
                            <SwiperSlide key={category.id}>
                                <Link to={`/category/${category.category}`} className="category__card">
                                   <img className="img" src={category.images[0]} alt="" />
                                   <strong>${category.price}</strong>
                                </Link>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    )
}

export default MiddleSection