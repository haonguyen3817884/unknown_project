import "./screens/index.css";
import { BRAND_NAME, HOME, BLOG_POSTS, PRODUCTS, HOME_ROUTE, BLOG_POSTS_ROUTE } from "./config/constants";

export default function NavigationBar() {
    return <div>
        <div className="navigation">
            <div className="navigation-brand">{BRAND_NAME}</div>
            <div className="navigation-bar">
                <div className="navigation-bar-items center inline-block"><a href={HOME_ROUTE}>{HOME}</a></div>
                <div className="navigation-bar-items center inline-block"><a href={BLOG_POSTS_ROUTE}>{BLOG_POSTS}</a></div>
                <div className="navigation-bar-items center inline-block"><a href="">{PRODUCTS}</a></div>
            </div>
        </div>
    </div>;
}