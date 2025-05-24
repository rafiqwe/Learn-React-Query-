import { useQuery } from "@tanstack/react-query";
import { getPosts } from "../APIS/api";

export const FetchRQ = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });
  if (isLoading) return <div className="text-center mt-10">Loading...</div>;
  if (isError)
    return (
      <div className="text-center mt-10 text-red-500">
        Error: {error.message}
      </div>
    );
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto mt-10 max-w-[1920px] mb-10">
        {data?.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-4">{item.body}</p>
            <span className="text-sm text-gray-500">Post ID: {item.id}</span>
          </div>
        ))}
      </div>
    </>
  );
};
