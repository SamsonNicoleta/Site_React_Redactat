import "./ItemCatalogue.css";

import React, {Component} from "react";
import CatalogueFilter from "../CatalogueFilter/CatalogueFilter";
import {CatalogueItems} from "../CatalogueItems/CatalogueItems";
import PropTypes from "prop-types";

import AddToCartButton from "../AddToCartButton/AddToCartButton";

class ItemCatalogue extends Component {

    render() {
        return (
            <>
                <section className="coffee-catalogue">
                    <CatalogueFilter itemsData={this.props.itemsData}
                        search={this.props.search}
                        toggleFilter={this.props.toggleFilter}
                    />
                    <CatalogueItems
                        itemsData={this.props.itemsData}
                        addToCartButton={<AddToCartButton />}
                    />

                </section>


            </>
        );

    }
}

ItemCatalogue.propTypes = {
    itemsData: PropTypes.array,
    search: PropTypes.func,
    toggleFilter: PropTypes.func
};

export default ItemCatalogue;