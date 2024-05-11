import { Link, NavLink, useLocation, useNavigate } from "react-router-dom"
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdOutlineShoppingCart } from "react-icons/md";
import "./Navbar.scss"
import EbayLogo from "../../assets/images/ebayLogo.png"
import { FiSearch } from "react-icons/fi";
import Header from "./Header/Header";
import { useEffect, useState } from "react";
import axios from "axios";
const Navbar = () => {
    const [searchQuery, setSearchQuery] = useState<string>("")
    const { pathname } = useLocation()
    const navigate = useNavigate()
    useEffect(() => {
        localStorage.setItem("searchQuery", JSON.stringify(searchQuery))
    }, [searchQuery])
    const handleSearch = (e: any) => {
        e.preventDefault()
        axios(`https://dummyjson.com/products/search?q=${searchQuery}`)
            .then(res => {
                if (res) {
                    navigate(`/searched-products/${searchQuery}`)
                    // setSearchQuery(res.data)
                }
            }
            )
            .catch(err => console.log(err))

        setSearchQuery("")
    }
    console.log(searchQuery)

    return (
        <nav className="navbar">
            <div className="container">
                <div className="navbar__wrapper">
                    <div className="navbar-section">
                        <ul className="navbar__list">
                            <li>Hi! <NavLink className="login" to="/login">Sign In</NavLink> or <NavLink className="login" to="/register">Register</NavLink></li>
                            <li><NavLink to="/daily-deals">Daily Deals</NavLink></li>
                            <li><NavLink to="/brand-outlet">Brand Outlet</NavLink></li>
                            <li><NavLink to="/help&contact">Help & Contact</NavLink></li>
                        </ul>
                        <div className="navbar__right">
                            <div className="select">
                                <NavLink className="sell" to="/sell">Sell</NavLink>
                                <select>
                                    <option value={""} selected>Watchlist</option>
                                </select>
                                <select>
                                    <option selected>My eBay</option>
                                </select>
                            </div>
                            <div className="icons__wrapper">
                                <NavLink className="icons" to="/notifications">
                                    <IoMdNotificationsOutline />
                                </NavLink>
                                <NavLink className="icons" to="/cart">
                                    <MdOutlineShoppingCart />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="search-section">
                            <Link to={"/"}><img src={EbayLogo} alt="" /></Link>
                            <select>
                                <option selected value="">Shop by category</option>
                            </select>
                            <div className="search">
                                <form onSubmit={handleSearch} className="search__form">
                                    <FiSearch />
                                    <input onChange={e => setSearchQuery(e.target.value)} value={searchQuery} type="text" placeholder="Search" />
                                </form>
                                <select>
                                    <option selected value="">All categories</option>
                                </select>
                            </div>
                            <button onSubmit={handleSearch} type="submit" className="search-btn">Search</button>
                            <p>Advanced</p>
                        </div>
                    </div>
                    {!pathname.includes("category") && !pathname.includes("/saved") && !pathname.includes("/cart") && !pathname.includes("/signin") && !pathname.includes("/register") && !pathname.includes("/category/:id/:productId") && <Header />}
                </div>
            </div>
        </nav>
    )
}

export default Navbar
export { Navbar as Header }