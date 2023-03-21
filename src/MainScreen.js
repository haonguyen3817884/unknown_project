import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/homeScreen/HomeScreen";
import AuthScreen from "./screens/authScreen/AuthScreen";
import ChangePasswordScreen from "./screens/authScreen/ChangePasswordScreen";
import CMSScreen from "./screens/cmsScreen/CMSScreen";
import UploadBlogScreen from "./screens/uploadBlogScreen/UploadBlogScreen";
import UpdateBlogScreen from "./screens/updateBlogScreen/UpdateBlogScreen";
import BlogPostsScreen from "./screens/blogPostsScreen/BlogPostsScreen";
import BlogPostScreen from "./screens/blogPostScreen/BlogPostScreen";
import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
import { HOME_ROUTE, LOGIN_ROUTE, CHANGE_PASSWORD_ROUTE, CMS_ROUTE, UPLOAD_BLOG_ROUTE, UPDATE_BLOG_ROUTE, BLOG_POSTS_ROUTE, BLOG_POST_ROUTE } from "./config/constants";

export default function MainScreen() {
    
    return <div>
        <NavigationBar />
        <Router>
            <Routes>
                <Route exact path={HOME_ROUTE} element={<HomeScreen />} />
                <Route path={LOGIN_ROUTE} element={<AuthScreen />} />
                <Route path={CHANGE_PASSWORD_ROUTE} element={<ChangePasswordScreen />} />
                <Route path={CMS_ROUTE} element={<CMSScreen />} />
                <Route path={UPLOAD_BLOG_ROUTE} element={<UploadBlogScreen />} />
                <Route path={UPDATE_BLOG_ROUTE} element={<UpdateBlogScreen />} />
                <Route path={BLOG_POSTS_ROUTE} element={<BlogPostsScreen />} />
                <Route path={BLOG_POST_ROUTE + "/:id"} element={<BlogPostScreen />} />
            </Routes>
        </Router>
        <Footer />
    </div>;
}