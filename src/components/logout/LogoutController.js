import BaseController from "../../base/controllers/BaseController.js";
import getPage from "../../sharedActions/getPage";
import { CMS_ROUTE, LOGIN_ROUTE } from "../../config/constants";

class LogoutController extends BaseController {
  constructor(navigate) {
    super();
    this.navigate = navigate;
  }

  onInit() {

  }

  onButtonClicked() {
    this.removeToken();

    this.navigate(LOGIN_ROUTE, {state: getPage(CMS_ROUTE)});
  }
}

export default LogoutController;