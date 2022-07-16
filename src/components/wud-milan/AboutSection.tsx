import * as React from 'react';
import * as styles from '../../styles/WudMilan.module.scss';
import Marquee, { MarqueeColor } from './Marquee';

const AboutSection = () => {
	return (
		<div className={styles.about_wrapper}>
			<div className={styles.about_content}></div>
			<Marquee text="A b o u t" isVertical={false} color={MarqueeColor.WHITE} />
		</div>
	);
};

export default AboutSection;
