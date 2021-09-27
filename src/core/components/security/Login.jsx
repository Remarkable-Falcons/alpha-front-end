import React, { Component, useState } from 'react';
import './style.css';
import avatarIcon from './../../../assets/images/avatar.png';
import validateLogin from './validateLogin';
import { Redirect } from 'react-router-dom';
import PortalUtil from '../../shared/utils/PortalUtil';
import RedirectUtil from '../../shared/utils/RedirectUtil';
import User from '../../shared/model/user.model';

class Login extends Component {

    state = {
        name: "",
        password: "",
        redirect: false
    };

    changeName = (event) => {
        this.setState({ name: event.target.value });
    }

    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    login = () => {
        let promiseLogin = validateLogin({
            login: this.state.name,
            password: this.state.password
        });
        promiseLogin
            .then(result => {
                PortalUtil.setUserToken(result.data.token);
                PortalUtil.setCurrentUser(new User());   
                RedirectUtil.redirectToDashBoard();
            })
            .catch(err => {
                console.log(err);
            })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/dashboard" />
        }
        else {
            return (
                <div>

                    <div class="wrapper fadeInDown">
                        <div id="formContent">



                            <div class="fadeIn first">
                                <img src={avatarIcon} id="icon" alt="User Icon" />
                            </div>


                            <form name="frmlogin">
                                <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" value={this.name} onChange={this.changeName} />
                                <input type="password" id="password" class="fadeIn third" name="password" placeholder="password" value={this.password} onChange={this.changePassword} />
                                <input type="button" class="fadeIn fourth" value="Log In" onClick={this.login} />
                            </form>

                            <div id="formFooter">
                                <a class="underlineHover" href="#">Forgot Password?</a>
                            </div>

                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Login;