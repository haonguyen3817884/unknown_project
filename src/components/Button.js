import { useState } from "react";

export default function Button(props) {
    const yellow = "yellow";
    const white = "#ffffff";
    const black = "#111111";
    const [backgroundColor, setBackgroundColor] = useState(yellow);
    const [color, setColor] = useState(black);
    
    let buttonStyle = {
        backgroundColor: backgroundColor,
        padding: "17px 174px",
        border: "yellow 1px solid",
        borderRadius: "43px",
        fontSize: "17px",
        color: color
    };

    const onMouseOver = () => {
        setBackgroundColor(white);
        setColor(yellow);
    };

    const onMouseOut = () => {
        setBackgroundColor(yellow);
        setColor(black);
    }
    
    return <button style={buttonStyle} onClick={props.onClick} type="button" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>{props.name}</button>;
}