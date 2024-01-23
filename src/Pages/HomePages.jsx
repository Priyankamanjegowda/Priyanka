import React from "react"
import "./HomePage.css"
import Widgets from "../widgets/Widgets"
function HomePage(){
    return(
        <div className="widgesdiv">
            <h1>Widgets</h1>
            <>
            <Widgets></Widgets>
            </>
        </div>
    )
}
export default HomePage