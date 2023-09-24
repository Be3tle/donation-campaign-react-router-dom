/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DetailsCard = ({ card, onDonation }) => {
  const { id, title, image } = card || {};

  const handleAddToDonation = () => {
    const addedDonation = [];

    const donatedItem = JSON.parse(localStorage.getItem("donations"));
    if (!donatedItem) {
      addedDonation.push(card);
      localStorage.setItem("donations", JSON.stringify(addedDonation));

      toast("Congrats! Donations have been added");
    } else {
      addedDonation.push(...donatedItem, card);
      localStorage.setItem("donations", JSON.stringify(addedDonation));

      toast("Congrats! Donations have been added");
    }
  };

  return (
    <>
      <div key={id} className="relative flex justify-center items-center">
        <div className="relative">
          <img src={image} className="w-[1080px]" alt="Your Image" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-black opacity-70"></div>
          <button
            onClick={() => {
              handleAddToDonation();
              const donationAmount = 1;
              onDonation(donationAmount);
            }}
            className="absolute left-6 bottom-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Donate $290
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center w-[1080px] mx-auto">
        <h5 className="text-2xl font-bold pt-10 pb-5">{title}</h5>
        <p className="">
          There are many things that can be done to ensure that all people have
          access to a good education. Governments can invest in public schools,
          provide financial assistance to students, and make sure that all
          schools have qualified teachers and resources. Families can support
          their children's education by creating a learning environment at home
          and helping them with their schoolwork. Teachers can create a positive
          and supportive learning environment for their students and challenge
          them to reach their full potential.
        </p>
      </div>
      <ToastContainer />
    </>
  );
};

export default DetailsCard;
