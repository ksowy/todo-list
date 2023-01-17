import React from "react";
import styles from "./nav.module.css";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <h3 className={styles.navItem}>
          <Link to="/" className={styles.link}>
            Home Page
          </Link>
        </h3>

        <h3 className={styles.navItem}>
          <Link to="/todo" className={styles.link}>
            Todo
          </Link>
        </h3>
      </div>
    </div>
  );
};
