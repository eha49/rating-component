import React from "react";
import RatingCard from "./RatingCard/RatingCard";
import SubmitCard from "./Submit/SubmitCard";
import RatingProvider from "./RatingProvider/RatingProvider";

function App() {
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  function handleSubmission() {
    setIsSubmitted(true);
  }
  return (
    <>
      <RatingProvider>
        {!isSubmitted && (
          <RatingCard handleSubmission={handleSubmission} />
        )}
        {isSubmitted && <SubmitCard />}
      </RatingProvider>
    </>
  );
}

export default App;
