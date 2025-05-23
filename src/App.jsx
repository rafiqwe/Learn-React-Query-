import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayOut } from "./components/Layout/MainLayOut";
import { ErrorPage } from "./Pages/ErrorPage";
import { Home } from "./Pages/Home";
import { FetchOld } from "./Pages/FetchOld";
import { FetchRQ } from "./Pages/FetchRQ";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <MainLayOut />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/trad",
          element: <FetchOld />,
        },
        {
          path: "/rq",
          element: <FetchRQ/>,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={route} />
    </>
  );
};
export default App;
