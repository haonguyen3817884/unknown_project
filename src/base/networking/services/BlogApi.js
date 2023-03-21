import Api from "../api/Api";
import { BASE_DOMAIN, BLOG_API, UPLOAD_BLOG_ENDPOINT, ERROR, GET_BLOGS_ENDPOINT, UPDATE_BLOG_ENDPOINT, DELETE_BLOG_ENDPOINT, GET_BLOG_ENDPOINT } from "../../../config/constants";
import Blog from "../../../models/Blog";
import ApiResponse from "../../../models/ApiResponse";
import ListApiResponse from "../../../models/ListApiResponse";

class BlogApi {
    constructor() {
        this.api = new Api(BASE_DOMAIN + BLOG_API);
    }

    async uploadBlog(blog, token) {
        try {
            let body = Blog.toJson(blog);

            let response = await this.api.postAuthenticatedData(UPLOAD_BLOG_ENDPOINT, body, token);

            let apiResponse = ApiResponse.fromJson(response.data);

            if (apiResponse.error) {
                return {
                    message: apiResponse.message
                };
            }

            let data = apiResponse.data;
            
            return data;
        } catch(error) {
            console.log(error);
            return {
                message: ERROR
            };
        }
    }

    async getBlogs() {
        try {
            let response = await this.api.getData(GET_BLOGS_ENDPOINT, {});
            
            let listApiResponse = ListApiResponse.fromJson(response.data);

            if (listApiResponse.error) {
                return {
                    message: listApiResponse.message
                };
            }

            let data = listApiResponse.data;

            return data;
        } catch(error) {
            console.log(error);
            return {
                message: ERROR
            };
        }
    }

    async updateBlog(blog, token) {
        try {
            let body = Blog.toJson(blog);

            let response = await this.api.putAuthenticatedData(UPDATE_BLOG_ENDPOINT, body, token);

            let apiResponse = ApiResponse.fromJson(response.data);

            if (apiResponse.error) {
                return {
                    message: apiResponse.message
                };
            }

            let data = apiResponse.data;

            return data;
        } catch(error) {
            console.log(error);
            return {
                message: ERROR
            };
        }
    }

    async deleteBlog(blogId, token) {
        try {
            let response = await this.api.deleteAuthenticatedData(DELETE_BLOG_ENDPOINT + "/" + blogId, {}, token);
            
            let listApiResponse = ListApiResponse.fromJson(response.data);

            if (listApiResponse.error) {
                return {
                    message: listApiResponse.message
                };
            }

            let data = listApiResponse.data;

            return data;
        } catch(error) {
            console.log(error);
            return {
                message: ERROR
            };
        }
    }

    async getBlog(blogId) {
        try {
            let response = await this.api.getData(GET_BLOG_ENDPOINT + "/" + blogId, {});
            
            let apiResponse = ApiResponse.fromJson(response.data);

            if (apiResponse.error) {
                return {
                    message: apiResponse.message
                };
            }

            let data = apiResponse.data;

            return data;
        } catch(error) {
            console.log(error);
            return {
                message: ERROR
            };
        }
    }
}

export default BlogApi;