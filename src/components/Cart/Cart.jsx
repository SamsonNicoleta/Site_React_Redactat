import React from 'react';
import PropTypes from 'prop-types';
import CartItem from '../CartItem/CartItem';

const Cart = ({ cartItems, removeItem }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

    return (
        <div className="cart">
            <h2>Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} removeItem={removeItem} />
                        ))}
                    </div>
                    <p className="cart-total">Total: ${totalPrice.toFixed(2)}</p>
                </>
            )}
        </div>
    );
};

Cart.propTypes = {
    cartItems: PropTypes.array.isRequired,
    removeItem: PropTypes.func.isRequired,
};

export default Cart;