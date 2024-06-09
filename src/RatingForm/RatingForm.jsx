import React from "react";
import { RatingContext } from "../RatingProvider/RatingProvider";

function RatingForm() {
  return (
    <form action="#">
      <div className="flex justify-between mt-5">
        {["1", "2", "3", "4", "5"].map((option) => {
          return (
            <div
              key={option}
              className="relative w-9 h-9 rounded-full bg-gray-700 flex justify-center items-center has-[:checked]:bg-slate-50 has-[:hover]:bg-orange has-[:focus-visible]:border-[1px]"
            >
              <RatingInput value={option} />
            </div>
          );
        })}
      </div>
    </form>
  );
}

function RatingInput({ value }) {
  const id = React.useId();
  const { rating, handleRating } = React.useContext(RatingContext);
  return (
    <>
      <label
        htmlFor={id}
        className="text-light-grey text-sm has-[+:hover]:text-black font-bold mt-[2px]"
      >
        {value}
      </label>
      <input
        className="absolute opacity-0 inset-0 cursor-pointer"
        type="checkbox"
        id={id}
        value={value}
        checked={value === rating}
        onChange={(event) => handleRating(event.target.value)}
      />
    </>
  );
}

export default RatingForm;
