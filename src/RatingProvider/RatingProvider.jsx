import React from "react";

export const RatingContext = React.createContext();

function RatingProvider({ children }) {
  const [rating, setRating] = React.useState("3");

  function handleRating(value) {
    if (value === rating) {
      return;
    }

    setRating(value);
  }
  return (
    <RatingContext.Provider value={{ rating, handleRating }}>
      {children}
    </RatingContext.Provider>
  );
}

export default RatingProvider;
