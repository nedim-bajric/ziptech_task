import { Link } from "react-router-dom";
import { category } from "../api/apiReqs";
import apiConfig from "../api/apiConfig";
const MovieCard = (props) => {
  const item = props.item;
  const link = "/" + category[props.category] + "/" + item.id;
  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  return (
    <Link to={link}>
      <div
        className="relative bg-top bg-cover pt-[160%] rounded-3xl mb-4 hover:scale-105 transition-transform duration-300 ease-linear"
        style={{ backgroundImage: `url(${bg})` }}
      />
      <h3 className="text-white font-semibold text-xs 2xl:text-xl">
        {item.title || item.name}
      </h3>
    </Link>
  );
};

export default MovieCard;
