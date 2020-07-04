import Document, {Head, Main, NextScript} from 'next/document';
import dynamic from 'next/dynamic';
import {TypographyStyle} from 'react-typography';
const typography = dynamic(() => import('../utils/typography'));

export default class MyDocument extends Document {
	render() {
		return (
			<html lang="en">
				<Head>
					<TypographyStyle typography={typography} />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		)
	}
}