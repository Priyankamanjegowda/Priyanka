import axios from 'axios'
import React, { useEffect, useState } from 'react'

function StudentPage() {

  let [studentData, setStudentData] = useState([]);

  useEffect(()=>{
    getDetails()
  },[])

  async function getDetails() {
    try {
      let {data} = await axios.get('http://localhost:3000/students')
      setStudentData(data)
    } catch (error) {
      console.log(error)
    }
  }
  console.log(studentData)
  return (
    <>
      <table border="all">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map(({id, Fname,Lname, email, age})=>{
            return(
              <tr>
                <td>{id}</td>
                <td>{Fname}</td>
                <td>{Lname}</td>
                <td>{email}</td>
                <td>{age}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}

export default StudentPage
