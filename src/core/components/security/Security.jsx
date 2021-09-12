import React, { Component, useState } from 'react';
import './style.css';
import validateLogin from './validateLogin';


class Security extends Component{

    state = {
        name: "",
        password: ""
    };

    changeName = (event) => {
        this.setState({name: event.target.value});
    }

    changePassword = (event) => {
        this.setState({password: event.target.value});
    }

    login = () => {
        validateLogin();
    }

    render(){
        return (
            <div>
                <div class="background h-100 w-100">
                    <div class="loginbox">
                        <img src="./../../../assets/images/avatar.png" class="avatar" />
                        <h1>Login Here</h1>
                        <form name="frmlogin">
                            <p>Username</p>
                            <input type="text" name="usuariotxt" id="usuariotxt" placeholder="Enter Username" value={this.name} onChange={this.changeName}/>
                            <p>Senha</p>
                            <input type="password" name="senhatxt" id="senhatxt" placeholder="Enter Password2" value={this.password} onChange={this.changePassword}/>
                            <input type="submit" name="" value="Login" onClick={this.login}/>
                            <a href="#">Don't have an account?</a>
                        </form>
                        <div class="msg-error" id="error">
                            <p>Usuario ou senha incorretos</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Security;