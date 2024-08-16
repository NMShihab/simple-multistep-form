import { useEffect, useState } from "react";

const useSignup = () => {
  const [name, setName] = useState("");
  const [isNameError, setIsNameError] = useState("");
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [country, setCountry] = useState("");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    if (name.length > 0) {
      setIsNameError("");
    } else {
      setIsNameError("Name is required");
    }

    if (email.length > 0) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }
  }, [name, email, password, confirmPassword, otp, country, phone]);

  const handleSubmit = () => {
    const obj = {
      name,
      email,
      password,
      otp,
      country,
      phone,
    };
    console.log(obj);
  };

  const handleSetPhone = (
    e: React.ChangeEvent<HTMLInputElement>,
    phone: string
  ) => {
    setPhone(`${phone}${e.target.value}`);
  };

  return {
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
  };
};

export default useSignup;
