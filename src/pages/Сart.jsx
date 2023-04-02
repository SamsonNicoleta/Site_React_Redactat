import React from "react";
import CartItem from "../components/CartItem/CartItem";
import "./Cart.css";
import PropTypes from "prop-types";

const Cart = (props) => {
    const cartItems = props.cartItems;

    const total = cartItems.reduce((total, item) => {
        return total + parseFloat(item.price.replace(",", "."));
    }, 0).toFixed(2);

    return (
        <div className="cart-page">
            <h1>Shopping Cart</h1>
            {cartItems.length > 0 ? (
                <table className="cart-table">
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartItems.map((item) => (
                        <CartItem key={item.id} item={item} />
                    ))}
                    <tr>
                        <td>
                            <strong>Total:</strong>
                        </td>
                        <td>{total} RON</td>
                    </tr>
                    </tbody>
                </table>
            ) : (
                <p>Your cart is empty</p>
            )}
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
};

export default Cart;