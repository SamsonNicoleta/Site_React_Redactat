import "./Navigation.css";
import React, {Component} from "react";
import {NavLink, Outlet} from "react-router-dom";

class Navigation extends Component {
    render() {
        return (
            <>
                <header>
                    <nav className="header">
                        <NavLink to="/" className="nav-item">
                            <img src={"coffee-beans-logo.svg"} alt="Logo"/>
                            Coffee house
                        </NavLink>
                        <NavLink to="/ourCoffee" className="nav-item">Cafeaua noastră</NavLink>
                        <NavLink to="/forYourPleasure" className="nav-item">Pentru placerea voastră</NavLink>
                    </nav>
                    <div className="menu">
                        <input type="checkbox" id="menuToggle"/>
                        <label htmlFor="menuToggle" className="burgerLabel">
                            <div className="burger">
                                <div className="elem first"></div>
                                <div className="elem second"></div>
                                <div className="elem third"></div>
                            </div>
                        </label>
                        <div className="menuItems">
                            <ul className="menuItemsList">
                                <li className="menuItem">
                                    <NavLink to="/" className="nav-item">
                                        <img src={"coffee-beans-logo.svg"} alt="Logo"/>
                                    </NavLink>
                                </li>
                                <li className="menuItem">
                                    <NavLink to="/ourCoffee" className="nav-item">
                                    Cafeaua noastră
                                    </NavLink>
                                </li>
                                <li className="menuItem">
                                    <NavLink to="/forYourPleasure" className="nav-item">
                                       Pentru Plăcerea voastră
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </header>
                <Outlet/>
                <footer>
                    <nav className="footer">
                        <NavLink to="/" className="footer-nav">
                            <img src={"coffee-beans-logo.svg"} alt="Logo"/>
                            Coffee house
                        </NavLink>
                        <NavLink to="/ourCoffee" className="footer-nav">Cafeaua Noastră</NavLink>
                        <NavLink to="/forYourPleasure" className="footer-nav">Pentru Plăcerea Voastră</NavLink>
                    </nav>
                    <img className="footer-logo" src={"Beans-logo-dark.svg"} alt="logo"/>
                </footer>
            </>
        );
    }
}

export default Navigation;