import { useState } from "react";

const CustomPhoneInput = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
  options,
}: {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, selected: string) => void;
  error?: string;
  placeholder?: string;
  options: { value: string; label: string }[];
}) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  return (
    <div>
      <div className="flex flex-col gap-2 pt-2">
        <label className="font-bold">{label}</label>
        <div className="flex">
          <select
            name={name}
            value={value}
            onChange={(e) => {
              setSelectedOption(e.target.value);
            }}
            className="border-solid border-2  border-gray-300 rounded-lg p-2 rounded-r-none bg-gray-300"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.value}
              </option>
            ))}
          </select>
          <input
            type="text"
            className="border-solid border-2 w-full border-gray-300 rounded-lg p-2 rounded-l-none border-l-0 focus:outline-none"
            onChange={(e) => onChange && onChange(e, selectedOption)}
          />
        </div>
      </div>
    </div>
  );
};

export default CustomPhoneInput;
