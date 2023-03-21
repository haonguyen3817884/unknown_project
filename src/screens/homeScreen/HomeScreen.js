import "../index.css";
import { BRAND_NAME, HOME, BLOG_POSTS, PRODUCTS, INTRODUCTION_LABEL, INTRODUCTION_RIGHT_LABEL, INTRODUCTION_RIGHT_DETAIL, MOST_POPULAR_POSTS, BOOKING_LABEL } from "../../config/constants";
import AvatarCard from "../../components/AvatarCard";
import BlogList from "./components/BlogList";
import Button from "../../components/Button";
import { useEffect, useState } from "react";
import HomeScreenController from "./HomeScreenController";

export default function HomeScreen() {
    const [controller, setController] = useState(new HomeScreenController());
    
    const mostPopularPosts = [
        {
            _id: "",
            blogTitle: "Place place place place",
            blogImage: require("../assets/post_lg_2.jpg"),
            blogDetail: "Place place place place place place place place place place place place place",
            blogAuthorName: "Unknown",
            blogAuthorAvatar: require("../assets/person_1.jpg")
        },
        {
            _id: "",
            blogTitle: "Place place place place",
            blogImage: require("../assets/post_lg_2.jpg"),
            blogDetail: "Place place place place place place place place place place place place place",
            blogAuthorName: "Unknown",
            blogAuthorAvatar: require("../assets/person_1.jpg")
        },
        {
            _id: "",
            blogTitle: "Place place place place",
            blogImage: require("../assets/post_lg_2.jpg"),
            blogDetail: "Place place place place place place place place place place place place place",
            blogAuthorName: "Unknown",
            blogAuthorAvatar: require("../assets/person_1.jpg")
        }
    ];

    useEffect(() => {
        controller.onInit();
    }, []);
    
    return <div>
        <div className="introduction">
            <div className="introduction-label">{INTRODUCTION_LABEL}</div>
            <div className="introduction-body">
                <div className="introduction-body-left inline-float">
                    <img src={require("../assets/post_lg_2.jpg")} />
                </div>
                <div className="introduction-body-right inline-float">
                    <div className="introduction-body-right-label">{INTRODUCTION_RIGHT_LABEL}</div>
                    <div className="introduction-body-right-detail">{INTRODUCTION_RIGHT_DETAIL}</div>
                    <div className="introduction-body-right-avatar-card"><AvatarCard customerAvatar={require("../assets/person_1.jpg")} customerName="place" /></div>
                </div>
                <div className="clear-float"></div>
            </div>
        </div>

        <div className="most-popular-posts">
            <div className="most-popular-posts-label">{MOST_POPULAR_POSTS}</div>
            <div className="most-popular-posts-detail"><BlogList list={mostPopularPosts} onBlogClicked={(blogId) => {alert(blogId);}} /></div>
        </div>

        <div className="booking">
            <div className="booking-label">{BOOKING_LABEL}</div>
            <div className="booking-button"><Button name={"place"} onClick={() => {}} /></div>
        </div>
    </div>;
}