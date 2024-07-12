import { useLoaderData } from "react-router-dom";
import Carousel from "../components/Carousel";
import RecentQueries from "../components/RecentQueries";
const Home = () => {
  const serviceItem = useLoaderData();
  console.log(serviceItem);

  return (
    <div>
      <Carousel></Carousel>
      <RecentQueries serviceItem={serviceItem}></RecentQueries>
    </div>
  );
};

export default Home;



