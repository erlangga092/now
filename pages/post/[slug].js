import React from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown/with-html';
import {Prism as SyntaxHighLighter} from 'react-syntax-highlighter';
import {motion} from 'framer-motion';
const HeaderSlug = dynamic(() => import('../../components/slug/headerSlug'));

const CodeBlock = ({language, value}) => {
	return (
		<SyntaxHighLighter language={language}>
			{value}
		</SyntaxHighLighter>
	)
}

export default function Post({content, frontMatter, slug}) {
	return (
		<motion.div exit={{opacity: 0, duration: 750}}>
		<Head>
			<meta charSet="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"/>
        <meta name="description" content="Post page of erlangga blog"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="{slug} - Erlangga"/>
        <meta property="og:url" content="https://nextjs.erlangga092.vercel.app/post/${slug}"/>
        <meta property="og:title" content="{slug} - Erlangga"/>
        <meta property="og:description" content="Post page of erlangga blog"/>
			<title>{slug} - Erlangga</title>
		</Head>
		<div className="mx-auto">
			<div id="blog">
				<HeaderSlug />

				<div className="max-w-4xl mx-auto">
					<div className="blog">
						<div className="blog__content">
							<main>
								<article>
									<header>
										<div className="blog__meta">
											<h1 className="blog__title">
												{frontMatter.title}
											</h1>
											<div className="blog__date">
												<span>
													Posted on {frontMatter.date}
												</span>
												{' . '}
												<span>
													Updated on {frontMatter.date}
												</span>
												{' . '}
												<span>
													23 mnt dibaca
												</span>
											</div>
										</div>
									</header>
									<section className="blog__hr"></section>
									<section className="dinamic__markdown">
										<article>
											<ReactMarkdown 
												escapeHtml={false}
												source={content}
												renderers={{code: CodeBlock}}
											/>
										</article>
									</section>
								</article>
							</main>
						</div>
					</div>
				</div>
			</div>
		</div>
		<style jsx>{`
			.blog {
				border-radius: .25rem;
				overflow: hidden;
				box-shadow: 
					0 1px 3px 0 rgba(0,0,0,.1),
					0 1px 2px 0 rgba(0,0,0,.06);
				position: relative;
				margin: -19rem 1rem 3rem;
				background-color: #fff;
			}

			.blog__content {
				padding: 2.5rem 4rem;
			}

			.blog__title {
				font-weight: 700;
				font-family: 'Bitter', serif;
				font-size: 1.5rem;
				margin-top: 0;
				margin-bottom: 2rem;
			}

			.blog__date {
				line-height: 1.5;
				margin-bottom: 1rem;
				font-size: 1rem;
			}

			.blog__meta {
				margin-bottom: 2rem;
			}

			.blog__hr {
				margin: 2rem auto;
				color: #edf2f7;
				background-color: #ddd;
				padding: .03rem;
			}

			.dinamic__markdown article {
				font-family: 'Merriweather sans', sans-serif;
			}
		`}</style>
		</motion.div>
	)
}

export async function getStaticPaths() {
	const files = fs.readdirSync('content/posts');
	
	const paths = files.map(filename => ({
		params: {
			slug: filename.replace('.md', '')
		}
	}));

	return {
		paths,
		fallback: false
	}
}

export async function getStaticProps({params: {slug}}) {
	const markdownWithMetaData = fs
	.readFileSync(path.join('content/posts', slug + '.md'))
	.toString();

	const {data, content} = matter(markdownWithMetaData);

	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric'
	};

	const formattedDate = data.updatedAt.toLocaleDateString('en-US', options);

	const frontMatter = {
		title: data.title,
		description: data.description,
		date: formattedDate
	};

	return {
		props: {
			content: `# ${content}`,
			frontMatter,
			slug
		}
	}
}
