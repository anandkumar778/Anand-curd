import {useParams,useNavigate} from 'react-router-dom'
import {useState} from 'react'
const Edit = () => {
 const {id}=useParams();
 const navigate=useNavigate();
 const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    function update(){
      const obj={name,email,password}
      let data=JSON.parse(window.localStorage.getItem("saveData"));
      data[id]=obj
      window.localStorage.setItem("saveData",JSON.stringify(data))
     navigate('/view')
      
    }

  return (
  <>
    <div className="container-fluid">
    <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-4 border border-1 border-dark p-5">
        <h1 className='text-center '>Up<span className='text-danger'>date</span></h1>
         <input  type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder='Enter your Name....' className='form-control mb-2'/>
        <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email....' className='form-control mb-2'/>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Enter your Password....' className='form-control mb-2'/>
        <button className='btn btn-outline-warning form-control'onClick={update}>Update</button>
      </div>
      <div className="col-sm-4"></div>
    </div>
   </div>
  </>
  )
}

export default Edit
