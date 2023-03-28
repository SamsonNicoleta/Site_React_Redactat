import React from "react";
import "./Products.css";
import PropTypes from "prop-types";
import ItemCard from "../itemCard/itemCard";

const Products = (props) => {

    return (
        <section className="products">
            <h2 className="products-title">Cele mai populare produse</h2>
            <div className="cards">
                {
                    props.itemsData.map((el, index) => {
                        return <ItemCard key={index} itemData={el}/>;
                    })
                }
            </div>
        </section>
    );
};

Products.propTypes = {
    itemsData: PropTypes.array
};

export default Products;