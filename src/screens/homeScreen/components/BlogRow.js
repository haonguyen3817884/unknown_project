import BlogPost from "../../../components/BlogPost";

export default function BlogRow(props) {
    const blogPostWidth = (100/3) - 10;
    
    let rowStyle = {
        
    };
    
    let blogPostStyle = {
        float: "left",
        padding: "0% 5%",
        width: blogPostWidth.toString() + "%"
    };

    let clearFloat = {
        clear: "both"
    };
    
    return <div style={rowStyle}>
        {props.row.map((blog) => {
            return <div style={blogPostStyle}><BlogPost blogImage={blog.blogImage} blogTitle={blog.blogTitle} blogDetail={blog.blogDetail} blogAuthorAvatar={blog.blogAuthorAvatar} blogAuthorName={blog.blogAuthorName} onBlogClicked={() => {props.onBlogClicked(blog._id);}} /></div>;
        })}
        <div style={clearFloat}></div>
    </div>;
}