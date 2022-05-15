import { useEffect, useState } from "react";
import { useParams } from "react-router";

import apiReqs from "../api/apiReqs";
import apiConfig from "../api/apiConfig";

import MovieList from "../components/MovieList";
import CastList from "../components/CastList";
import VideoList from "../components/VideoList";

import { MdFavorite } from "react-icons/md";

const Detail = () => {
  const { category, id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await apiReqs.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };
    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            style={{
              backgroundImage: ` linear-gradient(to top, rgb(0,0,0), rgba(0,0,0, 0)),url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
            className="h-[50vh] relative bg-center bg-cover"
          />

          <div className="mb-3 flex items-start justify-start max-w-7xl mx-auto -mt-52 relative px-8">
            <div className="w-96 h-96 hidden sm:block">
              <div
                className="bg-center bg-cover  pt-40 rounded-3xl w-full h-full"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
              />
            </div>
            <div className="w-full sm:9/12 sm:pl-8 relative mb-2 text-white space-y-5">
              <div className="flex  items-center space-x-10">
                <h1 className="text-4xl font-bold">
                  {item.title || item.name}
                </h1>
                <div className=" text-white p-2 bg-red-500 rounded cursor-pointer w-fit md:left-32 md:bottom-40 h-fit">
                  <MdFavorite size={50} />
                </div>
              </div>
              <div className="ml-0.5 space-x-3">
                {item.genres &&
                  item.genres.slice(0, 3).map((genre, key) => (
                    <span
                      className="px-3  py-2 border border-white rounded-3xl text-xs bg-black"
                      key={key}
                    >
                      {genre.name}
                    </span>
                  ))}
              </div>

              <p className="text-white text-xs">{item.overview}</p>
              <div>
                <div>
                  <h2>Casts</h2>
                </div>
                <CastList id={item.id} />
              </div>
            </div>
          </div>
          <div className="max-w-screen-2xl mx-auto">
            <div className="mb-3 px-8">
              <VideoList id={item.id} />
            </div>
            <div className="mb-3 px-8">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-white">Similar</h2>
              </div>
              <MovieList category={category} type="similar" id={item.id} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
