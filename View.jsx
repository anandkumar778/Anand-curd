import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'

function View() {
  const [data,setData]=useState([]);
  const navigate=useNavigate()
   let temData=JSON.parse(window.localStorage.getItem("saveData"));
  useEffect(()=>{
       
        setData(temData)
  },[])
  function del(id){
   const tem= temData.filter((item,index)=>index!=id);
     window.localStorage.setItem("saveData",JSON.stringify( tem))
     setData(tem)
  }
  function edit(id){
   navigate(`/edit/${id}`)
  }
  return (
    <>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Password</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {
    data?.map((item,index)=>{
     return(<>
        <tr>
      <th scope="row">{index+1}</th>
      <td>{item.name}</td>
      <td>{item.email}</td>
      <td>{item.password}</td>
      <button onClick={()=>del(index)} className="btn btn-danger p-1 m-1">Delete</button>
       <button onClick={()=>edit(index)} className="btn btn-success p-1 m-1">Edit</button>
    </tr>
     </>)
    })
  }
 
  
  </tbody>
</table>
    </>
  )
}

export default View
