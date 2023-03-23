import BaseController from "../../base/controllers/BaseController";
import BlogApi from "../../base/networking/services/BlogApi";
import Blog from "../../models/Blog";
import { getUploadedBlogs } from "../../actions/blogActions/actions";
import getPage from "../../sharedActions/getPage";
import { BLOG_POSTS_ROUTE, BLOG_POST_ROUTE } from "../../config/constants";

class BlogPostsScreenController extends BaseController {
    constructor(dispatch, navigate, setIsLoading) {
        super();
        this.blogApi = new BlogApi();
        this.dispatch = dispatch;
        this.navigate = navigate;
        this.setIsLoading = setIsLoading;
    }

    async onInit() {
        await this.setUploadedBlogs();
    }

    async setUploadedBlogs() {
        this.setIsLoading(true);
        
        let data = await this.blogApi.getBlogs();

        let blogs = [];

        for (let i = 0; i < data.length; ++i) {
            blogs.push(Blog.fromJson(data[i]));
        }

        this.dispatch(getUploadedBlogs(blogs));
        this.setIsLoading(false);
    }

    onBlogClicked(blogId) {
        this.navigate(BLOG_POST_ROUTE + "/" + blogId, {state: getPage(BLOG_POSTS_ROUTE)});
    }
}

export default BlogPostsScreenController;