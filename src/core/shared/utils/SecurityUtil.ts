import PortalUtil from "./PortalUtil";

export default class SecurityUtil {
    
    static isAutenticated(): boolean {
        return PortalUtil.getCurrentUser() ? true : false;
    }
}