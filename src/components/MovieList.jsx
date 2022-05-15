import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { SwiperSlide, Swiper } from "swiper/react";

import apiReqs, { category } from "../api/apiReqs";
import MovieCard from "./MovieCard";
const MovieList = (props) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getList = async () => {
      let response = null;
      const params = {};

      if (props.type !== "similar") {
        switch (props.category) {
          case category.movie:
            response = await apiReqs.getMoviesList(props.type, { params });
            break;
          default:
            response = await apiReqs.getTvList(props.type, { params });
        }
      } else {
        response = await apiReqs.similar(props.category, props.id);
      }
      setItems(response.results);
    };
    getList();
  }, []);
  return (
    <div className="my-5">
      <Swiper
        grabCursor
        spaceBetween={20}
        slidesPerView="auto"
        centeredSlides
        centeredSlidesBounds
      >
        {items.map((item, key) => (
          <SwiperSlide key={key} className="w-32 xl:w-80">
            <MovieCard item={item} category={props.category} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

MovieList.propTypes = {
  category: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default MovieList;
