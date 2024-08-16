const CustomInput = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  placeholder,
}: {
  label?: string;
  type?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  placeholder?: string;
}) => {
  return (
    <div className="flex flex-col gap-2 pt-2">
      <label className="font-bold">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="border-solid border-2 border-gray-300 rounded-lg p-2"
        placeholder={placeholder}
      />
      {error && (
        <p className="text-red-600 font-semibold bg-red-100 p-2 rounded">
          {error}
        </p>
      )}
    </div>
  );
};

export default CustomInput;
