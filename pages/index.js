import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import fs from 'fs';
import matter from 'gray-matter';
import {motion} from 'framer-motion';
const Layout = dynamic(() => import('../components/layout'));
const BlogList = dynamic(() => import('../components/blogList'));

export default function Home(props) {
  return (
    <div>
      <Head>
        <meta charSet="utf-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1"/>
        <meta name="AdsBot-Google" content="noindex"/>
        <meta name="description" content="Home page of erlangga blog"/>
        <meta property="og:type" content="website"/>
        <meta property="og:site_name" content="Blog - Erlangga"/>
        <meta property="og:url" content="https://nextjs.erlangga092.vercel.app"/>
        <meta property="og:title" content="Blog - Erlangga"/>
        <meta property="og:description" content="Home page of erlangga blog"/>
        <title>Blog - Erlangga</title>
      </Head>
      <Layout>
        <div className="max-w-3xl mx-auto">
          {props.posts.map((post, index) => (
            <MemoizedBlogList post={post} key={index} />
          ))}
        </div>
      </Layout>
    </div>
  )
}

const MemoizedBlogList = React.memo(BlogList); 

export async function getStaticProps() {
  const files = fs.readdirSync(`${process.cwd()}/content/posts`);

  const posts = files.map(filename => {
    const markdownWithMetaData = fs
    .readFileSync(`content/posts/${filename}`)
    .toString();

    const {data} = matter(markdownWithMetaData);

    // convert date
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
      slug: filename.replace('.md', ''),
      frontMatter
    };
  });

  return {
    props: {
      posts
    }
  }
}