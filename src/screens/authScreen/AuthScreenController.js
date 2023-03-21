import BaseController from "../../base/controllers/BaseController";
import AuthApi from "../../base/networking/services/AuthApi";
import { CMS_ROUTE, LOGIN_ROUTE, AUTH_SCREEN, CMS_SCREEN } from "../../config/constants";
import getPage from "../../sharedActions/getPage";
import isMovedFromScreen from "../../sharedActions/isMovedFromScreen";
import getPreviousScreen from "../../sharedActions/getPreviousScreen";

class AuthScreenController extends BaseController {
    constructor(emailInput, passwordInput, navigate, location) {
        super();
        this.authApi = new AuthApi();
        this.emailInput = emailInput;
        this.passwordInput = passwordInput;
        this.navigate = navigate;
        this.location = location;
    }

    onInit() {
        if (this.isTokenSaved()) {
            this.navigate(CMS_ROUTE, {state: getPage(LOGIN_ROUTE)});
        }
    }

    onEmailInputChanged(emailInput, callback) {
        this.emailInput = emailInput;
        callback(emailInput);
    }

    onPasswordInputChanged(passwordInput, callback) {
        this.passwordInput = passwordInput;
        callback(passwordInput);
    }

    async onButtonClicked() {
        const data = await this.authApi.login(this.emailInput, this.passwordInput);
    
        if (data.message === undefined) {
            this.saveToken(data.token);

            let previousScreen = "";

            previousScreen = getPreviousScreen(this.location);

            if (previousScreen === "") {
                this.navigate(CMS_ROUTE, {state: getPage(LOGIN_ROUTE)});
            } else {
                this.navigate(previousScreen, {state: getPage(LOGIN_ROUTE)});
            }
        }
    }
}

export default AuthScreenController;