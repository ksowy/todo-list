import React from 'react'
import { Link } from 'react-router-dom'
import styles from './nav.module.css'

export const Nav = () => {
  return (
    <div className={styles.container}>
      <ul className={styles.nav}>
        <li className={styles.navItem}>
          <Link to='/about'>About Page</Link>
        </li>

        <li className={styles.navItem}>
          <Link to='/'>Home Page</Link>
        </li>
      </ul>
    </div>
  )
}
