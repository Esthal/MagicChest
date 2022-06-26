import React from 'react';

import classes from './HeaderIconBar.module.css'
import HeaderIcon from "../UI/HeaderIcon/HeaderIcon";

const HeaderIconBar = () => {
    return (
        <div className={classes.headerIconBar}>
            <HeaderIcon iconName='login.svg' name='Вход' pageLink='Auth'/>
            <HeaderIcon iconName='basket.svg' name='Корзина' pageLink='Auth'/>
        </div>
    );
};

export default HeaderIconBar;