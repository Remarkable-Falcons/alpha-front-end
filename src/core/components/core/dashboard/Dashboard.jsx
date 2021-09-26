import React, { Component, useState } from 'react';
import { NavbarComponent} from '../navbar/NavbarComponent';
import ReactDOM from 'react-dom';
import Main from '../main/Main';

class Dasahboard extends Component {
    render() {
        this.initMain();
        return (
            <div>
                <NavbarComponent></NavbarComponent>
            </div>)
    }

    initMain = () => {
        ReactDOM.render(
            <Main></Main>,
            document.getElementById('main')
        )
    }
}

export default Dasahboard;