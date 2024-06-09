import RatingForm from "../RatingForm/RatingForm";

function RatingCard({ handleSubmission }) {
  return (
    <article className="card">
      <div className="w-fit p-3 bg-gray-700 rounded-full">
        <img
          src="../../src/assets/images/icon-star.svg"
          alt="a star icon"
          className="w-3 h-3"
        />
      </div>
      <h1 className="text-xl text-white font-medium mt-5">
        How did we do?
      </h1>
      <p className="text-xs text-light-grey mt-3">
        Please let us know how we did with your support request. All
        feedback is appreciated to help us improve our offering!
      </p>
      <RatingForm handleSubmission={handleSubmission} />
    </article>
  );
}

export default RatingCard;
