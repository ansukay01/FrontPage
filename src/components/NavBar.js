import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavBar.css';

export default function NavBar() {

    return (
        <div className='navbarLocation'>
        <nav>
        <div className='navbar'>
            <div className='bytes'>
                <div className='mark'>
                <NavLink className='linkOne' to='/'>
                    CollectedBytes
                </NavLink>
                </div>
            </div>
            
            <div className='seperate'>
            <div>
             <div className='mark'>
                <NavLink className='linkTwo' to='/subscribe'>
                    Subscribe
                </NavLink>
                </div>
            </div>
        

    
            <div>
            <div className='mark'>
                <NavLink className='linkThree' to='/login'>
                    LogIn
                </NavLink>
                </div>
            </div>
        </div>
        </div>
        </nav>
        </div>
    )
}