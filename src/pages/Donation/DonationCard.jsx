/* eslint-disable react/prop-types */

const DonationCard = ({ card }) => {
  const { title, image, category, textClr, cardBg, textBg } = card || {};

  return (
    <div
      style={{ backgroundColor: cardBg, color: textClr }}
      className="card card-side h-48 md:lg:h-36 rounded"
    >
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="p-3 md:pt-7 lg:p-2">
        <div className="px-2 mx-auto pr-40">
          <h4 style={{ backgroundColor: textBg }} className="">
            {category}
          </h4>
        </div>
        <h2 className="card-title text-lg font-medium md:lg:text-xl py-1">
          {title}
        </h2>
        <p className="py-1">$290</p>
        <div className="card-actions">
          <button
            style={{ backgroundColor: textClr }}
            className="px-1 md:lg:px-4 pt-1 text-white  rounded"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
