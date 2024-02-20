import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPenSquare} from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
function Assignments() {
    const { courseId } = useParams();
    const assignmentList = assignments.filter(
        (assignment) => assignment.course === courseId);
    return (
        <>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <input className="form-control w-25" type="text" placeholder="Search for Assignments" />
                <div className="float-end">
                    <button type="button" className="btn btn-outline-dark ms-1">+ Group</button>
                    <button type="button" className="btn btn-danger ms-1">+ Assignment</button>
                    <button type="button" className="btn btn-outline-dark ms-1"><FaEllipsisV /></button>
                </div>
            </div>
            <hr />

            <ul className="list-group wd-modules">
                <li className="list-group-item">
                    <div>
                        <FaEllipsisV className="me-2" /> ASSIGNMENTS
                        <span className="float-end">
                            <span className="border border-dark rounded-pill" style={{ fontSize: 'small' }}>40% of Total</span>
                            <FaPlusCircle className="ms-2" /><FaEllipsisV className="ms-2" />
                        </span>
                    </div>
                    <ul className="list-group">
                        {assignmentList.map((assignment) => (
                            <li className="list-group-item d-flex align-items-start justify-content-between" style={{ flexWrap: 'wrap' }}>
                                <div className="d-flex">
                                    <div className="d-flex align-items-center me-2">
                                        <FaEllipsisV />
                                        <FaPenSquare className="ms-2" />
                                    </div>
                                    <div>
                                        <Link
                                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                            className="d-block"
                                        >
                                            <b>{assignment.title}</b>
                                        </Link>
                                        <div style={{ fontSize: 'small', color: 'grey' }}>
                                            {assignment.due} | {assignment.point}
                                        </div>
                                    </div>
                                </div>
                                <span className="d-flex align-items-center">
                                    <FaCheckCircle className="text-success" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </li>
                        ))}
                    </ul>

                </li>
            </ul>
        </>
    );
}
export default Assignments;