import React from 'react';
import PropTypes from 'prop-types';

const CartItem = ({ item, removeItem }) => {
    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <div>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <button onClick={() => removeItem(item)}>Remove</button>
            </div>
        </div>
    );
};

CartItem.propTypes = {
    item: PropTypes.object.isRequired,
    removeItem: PropTypes.func.isRequired,
};

export default CartItem;