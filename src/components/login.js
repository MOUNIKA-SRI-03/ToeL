//import { faBlackboard } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';


export default function Login() {
 const[userName,setUserName]=useState('');
 const[password,setPassword]=useState('');
 //const options = ['b']
 const box = {
   width:1500,
   height:1000,
   backgroundColor:'#EFE7E7'
 }
 const outerBox = {
  width:400,
  height:500,
  backgroundColor:"#99ccff",
  opacity:0.3,
  position:'relative',
  left:450,
  top:80
 }
 const input = {
  width:250,
  height:40,
  borderRadius:10,
  position: 'relative',
  left:70,
  top:50
 }
  return (
    <div style={box}>
    <div style={outerBox}>
    <p><b><center>User Login</center></b></p>
    <input style={input} type="text" value={userName} onChange={e=>setUserName(e.target.value)}
    placeholder="USERNAME" required></input><br></br><br></br>
    <input style={input} type="password" value={password} onChange={e=>setPassword(e.target.value)}
    placeholder="PASSWORD" required></input>
    <br></br><br></br>
    <button type='submit' className='btn btn-primary m-5'style={{position:'relative',left:100}}>LOGIN</button><br></br>
    <center><a href='#'>Create Account </a>or
    <a href='#'> Forgot password?</a></center>
    
    </div>
    </div>
  )
}
