import { forwardRef } from "react";
// import Perks from "../Perks";
import PhotosUploader from "../PhotosUploader";
import PrivateEntrance from "../../utils/svg/PrivateEntransSvg";
import PetsSvg from "../../utils/svg/PetsSvg";
import RadioSvg from "../../utils/svg/RadioSvg";
import WifiSvg from "../../utils/svg/WifiSvg";
import ParkingSvg from "../../utils/svg/ParkingSvg";
import TvSvg from "../../utils/svg/TvSvg";

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

function handleCbClick(ev) {
  // const { checked, name } = ev.target;
  console.log(ev.target);
}

const SecondStep = forwardRef((props, ref) => {
  const submitHandler = (event) => {
    event.preventDefault();

    // console.log(thirdSlideInput);
    // dispatch(addPlaceActions.addPlaceData(thirdSlideInput));
  };

  return (
    <form className="p-4" onSubmit={submitHandler}>
      {preInput("Perks", "select all the perks of your place")}
      <div className="grid mt-2 gap-2 lg:grid-cols-2  md:grid-cols-2 sm:grid-cols-1 ">
        <label className="border p-4 flex rounded-2xl gap-2 items-center cursor-pointer">
          <input type="checkbox" name="wifi" onChange={handleCbClick} />
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
      {preInput("Photos")}
      <PhotosUploader
      // addedPhotos={addedPhotos} onChange={setAddedPhotos}
      />
      <button style={{ display: "none" }} type="submit" ref={ref}></button>
    </form>
  );
});

export default SecondStep;
