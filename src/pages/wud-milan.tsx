import * as React from 'react';
import { Menu } from 'react-feather';
import { useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import * as PIXI from 'pixi.js';
import * as styles from '../styles/WudMilan.module.scss';
import AboutSection from '../components/wud-milan/AboutSection';
import TalksSection from '../components/wud-milan/TalksSection';
import OrganizersSection from '../components/wud-milan/OrganizersSection';

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
	const canvasRef = useRef<HTMLDivElement>(null);

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
		if (backgroundContent.current && mainContent.current) {
			const backgroundContentWidth = backgroundContent.current.scrollWidth;
			const mainContentWidth = mainContent.current.scrollWidth;
			const { deltaY } = e;
			const decelerateDeltaY = deltaY * (backgroundContentWidth / mainContentWidth);

			if (bgPivot !== 0 && mcPivot !== 0) {
				await cancelAnimationFrame(rafId);
			}

			bgPivot = decelerateDeltaY / 3;
			mcPivot = deltaY / 3;
			rafId = requestAnimationFrame(loop);
		}
	}, 100);

	useEffect(() => {
		window.addEventListener('wheel', (e) => handleWindowScroll(e));
		return window.removeEventListener('wheel', (e) => handleWindowScroll(e));
	}, []);

	useEffect(() => {
		if (canvasRef.current) {
			const app = new PIXI.Application({
				width: canvasRef.current.offsetWidth,
				height: canvasRef.current.offsetHeight,
				backgroundColor: 0x0132de,
			});
			canvasRef.current?.appendChild(app.view);

			const graphics = new PIXI.Graphics();

			graphics.beginFill(0xddff6d);

			graphics.drawRect(200, 200, 50, 50);

			app.stage.addChild(graphics);
		}

		return () => {
			canvasRef.current?.removeChild(app.view);
		};
	});

	return (
		<div className={styles.wrapper}>
			<div className={styles.background} ref={canvasRef}>
				<div className={styles.bg_text_wrapper} ref={background}>
					<p ref={backgroundContent}>W U D M I L A N</p>
				</div>
				<div className={styles.bg_canvas_wrapper} ref={canvasRef} />
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
						<section className={styles.hero} />
						<section className={styles.about}>
							<div className={styles.about_inner}>
								<AboutSection />
							</div>
						</section>
						<section className={styles.talks}>
							<div className={styles.talks_inner}>
								<TalksSection />
							</div>
						</section>
						<section className={styles.organizers}>
							<div className={styles.organizers_inner}>
								<OrganizersSection />
							</div>
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
