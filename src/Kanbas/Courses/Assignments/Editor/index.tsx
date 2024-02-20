import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import './index.css';

function AssignmentEditor() {
    const { assignmentId } = useParams();
    const assignment = assignments.find(
        (assignment) => assignment._id === assignmentId);
    const { courseId } = useParams();
    const navigate = useNavigate();
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    };
    return (
        <div>
            <div className="wd-cl-editass-custom-header align-items-center m-1">
                <span className="text-success pe-1"><FaCheckCircle /></span>
                <span className="pe-2">Published</span>
                <button type="button" className="btn btn-outline-dark m-1"><FaEllipsisV /></button>
            </div>
            <hr />
            <div className="mb-3">
                <label>Assignment Name</label>
                <input value={assignment?.title}
                    className="form-control mb-2" />
            </div>
            <div className ="mb-3">
                <label className="form-label">Assignment Description</label>
                <textarea className ="form-control w-50">A short description of the assignment</textarea>
            </div>

            <hr />
            
            <button onClick={handleSave} className="btn btn-success ms-2 float-end">
                Save
            </button>
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-danger float-end">
                Cancel
            </Link>
        </div>
    );
}
export default AssignmentEditor;