import { Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import routes from "../utils/routes";
const Mainlayout = () => {
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      return <Route path={prop.path} key={key} element={<prop.element />} />;
    });
  };

  const unknownRoute = () => {
    return <Route path="*" element={""} />;
  };

  return (
    <div className="relative">
      <Header />
      <Routes>
        {getRoutes(routes)} {unknownRoute()}
      </Routes>
    </div>
  );
};

export default Mainlayout;
