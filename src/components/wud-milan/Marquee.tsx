import * as React from 'react';
import * as styles from '../../styles/WudMilan.module.scss';

export enum MarqueeColor {
	BLUE = 'blue',
	WHITE = 'white',
}

type MarqueeProps = {
	isVertical: boolean;
	text: string;
	color: MarqueeColor;
};

const Marquee = ({ isVertical, text, color }: MarqueeProps) => {
	return (
		<div
			className={`${styles.marquee_wrapper} ${isVertical ? styles.marquee_vertical : styles.marquee_horizontal} ${
				color === MarqueeColor.WHITE ? styles.marquee_white : styles.marquee_blue
			}`}
		>
			<span>
				<pre>{`${text} * ${text} * `}</pre>
			</span>
			<span>
				<pre>{`${text} * ${text} * `}</pre>
			</span>
		</div>
	);
};

export default Marquee;
