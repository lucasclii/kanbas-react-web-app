import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaEnvelopeOpenText, FaRegClock, FaTv, FaCreativeCommons, FaQuestionCircle } from "react-icons/fa";
function KanbasNavigation() {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="account-icon fs-2" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="fs-2" /> },
        { label: "Courses", icon: <FaBook className="fs-2" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="fs-2" /> },
        { label: "Inbox", icon: <FaEnvelopeOpenText className="fs-2" /> },
        { label: "History", icon: <FaRegClock className="fs-2" /> },
        { label: "Studio", icon: <FaTv className="fs-2" /> },
        { label: "Commons", icon: <FaCreativeCommons className="fs-2" /> },
        { label: "Help", icon: <FaQuestionCircle className="fs-2" /> },
    ];
    const { pathname } = useLocation();
    return (
        <div>
            <ul className="wd-kanbas-navigation">
                <li><a href="http://northeastern.edu"><b>N</b></a></li>

                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
                        <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default KanbasNavigation;