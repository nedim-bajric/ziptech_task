import BG from "../assets/bg_main.webp";
const HeroSection = () => {
  return (
    <div
      className="w-screen h-96 bg-center bg-cover bg-red-200"
      style={{
        backgroundImage: `linear-gradient(to top, rgb(0,0,0), rgba(0,0,0, 0)),url("${BG}")`,
      }}
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h3 className="text-white font-bold text-3xl 2xl:text-7xl">MovieAPP</h3>
        <span className="font-medium text-red-600 2xl:text-3xl">
          Watch and Relax
        </span>
      </div>
    </div>
  );
};

export default HeroSection;
