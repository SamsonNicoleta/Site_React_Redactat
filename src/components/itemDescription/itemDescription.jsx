import React from "react";
import "./itemDescription.css";
import PropTypes from "prop-types";

export class ItemDescription extends React.Component {

    render() {
        return (
            <>
                <section className="itemDescription">
                    <div className="itemImg">
                        <img src={this.props.image} alt="Item Description"/>
                    </div>
                    <article className="itemInfo">
                        <div className="descriptionTittle">
                            <h2>
                                {this.props.heading}
                            </h2>
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
    price: PropTypes.string
};