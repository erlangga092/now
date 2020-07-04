import Link from 'next/link';
import dynamic from 'next/dynamic';
const Header = dynamic(() => import('./header'));

export default function Layout(props) {
	return (
		<div className="mx-auto">
			<section className="blog-index">
				<Header />
				<main>{props.children}</main>
				<footer className="max-w-4xl my-12 mx-auto text-center">
					© {new Date().getFullYear()}, Built with {' '}
					<a href="http://nextjs.org">Next.js</a>
				</footer>
			</section>
			<section className="switch">
				<button className="switch__btn" aria-label="Justify">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="switch__moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
				</button>
			</section>
			<style jsx>{`
				.switch {
					position: absolute;
					z-index: 20;
					top: 1rem;
					right: 1.5rem;
				}

				.switch__btn {
					width: 3rem;
					height: 3rem;
					border-radius: 9999px;
					box-shadow: 
						0 1px 3px 0 rgba(0,0,0,.1),
						0 1px 2px 0 rgba(0,0,0,.06);
					background-color: #fff;
					padding: 0;
					line-height: 1.5;
					cursor: pointer;
					border: 0 solid #e2e8f0;
				}

				.switch__btn svg {
					width: 24px;
					height: 24px;
					stroke: #35495e;
				}
			`}</style>
		</div>
	)
}