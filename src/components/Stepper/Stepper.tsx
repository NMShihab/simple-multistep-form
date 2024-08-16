"use client";
import { Dispatch, SetStateAction, useState } from "react";
const Stepper = ({
  children,
  step,
  setStep,
  totalSteps,
}: {
  step: number;
  setStep: Dispatch<SetStateAction<number>>;
  children: React.ReactNode;
  totalSteps: number;
}) => {
  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const getProgressBarWidth = () => {
    if (step === 0) {
      return (step / (totalSteps - 1)) * 100;
    } else if (step === totalSteps - 1) {
      return 100;
    } else {
      return ((step + 1) / (totalSteps - 1)) * 100;
    }
  };

  return (
    <div className="w-[500px] px-8 py-4">
      <div className="relative flex items-center justify-between w-full">
        <div
          className={`absolute left-0 top-2/4 h-0.5 w-${getProgressBarWidth()}% -translate-y-2/4 bg-gray-900 transition-all duration-500 ${
            step === 0 ? "bg-black" : "bg-black"
          }`}
        ></div>
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`relative z-10 grid w-10 h-10 font-bold transition-all duration-300 rounded-full place-items-center ${
              index < step
                ? "text-white bg-gray-900"
                : "text-gray-900 bg-gray-300"
            }`}
          >
            {index + 1}
          </div>
        ))}
      </div>
      {children}
      <div className="flex justify-between mt-16">
        <button
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={handlePrev}
          disabled={step === 0}
        >
          Prev
        </button>
        <button
          className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          onClick={() => {
            step === totalSteps - 1 ? () => {} : handleNext();
          }}
        >
          {step === totalSteps - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
