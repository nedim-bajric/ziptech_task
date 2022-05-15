import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import MovieList from "../components/MovieList";
import { category, movieType, tvType } from "../api/apiReqs";
const Homepage = () => {
  return (
    <>
      <HeroSection />
      <div className="max-w-7xl mx-auto flex flex-col space-y-7">
        <div className="px-8 mb-3">
          <div className="flex items-center justify-between text-white">
            <h2 className="text-sm font-semibold xl:text-3xl">
              Trending Movies
            </h2>
            <Link
              className="text-xs bg-black border-2 rounded-full px-3 py-2 font-bold xl:text-lg xl:px-5 xl:py-3"
              to="/movie"
            >
              View more
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.popular} />
        </div>

        <div className="px-8 mb-3">
          <div className="flex items-center justify-between text-white">
            <h2 className="text-sm font-semibold xl:text-3xl ">
              Top Rated Movies
            </h2>
            <Link
              className="text-xs bg-black border-2 rounded-full px-3 py-2 font-bold xl:text-lg xl:px-5 xl:py-3"
              to="/movie"
            >
              View more
            </Link>
          </div>
          <MovieList category={category.movie} type={movieType.top_rated} />
        </div>
        <div className="px-8 mb-3">
          <div className="flex items-center justify-between text-white">
            <h2 className="text-sm font-semibold xl:text-3xl">
              Trending TV Shows
            </h2>
            <Link
              className="text-xs bg-black border-2 rounded-full px-3 py-2 font-bold xl:text-lg xl:px-5 xl:py-3"
              to="/movie"
            >
              View more
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.popular} />
        </div>
        <div className="px-8 mb-3">
          <div className="flex items-center justify-between text-white">
            <h2 className="text-sm font-semibold xl:text-3xl">Top Rated TV</h2>
            <Link
              className="text-xs bg-black border-2 rounded-full px-3 py-2 font-bold xl:text-lg xl:px-5 xl:py-3"
              to="/movie"
            >
              View more
            </Link>
          </div>
          <MovieList category={category.tv} type={tvType.top_rated} />
        </div>
      </div>
    </>
  );
};

export default Homepage;
