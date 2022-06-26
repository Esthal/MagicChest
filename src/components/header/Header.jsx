import React from 'react';
import NavBar from "../UI/NavBar/NavBar";
import HeaderIconBar from "../HeaderIconBar/HeaderIconBar";

import './header.css';
import HeaderSearchBar from "../UI/HeaderSearchBar/HeaderSearchBar";


const Header = () => {
    return (
        <header>
            <div className="header-bar">
                <div className="header-bar__name">
                    MAGIC CHEST
                </div>
                <HeaderSearchBar/>
                <HeaderIconBar />
            </div>
            <NavBar/>
        </header>
    );
};

export default Header;