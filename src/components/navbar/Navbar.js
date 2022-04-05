import React from 'react'
import {NavLink} from "react-router-dom";
import styles from "./Navbar.module.css"


const Navbar = () => {
  return (
    <div className={styles.navbar}>
        <div>
        <NavLink to="/" >RECIPE</NavLink>
        </div>
        <div className={styles.rightNavbar}>
        <NavLink to="/about" >ABOUT</NavLink>
        <NavLink to="/github" >GITHUB</NavLink>
        <NavLink to="/login" >LOGIN</NavLink>
        </div>
    </div>
  )
}

export default Navbar