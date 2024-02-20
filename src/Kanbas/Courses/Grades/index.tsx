import { assignments, enrollments, grades, users } from "../../Database";
import { useParams } from "react-router-dom";
import { FaFileImport, FaFileExport, FaCog, FaFilter  } from 'react-icons/fa';

function Grades() {
    const { courseId } = useParams();
    const as = assignments.filter((assignment) => assignment.course === courseId);
    const es = enrollments.filter((enrollment) => enrollment.course === courseId);
    return (
        <div>
            <div className="row m-3">
                <div className="col-12">
                    <div className="float-end">
                        <button type="button" className="btn btn-primary m-1">
                            <FaFileImport /> Import
                        </button>
                        <button type="button" className="btn btn-primary dropdown-toggle m-1" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <FaFileExport /> Export
                        </button>
                        <button type="button" className="btn btn-danger m-1">
                            <FaCog />
                        </button>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <label><b>Student Names</b></label>
                    <input type="text" className="form-control" placeholder="Search Students" />
                </div>
                <div className="col-md-6">
                    <label><b>Assignment Names</b></label>
                    <input type="text" className="form-control" placeholder="Search Assignment" />
                </div>
            </div>
            
            <div className="row mt-2 mb-2">
                <div className="col-12">
                    <button type="button" className="btn btn-primary">
                        <FaFilter /> Apply Filters
                    </button>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-striped table-bordered">
                    <thead className="thead-light">
                        <th>Student Name</th>
                        {as.map((assignment) => (<th>{assignment.title}</th>))}
                    </thead>
                    <tbody>
                        {es.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td>{user?.firstName} {user?.lastName}</td>
                                    {as.map((assignment) => {
                                        const grade = grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        return (<td>{grade?.grade || ""}</td>);
                                    })}
                                </tr>);
                        })}
                    </tbody></table>
            </div>

        </div>);
}
export default Grades;