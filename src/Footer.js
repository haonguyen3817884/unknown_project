import "./screens/index.css";
import { COPYRIGHT } from "./config/constants";

export default function Footer() {
    return <div>
        <div className="footer">
            <div className="footer-copyright">{COPYRIGHT}</div>
        </div>
    </div>;
}