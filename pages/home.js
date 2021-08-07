import Head from 'next/head';
import Header from '../components/Header';
import Results from '../components/Results';
import requests from '../utils/requests';

export default function Home({ results }) {
	return (
		<div>
			<Head>
				<title>Hulu 2.0s</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Header />
			<Results results={results} />
		</div>
	);
}

export async function getServerSideProps(context) {
	const genre = context.query.genre;

	const request = await fetch(
		`https://api.themoviedb.org/3/${
			requests[genre]?.url || requests.fetchTrending.url
		}`
	)
		.then((res) => {
			return res.json();
		})
		.catch((err) => {
			console.log({ err });
		});

	return {
		props: {
			results: request.results,
		},
	};
}
