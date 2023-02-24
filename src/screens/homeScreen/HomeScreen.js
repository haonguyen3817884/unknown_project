import "../index.css";
import { BRAND_NAME, HOME, BLOG_POSTS, PRODUCTS } from "../../config/constants";

export default function HomeScreen() {
    return <div>
        <div className="navigation">
            <div className="navigation-brand">{BRAND_NAME}</div>
            <div className="navigation-bar">
                <div className="navigation-bar-items center inline-block">{HOME}</div>
                <div className="navigation-bar-items center inline-block">{BLOG_POSTS}</div>
                <div className="navigation-bar-items center inline-block">{PRODUCTS}</div>
            </div>
        </div>
    </div>;
}