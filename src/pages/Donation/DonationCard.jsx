/* eslint-disable react/prop-types */

const DonationCard = ({ card }) => {
  const { title, image, category } = card || {};

  return (
    <div className="card card-side h-32 bg-blue-100 border-x-indigo-300 rounded border-2">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div className="p-3">
        <p>{category}</p>
        <h2 className="card-title">{title}</h2>
        <p>$290</p>
        <div className="card-actions">
          <button className="px-4 py-1 bg-blue-500 text-white rounded">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default DonationCard;
