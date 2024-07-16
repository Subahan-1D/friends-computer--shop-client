import { useEffect, useState } from "react";
import QueriesCard from "./QueriesCard";
import axios from "axios";

const RecentQueries = () => {

   const [items, setItems] = useState([]);

   useEffect(() => {
     const getData = async () => {
       const { data } = await axios(
         `${import.meta.env.VITE_API_URL}/serviceItem`,{withCredentials:true}
       );
       setItems(data);
     };
     getData();
   }, []);
  return (
    <div className="container px-6 py-10 mx-auto">
      <div className="container px-4 py-10 mx-auto">
        <h1 className="text-2xl font-semibold text-center text-gray-500 capitalize lg:text-3xl ">
          Recent All Queries  Page
        </h1>

        <p className="max-w-2xl mx-auto my-6 text-center text-gray-500 ">
          Recent Queries available for the time being Browse them by clicking on
          the queries below.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 xl:mt-10  lg:grid-cols-3 ">
        {items.map((item) => (
          <QueriesCard key={item._id} item={item}></QueriesCard>
        ))}
      </div>
    </div>
  );
};

export default RecentQueries;
