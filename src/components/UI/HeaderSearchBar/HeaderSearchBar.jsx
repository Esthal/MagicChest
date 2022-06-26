import React from 'react';

import classes from './HeaderSearchBar.module.css'

const HeaderSearchBar = () => {
    return (
        <div className={classes.headerSearchBarDIV}>
            <div className={classes.headerSearchBar}>
                <input className={classes.search} placeholder="Я ищу..."/>
                <input
                    style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/icon/header/search.svg)`}}
                    className={classes.searchButton} type="button" value=""/>
            </div>

        </div>
    );
};

export default HeaderSearchBar;