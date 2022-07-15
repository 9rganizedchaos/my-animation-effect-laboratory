import * as React from 'react';
import { Menu } from 'react-feather';
import { useState, useEffect, useRef } from 'react';
import * as styles from '../styles/WudMilan.module.scss';

const ACC = 0.1;

function WudMilanPage() {
	let bgPivot = 0;
	let mcPivot = 0;
	const [rafId, setRafId] = useState<number>(0);
	const background = useRef<HTMLDivElement>(null);
	const mainContent = useRef<HTMLDivElement>(null);
	const backgroundContent = useRef<HTMLParagraphElement>(null);
	const mainContentContent = useRef<HTMLElement>(null);

	const loop = () => {
		if (background.current && mainContent.current) {
			console.log(bgPivot, background.current.scrollLeft);
			background.current.scrollLeft += bgPivot * ACC;
			mainContent.current.scrollLeft += mcPivot * ACC;
			bgPivot *= 1 - ACC;
			mcPivot *= 1 - ACC;

			if (Math.abs(bgPivot) < 1 && Math.abs(mcPivot) < 1) {
				cancelAnimationFrame(rafId);
				mcPivot = 0;
				bgPivot = 0;
			} else {
				const newRafId = requestAnimationFrame(loop);
				setRafId(newRafId);
			}
		}
	};

	const handleWindowScroll = async (e: WheelEvent) => {
		const backgroundContentWidth = backgroundContent.current?.offsetWidth || 1;
		const mainContentContentWidth = mainContentContent.current?.offsetWidth || 1;
		const { deltaY } = e;
		const decelerateDeltaY = deltaY * (backgroundContentWidth / mainContentContentWidth);

		if (bgPivot !== 0 && mcPivot !== 0) {
			await cancelAnimationFrame(rafId);
		}

		bgPivot = decelerateDeltaY;
		mcPivot = deltaY;
		const newRafId = requestAnimationFrame(loop);
		setRafId(newRafId);
	};

	useEffect(() => {
		window.addEventListener('wheel', (e) => handleWindowScroll(e));
		return window.removeEventListener('wheel', handleWindowScroll);
	}, []);

	return (
		<div className={styles.wrapper}>
			<div className={styles.background} ref={background}>
				<p ref={backgroundContent}>W U D M I L A N</p>
			</div>
			<div className={styles.content}>
				<header className={styles.wud_header}>
					<div className={styles.header_left}>
						<Menu />
						<p className={styles.wud_logo}>
							WUD <strong>MILAN</strong>
						</p>
					</div>
					<p className={styles.wud_date}>NOVEMBER 11, 2021</p>
				</header>
				<div className={styles.scroll_frame} ref={mainContent}>
					<main ref={mainContentContent}>
						<section className={styles.hero}>안녕</section>
						<section className={styles.about}>
							<div className={styles.about_inner}>안녕</div>
						</section>
						<section className={styles.talks}>
							<div className={styles.talks_inner}>안녕</div>
						</section>
						<section className={styles.organizers}>
							<div className={styles.organizers_inner}>안녕</div>
						</section>
						<section className={styles.sponsors}>
							<div className={styles.sponsors_inner}>안녕</div>
						</section>
					</main>
				</div>
			</div>
		</div>
	);
}

export default WudMilanPage;
