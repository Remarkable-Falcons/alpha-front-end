import history from './history';

export default class RedirectUtil {

    public static redirectToLoginPage(): void{
        history.push("/login");
    }

    static redirectToDashBoard(): void{
        history.push("/dashboard");
    }
}