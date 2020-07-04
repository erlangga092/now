import Link from 'next/link';
import {motion} from 'framer-motion';

export default function HeaderSlug() {
	return (
		<div className="header__slug">
			<div className="header">
				<div className="header__img">
					<figure className="image__placeholder">
						<motion.img 
							initial={{opacity: 0}}
							animate={{opacity: 1, duration: 500}}
							src="https://jefrydco.id/_nuxt/img/49f7a97-1080.jpg" alt="image"
							style={{
								width: '100vw',
								height: '32rem',
								objectFit: 'cover',
								borderRadius: '.25rem'
							}}
						/>
					</figure>
				</div>
				<div className="header__back">
					<Link scroll={false} href={'/'} passHref={true}>
						<a className="header__back__link">
							Blog
						</a>
					</Link>
				</div>
			</div>
			<style jsx>{`
				.header {
					width: 100%;
					position: relative;
				}
				
				.header__back {
					position: absolute;
					z-index: 20;
					top: 1.7rem;
					left: 1.5rem;
				}

				.header__back__link {
					cursor: pointer;
					padding: .5rem 1rem;
					width: 6rem;
					border-radius: .25rem;
					box-shadow: 
						0 1px 3px 0 rgba(0,0,0,.1),
						0 1px 2px 0 rgba(0,0,0,.06);
					text-decoration: none;
					background-color: #fff;
					color: #35495e;
				}
			`}</style>
		</div>
	)
}