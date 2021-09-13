import axios from 'axios';
import User from '../entity/user.model';

class PortalUtil {
    
    static baseUrl = "http://localhost:8080/strategicManagement";
    // currentUser ainda nao foi implementado
    static currentUser: User;
    static userToken: string;

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
}


export default PortalUtil;