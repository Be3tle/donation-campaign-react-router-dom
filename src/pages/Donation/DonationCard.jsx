/* eslint-disable react/prop-types */

const DonationCard = ({ card }) => {
  const { title, image, category } = card || {};

  return (
    <div className="card card-side h-48 md:lg:h-36 bg-blue-100 border-x-indigo-300 rounded border-2">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="p-3 md:pt-7 lg:p-2">
        <p>{category}</p>
        <h2 className="card-title text-lg font-medium md:lg:text-xl py-1">
          {title}
        </h2>
        <p className="py-1">$290</p>
        <div className="card-actions">
          <button className="px-1 md:lg:px-4 pt-1 bg-blue-500 text-white  rounded">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
