
import React from "react";
import './AddToCartButton.css';

function AddToCartButton({ onClick, product }) {

    const addToCart = (product) => {
        let cartItems = JSON.parse(localStorage.getItem('cartItems')) || []; // preluam lista de produse din localStorage sau initializam un array gol
        cartItems.push(product); // adaugam noul produs la finalul listei
        localStorage.setItem('cartItems', JSON.stringify(cartItems)); // salvam lista actualizata in localStorage
    }

    return (
        <button className="add-to-cart-button" onClick={() => {onClick(); addToCart(product)}}>
            Add to Cart
        </button>
    );
}
function handleClick() {
    console.log("Button clicked");
}

function MyComponent() {
    return (
        <button onClick={handleClick}>Click me</button>
    );
}

export default AddToCartButton;