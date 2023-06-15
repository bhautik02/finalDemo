import ParkingSvg from "../utils/svg/ParkingSvg";
import PetsSvg from "../utils/svg/PetsSvg";
import PrivateEntrance from "../utils/svg/PrivateEntransSvg";
import RadioSvg from "../utils/svg/RadioSvg";
import TvSvg from "../utils/svg/TvSvg";
import WifiSvg from "../utils/svg/WifiSvg";

const ShowAmenities = ({ perks }) => {
  return (
    <div className="mt-5">
      <div className="flex gap-4 m-2 ml-0">
        {perks.includes("wifi") && (
          <>
            <WifiSvg /> Wi-fi
          </>
        )}
      </div>
      <div className="flex gap-4 m-2 ml-0">
        {perks.includes("parking") && (
          <>
            <ParkingSvg /> Parking
          </>
        )}
      </div>
      <div className="flex gap-4 m-2 ml-0">
        {perks.includes("tv") && (
          <>
            <TvSvg /> TV
          </>
        )}
      </div>
      <div className="flex gap-4 m-2 ml-0">
        {perks.includes("radio") && (
          <>
            <RadioSvg /> Radio
          </>
        )}
      </div>
      <div className="flex gap-4 m-2 ml-0">
        {perks.includes("pets") && (
          <>
            <PetsSvg /> Pets allowed
          </>
        )}
      </div>
      <div className="flex gap-4 m-2 ml-0">
        {perks.includes("entrance")}
        {perks.includes("entrance") && (
          <>
            <PrivateEntrance /> Private Entrance
          </>
        )}
      </div>
    </div>
  );
};

export default ShowAmenities;
