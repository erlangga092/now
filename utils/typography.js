import Typography from 'typography';

const typography = new Typography();

if(process.env.NODE_ENV !== 'production') {
	typography.injectStyles();
}

export default typography;