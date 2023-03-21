import { GET_UPLOADED_BLOGS, DELETE_BLOG } from "../actions/blogActions/types";

export default function blogReducer(state = [], action) {
    switch(action.type) {
        case GET_UPLOADED_BLOGS:
            return [].concat(action.payload.blogs);
        case DELETE_BLOG:
            return state.filter((blog) => {
                return blog._id !== action.payload._id;
            });
        default:
            return state;
    }
}