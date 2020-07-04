import Link from 'next/link';
import {motion} from 'framer-motion';

export default function BlogList({post: {frontMatter: {title, description, date}, slug}}) {

	return (
		<motion.div exit={{opacity: 0, duration: 750}}>
      <div className="blog-item">
        <article>
          <div className="blog-item__img">
            <div className="figure image-placeholder">
              <motion.img 
              	initial={{opacity: 0}}
              	animate={{opacity: 1, duration: 750}}
              	src="https://jefrydco.id/_nuxt/img/4ad3dee-750.jpg" alt="vue"
              	style={{
              		objectFit: 'cover',
              		borderRadius: '.25rem',
              		overflow: 'hidden',
              		width: '756px',
              		height: '253px',
              		height: '16rem',
              		width: '100%',
              		maxWidth: '100%'
              	}} 
              />
            </div>
          </div>  
          <div className="blog-item__meta">
            <header>
              <h2 className="blog-item__title">
              	<Link scroll={false} href='/post/[slug]' as={`/post/${slug}`} passHref={true}>
	               <a>{title}</a>
                </Link>
              </h2>
              <div className="blog-item__date">
                <span>Posted on {date}</span>
                {' . '}
                <span>Updated on {date}</span>
                {' . '}
                <span>23 mnt dibaca</span>
              </div>
            </header>
            <p className="blog-item__summary">
              {description}
            </p>
          </div>
        </article>
      </div>
	    <style jsx>{`
				.blog-item {
	        margin-bottom: 1rem;
	        margin-left: 1rem;
	        margin-right: 1rem;
	        max-width: 48rem;
	        border-radius: .25rem;
	        box-shadow: 
	          0 1px 3px 0 rgba(0,0,0,.1),
	          0 1px 2px 0 rgba(0,0,0,.06);
	        background-color: #fff;
	        position: relative;
	      }

	      .blog-item__title a {
	        text-decoration: none;
	        color: #35495e;
	        font-family: 'Bitter', serif;
	      }

	      .blog-item__meta {
	        padding: 2.5rem 4rem;
	        height: 253px;
	      }

	      .blog-item__title {
	        text-transform: capitalize;
	        font-weight: 700;
	        font-size: 1.5rem;
	        margin-top: 0;
	        margin-bottom: 1.25rem;
	      }

	      .blog-item__title span {
	      	cursor: pointer;
	      }

	      .blog-item__date {
	        line-height: 1.5;
	        margin-bottom: 1rem;
	        font-size: 1rem;
	      }

	      .blog-item__summary {
	        line-height: 1.60;
	        margin-bottom: 0;
	        font-size: 1.1rem;
	      }
	    `}</style>
    </motion.div>
	)
}