const Input = ({ handleChange, handleKeyDown, value }) => {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <input
          id="city"
          name="Enter a City..."
          type="text"
          className="border-b text-3xl font-mono border-gray-300 py-1 focus:border-b-2 focus:border-stone-500 transition-colors focus:outline-none peer bg-inherit"
          value={value}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          required
        />
        <label
          for="city"
          className="absolute left-0 top-1 cursor-text peer-focus:text-xs peer-focus:-top-1 transition-all peer-focus:text-stone-700"
        >
          Enter a city
        </label>
      </div>
    </div>
  );
};

export default Input;
