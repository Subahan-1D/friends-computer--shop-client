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
          alt="not support"
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
          <strong>Date Posted:</strong> {date_Posted}
        </p>
        {/* <div className="user-info flex items-center mt-2">
          <img
            src={thumbnail}
            alt=""
            className="h-8 w-8 rounded-full mr-2"
          />
          <span>{name}</span>
        </div> */}
        {/* <button className="btn btn-secondary my-3">Add Product</button> */}
      </div>
    </Link>
  );
};

export default QueriesCard;
