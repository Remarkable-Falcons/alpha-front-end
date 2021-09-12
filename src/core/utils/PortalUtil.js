import axios from 'axios';

class PortalUtil {
    
    static baseUrl = "localhost:8080/";
    static getBaseUrl(){
        return this.baseUrl;
    }
    static createConnection(){
        return axios.create({
            baseURL: PortalUtil.getBaseUrl()
        });
    }
}

export default PortalUtil;