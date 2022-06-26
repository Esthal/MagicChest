import React from 'react';
import "./NavBar.css"
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navBar">
            <div className="navBar__links">
                <NavLink className="link" to="/">Главная</NavLink>
                <NavLink className="link" to="/Catalog">Каталог</NavLink>
                <NavLink className="link" to="/DeliveryAndPayment">Доставка и оплата</NavLink>
                <NavLink className="link" to="/About">О нас</NavLink>
            </div>
        </div>
    );
};

export default NavBar;