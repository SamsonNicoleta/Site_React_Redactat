import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Cart.css";
import CartItem from "./CartItem";

const Cart = ({ cartItems, removeProduct }) => {
    const [showCart, setShowCart] = useState(false);

    const toggleCart = () => setShowCart(!showCart);

    const totalPrice = cartItems.reduce(
        (total, item) => total + parseFloat(item.price),
        0
    );

    return (
        <>
            <button className="cartToggle" onClick={toggleCart}>
                {showCart ? "Hide Cart" : `View Cart (${cartItems.length})`}
            </button>
            {showCart && (
                <div className="cartContainer">
                    <h2>Shopping Cart</h2>
                    {cartItems.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            {cartItems.map((item) => (
                                <CartItem
                                    key={item.id}
                                    product={item}
                                    removeProduct={removeProduct}
                                />
                            ))}
                            <div className="totalPrice">
                                <p>Total: {totalPrice.toFixed(2)}</p>
                            </div>
                        </>
                    )}
                </div>
            )}
        </>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    removeProduct: PropTypes.func.isRequired,
};

export default Cart;