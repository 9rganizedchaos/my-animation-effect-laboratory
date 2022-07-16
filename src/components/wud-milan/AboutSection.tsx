import * as React from 'react';
import { useEffect, useRef } from 'react';
import * as PIXI from 'pixi.js';
import * as styles from '../../styles/WudMilan.module.scss';
import Marquee, { MarqueeColor } from './Marquee';

const AboutSection = () => {
	const aboutContentRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const app = new PIXI.Application();
		aboutContentRef.current?.appendChild(app.view);

		const ghost = PIXI.Sprite.from('https://i.imgur.com/Y5zKtAd.png');

		ghost.anchor.set(0.5);

		ghost.x = app.screen.width / 2;
		ghost.y = app.screen.height / 2;

		app.stage.addChild(ghost);

		app.ticker.add((delta) => {
			ghost.rotation += 0.03 * delta;
		});

		return () => {
			aboutContentRef.current?.removeChild(app.view);
		};
	}, []);

	return (
		<div className={styles.about_wrapper}>
			<div ref={aboutContentRef} />
			<Marquee text="A b o u t" isVertical={false} color={MarqueeColor.WHITE} />
		</div>
	);
};

export default AboutSection;
