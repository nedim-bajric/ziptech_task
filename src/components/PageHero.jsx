import bg from "../assets/footer-bg.jpg";
const PageHero = (props) => {
  return (
    <div
      className="w-screen py-32 px-8  mb-8 bg-top bg-cover"
      style={{
        backgroundImage: `linear-gradient(to top, rgb(0,0,0), rgba(0,0,0, 0)),url(${bg})`,
      }}
    >
      <h2 className="text-white font-bold text-center">{props.children}</h2>
    </div>
  );
};

export default PageHero;
