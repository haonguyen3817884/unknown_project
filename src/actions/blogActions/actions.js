import { GET_UPLOADED_BLOGS, DELETE_BLOG } from "./types";

export const getUploadedBlogs = (blogs) => {
    return {
        type: GET_UPLOADED_BLOGS,
        payload: {
            blogs
        }
    };
};

export const deleteBlog = (_id) => {
    return {
        type: DELETE_BLOG,
        payload: {
            _id
        }
    };
};