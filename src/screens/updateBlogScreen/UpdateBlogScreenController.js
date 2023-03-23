import BaseController from "../../base/controllers/BaseController";
import { LOGIN_ROUTE, UPDATE_BLOG_ROUTE, CMS_ROUTE } from "../../config/constants";
import getPage from "../../sharedActions/getPage";
import BlogApi from "../../base/networking/services/BlogApi";
import AuthApi from "../../base/networking/services/AuthApi";
import { getCustomerData } from "../../actions/authActions/actions";
import Customer from "../../models/Customer";
import Blog from "../../models/Blog";

class UpdateBlogScreenController extends BaseController {
    constructor(titleInput, imageInput, detailInput, navigate, dispatch, location, setTitleInput, setImageInput, setDetailInput, setIsLoading) {
        super();
        this.titleInput = titleInput;
        this.imageInput = imageInput;
        this.detailInput = detailInput;
        this.navigate = navigate;
        this.blogApi = new BlogApi();
        this.authApi = new AuthApi();
        this.dispatch = dispatch;
        this.customer = new Customer("", "", "");
        this.location = location;
        this.setTitleInput = setTitleInput;
        this.setImageInput = setImageInput;
        this.setDetailInput = setDetailInput;
        this._id = "";
        this.setIsLoading = setIsLoading;
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
            
            this.setIsLoading(true);
            
            if (this.isBlogDataSent()) {
                let blog = Blog.fromJson(this.getSentBlogData());

                this._id = blog._id;
                this.titleInput = blog.blogTitle;
                this.imageInput = blog.blogImage;
                this.detailInput = blog.blogDetail;
                this.setTitleInput(blog.blogTitle);
                this.setImageInput(blog.blogImage);
                this.setDetailInput(blog.blogDetail);
                this.setIsLoading(false);
            } else {
                this.setIsLoading(false);
                this.navigate(CMS_ROUTE, {state: getPage(UPDATE_BLOG_ROUTE)});
            }
        } else {
            this.navigate(LOGIN_ROUTE, {state: getPage(UPDATE_BLOG_ROUTE)});
        }
    }

    async onButtonClicked() {
        this.setIsLoading(true);
        
        const blogImage = this.imageInput === "" ? require("../assets/post_lg_2.jpg") : this.imageInput;
        
        const blog = new Blog(this._id, this.titleInput, blogImage, this.detailInput, this.customer.firstName + " " + this.customer.lastName, require("../assets/person_1.jpg"));

        const data = await this.blogApi.updateBlog(blog, this.getToken());

        this.setIsLoading(false);
        
        if (data.message !== undefined) {
            console.log(data.message);
        } else {
            this.navigate(CMS_ROUTE, {state: getPage(UPDATE_BLOG_ROUTE)});
        }
    }

    async setCustomerData() {
        this.setIsLoading(true);
        
        const data = await this.authApi.getCustomerData(this.getToken());

        if (data.message !== undefined) {
            this.setIsLoading(false);
            
            this.removeToken();

            this.navigate(LOGIN_ROUTE, {state: getPage(UPDATE_BLOG_ROUTE)});
        } else {
            const customer = Customer.fromJson(data);
            this.customer = customer;
            this.dispatch(getCustomerData({customer: customer}));
            this.setIsLoading(false);
        }
    }

    isBlogDataSent() {
        let isSent = true;

        if (this.location === undefined || this.location === null) {
            isSent = false;
        } else {
            let {state} = this.location;

            if (state === undefined || state === null) {
                isSent = false;
            } else {
                let {blog} = state;

                if (blog === undefined || blog === null) {
                    isSent = false;
                }
            }
        }

        return isSent;
    }

    getSentBlogData() {
        let {state} = this.location;

        let {blog} = state;

        return blog;
    }
}

export default UpdateBlogScreenController;