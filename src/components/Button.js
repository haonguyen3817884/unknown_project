export default function Button(props) {
    let buttonStyle = {
        backgroundColor: "yellow",
        padding: "17px 174px",
        border: "none",
        borderRadius: "43px",
        fontSize: "17px"
    };
    
    return <button style={buttonStyle} onClick={props.onClick} type="button">{props.name}</button>;
}