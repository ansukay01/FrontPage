import React from 'react'
import { useState } from 'react';
import './Subscribe.css';
import { Link } from 'react-router-dom';


export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [dataInput, setDataInput] = useState('');

    const submitThis=()=>{
        const info={email:email};
         setDataInput([info]);
    }
  
  return (
       <div>
        <form action="" onSubmit={submitThis}>
          <div className='positioning'>
          <div className='emailPst'>
        <label className="Email" htmlFor="email">Email Address</label>
        </div>
                <br />
                <input type='text' className="box" name='email' id='email'
                 placeholder="Email your enter address" value={email} 
                onChange={(e)=>setEmail(e.target.value)} required />
                <br/>
                <br/>
                <div className='btnPostion'>
                  <Link to='/subscribed-successfully'>
                <button className="loginBtn" type='submit'>Subscribe</button>
                </Link>
                </div>
                </div>
        </form>
        <br/>
        <br/>
        <br/>
        <br />
        
        </div>
  );
}
