import * as React from 'react';
import * as styles from '../../styles/WudMilan.module.scss';
import Marquee, { MarqueeColor } from './Marquee';

const AboutSection = () => {
	return (
		<div className={styles.about_wrapper}>
			<div className={styles.about_content}>
				<article>
					<b>
						We’re part of the process of designing a digital world. Let’s make it accessible and inclusive for all.
						Welcome to WUD Milan
					</b>
					<p>
						World Usability Day - Milan is the annual event for designers with inspiring talks about human-centered
						design and digital technologies. This year our speakers will lead us to a better understanding of the
						complexity we are living. How and why we trust the digital environment? How could we design it in order to
						improve people’s everyday life?
					</p>
					<p>
						This year (and hopefully for the last time) WUD Milan would be an online event. The ticket is free, so make
						some space in your calendar and join us!
					</p>
					<p>See you there!</p>
				</article>
			</div>
			<Marquee text="A b o u t" isVertical={false} color={MarqueeColor.WHITE} />
		</div>
	);
};

export default AboutSection;
