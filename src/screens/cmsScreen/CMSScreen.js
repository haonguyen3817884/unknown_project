import "../index.css";
import { WELCOME, UPLOADED_BLOGS_TABLE_LABEL, LOGIN_ROUTE, AUTH_SCREEN, CMS_SCREEN, UPLOAD, NEW_BLOG } from "../../config/constants";
import UploadedBlogsTable from "./components/UploadedBlogsTable";
import { useEffect, useState } from "react";
import CMSScreenController from "./CMSScreenController";
import { useNavigate, useLocation, Navigate } from "react-router-dom";
import Customer from "../../models/Customer";
import isMovedFromScreen from "../../sharedActions/isMovedFromScreen";
import getPage from "../../sharedActions/getPage";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/Button";

export default function CMSScreen() {
    const customer = useSelector(state => state.authReducer);
    const blogs = useSelector(state => state.blogReducer);
    const [controller, setController] = useState(new CMSScreenController(useNavigate(), useLocation(), useDispatch()));
    
    useEffect(() => {
        controller.onInit();
    }, []);

    return <div>
        <div className="introduction">
            <div className="introduction-label">{WELCOME + " " + customer.firstName + " " + customer.lastName}</div>
        </div>

        <div className="uploaded-blogs-table">
            <div className="uploaded-blogs-table-label">{UPLOADED_BLOGS_TABLE_LABEL}</div>
            <div className="uploaded-blogs-table-detail">
                <UploadedBlogsTable blogs={blogs} onEditButtonClicked={async (blog) => {await controller.onEditButtonClicked(blog);}} onDeleteButtonClicked={(blogId) => {controller.onDeleteButtonClicked(blogId);}} />
            </div>
            <div className="uploaded-blogs-table-button">
                <Button name={NEW_BLOG} onClick={() => {controller.onButtonClicked();}} />
            </div>
        </div>
    </div>;
}