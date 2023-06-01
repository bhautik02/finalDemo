import { forwardRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addPlaceActions } from "../../store/addPlace";

function preInput(label) {
  return (
    <>
      <label className="text-xl mt-4">{label}</label>
    </>
  );
}

const ThirdStep = forwardRef((props, ref) => {
  const dispatch = useDispatch();

  const [numberOFBedrooms, setNumberOfBedrooms] = useState(0);
  const [numberOFBathrooms, setNumberOfBathrooms] = useState(0);
  const [numberOFGuest, setNumberOfGuest] = useState(0);
  const [checkInTime, setCheckInTime] = useState(0);
  const [CheckOutTime, setCheckOutTime] = useState(0);

  const submitHandler = (event) => {
    event.preventDefault();

    const thirdSlideInput = {
      noOfBathrooms: numberOFBathrooms,
      noOfBedrooms: numberOFBedrooms,
      maxGuest: numberOFGuest,
      checkIn: checkInTime,
      checkOut: CheckOutTime,
    };
    console.log(thirdSlideInput);
    dispatch(addPlaceActions.addPlaceData(thirdSlideInput));
  };

  return (
    <form className="p-4" onSubmit={submitHandler}>
      <div className="grid mt-2 gap-2 lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1 ">
        {preInput("Number of Bedrooms")}
        <input
          type="number"
          className="w-full border my-1 py-2 px-3 rounded-2xl"
          placeholder="2"
          required
          onChange={(event) => setNumberOfBedrooms(event.target.value)}
          min="1"
          max="10"
        />

        {preInput("Number of Bathroom")}
        <input
          type="number"
          className="w-full border my-1 py-2 px-3 rounded-2xl"
          placeholder="2"
          required
          min="1"
          max="5"
          onChange={(event) => setNumberOfBathrooms(event.target.value)}
        />

        {preInput("Number of Guest Allowed")}
        <input
          type="number"
          className="w-full border my-1 py-2 px-3 rounded-2xl"
          placeholder="2"
          required
          min="1"
          max="10"
          onChange={(event) => setNumberOfGuest(event.target.value)}
        />

        {preInput("Prefered Check In time")}
        <input
          type="time"
          id="cit"
          required
          name="cit"
          placeholder="12:00"
          className="w-full border my-1 py-2 px-3 rounded-2xl"
          onChange={(event) => setCheckInTime(event.target.value)}
        />

        {preInput("Prefered Check Out time")}
        <input
          type="time"
          id="cot"
          name="cot"
          required
          placeholder="12:00"
          className="w-full border my-1 py-2 px-3 rounded-2xl"
          onChange={(event) => setCheckOutTime(event.target.value)}
        />
      </div>
      <button style={{ display: "none" }} type="submit" ref={ref}></button>
    </form>
  );
});

export default ThirdStep;
