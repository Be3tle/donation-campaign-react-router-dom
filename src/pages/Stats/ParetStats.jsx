import { useState } from "react";
import DetailsCard from "./DetailsCard";
import Stats from "./Stats";

const ParentStats = () => {
  const [donatedAmount, setDonatedAmount] = useState(0);

  // Function to update the donated amount when the "Donate" button is clicked
  const handleDonation = (amount) => {
    setDonatedAmount(amount);
  };

  return (
    <div>
      <DetailsCard onDonation={handleDonation} />
      <Stats donatedAmount={donatedAmount} />
    </div>
  );
};

export default ParentStats;
