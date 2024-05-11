import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../../redux/store"
import "./Saved.scss"
import { LiaTimesSolid } from "react-icons/lia"
import { removeLike } from "../../redux/reduxSlice"
import { Link } from "react-router-dom"
import { PiGreaterThanLight } from "react-icons/pi";

const Saved = () => {
  const dispatch = useDispatch()
  const like = useSelector((state: RootState) => state.like.likedItems)
  console.log(like)
  const removeLikedOnes = (id: number) => {
    dispatch(removeLike(id))
  }
  return (
    <div className="saved">
      <div className="container">
        <div className="saved__wrapper">
          <div className="navigator"><Link className="to-home" to="/">eBay</Link><PiGreaterThanLight />Saved</div>
          <div className="saved__header">
            <h1>Saved</h1>
          </div>
          <div className="saved__cards">

            {
              like.map(({id, stock, price, images}) => (
                <div key={id} className="saved__card">
                  <div className="saved__img-wrapper">
                    <div className="saved__after watch">
                      <a href="#">Watch</a>
                      <button onClick={() => removeLikedOnes(id)}><LiaTimesSolid /></button>
                    </div>
                    <img src={images[0]} alt="" />
                    <div className="saved__list listed">
                      <p>seikotime1946 listed</p>
                      <a href="#">{stock} items</a>
                    </div>
                  </div>
                  <div className="saved__info">
                    <h3>US ${price}</h3> | <a href="#">{stock} items</a>
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

export default Saved