import * as React from 'react';
import * as styles from '../../styles/WudMilan.module.scss';
import FifthImage from '../../assets/images/wud-milan/architecta.png';
import FirstImage from '../../assets/images/wud-milan/Bicapp.png';
import SixthImage from '../../assets/images/wud-milan/district.png';
import SeventhImage from '../../assets/images/wud-milan/LCDC.png';
import SecondImage from '../../assets/images/wud-milan/MiBTec.png';
import FourthImage from '../../assets/images/wud-milan/UX-UIDesignerItalia.png';
import EighthImage from '../../assets/images/wud-milan/thesignof.png';
import ThirdImage from '../../assets/images/wud-milan/universita-bicocca-psicologia.png';

const SponsorsSection = () => {
	return (
		<div className={styles.sponsors_wrapper}>
			<article>
				<div>
					<div className={styles.logo_bundle}>
						<p>IN COLLABORATION WITH</p>
						<ul className={styles.first_button_box}>
							<li>
								<img src={FirstImage} alt="first one" />
							</li>
							<li>
								<img src={SecondImage} alt="second one" />
							</li>
							<li>
								<img src={ThirdImage} alt="third one" />
							</li>
						</ul>
					</div>
					<div className={styles.logo_bundle}>
						<p>SUPPORTED BY</p>
						<ul>
							<li>
								<img src={FourthImage} alt="fourth one" />
							</li>
							<li>
								<img src={FifthImage} alt="fifth one" />
							</li>
							<li>
								<img src={SixthImage} alt="sixth one" />
							</li>
							<li>
								<img src={SeventhImage} alt="seventh one" />
							</li>
							<li>
								<img src={EighthImage} alt="eighth one" />
							</li>
						</ul>
					</div>
				</div>
			</article>
			<footer>
				<div className={`${styles.footer_block} ${styles.footer_block_top}`}>
					<div>
						<p>CONTACT US</p>
						<a>INFO[@]WUDMILAN.IT</a>
					</div>
					<div>
						<p>FOLLOW US</p>
						<a>LINKEDIN</a>
						<a>FACEBOOK</a>
						<a>INSTAGRAM</a>
					</div>
				</div>
				<div className={`${styles.footer_block} ${styles.footer_block_bottom}`}>
					<div>
						<p>© All rights reserved WUD Milan 2021</p>
					</div>
					<div>
						<a>PRIVACY POLICY</a>
						<a>COOKIE POLICY</a>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default SponsorsSection;
