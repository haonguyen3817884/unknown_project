import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/homeScreen/HomeScreen";

export default function MainScreen() {
    
    return <div>
        <Router>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
            </Routes>
        </Router>
    </div>;
}