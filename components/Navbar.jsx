import React from 'react';
import Image from 'next/image';
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callBtn}>
          <Image src='/images/telephone.png' alt="Call us" width='40' height='40'/>
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order NOW!</div>
          <div className={styles.text}>123 456 789</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Home
          </li>
          <li className={styles.listItem}>
            Menu
          </li>
          <Image className={styles.logo} src='/images/lo.png' alt='Logo' width='180px' height='180px'/>
          <li className={styles.listItem}>
            Events
          </li>
          <li className={styles.listItem}>
            Contacts
          </li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <Image src='/images/cart.png' alt='Cart' width='40' height='40'/>
          <div className={styles.counter}>4</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar;
