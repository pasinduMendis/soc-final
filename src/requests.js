const API_KEY = "2d993593c6f4bc11d6feb87b34548c0b";
const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_ASSETS = "https://image.tmdb.org/t/p/original/";

const CINEMA_API = "https://cinemax-app.herokuapp.com/api/v1";
const CINEMA_API_ASSETS = "https://cinemax-app.herokuapp.com/assets";

const requests = {
  fetchTMDBAssetsPath: `${TMDB_ASSETS}`,

  fetchUpcoming: `${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US`,
  fetchNowPlaying: `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `${BASE_URL}/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `${BASE_URL}/discover/tv?api_key=${API_KEY}&with_networks=213`,
  fetchTopRated: `${BASE_URL}/movie/top_rated?api_key=${API_KEY}&language=en-US`,

  fetchAnimation: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=16`,
  fetchFantasy: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=14`,
  fetchMusic: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10402`,
  fetchScifi: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=878`,
  fetchActionMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=80`,
  fetchHorrorMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaryMovies: `${BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=99`,

  fetchAssetPath: `${CINEMA_API_ASSETS}`,
  fetchCinemaFoods: `${CINEMA_API}/foods`,
  fetchCinemaBanners: `${CINEMA_API}/banners`,
  fetchCinemaOngoingMovies: `${CINEMA_API}/movies`,
  fetchCinemaMovie: `${CINEMA_API}/movie/`,
  fetchCinemaMovieShowTime: `${CINEMA_API}/showTimes/`,
  fetchUserTickets: `${CINEMA_API}/tickets`,
  dispatchTicket: `${CINEMA_API}/tickets`,
  dispatchPayment: `https://cinemax-app.herokuapp.com/api/payment/charge`,
};

export default requests;
