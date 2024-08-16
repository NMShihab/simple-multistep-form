const CustomSelect = ({
  label,
  name,
  value,
  onChange,
  error,
  options,
}: {
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
  options: { value: string; label: string }[];
}) => {
  return (
    <div className="flex flex-col gap-2 pt-2">
      <label className="font-bold">{label}</label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        className="border-solid border-2 border-gray-300 rounded-lg p-2"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default CustomSelect;
