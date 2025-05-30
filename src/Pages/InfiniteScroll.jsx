import { useInfiniteQuery } from "@tanstack/react-query";
import { fecthUsers } from "../APIS/api";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export const InfiniteScroll = () => {
  const { data, hasNextPage, fetchNextPage, status, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["users"],
      queryFn: fecthUsers,
      getNextPageParam: (lastPage, allPage) => {
        // console.log(lastPage, allPage);
        return lastPage.length === 10 ? allPage.length + 1 : undefined;
      },
    });
  // const handleScroll = () => {
  //   const bottom =
  //     window.innerHeight + window.scrollY >=
  //     document.documentElement.scrollHeight - 1;
  //   if (bottom && hasNextPage) {
  //     fetchNextPage();
  //   }
  // };

  const { ref, inView } = useInView({
    threshold: 1,
  });
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, hasNextPage, fetchNextPage]);

  return (
    <>
      <div className="mx-5 my-7">
        <h1 className="w-full text-center text-2xl font-bold ">
          The Infinite Scroll Page
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
          {data?.pages?.map((page, i) =>
            page.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                <img
                  src={user.avatar_url}
                  alt={user.title}
                  className="w-32 h-32 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-semibold text-gray-800">
                  {user.login}
                </h2>
              </div>
            ))
          )}
        </div>
        <div ref={ref}>
          {isFetchingNextPage && (
            <div className="text-center text-red-500">Loading more....</div>
          )}
        </div>
      </div>
    </>
  );
};
