import { forwardRef, useState } from "react";
import PrivateEntrance from "../../utils/svg/PrivateEntransSvg";
import PetsSvg from "../../utils/svg/PetsSvg";
import RadioSvg from "../../utils/svg/RadioSvg";
import WifiSvg from "../../utils/svg/WifiSvg";
import ParkingSvg from "../../utils/svg/ParkingSvg";
import TvSvg from "../../utils/svg/TvSvg";
import { useDispatch } from "react-redux";
import { addPlaceActions } from "../../store/addPlace";

function inputHeader(text) {
  return <h2 className="text-2xl mt-4">{text}</h2>;
}

function inputDescription(text) {
  return <p className="text-gray-500 text-sm">{text}</p>;
}

function preInput(header, description) {
  return (
    <>
      {inputHeader(header)}
      {inputDescription(description)}
    </>
  );
}

const SecondStep = forwardRef((props, ref) => {
  const dispatch = useDispatch();
  const [checkData, setCheckData] = useState({});

  const submitHandler = (event) => {
    event.preventDefault();

    let Perks = [];

    for (const key in checkData) {
      if (!checkData[key]) {
        delete checkData[key];
      } else {
        Perks.push(key);
      }
    }

    const secondSlideInput = {
      perks: Perks,
    };

    console.log(secondSlideInput);
    dispatch(addPlaceActions.addPlaceData(secondSlideInput));
  };

  function handleCbClick(ev) {
    const { checked, name } = ev.target;
    setCheckData({ ...checkData, [name]: checked });
  }

  //only for log
  // useEffect(() => {
  //   console.log(".......... CHECKED DATA -------------> ", checkData);
  // }, [checkData]);

  return (
    <form className="p-4" onSubmit={submitHandler}>
      {preInput("Perks", "select all the perks of your place")}
      <div className="grid mt-2 gap-2 lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1 ">
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input
            type="checkbox"
            name="wifi"
            value={"wifi"}
            onChange={handleCbClick}
          />
          <WifiSvg />
          <span>Wifi</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" name="parking" onChange={handleCbClick} />
          <ParkingSvg />
          <span>Free parking spot</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" name="tv" onChange={handleCbClick} />
          <TvSvg />
          <span>TV</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" name="radio" onChange={handleCbClick} />
          <RadioSvg />
          <span>Radio</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" name="pets" onChange={handleCbClick} />
          <PetsSvg />
          <span>Pets</span>
        </label>
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" name="entrance" onChange={handleCbClick} />
          <PrivateEntrance />
          <span>Private entrance</span>
        </label>
      </div>
      {preInput("Photos", "add one or more photos of your place")}

      <label className="h-32 cursor-pointer flex items-center gap-1 justify-center border bg-transparent rounded-2xl p-2 text-2xl text-gray-600">
        <input
          type="file"
          multiple
          className="hidden"
          // onChange={uploadPhoto}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
          />
        </svg>
        Upload
      </label>
      <button style={{ display: "none" }} type="submit" ref={ref}></button>
    </form>
  );
});

export default SecondStep;
