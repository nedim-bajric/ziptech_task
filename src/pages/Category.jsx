import { category as cate } from "../api/apiReqs";
import { useParams } from "react-router";
import MovieGrid from "../components/MovieGrid";
import PageHero from "../components/PageHero";

const Category = () => {
  const { category } = useParams();
  return (
    <>
      <PageHero>{category === cate.movie ? "Movies" : "TV SHOWS"}</PageHero>
      <div className="max-w-7xl mx-auto flex flex-col space-y-7 ">
        <div className="mb-3 px-8">
          <MovieGrid category={category} />
        </div>
      </div>
    </>
  );
};

export default Category;
