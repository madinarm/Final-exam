import { FaHeart } from "react-icons/fa6"
import { NavLink } from "react-router-dom"
import "../Navbar.scss"

const Header = () => {
    return (
        <div className="header">
            <div className="container">
                <div className="header__wrapper">
                    <ul className="header__list">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/saved"><FaHeart /> Saved</NavLink></li>
                        <li><NavLink to="/motors">Motors</NavLink></li>
                        <li><NavLink to="/electronics">Electronics</NavLink></li>
                        <li><NavLink to="/collectibles">Collectibles</NavLink></li>
                        <li><NavLink to="/home-and-garden">Home & Garden</NavLink></li>
                        <li><NavLink to="/fashion">Fashion</NavLink></li>
                        <li><NavLink to="/toys">Toys</NavLink></li>
                        <li><NavLink to="/sporting-goods">Sporting Goods</NavLink></li>
                        <li><NavLink to="/business-and-industrial">Business & Industrial</NavLink></li>
                        <li><NavLink to="/jewelry-and-watches">Jewelry & Watches</NavLink></li>
                        <li><NavLink to="/ebay-live"> eBay Live</NavLink></li>
                        <li><NavLink to="/refurbished">Refurbished</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header