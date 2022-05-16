import Homepage from "../pages/Homepage";
import Category from "../pages/Category";
import Detail from "../pages/Detail";
import Genres from "../pages/Genres";
const routes = [
  { path: "/:category/:id", element: Detail },
  { path: "/:category/search/:keyword", element: Category },
  { path: "/:category", element: Category },
  { path: "/genres/:id/:id", element: Genres },
  { path: "/", element: Homepage },
];

export default routes;
