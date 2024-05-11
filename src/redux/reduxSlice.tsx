import { createSlice } from "@reduxjs/toolkit";
interface Product {
    stock: number;
    price: number;
    images: string[];
    image: string | undefined;
    id: number;
    name: string;
    title: string;
    description: string;
    brand: string;
}

interface InitialState {
    likedItems: Product[];
    addedToCart: Product[]
}
const storedLikedItems = localStorage.getItem("likedItems");
const storedAddedToCart = localStorage.getItem("addedToCart");

const initialState: InitialState = {
    likedItems: storedLikedItems ? JSON.parse(storedLikedItems) : [],
    addedToCart: storedAddedToCart ? JSON.parse(storedAddedToCart) : [],
};

const likeSlice = createSlice({
    name: "like",
    initialState,
    reducers: {
        addLike: (state: any, action: any) => {
            state.likedItems.push(action.payload)
            localStorage.setItem("likedItems", JSON.stringify(state.likedItems))
        },
        removeLike: (state, action) => {
            state.likedItems = state.likedItems.filter((item: any) => item.id !== action.payload)
            localStorage.setItem("likedItems", JSON.stringify(state.likedItems))
        },
        addCart: (state, action) => {
            state.addedToCart.push(action.payload)
            localStorage.setItem("addedToCart", JSON.stringify(state.addedToCart))
        },
        removeSaved: (state, action) => {
            state.addedToCart = state.addedToCart.filter((item: any) => item.id !== action.payload)
            localStorage.setItem("addedToCart", JSON.stringify(state.addedToCart))
        }
    }
})
export default likeSlice.reducer
export const { addLike, removeLike, addCart, removeSaved } = likeSlice.actions