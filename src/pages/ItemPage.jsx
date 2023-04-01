import React from "react";
import HeadTittle from "../components/HeadTittle/HeadTittle";
import {ItemDescription} from "../components/itemDescription/itemDescription";
import {useLocation} from "react-router-dom";


const ItemPage = () => {
    const {image, heading, country, price, description,card} = useLocation().state;

    return (
        <>
            <HeadTittle backgroundImage={"./ourCoffeeBackground.png"} titleText={"Our Coffee"}/>
            <ItemDescription
                heading={heading}
                image={image}
                country={country}
                description={description}
                price={price}
                card={card}
            />
        </>

    );
};

export default ItemPage;