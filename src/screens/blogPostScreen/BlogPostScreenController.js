import BaseController from "../../base/controllers/BaseController";
import BlogApi from "../../base/networking/services/BlogApi";
import Blog from "../../models/Blog";

class BlogPostScreenController extends BaseController {
    constructor(blogId, setBlog) {
        super();
        this.blogId = blogId;
        this.blogApi = new BlogApi();
        this.setBlog = setBlog;
    }

    async onInit() {
        await this.setBlogData();
    }

    async setBlogData() {
        let data = await this.blogApi.getBlog(this.blogId);

        if (data.message !== undefined) {
            console.log(data.message);
        } else {
            let blog = Blog.fromJson(data);

            this.setBlog(blog);
        }
    }
}

export default BlogPostScreenController;