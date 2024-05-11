import axios from "axios"
import { useEffect, useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Autoplay } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import "./Products.scss"
import { HiHeart } from "react-icons/hi2"
import { useDispatch } from "react-redux"
import { addLike } from "../../redux/reduxSlice"
import CategoryFooter from "./CategoryFooter/CategoryFooter"

const Products = () => {
    const dispatch = useDispatch()
    const { pathname } = useLocation()
    console.log(pathname)
    const [products, setProducts] = useState<any>([])
    useEffect(() => {
        axios(`https://dummyjson.com/products/${pathname}`)
            .then(response => setProducts(response.data.products))
            .catch(error => console.log(error))
    }, [])
    console.log(products)
    const addToLikes = (product: any) => {
        dispatch(addLike(product))
    }
    return (
        <section className="products">
            <div className="container">
                <div className="products__wrapper">
                    <div className="products__header">
                        <h2>Featured Event</h2>
                        <Swiper rewind={true} autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }} modules={[Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide className="products__image">
                                <img src="https://uhdwallpapers.org/uploads/cache/1448610405/iphone-12-by-apple_600x338-mm-90.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className="products__image">
                                <img src="https://e1.pxfuel.com/desktop-wallpaper/713/960/desktop-wallpaper-shoes-nike-air-max-kicks-just-do-it-high-1600x900-air-max.jpg" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className="products__image">
                                <img src="https://www.hse.at/dpl/cf/gxqzdlfn45nk/6mIlaI3n7yZvn7ukvpiKG8/4da1b0d05e86b24996dfbe91240a025e/kos_9430_skincare_routine_20220225_inspirational_desk.jpg?impolicy=image-policy&imwidth=1024" alt="" />
                            </SwiperSlide>
                            <SwiperSlide className="products__image">
                                <img src="https://c0.wallpaperflare.com/preview/410/960/1014/apartment-bed-bedroom-book-shelves.jpg" alt="" />
                            </SwiperSlide>
                        </Swiper>
                        <div className="products__brand">
                            {
                                products.slice(0, 1).map((product: any) => (
                                    <div key={product.id} className="products__brand__card">
                                        <h6>Up to 60% off all brands</h6>
                                        <p>{product.brand}</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>

                    <div className="products__cards">
                        {
                            products.map((product: any) => (
                                <div key={product.id} className="products__card">
                                    <Link to={`/category/${product.category}/${product.id}`}><img src={product.images[0]} alt="" /></Link>
                                    <div className="products__card__content">
                                        <p>{product.title}</p>
                                        <strong>${product.price}</strong>
                                    </div>
                                    <div className="sponsored">
                                        <h5>Sponsored</h5>
                                        <div className="add-like">
                                            <button onClick={() => addToLikes(product)} className="active"> <HiHeart /></button>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                    <CategoryFooter/>
                </div>
            </div>
        </section>
    )
}

export default Products