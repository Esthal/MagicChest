import React from 'react';

import classes from './MyCheckBox.module.css'

const MyCheckBox = ({id,text,...props}) => {
    return (
        <div className={classes.checkBoxBody}>
            <input className={classes.customCheckbox} type="checkbox" id={id} name={id}/>
            <label htmlFor={id}>{text}</label>
        </div>
    );
};

export default MyCheckBox;