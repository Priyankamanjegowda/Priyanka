import axios from 'axios'
import React, { useState } from 'react'

function AddTeacher () {
    let [formstudData,setFormstudData]=useState({
        id:"",
        name:"",
        yoj:"",
        performance:"",
        dept:""
    })
    let handlesubmit=({target:{name,value}})=>{
        setFormstudData({...formstudData,[name]:value})
    }
    let changeform=async(e)=>{
        e.preventDefault();
        await axios.post("http://localhost:3000/addData",formstudData)
        console.log(formstudData)
    }
  return (
    <section >
        <form  onSubmit={changeform} style={{border:"2px solid black"}}>
            <h1>Add Teacher details</h1>
        <div>
        <label htmlFor="id">ID:</label>
      <input type="number" name='id' placeholder='id' id='id' onChange={handlesubmit}/>
      </div>
      <div>
      <label htmlFor="name">Name:</label>
      <input type="text" name="name" id="name" placeholder='name' onChange={handlesubmit}/>
      </div>
      <div>
      <label htmlFor="yoj">YOJ:</label>
      <input type="number" name="yoj" id="yoj" placeholder='yoj' onChange={handlesubmit}/>
      </div>
      <div>
      <label htmlFor="performance">Performance:</label>
      <input type="text" name="performance" id="performance" placeholder='performance' onChange={handlesubmit}/>
      </div>
      <div>
      <label htmlFor="dept">Department:</label>
      <input type="text" name="dept" id="dept" placeholder='department' onChange={handlesubmit} />
      </div>
      <div>
      <button type='submit'>submit</button>
      </div>
      </form>
    </section>
  )
}

export default AddTeacher
