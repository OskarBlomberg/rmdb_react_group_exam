import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import SearchResultPage from "./pages/SearchResultPage";
import FavoritesPage from "./pages/FavoritesPage";
import MovieDetailsPage from "./pages/MovieDetailsPage";

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
          path: "/favorites",
          element: <FavoritesPage />
        },
        {
          path: "/moviedetails/:id",
          element: <MovieDetailsPage />
        }
      ]
      }
    ])
    return (
      <RouterProvider router={ router }/>
  )
}

export default App;