import PortalUtil from '../../utils/PortalUtil';
import axios from 'axios';

export default (login) => {
    debugger;
    PortalUtil.getConnection().post("/validate/login",{
        login: login.name,
        password: login.password
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })
}