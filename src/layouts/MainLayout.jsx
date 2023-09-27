import { useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
  const navigation = useNavigation();

  const isLoadingState = navigation.state == "loading";

  const loc = useLocation();

  useEffect(() => {
    if (loc.pathname == "/") {
      document.title = `Donation Campaign`;
    } else {
      document.title = `${loc.pathname.replace("/", "")}`;
    }

    if (loc.state) {
      document.title = loc.state;
    }
  }, [loc.pathname, loc]);

  return (
    <div className="max-w-[1600px] mx-auto">
      <Navbar></Navbar>
      {isLoadingState ? (
        <div>Spinner</div>
      ) : (
        <div className="my-10">
          <Outlet></Outlet>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
