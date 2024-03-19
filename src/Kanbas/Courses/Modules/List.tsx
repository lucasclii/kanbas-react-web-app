import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle} from "react-icons/fa";
import { useParams } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import {
    addModule,
    deleteModule,
    updateModule,
    setModule,
  } from "./reducer";
  import { KanbasState } from "../../store";

function ModuleList() {
    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) =>
        state.modulesReducer.modules);
    const module = useSelector((state: KanbasState) =>
        state.modulesReducer.module);
    const dispatch = useDispatch();
    
    const [selectedModule, setSelectedModule] = useState(moduleList[0]);
    return (
        <>  
            <div className="button-group">
                <button type="button" className="btn btn-outline-dark">Collapse All</button>
                <button type="button" className="btn btn-outline-dark">Expand All</button>
                <button type="button" className="btn btn-outline-dark">View Progress</button>

                <div className="btn-group">
                    <button type="button" className="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <FaCheckCircle className="text-success"/> Publish All
                    </button>
                    <ul className="dropdown-menu">
                        <li><button className="dropdown-item" type="button">Publish All</button></li>
                        <li><button className="dropdown-item" type="button">Unpublish All</button></li>
                    </ul>
                </div>

                <button className="btn btn-danger"> + Module</button>
                <button type="button" className="btn btn-outline-dark"><FaEllipsisV /></button>
            </div>

            <hr />

            <ul className="list-group">
                <li className="list-group-item">
                    <span className="float-end">
                        <button type="button" className="btn btn-success btn-sm"
                            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
                            Add
                        </button>
                        <button type="button" className="btn btn-primary btn-sm m-1"
                            onClick={() => dispatch(updateModule(module))}>
                            Update
                        </button>
                    </span>
                    <input className="form-control m-1"
                        value={module.name}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, name: e.target.value }))
                        } />
                    <textarea className="form-control m-1"
                        value={module.description}
                        onChange={(e) =>
                            dispatch(setModule({ ...module, description: e.target.value }))
                        } />
                </li>
            </ul>

            <ul className="list-group wd-modules">
                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
                        <li key={index} className="list-group-item"  onClick={() => setSelectedModule(module)}>
                            <span className="float-end">
                                <button type="button" className="btn btn-primary btn-sm m-1"
                                    onClick={() => dispatch(setModule(module))}>
                                    Edit
                                </button>
                                <button type="button" className="btn btn-danger btn-sm m-1"
                                    onClick={() => dispatch(deleteModule(module._id))}>
                                    Delete
                                </button>
                            </span>
                            <div>
                                <FaEllipsisV className="me-2" />
                                {module.name}: {module.description}
                                <span className="float-end">
                                    <FaCheckCircle className="text-success" />
                                    <FaPlusCircle className="ms-2" />
                                    <FaEllipsisV className="ms-2" />
                                </span>
                            </div> 
                            {selectedModule._id === module._id && (
                            <ul className="list-group">
                                {module.lessons?.map((lesson : any) => (
                                    <li className="list-group-item">
                                        <FaEllipsisV className="me-2" />
                                        {lesson.name}
                                        <span className="float-end">
                                            <FaCheckCircle className="text-success" />
                                            <FaEllipsisV className="ms-2" />
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        )} 
                    </li>
                ))}
            </ul>
        </>
    );
}
export default ModuleList;