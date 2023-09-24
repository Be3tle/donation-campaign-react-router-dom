import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
  const [donations, setDonation] = useState([]);
  const [notFound, setNotFound] = useState("");
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    const donatedItem = JSON.parse(localStorage.getItem("donations"));

    if (donatedItem) {
      setDonation(donatedItem);
    } else {
      setNotFound("NO DONATION FOUND");
    }
  }, []);

  console.log(isShown);
  return (
    <div>
      {notFound ? (
        <p className="h-[50vh] flex justify-center items-center text-xl font-bold">
          {notFound}
        </p>
      ) : (
        <div>
          <div className="grid grid-cols-2 gap-5">
            {isShown
              ? donations.map((card) => (
                  <DonationCard key={card.id} card={card}></DonationCard>
                ))
              : donations
                  .slice(0, 4)
                  .map((card) => (
                    <DonationCard key={card.id} card={card}></DonationCard>
                  ))}
          </div>

          {donations.length > 4 && (
            <div className="flex justify-center items-center py-9">
              <button
                onClick={() => setIsShown(!isShown)}
                className={`px-4 py-1 bg-green-500 text-white rounded ${
                  isShown ? "hidden" : ""
                }`}
              >
                See All
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Donation;
