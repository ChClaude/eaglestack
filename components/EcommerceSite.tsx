import * as React from 'react';
import Image from 'next/image';
import styles from '@/styles/EcommerceSite.module.scss';

// TODO: Run yarn next lint

export const EcommerceSite = () => {
  return (
    <div className={styles.root}>
      <section className={styles.header}>
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
          <div className={styles.cartContainer}>
            <span className="material-icons">shopping_cart</span>
          </div>
        </div>
      </section>
      <section className={styles.gridContainer}>
        <div>
          <Image
            src="/assets/ryan-plomp.jpg"
            width={80}
            height={80}
            alt="ECommerce item for sale"
            objectFit="cover"
            className="rounded-md"
          />
          <Image
            src="/assets/jade-scarlato-2.jpg"
            width={80}
            height={80}
            alt="ECommerce item for sale"
            objectFit="cover"
            className="rounded-md mt-1"
          />
          <Image
            src="/assets/jade-scarlato.jpg"
            width={80}
            height={80}
            alt="ECommerce item for sale"
            objectFit="fill"
            className="rounded-md mt-1"
          />
        </div>
        <div className="overflow-hidden">
          <Image
            src="/assets/ryan-plomp.jpg"
            width={400}
            height={550}
            alt="ECommerce item for sale"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div>
          <div className={styles.itemHeader}>Limited-edition sneakers</div>
          <div>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
            <span className="material-icons">star</span>
          </div>
          <div>
            <div className={styles.descriptionLine1}></div>
            <div className={styles.descriptionLine2}></div>
            <div className={styles.descriptionLine3}></div>
          </div>
          <div>$197.95</div>
          <div>
            <span className={styles.itemColor}></span>
            <span className={styles.itemColor}></span>
            <span className={styles.itemColor}></span>
            <span className={styles.itemColor}></span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EcommerceSite;
