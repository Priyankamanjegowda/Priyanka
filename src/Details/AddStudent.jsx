
import React, { useState } from "react";
import "../Details/Stud.css"
import axios from "axios";
function AddStudent() {
  const [formData, setFormData] = useState({
    name: "",
    department: "",
    performance: "",
    yoj: "",
  });

  let handleChange = ({target:{name,value}}) => {
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    await axios.post('http://localhost:3000/addstudData',formData);
  };
  return (
    <>
      <section className="section">
        <form onSubmit={handleSubmit}>
          <h2>Add Student Details</h2>
          <div>
            <label htmlFor="Fname">First Name: </label>
            <input
              type="text"
              id="Fname"
              name="Fname"
              onChange={handleChange}
            //   value={formData.name}
              placeholder="Enter the Fname"
            />
          </div>
          <div>
            <label htmlFor="Lname">Last Name: </label>
            <input
              type="text"
              id="Lname"
              name="Lname"
              onChange={handleChange}
            //   value={formData.name}
              placeholder="Enter the Lname"
            />
          </div>
          <div>
            <label htmlFor="age">Age:</label>
            <input
              onChange={handleChange}
              type="number"
              id="age"
              name="age"
            //   value={formData.department}
              placeholder="Enter the age"
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              onChange={handleChange}
              type="email"
              id="email"
              name="email"
            //   value={formData.performance}
              placeholder="Enter the Perfomance"
            />
          </div>
          <div>
           <button type="submit">submit</button>
          </div>
        </form>
      </section>
    </>
  );
}

export default AddStudent;

