import "../index.css";
import { UPDATE_A_BLOG_LABEL, UPDATE, TITLE_PLACEHOLDER, DETAIL_PLACEHOLDER } from "../../config/constants";
import Button from "../../components/Button";
import ImageInput from "../uploadBlogScreen/components/ImageInput";
import { useEffect, useState } from "react";
import UpdateBlogScreenController from "./UpdateBlogScreenController";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Loading from "../../components/loading/Loading";

export default function UpdateBlogScreen() {
    const [titleInput, setTitleInput] = useState("");
    const [imageInput, setImageInput] = useState("");
    const [detailInput, setDetailInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const customer = useSelector(state => state.authReducer);
    const [controller, setController] = useState(new UpdateBlogScreenController(titleInput, imageInput, detailInput, useNavigate(), useDispatch(), useLocation(), setTitleInput, setImageInput, setDetailInput, setIsLoading));
    
    useEffect(() => {
        controller.onInit();
    }, []);
    
    return <div>
        <div className="introduction">
            <div className="introduction-label">{UPDATE_A_BLOG_LABEL}</div>
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
                <Button name={UPDATE} onClick={async () => {await controller.onButtonClicked();}} />
            </div>
        </div>

        {isLoading ? <Loading /> : <></>}
    </div>;
}