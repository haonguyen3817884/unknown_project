import "../index.css";
import { LOGIN_LABEL, LOGIN, EMAIL_PLACEHOLDER, PASSWORD_PLACEHOLDER } from "../../config/constants";
import { getCustomerData } from "../../actions/authActions/actions";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import AuthApi from "../../base/networking/services/AuthApi";
import AuthScreenController from "./AuthScreenController";
import { useNavigate, useLocation } from "react-router-dom";

export default function AuthScreen() {
    const [emailInput, setEmailInput] = useState("");
    const [passwordInput, setPasswordInput] = useState("");
    const [controller, setController] = useState(new AuthScreenController(emailInput, passwordInput, useNavigate(), useLocation()));
    
    useEffect(() => {
        controller.onInit();
    }, []);
    
    return <div>
        <div className="auth">
            <div className="auth-label">{LOGIN_LABEL}</div>
            <div className="auth-form">
                <div className="auth-form-input"><input type="text" placeholder={EMAIL_PLACEHOLDER} value={emailInput} onChange={(e) => {controller.onEmailInputChanged(e.target.value, setEmailInput);}} /></div>
                <div className="auth-form-input"><input type="password" placeholder={PASSWORD_PLACEHOLDER} value={passwordInput} onChange={(e) => {controller.onPasswordInputChanged(e.target.value, setPasswordInput);}} /></div>
                <div className="auth-form-button"><button onClick={async () => {await controller.onButtonClicked();}}>{LOGIN}</button></div>
            </div>
        </div>
    </div>;
}