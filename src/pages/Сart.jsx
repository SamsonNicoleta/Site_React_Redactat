import {Component} from "react";

import React, { useContext } from "react";
import { StoreContext } from "../store/StoreProvider";
import Cart from "../components/Cart/Cart";

const CartPage = () => {
    const { cart, removeProduct } = useContext(StoreContext);

    return (
        <>
            <h1>Cart Page</h1>
            <Cart cartItems={cart} removeProduct={removeProduct} />
        </>
    );
};

export default CartPage;