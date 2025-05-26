import {
  keepPreviousData,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { deletePost, getPosts } from "../APIS/api";
import { useState } from "react";

export const FetchRQ = () => {
  const [pageNumber, setPageNumber] = useState(0);

  const getApiData = async (pageNumber) => {
    try {
      const res = await getPosts(pageNumber);
      return res.status === 200 && res.data;
    } catch (error) {
      console.log(error);
    }
  };

  const queryClient = useQueryClient();
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["posts", pageNumber],
    queryFn: () => getApiData(pageNumber),
    placeholderData: keepPreviousData,
  });

  const deleteUseMutation = useMutation({
    mutationFn: (id) => deletePost(id), // Assuming deletePost is defined to handle the deletion
    onSuccess: (data, id) => {
      // Optionally, you can refetch the posts after deletion
      // queryClient.invalidateQueries(["posts", pageNumber]);

      queryClient.setQueryData(["posts", pageNumber], (curElem) => {
        return curElem?.filter((item) => item.id !== id);
      });
      console.log(`Post with ID ${id} deleted successfully `);
    },
  });

  // updated function usign useMutation hook
  const updateUseMutation = useMutation({
    mutationFn: (id) => updatePost(id),
    onSuccess: (data, id) => {
      queryClient.setQueryData(["posts", pageNumber], (oldData) => {
        return oldData?.map((curElem) =>
          curElem.id === id ? { ...curElem, title: data.data.title } : curElem
        );
      });
      console.log(data);
      console.log(`Update with ID ${id} updated successfully `);
    },
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto mt-10 max-w-[1920px] mb-10">
        {data?.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-md rounded-lg p-6 border border-gray-200 relative"
          >
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-700 mb-4">{item.body}</p>
            <span className="text-sm text-gray-500">
              Post ID: {item.id}
            </span>{" "}
            <br />
            <button
              className=" bg-blue-500 text-white px-4 py-2 rounded-md mr-5 "
              onClick={() => deleteUseMutation.mutate(item.id)}
            >
              Delete
            </button>
            <button
              className=" bg-blue-500 text-white px-4 py-2 rounded-md "
              onClick={() => updateUseMutation.mutate(item.id)}
            >
              Update
            </button>
          </div>
        ))}
      </div>
      <div className="pagenation flex justify-center items-center gap-4 mb-10">
        <button
          className="text-white font-bold bg-gray-800 px-9 py-1 rounded-lg"
          onClick={() => setPageNumber((prev) => Math.max(prev - 10, 0))}
        >
          Prev
        </button>
        <h2 className="text-green-700 font-bold text-xl">
          {pageNumber / 10 + 1}
        </h2>
        <button
          className="text-white font-bold bg-gray-800 px-9 py-1 rounded-lg"
          onClick={() => setPageNumber((prev) => prev + 10)}
        >
          Next
        </button>
      </div>
    </>
  );
};
