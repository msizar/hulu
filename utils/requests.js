const API_KEY = process.env.API_KEY;

console.log(API_KEY);

const request = {
	fetchTrending: {
		title: 'Trending',
		url: `trending/all/week?api_key=${API_KEY}&language=en-US`,
	},
	fetchTopRated: {
		title: 'Top rated',
		url: `movie/top_rated?api_key=${API_KEY}&language=en-US`,
	},
	fetchActionMovies: {
		title: 'Action',
		url: `discover/movie?api_key=${API_KEY}&with_genres=28`,
	},
	fetchComedyMovies: {
		title: 'Comedy',
		url: `discover/movie?api_key=${API_KEY}&with_genres=35`,
	},
	fetchHorrorMovies: {
		title: 'Horror',
		url: `discover/movie?api_key=${API_KEY}&with_genres=27`,
	},
	fetchRomanceMovies: {
		title: 'Romance Movies',
		url: `discover/movie?api_key=${API_KEY}&with_genres=10749`,
	},
	fetchMystery: {
		title: 'Mystery',
		url: `discover/movie?api_key=${API_KEY}&with_genres=9649`,
	},
	fetchScifi: {
		title: 'Sci-fi',
		url: `discover/movie?api_key=${API_KEY}&with_genres=878`,
	},
	fetchWestern: {
		title: 'Western',
		url: `discover/movie?api_key=${API_KEY}&with_genres=37`,
	},
	fetchAnimation: {
		title: 'Animation',
		url: `discover/movie?api_key=${API_KEY}&with_genres=16`,
	},
	fetchTv: {
		title: 'Tv movie',
		url: `discover/movie?api_key=${API_KEY}&with_genres=10770`,
	},
};

export default request;
