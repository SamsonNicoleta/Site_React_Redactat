import React, {Component} from "react";
import Article from "../components/Article/Article";
import HeadTittle from "../components/HeadTittle/HeadTittle";
import {CatalogueItems} from "../components/CatalogueItems/CatalogueItems";



class ForYourPleasure extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemsData: [
                {
                    img: "product-3.png",
                    heading: "AROMISTICO Coffee 1 kg",
                    country: "Brazil",
                    price: "7.99$",
                    description: "Un amestec compus din 70% boabe Arabica și 30% boabe Robusta, cu o aromă intensă, gust plin și note florale. Această cafea vă va oferi un espresso perfect echilibrat, potrivit pentru orice moment al zilei."
                },
                {
                    img: "product-3.png",
                    heading: "BROMISTICO Coffee 1 kg",
                    country: "Kenya",
                    price: "6.99$",
                    description: "Acest amestec exclusiv de la Lavazza dezvăluie un caracter unic al cafelei, accent punând pe nuanța de ciocolată amară și gustul neted de fructe uscate, și finisează capodopera cu un corp plin și gust echilibrat de cacao amarui."
                },
                {
                    img: "product-3.png",
                    heading: "CROMISTICO Coffee 1 kg",
                    country: "Columbia",
                    price: "8.99$",
                    description: "Este o cafea cu corp plin și bine echilibrată ca aromă și intensitate."
                },
                {
                    img: "product-3.png",
                    heading: "DROMISTICO Coffee 1 kg",
                    country: "Brazil",
                    price: "9.99$",
                    description: "Acest amestec e numit nu din întîmplare sau exagerare Dromistico Top Arabica, boabe de cafea 100% Arabica, atent selectate direct din țările lor de origine, o cafea bine echilibrată cu o nuanță pregnantă de dulcime și gust de alune."
                },
                {
                    img: "product-3.png",
                    heading: "EROMISTICO Coffee 1 kg",
                    country: "Brazil",
                    price: "6.99$",
                    description: "După fierbere cafeaua redă arome de flori proaspete, citrice, o nuanță de vanilie, corp plin și un gust de ciocolată."
                },
                {
                    img: "product-3.png",
                    heading: "FROMISTICO Coffee 1 kg",
                    country: "Brazil",
                    price: "6.99$",
                    description: "Este un produs nou și deocamdată îl analizăm...."
                }
            ],
        };
    }


    render() {
        const hrStyle = {
            width: "240px",
            backgroundColor: "black"
        };
        return (
            <>
                <HeadTittle backgroundImage={"./for-your-pleasure-background.png"} titleText={"For your pleasure"}/>
                <Article imagePath={"./for-your-pleasure-img.jpg"} title={"About our goods"}/>
                <hr style={hrStyle}/>
                <CatalogueItems itemsData={this.state.itemsData}/>
            </>
        );
    }
}


export default ForYourPleasure;