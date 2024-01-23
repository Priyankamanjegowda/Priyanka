import React from "react"
import { Link } from "react-router-dom"
import "../widgets/Widgets.css"
import student from"../assests/Student-Icon.png"
import staff from "../assests/staff.png"
function Widgets(){
    return(
        <div className="widivmain">
            <div className="div2">
            <div className="secdiv">
            <Link to="/addteacherdetail">
                <div>
                <img src={staff} alt="" style={{width:"200px",height:"200px",backgroundColor:"white"}} />
                    <h2 style={{backgroundColor:"white"}}>Teacher</h2>
                </div>
            </Link>
            </div>

            <div className="secdiv1">

            <Link to="/addstudentdetail">
                <div>
                    <img src={student} alt="" style={{width:"200px",height:"200px"}} />
                </div>
                <div className="h2">
                    <h2>student</h2>
                </div>
            </Link>
            </div>
            </div>
        </div>
    )
}
export default Widgets
