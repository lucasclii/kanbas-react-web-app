import React, { useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";

import { FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { addAssignment, updateAssignment, selectAssignment } from "../assignmentsReducer";
import { KanbasState } from "../../../store";

/* 
Note: 
Assignment Due Date input type is text not date formate which align with database, type in i.e. Sep 30


*/
function AssignmentEditor() {
  const { assignmentId } = useParams();
  const { courseId } = useParams();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const assignments = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignments,
  );
  const assignment = useSelector(
    (state: KanbasState) => state.assignmentsReducer.assignment,
  );

  const handleSave = () => {
    const existAssignment = assignments.find(
      (a) => a._id === assignmentId,
    );
    if (existAssignment) {
      dispatch(updateAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
      console.log(assignments);
    }
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  useEffect(() => {
    const existAssignment = assignments.find(
      (a) => a._id === assignmentId,
    );

    if (existAssignment) {
      dispatch(selectAssignment(existAssignment));
    } else {
      dispatch(
        selectAssignment({
          course: courseId,
        }),
      );
    }
    return () => {
      dispatch(
        selectAssignment({
          title: "",
          description: "",
          points: "",
          due: "",
          from: "",
          until: "",
        }),
      );
    };
  }, [dispatch, assignments]);



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
        <input
          defaultValue={assignment.title}
          onChange={(e) =>
            dispatch(selectAssignment({ ...assignment, title: e.target.value }))
          }
          className="form-control mb-2" />
      </div>

      <div className="mb-3">
        <label className="form-label">Assignment Description</label>
        <textarea
          defaultValue={assignment.description}
          onChange={(e) =>
            dispatch(selectAssignment({ ...assignment, description: e.target.value }))
          }
          className="form-control w-50"></textarea>
      </div>

      <div className="mb-3">
        <label>Points</label>
        <input defaultValue={assignment.points}
          onChange={(e) =>
            dispatch(selectAssignment({ ...assignment, points: e.target.value }))
          }
          className="form-control mb-2 w-50" />
      </div>

      Assign
      <div className="card">
        <div className="m-3">
          <label>Due</label>
          <input type="text"
            defaultValue={assignment.due}
            onChange={(e) =>
              dispatch(selectAssignment({ ...assignment, due: e.target.value }))
            }
            className="form-control" />

          <div className="row mt-2">
            <div className="col">
              <label>Available from</label>
              <input type="date" className="form-control" defaultValue={assignment.from}
                onChange={(e) =>
                  dispatch(selectAssignment({ ...assignment, from: e.target.value }))
                }
              ></input>
            </div>

            <div className="col">
              <label>Until</label>
              <input type="date" className="form-control" defaultValue={assignment.until}
                onChange={(e) =>
                  dispatch(selectAssignment({ ...assignment, until: e.target.value }))
                }></input>
            </div>
          </div>
        </div>
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