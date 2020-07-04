import '../styles/tailwind.css';
import Head from 'next/head';
import {AnimatePresence} from 'framer-motion';

export default function MyApp({Component, pageProps, router}) {
	return (
		<div className="mx-auto">
			<Head>
				<meta charSet="UTF-8"/>
			  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
				<link 
					rel="stylesheet" 
					href="https://fonts.googleapis.com/css2?family=Bitter&family=Merriweather+Sans&display=swap"
				/>
			</Head>
			<AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
     	</AnimatePresence>
			<style global jsx>{`
				* {
					margin: 0;
					padding: 0;
					box-sizing: border-box;			
				}

				body {
					font-family: 'Merriweather sans', sans-serif;
					background-color: #edf2f7;
					color: #35495e;
					font-size: 1.125rem;
					line-height: 1.5;
				}
			`}</style>
		</div>
	)
}