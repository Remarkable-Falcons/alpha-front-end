import React, { Component, useState } from 'react';
import NavbarService from '../../../shared/service/NavbarService';
import { NavbarComponent} from './../navbar/NavbarComponent';

class Dasahboard extends Component {
    render() {
        return (<div>
            <NavbarComponent></NavbarComponent>
        </div>)
    }
}

export default Dasahboard;