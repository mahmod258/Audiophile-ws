import { createContext, useState } from "react";

export const ContextFilter = createContext();
export function Filter({ children }) {
  const initial = ["auto", "initial"];
  const [filter, setFilter] = useState(initial);
  const changeFilter = () => {
    if (filter[0] === initial[0]) {
      setFilter(["100vh", "hidden"]);
    } else {
      setFilter(initial);
    }
  };
  return (
    <ContextFilter.Provider value={[filter, changeFilter]}>
      {children}
    </ContextFilter.Provider>
  );
}
