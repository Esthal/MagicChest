import React, {useState} from 'react';
import MyInput from "../MyInput/MyInput";

import classes from './MyInputPassword.module.css';

const MyInputPassword = (props) => {
    const [typePassword, setTypePassword] = useState('password');
    const [urlImgPassword, setUrlImgPassword] = useState('view.png');


    const changeType = (e) =>{
        e.preventDefault();
        if(typePassword === 'password') {
            setTypePassword('text');
            setUrlImgPassword('no-view.png');
        }
        else {
            setTypePassword('password');
            setUrlImgPassword('view.png');
        }
    }
    return (
        <div className={classes.passwordPlace}>
            <MyInput type={typePassword} {...props}/>
            <input
                type="button"
                style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/icon/inputPassword/${urlImgPassword})`}}
                className={classes.passwordButton}
                onClick={changeType}>

            </input>
        </div>
    );
};

export default MyInputPassword;