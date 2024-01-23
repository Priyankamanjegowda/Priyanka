
import React from 'react'
import axios from "axios"
import {useState,useEffect} from "react"

function Teachers(){
    let [teacherData, setTeacherData] = useState([]);

    useEffect(()=>{
      getDetails()
    },[])
  
    async function getDetails() {
      try {
        let {data} = await axios.get('http://localhost:3000/teachers')
        // console.log(data)
        setTeacherData(data)
      } catch (error) {
        console.log(error)
      }
    }
    console.log(teacherData)
  return (
    <div>
      <>
      <table border="all">
        <thead>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Performance</th>
            <th>Year of Joining</th>
            </tr>
        </thead>
        <tbody>
          
            {teacherData.map(({id, department, name, performance, yoj})=>{
            return(
              <tr>
                <td>{id}</td>
                <td>{name}</td>
                <td>{department}</td>
                <td>{performance}</td>
                <td>{yoj}</td>
              </tr>
            )
          })}
        </tbody>

      </table>
      </>
    </div>
  )
}

export default Teachers