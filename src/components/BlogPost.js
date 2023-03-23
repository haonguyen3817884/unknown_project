import AvatarCard from "./AvatarCard";

export default function BlogPost(props) {
    let blogImageStyle = {};

    let imageStyle = {
        borderRadius: "17px",
        maxWidth: "100%",
        width: "100%",
        height: "250px"
    };

    let blogTitleStyle = {
        marginTop: "17px",
        fontFamily: "Times New Roman, serif",
        fontSize: "43px",
        fontWeight: "bold"
    };

    let blogDetailStyle = {
        marginTop: "17px",
        fontFamily: "Times New Roman, serif",
        fontSize: "17px",
        fontWeight: "normal",
        color: "#b6b6b6"
    };

    let blogAvatarStyle = {
        marginTop: "17px"
    };
    
    return <div onClick={() => {props.onBlogClicked();}}>
        <div style={blogImageStyle}><img style={imageStyle} src={props.blogImage} /></div>
        <div style={blogTitleStyle}>{props.blogTitle}</div>
        <div style={blogDetailStyle}>{props.blogDetail}</div>
        <div style={blogAvatarStyle}><AvatarCard customerAvatar={props.blogAuthorAvatar} customerName={props.blogAuthorName} /></div>
    </div>;
}