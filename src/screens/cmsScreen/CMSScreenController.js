import BaseController from "../../base/controllers/BaseController";
import { LOGIN_ROUTE, CMS_SCREEN, AUTH_SCREEN, CMS_ROUTE, UPLOAD_BLOG_ROUTE, UPDATE_BLOG_ROUTE } from "../../config/constants";
import getPage from "../../sharedActions/getPage";
import AuthApi from "../../base/networking/services/AuthApi";
import Customer from "../../models/Customer";
import isMovedFromScreen from "../../sharedActions/isMovedFromScreen";
import getPreviousScreen from "../../sharedActions/getPreviousScreen";
import { getCustomerData } from "../../actions/authActions/actions";
import BlogApi from "../../base/networking/services/BlogApi";
import Blog from "../../models/Blog";
import { getUploadedBlogs, deleteBlog } from "../../actions/blogActions/actions";

class CMSScreenController extends BaseController {
    constructor(navigate, location, dispatch, setIsLoading) {
        super();
        this.navigate = navigate;
        this.location = location;
        this.dispatch = dispatch;
        this.authApi = new AuthApi();
        this.blogApi = new BlogApi();
        this.setIsLoading = setIsLoading;
    }

    async onInit() {
        if (this.isTokenSaved()) {
            await this.setCustomerData();
            await this.setUploadedBlogs();
        } else {
            this.navigate(LOGIN_ROUTE, {state: getPage(CMS_ROUTE)});
        }    
    }

    onButtonClicked() {
        this.navigate(UPLOAD_BLOG_ROUTE, {state: getPage(CMS_ROUTE)});
    }

    onEditButtonClicked(blog) {
        this.navigate(UPDATE_BLOG_ROUTE, {state: {
            pageName: CMS_ROUTE,
            blog: blog
        }});
    }

    async onDeleteButtonClicked(blogId) {
        await this.deleteUploadedBlog(blogId);
    }

    async setCustomerData() {
        this.setIsLoading(true);
        
        const data = await this.authApi.getCustomerData(this.getToken());
            
        if (data.message !== undefined) {
            this.setIsLoading(false);
            
            this.removeToken();
                
            this.navigate(LOGIN_ROUTE, {state: getPage(CMS_ROUTE)});
        } else {
            this.dispatch(getCustomerData({customer: Customer.fromJson(data)}));
            this.setIsLoading(false);
        }
    }

    async setUploadedBlogs() {
        this.setIsLoading(true);
        
        const data = await this.blogApi.getBlogs();

        let blogs = [];

        for (let i = 0; i < data.length; ++i) {
            blogs.push(Blog.fromJson(data[i]));
        }

        this.dispatch(getUploadedBlogs(blogs));
        this.setIsLoading(false);
    }

    async deleteUploadedBlog(blogId) {
        this.setIsLoading(true);
        
        const data = await this.blogApi.deleteBlog(blogId, this.getToken());
        
        this.dispatch(deleteBlog(blogId));
        this.setIsLoading(false);
    }
}

export default CMSScreenController;