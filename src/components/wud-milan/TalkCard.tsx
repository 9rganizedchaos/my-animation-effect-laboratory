import * as React from 'react';
import * as styles from '../../styles/WudMilan.module.scss';
import { Talk } from '../../data/wud-milan/talksData';

type TalkCardProps = {
	talk: Talk;
	handleMouseEnter: () => void;
	handleMouseLeave: () => void;
};

const TalkCard = ({ talk, handleMouseLeave, handleMouseEnter }: TalkCardProps) => {
	const { time, role, speaker, title } = talk;
	return (
		<li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<p className={styles.talk_card_time}>{time}</p>
			<p className={styles.talk_card_title}>{title}</p>
			<p className={styles.talk_card_role}>{role}</p>
			<p className={styles.talk_card_speaker}>{speaker}</p>
		</li>
	);
};

export default TalkCard;
