import axios from 'axios';
import Enterprise from '../../model/Enterprise';
import User from '../../model/user.model';

class PortalUtil {
    
    static baseUrl = "http://localhost:8080/strategicManagement";
    // currentUser ainda nao foi implementado
    static currentUser: User;
    static userToken: string;
    private static enterprise: Enterprise;

    constructor(){
        console.log("PortalUtil is inicialized");
    }

    static getBaseUrl = () => {
        return this.baseUrl;
    }

    static createConnection = () => {
        return axios.create({
            baseURL: PortalUtil.getBaseUrl()
        });
    }

    static setCurrentUser = (newUser: User) =>{
        this.currentUser = newUser;
    }

    static getCurrentUser(): User{
        return this.currentUser;
    }

    static setUserToken(newToken: string): void{
        this.userToken = newToken;
    }

    static getUserToken(): string{
        return this.userToken;
    }

    static getEnterprise(): Enterprise{
        return this.enterprise;
    }
}


export default PortalUtil;