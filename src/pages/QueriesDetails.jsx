import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import axios from "axios";
import toast from "react-hot-toast";
const QueriesDetails = () => {
  const [startDate, setStartDate] = useState(new Date());
  const { user } = useContext(AuthContext);
  const item = useLoaderData();
  const {
    _id,
    query_Title,
    date_Posted,
    alternation_Reason,
    brand_Name,
    product_Name,
    product_Image,
    min_price,
    max_price,
    user_Info,
  } = item || {};

  const handleFromSubmission = async (e) => {
    e.preventDefault();
     if (user?.email === user_Info?.email)
       return toast.error("Action not permitted");
    const from = e.target;
    const itemId = _id;
    const price = parseFloat(from.price.value);
     if (price < parseFloat(min_price))
       return toast.error("Offer more or at least equal to minimum price");
    const product_Name = from.product_Name.value;
    const product_Image = from.product_Image.value;
    const deadline = startDate;
    const email = user?.email;
    const itemData = {
      itemId,
      product_Name,
      product_Image,
      email,
      deadline,
      min_price,
      max_price
    };
    try {
      const { data } = await axios.post( `${import.meta.env.VITE_API_URL}/item`,itemData);
      console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="flex flex-col md:flex-row justify-around gap-5  items-center min-h-[calc(100vh-306px)] md:max-w-screen-xl mx-auto ">
      {/* Job Details */}
      <div className="flex-1  px-4 py-7 bg-white rounded-md shadow-md md:min-h-[350px]">
        <div className="flex items-center justify-between">
          <div>
            <img
              src={product_Image}
              alt="not support"
              className="w-full h-40 object-cover"
            />
          </div>
          <div className="flex items-center justify-between gap-5 ">
            <span className="text-sm font-light text-gray-800 ">
              Date : {new Date(date_Posted).toLocaleDateString()}
            </span>
            <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
              Brand : {brand_Name}
            </span>
          </div>
        </div>

        <div>
          <p title={query_Title} className="mt-2 text-lg text-gray-600 ">
            {query_Title.substring(0, 30)}...
          </p>
          <h1 className="mt-2 text-lg  text-red-500 ">
            {alternation_Reason}
          </h1>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
            {product_Name}
          </h1>


          <p className="mt-6 text-sm font-bold text-gray-600 ">
            Boycotting Reason Details :
          </p>
          <div className="flex items-center gap-5">
            <div>
              <p className="mt-2 text-sm  text-gray-600 ">
                Name: {user_Info?.name}
              </p>
              <p className="mt-2 text-sm  text-gray-600 ">
                Email: {user_Info?.email}
              </p>
            </div>
            <div className="rounded-full object-cover overflow-hidden w-14 h-14">
              <img src={user_Info?.thumbnail} alt="" />
            </div>
          </div>
          <p className="mt-6 text-lg font-bold text-gray-600 ">
            Range: ${min_price} - ${max_price}
          </p>
        </div>
      </div>
      {/* Place A Queries */}
      <section className="p-6 w-full  bg-white rounded-md shadow-md flex-1 md:min-h-[350px]">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          My Queries Page.
        </h2>

        <form onSubmit={handleFromSubmission}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="name">
                Product Name
              </label>
              <input
                id="name"
                type="text"
                name="product_Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="emailAddress">
                Email Address
              </label>
              <input
                id="emailAddress"
                type="email"
                name="email"
                defaultValue={user?.email}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="image">
                Product Image
              </label>
              <input
                id="image"
                name="product_Image"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>
              {/* Date Picker Input Field */}
              <DatePicker
                className="border p-2 rounded-md"
                selected={startDate}
                onChange={(date) => setStartDate(date)}
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="price">
                Price
              </label>
              <input
                id="price"
                type="text"
                name="price"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              type="submit"
              className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Add Queries
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default QueriesDetails;
