import * as React from 'react';
import { Menu } from 'react-feather';
import { useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import * as styles from '../styles/WudMilan.module.scss';

const ACC = 0.5;
const DEC = 0.08;
let bgPivot = 0;
let mcPivot = 0;
let rafId: number;

function WudMilanPage() {
	const background = useRef<HTMLDivElement>(null);
	const main = useRef<HTMLDivElement>(null);
	const backgroundContent = useRef<HTMLParagraphElement>(null);
	const mainContent = useRef<HTMLElement>(null);

	const loop = () => {
		if (background.current && main.current) {
			background.current.scrollLeft += bgPivot * ACC;
			main.current.scrollLeft += mcPivot * ACC;
			bgPivot *= 1 - DEC;
			mcPivot *= 1 - DEC;

			if (Math.abs(bgPivot) < 1 && Math.abs(mcPivot) < 1) {
				cancelAnimationFrame(rafId);
				mcPivot = 0;
				bgPivot = 0;
			} else {
				rafId = requestAnimationFrame(loop);
			}
		}
	};

	const handleWindowScroll = debounce(async (e: WheelEvent) => {
		const backgroundContentWidth = backgroundContent.current?.offsetWidth || 1;
		const mainContentWidth = mainContent.current?.offsetWidth || 1;
		const { deltaY } = e;
		const decelerateDeltaY = deltaY * (backgroundContentWidth / mainContentWidth);

		if (bgPivot !== 0 && mcPivot !== 0) {
			await cancelAnimationFrame(rafId);
		}

		bgPivot = decelerateDeltaY / 2;
		mcPivot = deltaY / 2;
		rafId = requestAnimationFrame(loop);
	}, 100);

	useEffect(() => {
		window.addEventListener('wheel', (e) => handleWindowScroll(e));
		return window.removeEventListener('wheel', (e) => handleWindowScroll(e));
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
				<div className={styles.scroll_frame} ref={main}>
					<main ref={mainContent}>
						<section className={styles.hero}></section>
						<section className={styles.about}>
							<div className={styles.about_inner}></div>
						</section>
						<section className={styles.talks}>
							<div className={styles.talks_inner}></div>
						</section>
						<section className={styles.organizers}>
							<div className={styles.organizers_inner}></div>
						</section>
						<section className={styles.sponsors}>
							<div className={styles.sponsors_inner}></div>
						</section>
					</main>
				</div>
			</div>
		</div>
	);
}

export default WudMilanPage;
