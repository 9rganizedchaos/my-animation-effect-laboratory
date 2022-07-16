import * as React from 'react';
import * as styles from '../../styles/WudMilan.module.scss';
import Marquee, { MarqueeColor } from './Marquee';

const TalksSection = () => {
	return (
		<div className={styles.talks_wrapper}>
			<div className={styles.talks_content}></div>
			<Marquee text="T a l k s" isVertical color={MarqueeColor.BLUE} />
		</div>
	);
};

export default TalksSection;
