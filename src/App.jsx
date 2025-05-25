import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { MainLayOut } from "./components/Layout/MainLayOut";
import { ErrorPage } from "./Pages/ErrorPage";
import { Home } from "./Pages/Home";
import { FetchOld } from "./Pages/FetchOld";
import { FetchRQ } from "./Pages/FetchRQ";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

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
          element: <FetchRQ />,
        },
                {
          path: "/infinite",
          element: <InfiniteScroll />,
        },
      ],
    },
  ]);
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={route} />
        <ReactQueryDevtools initialIsOpen={true} />
      </QueryClientProvider>
    </>
  );
};
export default App;
