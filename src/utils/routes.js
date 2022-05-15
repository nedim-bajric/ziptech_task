import Homepage from "../pages/Homepage";
import Category from "../pages/Category";
import Detail from "../pages/Detail";
const routes = [
  { path: "/:category/:id", element: Detail },
  { path: "/:category/search/:keyword", element: Category },
  { path: "/:category", element: Category },
  { path: "/", element: Homepage },
];

export default routes;
