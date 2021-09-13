import React, { Component, useState } from 'react';
import './style.css';
import avatarIcon from './../../../assets/images/avatar.png';
import validateLogin from './validateLogin';


class Security extends Component {

    state = {
        name: "",
        password: ""
    };
    
    changeName = (event) => {
        this.setState({ name: event.target.value });
    }

    changePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    login = () => {
        validateLogin(this.state);
    }

    render() {
        return (
            <div>
                <div class="wrapper fadeInDown">
                    <div id="formContent">



                        <div class="fadeIn first">
                            <img src={avatarIcon} id="icon" alt="User Icon"/>
                        </div>


                        <form name="frmlogin">
                            <input type="text" id="login" class="fadeIn second" name="login" placeholder="login" value={this.name} onChange={this.changeName}/>
                            <input type="password" id="password" class="fadeIn third" name="password" placeholder="password" value={this.password} onChange={this.changePassword} />
                            <input type="button" class="fadeIn fourth" value="Log In" onClick={this.login}/>
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

export default Security;