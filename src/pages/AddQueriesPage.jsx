import React, { useContext, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
const AddQueriesPage = () => {
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(new Date());
  const navigate = useNavigate("/");

  const handleFromSubmit = async (e) => {
    e.preventDefault();
    const from = e.target;
    const query_Title = from.query_Title.value;
    const product_Name = from.product_Name.value;
    const brand_Name = from.brand_Name.value;
    const email = user?.email;
     const min_price = parseFloat(from.min_price.value);
     const max_price = parseFloat(from.max_price.value);
    const product_Image = from.product_Image.value;
    const alternation_Reason = from.alternation_Reason.value;
    const date_Posted = startDate;
    const queryData = {
      query_Title,
      product_Name,
      brand_Name,
      product_Image,
      alternation_Reason,
      date_Posted,
      min_price,
      max_price,
      user_Info: {
        email,
        name: user?.displayName,
        thumbnail: user?.photoURL,
      },
    };
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/query`,
        queryData
      );
      console.log(data);
      toast.success("item add data successful");
      navigate("/my-recommendations");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Add Query Page
        </h2>

        <form onSubmit={handleFromSubmit}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="query_Title">
                Query Title
              </label>
              <input
                id="query_Title"
                type="text"
                name="query_Title"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="product_Name">
                Product Name
              </label>
              <input
                id="product_Name"
                type="text"
                name="product_Name"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="brand_Name">
                Brand Name
              </label>
              <input
                id="brand_Name"
                type="text"
                name="brand_Name"
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
              <label className="text-gray-700 " htmlFor="product_Image">
                Product Image URL
              </label>
              <input
                id="product_Image"
                name="product_Image"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="alternation_Reason">
                Alternation Reason
              </label>
              <input
                id="alternation_Reason"
                name="alternation_Reason"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="min_price">
                Minimum Price
              </label>
              <input
                id="min_price"
                name="min_price"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label className="text-gray-700 " htmlFor="max_price">
                Maximum Price
              </label>
              <input
                id="max_price"
                name="max_price"
                type="number"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
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

export default AddQueriesPage;
