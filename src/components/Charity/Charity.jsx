/* eslint-disable react/prop-types */
import CharityCard from "./CharityCard";

const Charity = ({ cards }) => {
  return (
    <div>
      <div className="md:grid grid-cols-1 lg:grid-cols-4 gap-4 py-36 mx-auto">
        {cards?.map((card) => (
          <CharityCard key={card.id} card={card}></CharityCard>
        ))}
      </div>
    </div>
  );
};

export default Charity;
