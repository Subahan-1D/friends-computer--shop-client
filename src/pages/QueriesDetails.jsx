import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const QueriesDetails = () => {
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
    user_Info: { name, thumbnail },
  } = item || {};

  const handleFromSubmission = async (e) => {
    e.preventDefault();
    const from = e.target;
    const itemId = _id;
    const name = from.name.value;
    const image = from.image.value
    // const deadline = deadline
    const email = user?.email;
    const itemData = {
      itemId,name,image,email
    }
    // console.log(itemData)
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
              Date : {date_Posted}
            </span>
            <span className="px-4 py-1 text-xs text-blue-800 uppercase bg-blue-200 rounded-full ">
              Brand : {brand_Name}
            </span>
          </div>
        </div>

        <div>
          <p className="mt-2 text-lg text-gray-600 ">{query_Title}</p>
          <h1 className="mt-2 text-3xl font-semibold text-gray-800 ">
            {product_Name}
          </h1>

          <p className="mt-6 text-sm font-bold text-gray-600 ">
            Boycotting Reason Details :
          </p>
          <div className="flex items-center gap-5">
            <div>
              <p className="mt-2 text-sm  text-gray-600 ">Name: Jhankar Vai.</p>
              <p className="mt-2 text-sm  text-gray-600 ">
                Email: jhankar@mahbub.com
              </p>
            </div>
            <div className="rounded-full object-cover overflow-hidden w-14 h-14">
              <img src="" alt="" />
            </div>
          </div>
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
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
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
                Image
              </label>
              <input
                id="image"
                name="image"
                type="text"
                className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring"
              />
            </div>
            <div className="flex flex-col gap-2 ">
              <label className="text-gray-700">Deadline</label>

              {/* Date Picker Input Field */}
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
