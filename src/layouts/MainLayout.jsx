import { useEffect } from "react";
import { Outlet, useLocation, useNavigation } from "react-router-dom";
import Navbar from "../components/Header/Navbar/Navbar";

const MainLayout = () => {
  const navigation = useNavigation();

  const isLoadingState = navigation.state == "loading";

  console.log(isLoadingState);

  const loc = useLocation();

  useEffect(() => {
    console.log("useEffect loc", loc);

    if (loc.pathname == "/") {
      document.title = `Donation Campaign`;
    } else {
      document.title = `Donation${loc.pathname.replace("/", "-")}`;
    }

    if (loc.state) {
      document.title = loc.state;
    }
  }, [loc.pathname, loc]);

  console.log(loc);

  return (
    <div className="max-w-[1600px] mx-auto">
      <Navbar></Navbar>
      {isLoadingState ? (
        <div>Spinning</div>
      ) : (
        <div className="my-10">
          <Outlet context={"This is an outlet context"}></Outlet>
        </div>
      )}
    </div>
  );
};

export default MainLayout;
