import React from 'react'
import Header from '../Header/index'
import styles from './Navbar.module.scss';
const Navbar = () => {
  return (
    <div className={styles.mainApp}>
        <img  width={"320px"}  src="/Logos/Logo.svg" alt="" />
      <Header/>
      <img width={"50px"} height={"45px"}  src="/Logos/tata-Logo.png" alt="" />
    </div>
  )
}

export default Navbar
