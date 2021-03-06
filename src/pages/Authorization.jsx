import React, {useEffect, useState} from 'react';
import MyInput from "../components/UI/MyInput/MyInput";
import MyInputPassword from "../components/UI/MyInputPassword/MyInputPassword";

import '../styles/authorization.css'
import MyButton from "../components/UI/MyButton/MyButton";
import MyCheckBox from "../components/UI/MyCheckBox/MyCheckBox";
import PostService from "../API/PostService";
import {Redirect} from "react-router-dom";

const Authorization = () => {
    const [heightBlockAuth,setHeightBlockAuth] = useState('400px')

    const [moveRestore,setMoveRestore] = useState('left');
    const [moveAuth,setMoveAuth] = useState('');
    const [moveReg,setMoveReg] = useState('right');

    const [regLogin, setRegLogin] = useState('');
    const [regEmail, setRegEmail] = useState('');
    const [regPassword, setRegPassword] = useState('');
    const [regPasswordConfirm, setRegPasswordConfirm] = useState('');


    const login = async event =>{
        event.preventDefault();
        const response = await PostService.userLogin();
        console.log(response.data);
    }
    const registration = async event =>{
        event.preventDefault();
        const response = await PostService.userRegistration(regLogin,regEmail,regPassword);
        console.log(response.data);
    }






    const openRestore = () =>{
        setMoveRestore('');
        setMoveAuth('right');

        setHeightBlockAuth('220px');
    }
    const openRegistration = () =>{
        setMoveReg('');
        setMoveAuth('left');
        setHeightBlockAuth('460px');
    }
    const closeRestore = () =>{
        setMoveRestore('left');
        setMoveAuth('');
        setHeightBlockAuth('400px');
    }
    const closeRegistration = () =>{
        setMoveReg('right');
        setMoveAuth('');
        setHeightBlockAuth('400px');
    }

    return (
        <div className="block-form">
            <div className="block-form__content" style={{minHeight: heightBlockAuth}}>
                <form method="POST" className={moveRestore}>
                    <h1>???????????????????????????? <span className="link-auth-back" onClick={closeRestore}>??????????</span></h1>
                    <div className="content__line"></div>
                    <MyInput placeholder="?????????????? ?????? E-mail"/>
                    <div style={{marginBottom: '15px'}}></div>
                    <MyButton type='submit'>???????????????? ????????????</MyButton>

                </form>
                <form method="POST" className={moveAuth} onSubmit={login}>
                    <h1>??????????????????????</h1>
                    <div className="content__line"></div>
                    <div className="content__title">???????? ?????????? ?????????? ?????? email</div>
                    <MyInput placeholder="?????????????? ?????????? ?????? email" style={{marginBottom: '20px'}}/>
                    <div className="content-right">
                        <span className="link-auth" onClick={openRestore}>???????????? ?????????????</span>
                    </div>
                    <MyInputPassword placeholder="?????????????? ????????????"/>
                    <div className="check-box-div">
                        <MyCheckBox id="remember" text="?????????????????? ????????"/>
                    </div>
                    <div className="singIN__buttons">
                        <div>
                            <MyButton>??????????</MyButton>
                        </div>
                        <span className="link-auth" onClick={openRegistration}>??????????????????????</span>
                    </div>

                </form>
                <form method="POST" className={moveReg} onSubmit={registration}>
                    <h1>?????????????????????? <span className="link-auth-back" onClick={closeRegistration}>??????????</span></h1>
                    <div className="content__line"></div>
                    <div className="auth-text">??????????</div>
                    <MyInput placeholder="?????????????? ??????????"
                        onChange={event => setRegLogin(event.target.value)}
                    />
                    <div className="auth-text">??????????</div>
                    <MyInput placeholder="?????????????? E-mail"
                        onChange={event => setRegEmail(event.target.value)}
                    />
                    <div className="auth-text">????????????</div>
                    <MyInputPassword placeholder="?????????????? ????????????"
                        onChange={event => setRegPassword(event.target.value)}
                    />
                    <div style={{marginBottom: '15px'}}></div>
                    <MyInputPassword placeholder="?????????????????????? ????????????"
                        onChange={event => setRegPasswordConfirm(event.target.value)}/>
                    <div style={{marginBottom: '15px'}}></div>
                    <MyButton>????????????????????????????????????</MyButton>

                </form>
            </div>

        </div>
    );
};

export default Authorization;