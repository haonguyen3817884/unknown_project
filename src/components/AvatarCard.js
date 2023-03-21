export default function AvatarCard(props) {
    let customerAvatarStyle = {
        float: "left",
        width: "54px"
    };

    let customerNameStyle = {
        float: "left",
        width: "40%",
        marginLeft: "17px",
        fontFamily: "Times New Roman, serif",
        fontSize: "17px",
        fontWeight: "bold"
    };

    let clearFloat = {
        clear: "both"
    };

    let imageStyle = {
        maxWidth: "100%",
        maxHeight: "100%",
        borderRadius: "43px"
    };

    let cardStyle = {
        width: "100%"
    };
    
    return <div style={cardStyle}>
        <div style={customerAvatarStyle}>
            <img src={props.customerAvatar} style={imageStyle}></img>
        </div>
        <div style={customerNameStyle}><p>{props.customerName}</p></div>
        <div style={clearFloat}></div>
    </div>;
}