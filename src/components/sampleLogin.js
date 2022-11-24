
import { border, borderColor } from '@mui/system';
import React,{useState} from 'react'
export default function SampleLogin()
{
 const[userName, setUserName]=useState("")
 const[password, setPassword]=useState("")
 const handleState=(e)=>{
        e.preventDefault(); 
        const obj = {
           userName:userName,
           password:password
        }
}
const outerBox = {

}
const box ={
    width:500,
    height:700,
    backgroundColor : '#ffffff',
    borderColor: "blue"
}
return( 
    <div style={box}>
<p>LOGIN</p>
   <form onSubmit={handleState}>
    <div><label><strong>UserName</strong></label><br></br>
         <input type="text" value={userName} onChange={e=>setUserName(e.target.value)}></input>
    </div>
   <div><label><strong></strong></label><br></br>
         <input type="password" value={password} onChange={e=>setPassword(e.target.value)}></input>
    </div><br></br><br></br>
    <div> 
         <button type="Submit" className='btn btn-primary btn-lg' >Login</button>
    </div> </form>
    </div>
 )
  }