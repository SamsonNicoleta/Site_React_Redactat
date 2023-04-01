import React from "react";
import {Routes, Route} from "react-router-dom";
import MainPage from "./pages/MainPage";
import ForYourPleasure from "./pages/ForYourPleasure";
import OurCoffee from "./pages/OurCoffee";
import Navigation from "./components/Navigation/Navigation";
import ItemPage from "./pages/ItemPage";

class App extends React.Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Navigation/>}>
                        <Route path={"/"} element={<MainPage/>}/>
                        <Route path={"/ourCoffee"} element={<OurCoffee/>}/>
                        <Route path={"/forYourPleasure"} element={<ForYourPleasure/>}/>
                        <Route path={"/itemPage"} element={<ItemPage/>}/>
                        // <Route path={"/Card"} element={<ItemPage/>}/>
                    </Route>
                </Routes>
            </>
        );
    }
}

export default App;