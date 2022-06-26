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
                    <h1>Восстановление <span className="link-auth-back" onClick={closeRestore}>Назад</span></h1>
                    <div className="content__line"></div>
                    <MyInput placeholder="Введите ваш E-mail"/>
                    <div style={{marginBottom: '15px'}}></div>
                    <MyButton type='submit'>Сбросить пароль</MyButton>

                </form>
                <form method="POST" className={moveAuth} onSubmit={login}>
                    <h1>Авторизация</h1>
                    <div className="content__line"></div>
                    <div className="content__title">Вход через логин или email</div>
                    <MyInput placeholder="Введите логин или email" style={{marginBottom: '20px'}}/>
                    <div className="content-right">
                        <span className="link-auth" onClick={openRestore}>Забыли пароль?</span>
                    </div>
                    <MyInputPassword placeholder="Введите пароль"/>
                    <div className="check-box-div">
                        <MyCheckBox id="remember" text="Запомнить меня"/>
                    </div>
                    <div className="singIN__buttons">
                        <div>
                            <MyButton>Войти</MyButton>
                        </div>
                        <span className="link-auth" onClick={openRegistration}>Регистрация</span>
                    </div>

                </form>
                <form method="POST" className={moveReg} onSubmit={registration}>
                    <h1>Регистрация <span className="link-auth-back" onClick={closeRegistration}>Назад</span></h1>
                    <div className="content__line"></div>
                    <div className="auth-text">Логин</div>
                    <MyInput placeholder="Введите логин"
                        onChange={event => setRegLogin(event.target.value)}
                    />
                    <div className="auth-text">Почта</div>
                    <MyInput placeholder="Введите E-mail"
                        onChange={event => setRegEmail(event.target.value)}
                    />
                    <div className="auth-text">Пароль</div>
                    <MyInputPassword placeholder="Введите пароль"
                        onChange={event => setRegPassword(event.target.value)}
                    />
                    <div style={{marginBottom: '15px'}}></div>
                    <MyInputPassword placeholder="Подтвердите пароль"
                        onChange={event => setRegPasswordConfirm(event.target.value)}/>
                    <div style={{marginBottom: '15px'}}></div>
                    <MyButton>Зарегистрироваться</MyButton>

                </form>
            </div>

        </div>
    );
};

export default Authorization;