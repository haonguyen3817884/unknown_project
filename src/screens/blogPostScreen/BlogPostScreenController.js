import BaseController from "../../base/controllers/BaseController";
import BlogApi from "../../base/networking/services/BlogApi";
import Blog from "../../models/Blog";

class BlogPostScreenController extends BaseController {
    constructor(blogId, setBlog, setIsLoading) {
        super();
        this.blogId = blogId;
        this.blogApi = new BlogApi();
        this.setBlog = setBlog;
        this.setIsLoading = setIsLoading;
    }

    async onInit() {
        await this.setBlogData();
    }

    async setBlogData() {
        this.setIsLoading(true);
        
        let data = await this.blogApi.getBlog(this.blogId);

        if (data.message !== undefined) {
            console.log(data.message);

            this.setIsLoading(false);
        } else {
            let blog = Blog.fromJson(data);

            this.setBlog(blog);
            this.setIsLoading(false);
        }
    }
}

export default BlogPostScreenController;