"use client";
import { useState } from "react";
import Stepper from "../Stepper/Stepper";
import CustomInput from "../UI/CustomInput/CustomInput";
import CustomSelect from "../UI/CustomSelect/CustomSelect";
import CustomPhoneInput from "../UI/CustomPhoneInput/CustopPhoneInput";
import CustomOtp from "../UI/CustomOtp/CustomOtp";
import useSignup from "@/hook/useSignup";

const Signup = () => {
  const {
    name,
    setName,
    isNameError,
    email,
    setEmail,
    isEmailValid,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    otp,
    setOtp,
    country,
    setCountry,
    phone,
    setPhone,
    handleSubmit,
    handleSetPhone,
  } = useSignup();

  const [step, setStep] = useState(0);
  const totalSteps = 3; // Total number of steps
  const countryOption = [
    {
      value: "BD",
      label: "Bangladesh",
    },
    {
      value: "US",
      label: "United States",
    },
    {
      value: "CA",
      label: "Canada",
    },
    {
      value: "UK",
      label: "United Kingdom",
    },
  ];
  const countryCode = [
    {
      value: "+880",
      label: "Bangladesh",
    },
    {
      value: "+1",
      label: "United States",
    },
    {
      value: "+1",
      label: "Canada",
    },
    {
      value: "+44",
      label: "United Kingdom",
    },
  ];

  return (
    <div className="w-fit border-solid border-2 border-gray-300 rounded-lg p-2 bg-slate-50">
      <Stepper setStep={setStep} step={step} totalSteps={totalSteps}>
        <div className="min-h-[300px] flex flex-col justify-center items-center w-full">
          <form className="pt-5 pb-5 w-full ">
            {step === 0 && (
              <>
                <CustomInput
                  label="Your Name"
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <CustomSelect
                  label="Country"
                  options={countryOption}
                  onChange={(e) => setCountry(e.target.value)}
                />
              </>
            )}

            {step === 1 && (
              <>
                <CustomInput
                  label="Your Email"
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <CustomPhoneInput
                  label="Your Phone"
                  options={countryCode}
                  value={phone}
                  onChange={handleSetPhone}
                />
                <CustomInput
                  label="Password"
                  type="password"
                  placeholder="Password"
                />
                <CustomInput
                  label="Confirm Password"
                  type="password"
                  placeholder="Confirm Password"
                />
              </>
            )}
            {step === 2 && (
              <>
                <CustomOtp
                  onComplete={(otp) => console.log(otp)}
                  label="Enter OTP"
                />
              </>
            )}
          </form>
        </div>
      </Stepper>
    </div>
  );
};

export default Signup;
