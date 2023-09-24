import Banner from "../../components/Header/Banner/Banner";
import { useLoaderData } from "react-router-dom";
import Charity from "../../components/Charity/Charity";

const Home = () => {
  const cards = useLoaderData();

  return (
    <div className="py-2">
      <Banner></Banner>
      <Charity cards={cards}></Charity>
    </div>
  );
};

export default Home;
