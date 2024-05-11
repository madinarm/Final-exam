import "./App.scss"
import Home from "./Routes/Home/Home"
import Navbar from "./components/Navbar/Navbar"
import { Routes, Route, useLocation } from "react-router-dom"
import Products from "./components/Products/Products"
import SinglePage from "./components/Single-page/SinglePage"
import Saved from "./Routes/Saved/Saved"
import Cart from "./components/cart/Cart" 
import Login from "./components/auth/Login/Login"
import SearchedProducts from "./components/searchedProducts/SearchedProducts"
const App = () => {
  const {pathname} = useLocation()
  return (
    <div>
      {!pathname.includes("/login") && !pathname.includes("/register") && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:id" element={<Products />} />
        <Route path="/category/:id/:productId" element={<SinglePage />} />
        <Route path="/saved" element={<Saved />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/searched-products/:query" element={<SearchedProducts/>}/>
      </Routes>
    </div>
  )
}

export default App