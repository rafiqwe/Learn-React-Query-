import { useEffect, useState } from "react";
import { getPosts } from "../APIS/api";

export const FetchOld = () => {
    const [post, setPost] = useState([]);
    const getApiData = async () => {
        try {     
            const res = await getPosts();
            res.status === 200 && setPost(res.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getApiData();
    }, []);
    return(<>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-[90%] mx-auto mt-10 max-w-[1920px] mb-10" >
            {post?.map((item) => (
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
    </>)
}