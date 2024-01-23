import React from 'react'
import { Link } from 'react-router-dom'
function Sidebar() {
  return (
    <div >
        <div >
            <div>
                <Link style={{textDecoration:"none",color:"white",fontSize:"30px"}} to="/">Home</Link>
            </div>
            <div>
                <Link style={{textDecoration:"none",color:"white",fontSize:"30px"}} to="/teachers">Teacher</Link>
            </div>
            <div>
              <Link style={{textDecoration:"none",color:"white",fontSize:"30px"}} to="/student">Student</Link>
            </div>
            <div>
            <Link style={{textDecoration:"none",color:"white",fontSize:"30px"}} to="/addstudentdetail">Add details</Link>
            </div>
            <div>
            <Link style={{textDecoration:"none",color:"white",fontSize:"20px"}} to="/addteacherdetail">Add studt details</Link>
            </div>
            </div>
            </div>
  )
}
  export default Sidebar