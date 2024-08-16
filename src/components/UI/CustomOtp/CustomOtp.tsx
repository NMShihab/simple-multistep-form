import React, { useState } from "react";

interface CustomOtpProps {
  onComplete: (otp: string) => void;
  label?: string;
}

const CustomOtp: React.FC<CustomOtpProps> = ({ onComplete, label }) => {
  const [otp, setOtp] = useState<string[]>(Array(4).fill(""));

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value;
    if (isNaN(Number(value)) || value.length > 1) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && element.nextSibling) {
      (element.nextSibling as HTMLInputElement).focus();
    }
  };

  React.useEffect(() => {
    if (otp.join("").length === 4) {
      onComplete(otp.join(""));
    }
  }, [otp, onComplete]);

  return (
    <div className="flex flex-col justify-center items-center space-x-2">
      <label className="font-bold pb-2">{label}</label>
      <div className="space-x-2 pt-2">
        {otp.map((data, index) => (
          <input
            key={index}
            className="w-12 h-12 border-2 rounded bg-transparent outline-none text-center font-semibold text-xl"
            type="text"
            inputMode="numeric"
            pattern="\d*"
            maxLength={1}
            value={data}
            onChange={(e) => handleChange(e.target, index)}
            onFocus={(e) => e.target.select()}
          />
        ))}
      </div>
    </div>
  );
};

export default CustomOtp;
