import PortalUtil from '../../utils/PortalUtil';

export default async function (login:
    {
        name: string,
        password: string
    }): Promise<any> {
    return PortalUtil.createConnection().post("/auth/login", {
        login: login.name,
        password: login.password
    })
    return false;
}
