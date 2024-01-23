import React from "react";
import "./App.css"
import HomePage from "./Pages/HomePages";
import Sidebar from "./widgets/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Studentpage from "./Pages/Studentpage";
import Teachers from "./Pages/Teachers";
import AddStudent from "./Details/AddStudent.jsx";
import AddTeacher from "./Details/AddTeacher";
function App() {
  return (
    <div className="maindiv">
    <h1></h1>
    <BrowserRouter>
    <div className="sidediv">
    <Sidebar></Sidebar>
      </div>
    <Routes>
 
    <Route path="/" element={<HomePage/>}/>
    <Route path="/teachers" element={<Teachers/>}/>
    <Route path="/student" element={<Studentpage/>}/>
    <Route path="/addstudentdetail" element={<AddStudent/>}/>
    <Route path="/addteacherdetail" element={<AddTeacher/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
