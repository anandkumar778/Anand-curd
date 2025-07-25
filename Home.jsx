import  { useState } from 'react'
import {useNavigate} from 'react-router-dom'

function Home () {
  const [name, setName]=useState('')
  const [email, setEmail]=useState('')
  const [password, setPassword]=useState('')
  const navigate=useNavigate();
  const SaveData=()=>{
    const obj={ name, email, password };
    let data=JSON.parse(window.localStorage.getItem("saveData"));
    let pushData=''
    if(data==null){
      pushData=[obj]
    }else{
      pushData=[...data,obj]
    }
  window.localStorage.setItem("saveData",JSON.stringify(pushData))
   navigate('/view')
  }
  return (
   <>
   <div className="conainer-fluid">
    <div className="row">
      <div className="col-sm-4"></div>
      <div className="col-sm-4 border border-dark 1">
        <h1 className='text-center'>Regi<sapn className='text-danger'>ster</sapn></h1>
      <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className='form-control mb-2' placeholder='Enter Your Name....' />
       <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className='form-control mb-2' placeholder='Enter Your Email....' />
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className='form-control mb-2' placeholder='Enter Your Password....' />
        <button className='form-control btn btn-success' onClick={SaveData}>Save</button>
      </div>
      <div className="col-sm-4"></div>
    </div>
   </div>
   </>
  )
}

export default Home
