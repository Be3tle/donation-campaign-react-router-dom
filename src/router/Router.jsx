import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Donation from "../pages/Donation/Donation";
import Stats from "../pages/Stats/Stats";
import Details from "../pages/Details/Details";

const myCreatedRoute = createBrowserRouter([
  // console.log(myCreatedRoute)
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch(`/data.json`),
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
      },
      {
        path: "/stats",
        element: <Stats></Stats>,
      },
      {
        path: "/donate/:id",
        element: <Details></Details>,
      },
    ],
  },
]);

export default myCreatedRoute;
