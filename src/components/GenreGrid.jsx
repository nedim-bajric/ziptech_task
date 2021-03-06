import { useState, useEffect, useCallback } from "react";
import { useNavigate, useParams } from "react-router";
import MovieCard from "./MovieCard";
import apiReqs from "../api/apiReqs";
import { Link } from "react-router-dom";
const MovieGrid = (props) => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPage, setTotalPage] = useState(0);
  const { keyword } = useParams();

  useEffect(() => {
    const getList = async () => {
      let response = null;
      if (props.path === undefined) {
        const params = {};

        response = await apiReqs.genres(props.cat, {
          params,
        });
      } else {
        const params = {
          query: props.path,
        };
        response = await apiReqs.search(props.cat, { params });
      }

      setItems(response.results);
      setTotalPage(response.total_pages);
    };
    getList();
  }, [props.path]);

  const loadMore = async () => {
    let response = null;
    if (props.path === undefined) {
      const params = {
        page: page + 1,
      };

      response = await apiReqs.getMoviesList(props.cat, {
        params,
      });
    } else {
      const params = {
        page: page + 1,
        query: props.path,
      };
      response = await apiReqs.search(props.cat, { params });
    }

    setItems([...items, ...response.results]);

    setPage(page + 1);
  };

  return (
    <>
      <div className="mb-10">
        <MovieSearch category={props.category} keyword={keyword} />
      </div>
      <div className="grid grid-cols-2 gap-5 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-7">
        {items.map((item, key) => (
          <MovieCard category={props.cat} item={item} key={key} />
        ))}
      </div>
      {page < totalPage ? (
        <div className="text-center my-10">
          <span
            className="text-white border-2 rounded-full px-9 py-3 font-bold cursor-pointer "
            onClick={loadMore}
          >
            Load more
          </span>
        </div>
      ) : null}
    </>
  );
};

const MovieSearch = (props) => {
  const navigate = useNavigate();

  const [keyword, setKeyword] = useState(props.keyword ? props.keyword : "");

  const goToSearch = useCallback(() => {
    if (keyword.trim().length > 0) {
      navigate(`/${props.cat}/search/${keyword}`);
    }
  }, [keyword, props.cat, navigate]);

  useEffect(() => {
    const enterEvent = (e) => {
      e.preventDefault();
      if (e.keyCode === 13) {
        goToSearch();
      }
    };
    document.addEventListener("keyup", enterEvent);
    return () => {
      document.removeEventListener("keyup", enterEvent);
    };
  }, [keyword, goToSearch]);

  return (
    <div className="w-full max-w-lg relative">
      <input
        type="text"
        placeholder="Enter keyword"
        className="border-none outline-none bg-white/10 py-2 px-6 text-base text-white rounded-3xl w-full pr-32"
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
      />
      <button
        className="absolute cursor-pointer top-0 right-0 text-white bg-red-600 px-3 py-2 rounded-full font-medium  "
        onClick={goToSearch}
      >
        Search
      </button>
    </div>
  );
};

export default MovieGrid;
