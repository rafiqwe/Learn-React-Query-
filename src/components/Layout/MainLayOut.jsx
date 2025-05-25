import { Outlet, useNavigation } from "react-router-dom";
import { Header } from "../../Pages/Header";
import { Footer } from "../../Pages/Footer";

export const MainLayOut = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") return <LoadingPage />;
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
