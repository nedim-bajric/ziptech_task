import PageHero from "../components/PageHero";
import GenreGrid from "../components/GenreGrid";
const Genres = () => {
  const path = window.location.pathname.includes("movie")
    ? window.location.pathname.slice(14)
    : window.location.pathname.slice(10);
  const cat = window.location.pathname.includes("movie")
    ? window.location.pathname.substring(8, 13)
    : window.location.pathname.substring(8, 10);
  console.log(cat);
  console.log(path);
  return (
    <>
      <PageHero />
      <div className="max-w-7xl mx-auto flex flex-col space-y-7 ">
        <div className="mb-3 px-8">
          <GenreGrid path={path} cat={cat} />
        </div>
      </div>
    </>
  );
};

export default Genres;
