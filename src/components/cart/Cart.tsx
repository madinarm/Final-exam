import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import "./Cart.scss"
import { LiaTimesSolid } from "react-icons/lia"
import { Link } from "react-router-dom"
import { PiGreaterThanLight } from "react-icons/pi";
import { removeSaved } from "../../redux/reduxSlice"

const Cart = () => {
  const dispatch = useDispatch()
  const cartBox = useSelector((state: RootState) => state.like.addedToCart)
  console.log(cartBox)
  const removeSavedProduct = (product: any) => {
    dispatch(removeSaved(product))
  }
  return (
    <div className="saved">
      <div className="container">
        <div className="saved__wrapper">
          <div className="navigator"><Link className="to-home" to="/">eBay</Link><PiGreaterThanLight />Cart</div>
          <div className="saved__header">
            <h1>Cart</h1>
          </div>
          <div className="saved__cards">

            {
              cartBox.map(({ id, stock, price, images, title, brand }) => (
                <div key={id} className="saved__card">
                  <div className="saved__img-wrapper">
                    <div className="saved__after watch">
                      <a href="#">Watch</a>
                      <button onClick={() => removeSavedProduct(id)}><LiaTimesSolid /></button>
                    </div>
                    <img src={images[0]} alt="" />
                    <div className="saved__list listed">
                      <p>seikotime1946 listed</p>
                      <a href="#">{stock} items</a>
                    </div>
                  </div>
                  <div className="saved__text">
                    <a href="#" onClick={() => window.history.back()}>{title}</a>
                    <strong>US ${price}</strong>
                    <div className="purchase">
                      <p>{brand}</p>
                      <button>Buy now</button>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart