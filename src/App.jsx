import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/Homepage/HomePage";
import SearchResultPage from "./pages/SearchResultPage/SearchResultPage";

import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import WatchListPage from "./pages/WatchListPage/WatchListPage";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/searchresults",
          element: <SearchResultPage />,
        },
        {
          path: "/watchlist",
          element: <WatchListPage />,
        },
        {
          path: "/moviedetails/:id",
          element: <MovieDetailsPage />,
        },
        {
          path: "*",
          element: <NotFoundPage />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
