import * as React from 'react';
import {default as cn} from 'classnames';
import styles from './HamburgerMenuButton.module.scss';

const HamburgerMenuButton = () => {
	const [isOpen, setIsOpen] = React.useState(false);

	const handleOnClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<button type="button" className={styles.barContainer} onClick={handleOnClick}>
			<span className={cn(styles.bar1, {[styles.barCross1]: isOpen})} />
			<span className={cn(styles.bar2, {[styles.barCross2]: isOpen})} />
			<span className={cn(styles.bar3, {[styles.barCross3]: isOpen})} />
		</button>
	);
};

export default HamburgerMenuButton;
