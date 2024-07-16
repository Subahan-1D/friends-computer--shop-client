import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import DatePicker from "react-datepicker";
import axios from "axios";
import toast from "react-hot-toast";

const Update = () => {
  const navigate = useNavigate();
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
  const { user } = useContext(AuthContext);
  const [startDate, setStartDate] = useState(
    new Date(date_Posted) || new Date()
  );
  const handleFromSubmission = async (e) => {
    e.preventDefault();
    const from = e.target;
    const query_Title = from.query_Title.value;
    const product_Name = from.product_Name.value;
    const brand_Name = from.brand_Name.value;
    const product_Image = from.product_Image.value;
    const email = user?.email;
    const min_price = parseInt(from.min_price.value);
    const max_price = parseInt(from.max_price.value);
    const alternation_Reason = from.alternation_Reason.value;
    const date_Posted = startDate;
    const itemData = {
      query_Title,
      brand_Name,
      product_Name,
      product_Image,
      email,
      min_price,
      max_price,
      alternation_Reason,
      date_Posted,
      user_Info: {
        email,
        name: user?.displayName,
        photo: user?.photoURL,
      },
    };
    // console.log(itemData)
    try {
      const { data } = await axios.put(
        `${import.meta.env.VITE_API_URL}/item/${_id}`,
        itemData
      );
      console.log(data);
      toast.success("Update Successful");
      navigate("/my-recommendations");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  };
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
      <section className=" p-2 md:p-6 mx-auto bg-white rounded-md shadow-md ">
        <h2 className="text-lg font-semibold text-gray-700 capitalize ">
          Update a service product
        </h2>

        <form onSubmit={handleFromSubmission}>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label className="text-gray-700 " htmlFor="query_Title">
                Query Title
              </label>
              <input
                id="name"
                type="text"
                name="query_Title"
                defaultValue={query_Title}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="brand_Name">
                Brand Name
              </label>
              <input
                id="Brand_Name"
                type="text"
                name="brand_Name"
                defaultValue={brand_Name}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="text-gray-700 " htmlFor="name">
                Product Name
              </label>
              <input
                id="name"
                type="text"
                name="product_Name"
                defaultValue={product_Name}
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
                defaultValue={product_Image}
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
              <label className="text-gray-700 " htmlFor="min_price">
                Minimum Price
              </label>
              <input
                id="min_price"
                name="min_price"
                type="number"
                defaultValue={min_price}
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
                defaultValue={max_price}
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md  focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
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
                defaultValue={alternation_Reason}
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
              Update
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Update;
