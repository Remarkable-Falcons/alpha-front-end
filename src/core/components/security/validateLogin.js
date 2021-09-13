import PortalUtil from './../../utils/PortalUtil';

export default  async (login) => {
    console.log(PortalUtil.createConnection());
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
