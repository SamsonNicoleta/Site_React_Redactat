import React from "react";
import "./itemDescription.css";
import PropTypes from "prop-types";
import AddToCartButton from "../AddToCartButton/AddToCartButton";
import Cart from "../Cart/Cart";
export class ItemDescription extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cart: [],
        };
    }
    addToCart = () => {
        const { id, heading, price } = this.props.product;
        const itemInCart = this.props.cart.find((item) => item.id === id);
        if (itemInCart) {
            itemInCart.quantity += 1;
        } else {
            this.props.setCart([
                ...this.props.cart,
                {
                    id,
                    heading,
                    price,
                    quantity: 1,
                },
            ]);
        }
    };



    render() {
        return (
            <>
                <section className="itemDescription">
                    <div className="itemImg">
                        <img src={this.props.image} alt="Item Description" />
                    </div>
                    <article className="itemInfo">
                        <div className="descriptionTittle">
                            <h2>{this.props.heading}</h2>
                            <img src={"./Beans-logo-dark.svg"} alt="Logo" />
                        </div>
                        <p>
                            <b>Tara:</b> {this.props.country}
                        </p>
                        <p>
                            <b>Descriere:</b> {this.props.description}
                        </p>
                        <p>
                            <b>Pret:</b> {this.props.price}
                        </p>
                        <AddToCartButton product={this.props.addToCart} />
                    </article>
                </section>
            </>
        );
    }
}

ItemDescription.propTypes = {
    image: PropTypes.string,
    heading: PropTypes.string,
    country: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.string,
   // cart: PropTypes.object.isRequired,
};