import React from 'react';

import classes from './HeaderIcon.module.css'
import {Link} from "react-router-dom";

const HeaderIcon = (props) => {



    return (
        <Link className={classes.headerIcon} to={props.pageLink}>
            <div className={classes.headerIconImg}>
                <img
                    alt=""
                    src={`${process.env.PUBLIC_URL}/assets/img/icon/header/${props.iconName}`}
                />
            </div>

            <div className={classes.headerIconText}>{props.name}</div>
        </Link>
    );
};

export default HeaderIcon;