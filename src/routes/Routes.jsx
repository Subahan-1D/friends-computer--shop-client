import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "./ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Authentication/Login";
import Registration from "../pages/Authentication/Registration";
import QueriesDetails from "../pages/QueriesDetails";
import MyQueries from "../components/MyQueries";
import AddQueriesPage from "../pages/AddQueriesPage";
import MyRecommendations from "../pages/MyRecommendations";
import RecomendedMe from "../pages/RecomendedMe";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>,
        loader: () => fetch(`${import.meta.env.VITE_API_URL}/serviceItem`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/queries-details/:id",
        element: <QueriesDetails></QueriesDetails>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_API_URL}/item/${params.id}`),
      },
      {
        path: "/my-queries",
        element: <MyQueries></MyQueries>,
      },
      {
        path: "/add-queries-page",
        element: <AddQueriesPage></AddQueriesPage>,
      },
      {
        path: "/my-recommendations",
        element: <MyRecommendations></MyRecommendations>,
      },
      {
        path: "/recommendations-me",
        element:<RecomendedMe></RecomendedMe>,
      },
    ],
  },
]);

export default router;