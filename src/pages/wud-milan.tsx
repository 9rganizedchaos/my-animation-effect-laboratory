import * as React from 'react';
import { Menu } from 'react-feather';
import { useEffect, useRef } from 'react';
import { debounce } from 'lodash';
import * as PIXI from 'pixi.js';
import { Graphics } from 'pixi.js';
import * as styles from '../styles/WudMilan.module.scss';
import AboutSection from '../components/wud-milan/AboutSection';
import TalksSection from '../components/wud-milan/TalksSection';
import OrganizersSection from '../components/wud-milan/OrganizersSection';
import { getRandomArbitrary } from '../utils/util';

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

	let mouseX = 0;
	let mouseY = 0;

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

	const handleMouseMove = debounce((e) => {
		mouseX = Math.floor(e.pageX / 30);
		mouseY = Math.floor(e.pageY / 30);
	}, 10);

	useEffect(() => {
		window.addEventListener('wheel', (e) => handleWindowScroll(e));
		return window.removeEventListener('wheel', (e) => handleWindowScroll(e));
	}, []);

	useEffect(() => {
		if (canvasRef.current) {
			const canvasWidth = canvasRef.current.offsetWidth;
			const canvasHeight = canvasRef.current.offsetHeight;

			const app = new PIXI.Application({
				width: canvasWidth,
				height: canvasHeight,
				backgroundColor: 0x0132de,
			});
			canvasRef.current?.appendChild(app.view);

			const container: Graphics[] = [];

			setInterval(() => {
				container.forEach((graphic) => {
					app.stage.removeChild(graphic);
				});

				for (let i = 0; i < 200; i++) {
					const whitePixel = new PIXI.Graphics();
					const greenPixel1 = new PIXI.Graphics();
					const greenPixel2 = new PIXI.Graphics();

					whitePixel.beginFill(0xffffff);
					greenPixel1.beginFill(0xddff6d);
					greenPixel2.beginFill(0xddff6d);

					const whitePixelTheta = Math.random() * 6 * Math.PI;
					const greenPixelTheta1 = Math.random() * 8 * Math.PI;
					const greenPixelTheta2 = Math.random() * 8 * Math.PI;
					const whitePixelR = Math.random() * 6;
					const greenPixelR1 = Math.random() * 8;
					const greenPixelR2 = Math.random() * 8;

					whitePixel.drawRect(
						mouseX * 30 + Math.floor(whitePixelR * Math.cos(whitePixelTheta)) * 30,
						mouseY * 30 + Math.floor(whitePixelR * Math.sin(whitePixelTheta)) * 30,
						30,
						30
					);

					whitePixel.drawRect(
						8 * 30 + Math.floor(whitePixelR * Math.cos(whitePixelTheta)) * 30,
						30 + Math.floor(whitePixelR * Math.sin(whitePixelTheta)) * 30,
						30,
						30
					);

					whitePixel.drawRect(
						(Math.floor(canvasWidth / 30) - 8) * 30 + Math.floor(whitePixelR * Math.cos(whitePixelTheta)) * 30,
						(Math.floor(canvasHeight / 30) - 2) * 30 + Math.floor(whitePixelR * Math.sin(whitePixelTheta)) * 30,
						30,
						30
					);

					greenPixel1.drawRect(
						mouseX * 30 + Math.floor(greenPixelR1 * Math.cos(greenPixelTheta1)) * 30,
						mouseY * 30 + Math.floor(greenPixelR1 * Math.sin(greenPixelTheta1)) * 30,
						30,
						30
					);

					greenPixel1.drawRect(
						8 * 30 + Math.floor(greenPixelR1 * Math.cos(greenPixelTheta1)) * 30,
						30 + Math.floor(greenPixelR1 * Math.sin(greenPixelTheta1)) * 30,
						30,
						30
					);

					greenPixel1.drawRect(
						(Math.floor(canvasWidth / 30) - 8) * 30 + Math.floor(greenPixelR1 * Math.cos(greenPixelTheta1)) * 30,
						(Math.floor(canvasHeight / 30) - 2) * 30 + Math.floor(greenPixelR1 * Math.sin(greenPixelTheta1)) * 30,
						30,
						30
					);

					greenPixel2.drawRect(
						mouseX * 30 + Math.floor(greenPixelR2 * Math.cos(greenPixelTheta2)) * 30,
						mouseY * 30 + Math.floor(greenPixelR2 * Math.sin(greenPixelTheta2)) * 30,
						30,
						30
					);

					greenPixel2.drawRect(
						8 * 30 + Math.floor(greenPixelR2 * Math.cos(greenPixelTheta2)) * 30,
						30 + Math.floor(greenPixelR2 * Math.sin(greenPixelTheta2)) * 30,
						30,
						30
					);

					greenPixel2.drawRect(
						(Math.floor(canvasWidth / 30) - 8) * 30 + Math.floor(greenPixelR2 * Math.cos(greenPixelTheta2)) * 30,
						(Math.floor(canvasHeight / 30) - 2) * 30 + Math.floor(greenPixelR2 * Math.sin(greenPixelTheta2)) * 30,
						30,
						30
					);

					app.stage.addChild(whitePixel);
					app.stage.addChild(greenPixel1);
					app.stage.addChild(greenPixel2);

					container.push(whitePixel, greenPixel1, greenPixel2);
				}
			}, 500);
		}

		return () => {
			canvasRef.current?.removeChild(app.view);
		};
	});

	useEffect(() => {
		window.addEventListener('mousemove', (e) => handleMouseMove(e));
		return window.removeEventListener('mousemove', (e) => handleMouseMove(e));
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
