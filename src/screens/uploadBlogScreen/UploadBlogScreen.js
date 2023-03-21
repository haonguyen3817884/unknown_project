import "../index.css";
import { UPLOAD_A_BLOG_LABEL, UPLOAD, TITLE_PLACEHOLDER, DETAIL_PLACEHOLDER } from "../../config/constants";
import Button from "../../components/Button";
import ImageInput from "./components/ImageInput";
import { useEffect, useState } from "react";
import UploadBlogScreenController from "./UploadBlogScreenController";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

export default function UploadBlogScreen() {
    const [titleInput, setTitleInput] = useState("");
    const [imageInput, setImageInput] = useState("");
    const [detailInput, setDetailInput] = useState("");
    const customer = useSelector(state => state.authReducer);
    const [controller, setController] = useState(new UploadBlogScreenController(titleInput, imageInput, detailInput, useNavigate(), useDispatch()));
    
    useEffect(() => {
        controller.onInit();
    }, []);
    
    return <div>
        <div className="introduction">
            <div className="introduction-label">{UPLOAD_A_BLOG_LABEL}</div>
        </div>

        <div className="upload-form">
            <div className="upload-form-input">
                <input type="text" className="upload-form-input-title" placeholder={TITLE_PLACEHOLDER} value={titleInput} onChange={(e) => {controller.onTitleInputChanged(e.target.value, setTitleInput);}} />
            </div>
            <div className="upload-form-input">
                <ImageInput imageInput={imageInput} uploadImage={(input) => {controller.onImageInputChanged(input, setImageInput);}} />
            </div>
            <div className="upload-form-input">
                <textarea className="upload-form-input-detail" placeholder={DETAIL_PLACEHOLDER} value={detailInput} onChange={(e) => {controller.onDetailInputChanged(e.target.value, setDetailInput);}}></textarea>
            </div>
            <div className="upload-form-button">
                <Button name={UPLOAD} onClick={async () => {await controller.onButtonClicked();}} />
            </div>
        </div>
    </div>;
}