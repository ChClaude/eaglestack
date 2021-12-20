import * as React from 'react';
import Image from 'next/image';
import styles from './EcommerceSite.module.scss';

const EcommerceSite = () => (
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
				<div className={styles.menuItem}/>
				<div className={styles.menuItem}/>
				<div className={styles.menuItem}/>
				<div className={styles.cartContainer}>
					<span className="material-icons">shopping_cart</span>
				</div>
			</div>
		</section>
		<section className={styles.gridContainer}>
			<div className="flex flex-col items-center">
				<div className="mb-2">
					<Image
						src="/assets/ryan-plomp.jpg"
						width={80}
						height={80}
						alt="ECommerce item for sale"
						objectFit="cover"
						className="rounded-md"
					/>
				</div>
				<div className="mb-2">
					<Image
						src="/assets/jade-scarlato-2.jpg"
						width={80}
						height={80}
						alt="ECommerce item for sale"
						objectFit="cover"
						className="rounded-md"
					/>
				</div>
				<div>
					<Image
						src="/assets/jade-scarlato.jpg"
						width={80}
						height={80}
						alt="ECommerce item for sale"
						objectFit="fill"
						className="rounded-md"
					/>
				</div>
			</div>
			<div className="overflow-hidden ml-1">
				<Image
					src="/assets/ryan-plomp.jpg"
					width={400}
					height={550}
					alt="ECommerce item for sale"
					objectFit="cover"
					className="rounded-lg"
				/>
			</div>
			<div className="ml-3">
				<div className={styles.itemHeader}>Limited-edition sneakers</div>
				<div className="mt-2">
					<span className="material-icons text-yellow-500">star</span>
					<span className="material-icons text-yellow-500">star</span>
					<span className="material-icons text-yellow-500">star</span>
					<span className="material-icons text-yellow-500">star</span>
					<span className="material-icons text-gray-300">star</span>
				</div>
				<div className="mt-3">
					<div className={styles.descriptionLine1} />
					<div className={styles.descriptionLine2} />
					<div className={styles.descriptionLine3} />
				</div>
				<div className="mt-4 text-2xl">$197.95</div>
				<div className="mt-3">
					<span className={`${styles.itemColor} ${styles.itemBlue}`} />
					<span className={`${styles.itemColor} ${styles.itemYellow}`} />
					<span className={`${styles.itemColor} ${styles.itemPink}`} />
				</div>
			</div>
		</section>
	</div>
);

export default EcommerceSite;
