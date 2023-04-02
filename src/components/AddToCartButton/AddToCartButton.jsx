
import React from "react";
import './AddToCartButton.css';

function AddToCartButton({ onClick, product }) {

    function addToCart() {
        const {id, heading, price} = props;
        const itemInCart = Cart.find((item) => item.id === id);
        if (itemInCart) {
            itemInCart.quantity += 1;
            setCart([...Cart]);
        } else {
            setCart([
                ...cart,
                {
                    id,
                    heading,
                    price,
                    quantity: 1,
                },
            ]);
        }
    }
}

export default AddToCartButton;