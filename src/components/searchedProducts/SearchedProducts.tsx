import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import axios from "axios";
import "./SearchedProducts.scss"
import { FiHeart } from "react-icons/fi";
import { addCart, addLike } from "../../redux/reduxSlice";
import { useDispatch } from "react-redux";

const SearchedProducts = () => {
    const { query } = useParams<{ query: string }>();
    const [searchResults, setSearchResults] = useState<any>({});
    const dispatch = useDispatch()
    useEffect(() => {
        axios(`https://dummyjson.com/products/search?q=${query}`)
            .then((res) => {
                setSearchResults(res.data);
            })
            .catch((err) => console.log(err));
    }, [query]);
    console.log(searchResults)

    const addToLikes = (product: any) => {
        dispatch(addLike(product))
    }
    function addToCart(product: any) {
        dispatch(addCart(product))
      }
    return (
        <div className="searchedProducts">
            <div className="container">
                <div className="searchedProducts__wrapper">
                    {searchResults.products && searchResults.products.map((product: any) => (
                        <div className="product" key={product.id}>
                            <img src={product.images[0]} alt="" />
                            <h3>{product.title}</h3>
                            <strong>${product.price}</strong>
                            <NavLink to={`/category/${product.category}/${product.id}`}>View Details</NavLink>
                            <div className="searchedProducts__buttons">
                                <button onClick={() => addToCart(product)}>Add to Cart</button>
                                <button onClick={() => addToLikes(product)}><FiHeart /></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SearchedProducts;