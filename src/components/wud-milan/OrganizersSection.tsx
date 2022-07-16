import * as React from 'react';
import * as styles from '../../styles/WudMilan.module.scss';
import Marquee, { MarqueeColor } from './Marquee';

const OrganizersSection = () => {
	return (
		<div className={styles.organizers_wrapper}>
			<div className={styles.organizers_content}></div>
			<Marquee text="Organizers" isVertical={false} color={MarqueeColor.WHITE} />
		</div>
	);
};

export default OrganizersSection;
