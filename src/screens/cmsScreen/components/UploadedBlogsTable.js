import Blog from "../../../models/Blog";

export default function UploadedBlogsTable(props) {
    const cellWidth = 100/3;
    
    const tableStyle = {
        borderCollapse: "collapse",
        width: "100%"
    };
    
    const thStyle = {
        borderTop: "#111111 1px solid",
        padding: "17px 0px",
        borderBottom: "#111111 1px solid",
        width: cellWidth.toString() + "%",
        textAlign: "center"
    };

    const tdStyle = {
        borderTop: "#111111 1px solid",
        padding: "17px 0px",
        borderBottom: "#111111 1px solid",
        width: cellWidth.toString() + "%",
        textAlign: "center"
    };

    const deleteIconStyle = {
        marginLeft: "17px",
        color: "#111111"
    };
    
    return <table style={tableStyle}>
        <thead>
            <tr>
                <th style={thStyle}>Id</th>
                <th style={thStyle}>Title</th>
                <th style={thStyle}></th>
            </tr>
        </thead>
        <tbody>
            {props.blogs.map((blog) => {
                return <tr>
                    <td style={tdStyle}>{blog._id}</td>
                    <td style={tdStyle}>{blog.blogTitle}</td>
                    <td style={tdStyle}>
                        <i className="far fa-edit" onClick={() => {props.onEditButtonClicked(Blog.toJson(blog));}}></i>
                        <i className="far fa-trash-alt" style={deleteIconStyle} onClick={async () => {await props.onDeleteButtonClicked(blog._id);}}></i>
                    </td>
                </tr>;
            })}
        </tbody>
    </table>;
}