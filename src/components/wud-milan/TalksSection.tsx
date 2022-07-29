import * as React from 'react';
import { useRef, useState } from 'react';
import * as styles from '../../styles/WudMilan.module.scss';
import Marquee, { MarqueeColor } from './Marquee';
import TalkCard from './TalkCard';
import { Talk, talksData } from '../../data/wud-milan/talksData';
import DerekJones from '../../assets/images/wud-milan/derek-jones.png';

type Position = {
	top: number;
	left: number;
};

const TalksSection = () => {
	const [isPhotoOn, setIsPhotoOn] = useState<boolean>(false);
	const [activeIndex, setActiveIndex] = useState<number>();
	const mouseImgRef = useRef<HTMLImageElement>(null);
	const [position, setPosition] = useState<Position>({ top: 0, left: 0 });

	const handleMouseEnter = () => {
		setIsPhotoOn(true);
	};

	const handleMouseLeave = () => {
		setIsPhotoOn(false);
	};

	const handleMouseMove = (e: MouseEvent) => {
		if (mouseImgRef.current) {
			setPosition({ top: e.pageY, left: e.pageX });
		}
	};

	return (
		<div className={styles.talks_wrapper} onMouseMove={(e) => handleMouseMove(e)}>
			<div className={styles.talks_content}>
				{isPhotoOn && (
					<img src={DerekJones} alt="derek" ref={mouseImgRef} style={{ top: position.top, left: position.left }} />
				)}
				<ul>
					{talksData.map((talk: Talk, index) => (
						<TalkCard
							key={`${index}-${talk.title}`}
							talk={talk}
							handleMouseEnter={handleMouseEnter}
							handleMouseLeave={handleMouseLeave}
						/>
					))}
				</ul>
			</div>
			<Marquee text="T a l k s" isVertical color={MarqueeColor.BLUE} />
		</div>
	);
};

export default TalksSection;
