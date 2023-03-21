import BaseController from "../../base/controllers/BaseController";
import { LOGIN_ROUTE, UPLOAD_BLOG_ROUTE, CMS_ROUTE } from "../../config/constants";
import getPage from "../../sharedActions/getPage";
import BlogApi from "../../base/networking/services/BlogApi";
import AuthApi from "../../base/networking/services/AuthApi";
import { getCustomerData } from "../../actions/authActions/actions";
import Customer from "../../models/Customer";
import Blog from "../../models/Blog";

class UploadBlogScreenController extends BaseController {
    constructor(titleInput, imageInput, detailInput, navigate, dispatch) {
        super();
        this.titleInput = titleInput;
        this.imageInput = imageInput;
        this.detailInput = detailInput;
        this.navigate = navigate;
        this.blogApi = new BlogApi();
        this.authApi = new AuthApi();
        this.dispatch = dispatch;
        this.customer = new Customer("", "", "");
    }

    onTitleInputChanged(titleInput, callback) {
        this.titleInput = titleInput;
        callback(titleInput);
    }

    onImageInputChanged(imageInput, callback) {
        this.imageInput = imageInput;
        callback(imageInput);
    }

    onDetailInputChanged(detailInput, callback) {
        this.detailInput = detailInput;
        callback(detailInput);
    }
    
    async onInit() {
        if (this.isTokenSaved()) {
            await this.setCustomerData();
        } else {
            this.navigate(LOGIN_ROUTE, {state: getPage(UPLOAD_BLOG_ROUTE)});
        }
    }

    async onButtonClicked() {
        const blogImage = this.imageInput === "" ? require("../assets/post_lg_2.jpg") : this.imageInput;
        
        const blog = new Blog("", this.titleInput, blogImage, this.detailInput, this.customer.firstName + " " + this.customer.lastName, require("../assets/person_1.jpg"));

        const data = await this.blogApi.uploadBlog(blog, this.getToken());

        if (data.message !== undefined) {
            console.log(data.message);
        } else {
            this.navigate(CMS_ROUTE, {state: getPage(UPLOAD_BLOG_ROUTE)});
        }
    }

    async setCustomerData() {
        const data = await this.authApi.getCustomerData(this.getToken());

        if (data.message !== undefined) {
            this.removeToken();

            this.navigate(LOGIN_ROUTE, {state: getPage(UPLOAD_BLOG_ROUTE)});
        } else {
            const customer = Customer.fromJson(data);
            this.customer = customer;
            this.dispatch(getCustomerData({customer: customer}));
        }
    }
}

export default UploadBlogScreenController;