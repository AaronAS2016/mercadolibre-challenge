import React, { useContext, useMemo, useState } from "react";

const ItemsContext = React.createContext<any>(null);

export const ItemsProvider: React.FC = (props) => {
  const [query, setQuery] = useState("");
  const [categories, setCategories] = useState([]);

  const value = useMemo(() => {
    return {
      query,
      setQuery,
      categories,
      setCategories,
    };
  }, [categories, query]);

  return <ItemsContext.Provider value={value} {...props} />;
};

export const useItems = () => {
  const context = useContext(ItemsContext);
  if (!context) {
    throw new Error("useItems must bee inside of provider");
  }
  return context;
};
