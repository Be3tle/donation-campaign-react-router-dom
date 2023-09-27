/* eslint-disable react/prop-types */
const Banner = ({ setCards, cards }) => {
  const handleSearch = (e) => {
    e.preventDefault();

    const searchValue = e.target.search.value;
    console.log(searchValue);
    localStorage.setItem("search", searchValue);

    const filterData = cards?.filter((card) => card.category == searchValue);
    setCards(filterData);

    console.log(filterData);
  };

  return (
    <div className="h-[70vh] relative bg-slate-100">
      <img
        className="h-full w-full object-cover opacity-10"
        src="https://workplace.schwab.com/sites/g/files/eyrktu871/files/volunteers-3.960x537.jpg"
        alt=""
      />

      <div className="searchBar absolute bottom-[43%] w-full px-96">
        <h1 className="text-black text-3xl font-semibold hidden md:hidden lg:flex text-center pb-8 mx-auto w-[1200px]">
          I Grow By Helping People In Need
        </h1>
        <form onSubmit={handleSearch}>
          <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input
              type="search"
              name="search"
              id="default-search"
              className="block w-full p-4 pl-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-slate-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-slate-800 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search by category..."
              required
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Banner;
