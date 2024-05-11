import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./SinglePage.scss"
import { FiChevronLeft } from "react-icons/fi";
import { IoMdArrowDropright } from "react-icons/io";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { useDispatch } from "react-redux";
import { FiHeart } from "react-icons/fi";
import { addCart, addLike } from "../../redux/reduxSlice";
import CategoryFooter from "../Products/CategoryFooter/CategoryFooter";

interface Product {
  brand: string;
  discountPercentage: number;
  rating: number;
  stock: number;
  price: any;
  model: string;
  images: string[];
  category: string;
  title: string;
  description: string;
}
const SinglePage: React.FC = () => {
  const { id, productId } = useParams<{ id: string; productId: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);
  const [number, setNumber] = useState<number>(1);
  const dispatch = useDispatch();
  console.log(setThumbsSwiper)
  console.log(thumbsSwiper)
  console.log(id, productId);
  useEffect(() => {
    axios(`https://dummyjson.com/products/${productId}`)
      .then(response => setProduct(response.data))
      .catch(error => console.log(error));
  }, [id, productId]);

  if (!product) {
    return <div className="loader">
      <div className="load"></div>
    </div>
  }
  console.log(product)

  function addToCart(product: Product) {
    dispatch(addCart(product))
  }
  const addToWatchlist = (product: any) => {
    dispatch(addLike(product))
  }

  return (
    <div className="single-page">
      <div className="container">
        <div className="single-page__wrapper">
          <div className="single-page__content">
            <button onClick={() => window.history.back()}><FiChevronLeft /></button>
            <Link to={"/"}>Back to home page</Link> |
            <p>Listed in category:</p>
            <Link to={`/category/${id}`}>{product.category}</Link>
          </div>
          <div className="single-page__info">
            <div className="single-page__title">
              <h1>EXTRA <strong>$10</strong> OFF 3+ ITEMS WITH CODE <strong>10OFF2023TECH</strong></h1>
              <a href="#">See all eligible items and terms <IoMdArrowDropright /></a>
            </div>
            <div className="single-page__data">
              <div className="single-page__imgcarousel">
                <Swiper
                  // style={{
                  //   '--swiper-navigation-color': '#fff',
                  //   '--swiper-pagination-color': '#fff',
                  // }}
                  spaceBetween={5}
                  navigation={true}
                  thumbs={{ swiper: thumbsSwiper }}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiper2"
                >
                  {
                    product?.images?.map((image: string) => (
                      <SwiperSlide className="slider__img" key={image}>
                        <img src={image} />
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
                <Swiper
                  // onSwiper={setThumbsSwiper}
                  spaceBetween={10}
                  slidesPerView={4}
                  freeMode={true}
                  watchSlidesProgress={true}
                  modules={[FreeMode, Navigation, Thumbs]}
                  className="mySwiperr"
                >
                  {
                    product?.images?.map((image: string) => (
                      <SwiperSlide key={image}>
                        <img src={image} />
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </div>
              <div className="single-page__descriptions">
                <div className='single-page__list'>
                  <h5>{product.title}</h5>
                  <div className='line'></div>
                  <div className="single-page__infos">
                    <div className='single-page__list--uls'>
                      <ul className='single-page__list--ul1'>
                        <li>Brand: </li>
                        <li>Category:</li>
                        <li>Description:</li>
                        <li>Discount:</li>
                        <li>Rating:</li>
                        <li>Stock:</li>
                        <li>Quantity:</li>
                        <div className='line'></div>
                        <li>Price: USD</li>
                      </ul>

                      <ul className='single-page__list--ul2'>
                        <li>{product.brand} </li>
                        <li>{product.category}</li>
                        <li>{product.description}</li>
                        <li>{product.discountPercentage}</li>
                        <li>{product.rating}</li>
                        <li>{product.stock}</li>
                        <li><input onChange={(e) => setNumber(Number(e.target.value))} value={number} type="number" /></li>
                        <div className='line'></div>
                        <li>${product.price * number}</li>
                      </ul>
                    </div>
                    <div className='single-page__list--btns'>
                      <button>Buy It Now</button>
                      <button onClick={() => addToCart(product)}>Add to cart</button>
                      <button onClick={() => addToWatchlist(product)}><FiHeart className='single-page__icon' /> Add to Watchlist</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <CategoryFooter/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SinglePage;