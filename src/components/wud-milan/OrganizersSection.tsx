import * as React from 'react';
import * as styles from '../../styles/WudMilan.module.scss';
import Marquee, { MarqueeColor } from './Marquee';

const OrganizersSection = () => {
	return (
		<div className={styles.organizers_wrapper}>
			<div className={styles.organizers_content}>
				<article>
					<b>WUD Milan is proudly organized by Milano-Bicocca University and Avanade Italy</b>
					<p>
						In 2016, we brought World Usability Day to Milan for the first time. The reason? To build up a strong
						community for all those who are eager to learn more about the digital world and the innovation impact on the
						design process. Since the beginning, WUD Milan is conceived as an opportunity to think about how we, as
						designers, could help in creating an accessible and inclusive world.
					</p>
				</article>
			</div>
			<Marquee text="Organizers" isVertical={false} color={MarqueeColor.WHITE} />
		</div>
	);
};

export default OrganizersSection;
