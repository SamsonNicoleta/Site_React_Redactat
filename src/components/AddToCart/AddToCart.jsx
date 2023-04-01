import React from 'react';

const AddToCartButton = (props) => {
    const { item, onAddToCart } = props;

    return (
        <button onClick={() => onAddToCart(item)}>Add to Cart</button>
    );
}

export default AddToCartButton;
