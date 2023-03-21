import "../index.css";
import { CHANGE_PASSWORD_LABEL, CHANGE_PASSWORD, PASSWORD_PLACEHOLDER, NEW_PASSWORD_PLACEHOLDER } from "../../config/constants";
import { useEffect, useState } from "react";
import ChangePasswordScreenController from "./ChangePasswordScreenController";
import { useNavigate } from "react-router-dom";

export default function ChangePasswordScreen() {
    const [controller, setController] = useState(new ChangePasswordScreenController(useNavigate()));
    
    useEffect(() => {
        controller.onInit();
    }, []);
    
    return <div>
        <div className="auth">
            <div className="auth-label">{CHANGE_PASSWORD_LABEL}</div>
            <div className="auth-form">
                <div className="auth-form-input"><input type="password" placeholder={PASSWORD_PLACEHOLDER} /></div>
                <div className="auth-form-input"><input type="password" placeholder={NEW_PASSWORD_PLACEHOLDER} /></div>
                <div className="auth-form-input"><input type="password" placeholder={NEW_PASSWORD_PLACEHOLDER} /></div>
                <div className="auth-form-button"><button>{CHANGE_PASSWORD}</button></div>
            </div>
        </div>
    </div>;
}