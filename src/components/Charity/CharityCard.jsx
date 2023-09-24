/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CharityCard = ({ card }) => {
  const { id, title, image, category } = card || {};
  return (
    <Link to={`/donate/${id}`} state={title}>
      <div key={id} className="mb-4">
        <div
          className={`flex w-56 flex-col rounded-md mx-5 border-slate-300 border-2 bg-blue-100`}
        >
          <div>
            <img className="w-full" src={image} alt="" />
          </div>
          <div className="p-2">
            <h4 className="">{category}</h4>
            <h5 className="text-lg font-semibold ">{title}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharityCard;
