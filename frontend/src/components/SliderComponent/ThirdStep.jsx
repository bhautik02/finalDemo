const ThirdStep = () => {
  return (
    <div className="p-4">
      <div className="grid mt-2 gap-2 lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1 ">
        <label for="points" className="text-xl mt-4">
          Number of Bedrooms
        </label>
        <input
          type="number"
          className="w-full border my-1 py-2 px-3 rounded-2xl"
          placeholder="2"
          min="1"
          max="10"
        />
        <label for="points" className="text-xl mt-4">
          Number of Bathroom
        </label>
        <input
          type="number"
          className="w-full border my-1 py-2 px-3 rounded-2xl"
          placeholder="2"
          min="1"
          max="5"
        />
        <label for="points" className="text-xl mt-4">
          Maximum Guest allowed
        </label>
        <input
          type="number"
          className="w-full border my-1 py-2 px-3 rounded-2xl"
          placeholder="2"
          min="1"
          max="10"
        />
        <label for="points" className="text-xl mt-4">
          Prefered Check In time
        </label>
        <input
          type="time"
          id="cit"
          name="cit"
          placeholder="12:00am"
          className="w-full border my-1 py-2 px-3 rounded-2xl"
        />
        <label for="points" className="text-xl mt-4">
          Prefered Check Out time
        </label>
        <input
          type="time"
          id="cot"
          name="cot"
          placeholder="12:00am"
          className="w-full border my-1 py-2 px-3 rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ThirdStep;
