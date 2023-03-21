import { useEffect, useState } from "react";
import "../index.css";
import { useParams } from "react-router-dom";
import BlogPostScreenController from "./BlogPostScreenController";
import Blog from "../../models/Blog";

export default function BlogPostScreen() {
    const {id} = useParams();
    const [blog, setBlog] = useState(new Blog("", "", require("../assets/post_lg_2.jpg"), "", "", require("../assets/person_1.jpg")));
    const [controller, setController] = useState(new BlogPostScreenController(id, setBlog));

    useEffect(() => {
        controller.onInit();
    }, []);
    
    return <div>
        <div className="blog-post">
            <div className="blog-post-data-fields">
                <span className="blog-post-data-title">{blog.blogTitle}</span>
            </div>
            <div className="blog-post-data-fields">
                <img src={blog.blogImage}></img>
            </div>
            <div className="blog-post-data-fields">
                <span className="blog-post-data-detail">{blog.blogDetail}</span>
            </div>
        </div>
    </div>;
}