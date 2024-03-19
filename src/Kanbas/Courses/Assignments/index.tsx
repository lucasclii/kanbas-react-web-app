import React from "react";
import { FaCheckCircle, FaEllipsisV, FaPlusCircle, FaPenSquare } from "react-icons/fa";
import { Link, useParams, useNavigate } from "react-router-dom";
//import { assignments } from "../../Database";
import { useDispatch, useSelector } from 'react-redux';
import { deleteAssignment, selectAssignment } from "./assignmentsReducer";
import { KanbasState } from "../../store";

function Assignments() {
    const { courseId } = useParams();

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const assignments = useSelector((state: KanbasState) => state.assignmentsReducer.assignments);

    const handleaddNew = () => {
        dispatch(selectAssignment({
            title: "New Assignment",
            description: "Hint: type in a short description for this new assignment",
            points: "Hint: type in i.e. 100 pts",
            due: "Hint: type in i.e. Sep 30",
            from: "",
            until: "",
        }));
        navigate(`/Kanbas/Courses/${courseId}/Assignments/new`);
    };

    const deleteassignment = (id: string) => {
        if (window.confirm("Are you sure you want to remove this assignment?")) {
            dispatch(deleteAssignment(id));
        }
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <input className="form-control w-25" type="text" placeholder="Search for Assignments" />
                <div className="float-end">
                    <button type="button" className="btn btn-outline-dark ms-1">+ Group</button>
                    <button type="button" className="btn btn-danger ms-1"
                        onClick={handleaddNew}> + Assignment</button>
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
                        {assignments
                            .filter((module) => module.course === courseId)
                            .map((assignment) => (
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
                                                Due at {assignment.due}| {assignment.points}
                                            </div>
                                        </div>
                                    </div>

                                    <span className="d-flex align-items-center">
                                        <FaCheckCircle className="text-success" />
                                        <FaEllipsisV className="ms-2" />
                                        <button onClick={() => deleteassignment(assignment._id)} className="btn btn-danger btn-sm">
                                            Delete
                                        </button>
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