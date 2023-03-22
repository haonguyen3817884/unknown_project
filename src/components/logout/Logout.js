import { useEffect, useState } from "react";
import LogoutController from "./LogoutController";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const none = "none";
  const underline = "underline";
  
  const [textDecoration, setTextDecoration] = useState(none);
  const [controller, setController] = useState(new LogoutController(useNavigate()));
  
  const buttonStyle = {
    border: "none",
    textDecoration: textDecoration,
    backgroundColor: "#ffffff",
    fontFamily: "Times New Roman, serif",
    fontSize: "17px",
    fontWeight: "normal"
  };

  const onMouseOver = () => {
    setTextDecoration(underline);
  };

  const onMouseOut = () => {
    setTextDecoration(none);
  };

  useEffect(() => {
    controller.onInit();
  }, []);
  
  return <div>
    <button type="button" style={buttonStyle} onMouseOver={onMouseOver} onMouseOut={onMouseOut} onClick={() => {controller.onButtonClicked();}}>Log out</button>
  </div>;
}