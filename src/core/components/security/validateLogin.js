import PortalUtil from './../../utils/PortalUtil';

export default  (login) => {
    PortalUtil.createConnection().post("/auth/login", {
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
