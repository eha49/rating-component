import React from "react";
import RatingCard from "./RatingCard/RatingCard";
import SubmitCard from "./Submit/SubmitCard";

function App() {
  const [isSubmitted, setIsSubmitted] = React.useState(true);

  function handleSubmission() {
    setIsSubmitted(true);
  }
  return (
    <>
      {!isSubmitted && (
        <RatingCard handleSubmission={handleSubmission} />
      )}
      {isSubmitted && <SubmitCard />}
    </>
  );
}

export default App;
