import React from "react";
import CharityCard from "./CharityCard";

const Charity = ({ cards }) => {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-36 mx-auto">
        {cards?.map((card) => (
          <CharityCard key={card.id} card={card}></CharityCard>
        ))}
      </div>
    </div>
  );
};

export default Charity;
