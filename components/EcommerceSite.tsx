import * as React from 'react';
import Image from 'next/image';
import styles from '@/styles/EcommerceSite.module.scss';

// TODO: Run yarn next lint

export const EcommerceSite = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Image
            src="/assets/icons8-sneakers-64.png"
            alt="Shoe Logo"
            width={50}
            height={50}
          />
        </div>
        <div className={styles.menu}>
          <div className={styles.menuItem}></div>
          <div className={styles.menuItem}></div>
          <div className={styles.menuItem}></div>
          <div className={styles.menuItem}></div>
        </div>
      </div>
    </div>
  );
};

export default EcommerceSite;
