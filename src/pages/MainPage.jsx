import React from "react";
import AboutUs from "../components/AboutUs/AboutUs";
import Banner from "../components/Banner/Banner";
import Products from "../components/Products/Products";

class MainPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            itemsData: [
                {
                    img: "product-1.png",
                    heading: "Solimo Coffee Beans 2 kg",
                    country: "Italia",
                    price: "10.73$",
                    description: "Amestecul a atins apogeul succesului atunci când ediția sa a primit o medalie de aur de la Academia de Maeștri Pasticcieria Di Italia pentru calitatea înaltă a produsului."
                },
                {
                    img: "product-2.png",
                    heading: "Presto Coffee Beans 1 kg",
                    country: "France",
                    price: "15.99$",
                    description: "Este un amestec ce oferă o cafea cu corp plin și conținut redus de aciditate, aromă cu note de deserturi coapte și gust intens cu indici de cacao amar și lemn dulce."
                },
                {
                    img: "product-3.png",
                    heading: "AROMISTICO Coffee 1 kg",
                    country: "Ukraine",
                    price: "6.99$",
                    description: "O formulă specifică, calculată, folosită în amestecul boabelor de origine, și în diferite cantități de cafea Arabica și Robusta, crează amestecuri unicale, care oferă gust plin, arome parfumate și corpuri rotunjite, urmând a fi elemente esențiale pentru o cafea excepțională."
                }
            ]
        };

    }

    render() {
        return (
            <>
                <Banner link={"/ourCoffee"}/>
                <AboutUs/>
                <Products itemsData={this.state.itemsData}/>
            </>
        );
    }

}

export default MainPage;