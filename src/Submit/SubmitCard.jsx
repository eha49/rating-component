function SubmitCard() {
  return (
    <article className="card flex flex-col items-center">
      <div>
        <img
          src="../src/assets/images/illustration-thank-you.svg"
          alt="thankyou icon"
          className="w-28"
        />
      </div>
      <p className="text-xs text-amber-500 bg-gray-700 px-3 py-2 mt-6 rounded-full">
        You selected 4 out of 5 stars
      </p>
      <p className="text-xl text-white font-medium mt-5">
        Thank you!
      </p>
      <p className="card-description text-center">
        We appreciate you taking the time to give a rating. If you
        ever need more support, do not hesitate to get in touch!
      </p>
    </article>
  );
}

export default SubmitCard;
