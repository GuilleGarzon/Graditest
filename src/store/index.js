import { useState, createContext } from 'react';

export const Store = createContext();

const initialState = {
  products: [],
};

export default function ShoppingProvider({ children }) {
  const [shopping, setShopping] = useState(initialState);

  return (
    <Store.Provider value={{ shopping, setShopping }}>
      {children}
    </Store.Provider>
  );
}
