import PortalUtil from '../../utils/PortalUtil';

export default (login:
    {
        name: string,
        password: string
    }
) => {
    PortalUtil.createConnection().post("/auth/login", {
        login: login.name,
        password: login.password
    })
        .then(response => {
            PortalUtil.setUserToken(response.data.token);
            console.log(response);
        })
        .catch(err => {
            console.log(err);
        })
}
