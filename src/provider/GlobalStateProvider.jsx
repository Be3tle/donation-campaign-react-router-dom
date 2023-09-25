/* eslint-disable react/prop-types */
import { createContext } from "react";

export const GlobalContext = createContext(null);

const GlobalStateProvider = ({ children }) => {
  const userName = "Hory Podo";

  return (
    <div>
      <GlobalContext.Provider value={userName}>
        {children}
      </GlobalContext.Provider>
    </div>
  );
};

export default GlobalStateProvider;
