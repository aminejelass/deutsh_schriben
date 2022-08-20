import React from 'react'
import "./navBarre.css"
const NavBarre=()=>{
    const menu = ["gramatik","konjugation","schrieben"]
    return(
        <div className='navbarreContainer'>
            <ul className='menuContainer'>
                {menu.map((ele,i)=>(<li className='menuIem' key={i}>{ele}</li>))}
            </ul>
        </div>
    )
}

export default NavBarre;