/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CharityCard = ({ card }) => {
  const { id, title, image, category, textClr, textBg, cardBg } = card || {};
  return (
    <Link to={`/donate/${id}`} state={title}>
      <div key={id} className="mb-4">
        <div
          style={{ backgroundColor: cardBg, color: textClr }}
          className={`flex w-56 flex-col rounded-md mx-5 border-slate-300 border-2`}
        >
          <div>
            <img className="w-full" src={image} alt="" />
          </div>
          <div className="p-2 mx-auto pr-40">
            <h4 style={{ backgroundColor: textBg }} className="">
              {category}
            </h4>
          </div>
          <div className="p-2">
            <h5 className="text-lg font-medium">{title}</h5>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharityCard;
