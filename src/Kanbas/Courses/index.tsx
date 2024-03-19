import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useLocation, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/Editor";
import Grades from "./Grades";
import "./screenstyle.css";
import { FaBars, FaAngleDown } from "react-icons/fa";


function Courses({ courses }: { courses: any[]; }) {
    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    const location = useLocation();
    const path = location.pathname.split("/");
    const currentPage = path[path.length - 1];
    const title = `${course?.number} ${course?.name} > ${currentPage}`;
 
    const courseName = course?.name || "Course Name"; 

    return (
        <div>
            <div className="d-block d-md-none wd-topnavbar d-flex justify-content-between align-items-center">
                <FaBars style={{ color: 'white' }}/>
                {courseName}
                <FaAngleDown className="m-2" style={{ color: 'white' }} />
            </div>

            <div className="d-none d-md-block">
                <h1 style={{ color: "red", fontSize: "x-large", marginLeft:"20px", marginTop:"5px"}}> <HiMiniBars3 /> {title} </h1>
                <hr />
                <h6 style={{marginLeft:"20px"}}> <i>{course?.startDate}_{course?.number}... </i></h6>
                <CourseNavigation />
            </div>
            <div className="d-flex">
                <div
                    className= "main-content">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home/>} />
                        <Route path="Modules" element={<Modules/>} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Zoom" element={<h1>Zoom</h1>} />
                        <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                        <Route path="People" element={<h1>People</h1>} />
                        <Route path="Assignments" element={<Assignments/>} />
                        <Route path="Assignments/:assignmentId" element={<AssignmentEditor/>} />
                        <Route path="Grades" element={<Grades/>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}
export default Courses;