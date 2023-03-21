import BaseController from "../../base/controllers/BaseController";
import BlogApi from "../../base/networking/services/BlogApi";
import Blog from "../../models/Blog";
import { getUploadedBlogs } from "../../actions/blogActions/actions";
import getPage from "../../sharedActions/getPage";
import { BLOG_POSTS_ROUTE, BLOG_POST_ROUTE } from "../../config/constants";

class BlogPostsScreenController extends BaseController {
    constructor(dispatch, navigate) {
        super();
        this.blogApi = new BlogApi();
        this.dispatch = dispatch;
        this.navigate = navigate;
    }

    async onInit() {
        await this.setUploadedBlogs();
    }

    async setUploadedBlogs() {
        let data = await this.blogApi.getBlogs();

        let blogs = [];

        for (let i = 0; i < data.length; ++i) {
            blogs.push(Blog.fromJson(data[i]));
        }

        this.dispatch(getUploadedBlogs(blogs));
    }

    onBlogClicked(blogId) {
        this.navigate(BLOG_POST_ROUTE + "/" + blogId, {state: getPage(BLOG_POSTS_ROUTE)});
    }
}

export default BlogPostsScreenController;