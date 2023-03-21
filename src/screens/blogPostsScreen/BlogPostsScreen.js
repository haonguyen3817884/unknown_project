import "../index.css";
import { BLOG_POSTS_LABEL } from "../../config/constants";
import BlogList from "../homeScreen/components/BlogList";
import BlogPostsScreenController from "./BlogPostsScreenController";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function BlogPostsScreen() {
    const blogs = useSelector(state => state.blogReducer);
    const [controller, setController] = useState(new BlogPostsScreenController(useDispatch(), useNavigate()));
    
    useEffect(() => {
        controller.onInit();
    }, []);

    return <div>
        <div className="blog-posts">
            <div className="blog-posts-label">{BLOG_POSTS_LABEL}</div>
            <div className="blog-posts-detail"><BlogList list={blogs} onBlogClicked={(blogId) => {controller.onBlogClicked(blogId);}} /></div>
        </div>
    </div>;
}