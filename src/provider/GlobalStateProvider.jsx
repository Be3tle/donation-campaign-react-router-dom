/* eslint-disable react/prop-types */
import { createContext } from "react";

export const GlobalContext = createContext(null);

const GlobalStateProvider = ({ children }) => {
  const userName = "Harry Potter";

  return (
    <div>
      <GlobalContext.Provider value={userName}>
        {children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalStateProvider;
