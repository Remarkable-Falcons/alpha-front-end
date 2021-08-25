import React from 'react';

export default () => {
    return (
        <div>
            <div class="background h-100 w-100">
                <div class="loginbox">
                    <img src="assets/images/avatar.png" class="avatar" />
                    <h1>Login Here</h1>
                    <form name="frmlogin">
                        <p>Username</p>
                        <input type="text" name="usuariotxt" id="usuariotxt" placeholder="Enter Username" formControlName="login" />
                        <p>Senha</p>
                        <input type="password" name="senhatxt" id="senhatxt" placeholder="Enter Password2" formControlName="password" />
                        <input type="submit" name="" value="Login" />
                        <a href="#">Don't have an account?</a>
                    </form>
                    <div class="msg-error" id="error">
                        <p>Usuario ou senha incorretos</p>
                    </div>
                </div>
            </div>
        </div>
    );
};