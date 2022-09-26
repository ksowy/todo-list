import React from 'react'
import { Link } from 'react-router-dom'
import styles from './nav.module.css'

export const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <h3 className={styles.navItem}>
          <Link to='/about' className={styles.link}>
            About Page
          </Link>
        </h3>

        <h3 className={styles.navItem}>
          <Link to='/' className={styles.link}>
            Home Page
          </Link>
        </h3>
      </div>
    </div>
  )
}
