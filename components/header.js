import Link from 'next/link';

export default function Header() {
	return (
		<div>
			<header className='max-w-3xl mt-12 mb-8 mx-auto'>
				<main className="profile">
					<aside>
						<section className="profile__meta">
							<h1 className="profile__name">
								ERL_ANGGA
							</h1>
						</section>
						<section className="profile__navigation">
							<a href="#">About</a>
							<Link href={'/'}>
								<a>Blog</a>
							</Link>
							<a href="#">Github</a>
							<a href="#">Facebook</a>
							<a href="#">Twitter</a>
						</section>
					</aside>
				</main>
			</header>
			<style jsx>{`
				header {
					font-family: 'Bitter', serif;
				}
				.profile__img {
					height: 6rem;
					width: 6rem;
					padding: 1.25rem;
					display: flex;
					align-items: center;
					justify-content: center;
				}

				.profile__name {
					line-height: 1.5;
					font-weight: 700;
					font-size: 1.5rem;
					margin-top: 0;
					margin-bottom: 1.25rem;
					font-family: 'Bitter';
				}

				.profile__description {
					line-height: 1.5;
					margin-top: 0;
					font-size: 1.25rem;
					margin-bottom: 1.25rem;
				}

				.profile__meta {
					text-align: center;
				}

				.profile__navigation {
					text-align: center;
					margin-top: .75rem;
					color: #ed8936;
				}

				.profile__navigation a {
					color: #007bff;
				}

				.profile__navigation a:hover {
					color: #212529;
				}

				.profile__navigation
				a:not(:last-child) {
					margin-right: .75rem;
				}
			`}</style>
		</div>
	)
}