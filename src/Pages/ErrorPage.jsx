import { useNavigation } from "react-router-dom";

export const ErrorPage = () => {
  const navigation = useNavigation();
  return (
    <>
      {navigation.state === "loading" ? (
        <div className="flex justify-center items-center h-screen">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500">
            Loading....
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
          <p className="text-lg">
            The page you are looking for does not exist.
          </p>
        </div>
      )}
    </>
  );
};
