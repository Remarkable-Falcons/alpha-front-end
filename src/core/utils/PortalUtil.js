import axios from 'axios';

class PortalUtil {
    
    constructor(){
        console.log("PortalUtil is inicialized");
    }
    static baseUrl = "http://localhost:8080/strategicManagement";
    static getBaseUrl = () => {
        return this.baseUrl;
    }
    static createConnection = () => {
        return axios.create({
            baseURL: PortalUtil.getBaseUrl()
        });
    }
}


export default PortalUtil;