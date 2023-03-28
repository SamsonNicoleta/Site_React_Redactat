import "./CatalogueItems.css";
import React from "react";
import ItemCard from "../itemCard/itemCard";
import PropTypes from "prop-types";


export class CatalogueItems extends React.Component {
    render() {
        return (
            <>
                <section className="itemsCards">
                    {
                        this.props.itemsData.map((el, index) => {
                            return <ItemCard key={index} itemData={el}/>;
                        })
                    }
                </section>
            </>
        );
    }
}

CatalogueItems.propTypes = {
    itemsData: PropTypes.array
};