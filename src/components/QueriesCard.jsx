import { Link } from "react-router-dom";


const QueriesCard = ({item}) => {
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
      user_Info: {
        name,
        thumbnail,
      },
    } = item || {};

  return (
    <Link to={`/queries-details/${_id}`} className="recent-queries ">
      <div className="card bg-white shadow-lg p-4">
        <img
          src={product_Image}
          alt="NOT FOUND"
          className="w-full h-40 object-cover"
        />
        <h3 className="text-xl mt-2">{query_Title}</h3>
        <p>
          <strong>Product Name:</strong> {product_Name}
        </p>
        <p>
          <strong>Brand Name:</strong> {brand_Name}
        </p>
        <p>
          <strong>Alternation Reason:</strong>
          {alternation_Reason}
        </p>
        <p>
          <strong>Date Posted:</strong>{" "}
          {new Date(date_Posted).toLocaleDateString()}
        </p>
        <p className="mt-2 text-sm font-bold text-gray-600 ">
          Range: ${min_price} - ${max_price}
        </p>
      </div>
    </Link>
  );
};

export default QueriesCard;
