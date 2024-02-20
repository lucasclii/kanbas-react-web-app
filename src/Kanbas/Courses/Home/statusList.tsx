import React from 'react';
import './index.css';
import { FaFileImport, FaBullseye, FaChartBar , FaBullhorn, FaBell, FaDotCircle, FaTimes} from 'react-icons/fa';

function StatusList() {
  return (
    <div className='m-2'>
      <ul className="list-group">
        <li className="list-group-item"><FaFileImport aria-hidden="true" /> Import Existing Content</li>
        <li className="list-group-item"><FaFileImport aria-hidden="true" /> Import From Commons</li>
        <li className="list-group-item"><FaBullseye aria-hidden="true" /> Choose Home Pages</li>
        <li className="list-group-item"><FaChartBar aria-hidden="true" /> View Course Stream</li>
        <li className="list-group-item"><FaBullhorn aria-hidden="true" /> New Announcement</li>
        <li className="list-group-item"><FaChartBar aria-hidden="true" /> New Analytics</li>
        <li className="list-group-item"><FaBell aria-hidden="true" /> View Course Notifications</li>
      </ul>
      <br />
      <p><b>To Do</b></p>
      <hr />
      <div className="list-group">
         <li className="list-group-item todo">
            <FaDotCircle/> <span>Grade A1 - ENV + HTML</span>  
            <span className='fatimes'><FaTimes/></span>
          <p className='smalltext'> 100 Points * Sep 18 at 11:59PM </p> </li> 
          <li className="list-group-item todo">
           <FaDotCircle/>  <span>Grade A2 - CSS </span>  
           <span className='fatimes'><FaTimes/></span>
          <p className='smalltext'> 100 Points * Oct 12 at 11:59PM </p> </li> 
      </div>
    </div>
  );
} 

export default StatusList;
