import React from 'react'
import styles from './header.module.css'

const Header = () => {
  return (
    <header className=''>
        <div className={styles.logo}>Seterra</div>
        <div className={styles.login}>log in</div>
    </header>
  )
}

export default Header