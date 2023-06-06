import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PhotoGallery from "../components/PhotoGallery";
import AddressLink from "../components/AddressLink";
import BookingWidget from "../components/BookingWidget";
import WifiSvg from "../utils/svg/WifiSvg";
import ParkingSvg from "../utils/svg/ParkingSvg";
import TvSvg from "../utils/svg/TvSvg";
import RadioSvg from "../utils/svg/RadioSvg";
import PetsSvg from "../utils/svg/PetsSvg";
import PrivateEntrance from "../utils/svg/PrivateEntransSvg";

// import { getPlace } from "./../api";

const PlacePage = () => {
  const [placeData, setPlaceData] = useState(null);
  const [hostData, setHostData] = useState(null);
  const [ready, setReady] = useState(false);

  // if (placeData) {
  //    { perks } = placeData;
  // }

  const { id: placeId } = useParams();

  // console.log(placeId);

  useEffect(() => {
    if (!placeId) {
      return;
    }
    axios
      .get(`place/${placeId}`)
      .then((res) => {
        setHostData(res.data.host);
        setPlaceData(res.data.place);
        setReady(true);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
    // eslint-disable-next-line
  }, []);

  if (!placeData) return "";

  console.log(placeData);
  return (
    <div>
      {ready && (
        <>
          <div className="mx-80 mt-4">
            <h1 className="text-3xl">{placeData.title}</h1>
            <AddressLink>{placeData.address}</AddressLink>
            <PhotoGallery place={placeData} />
            <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
              <div className="relative">
                <div className="flex my-4 ">
                  <div>
                    <h2 className="inline font-medium text-2xl">
                      Hosted By {hostData.name}
                    </h2>
                    <br />
                    <p>
                      {placeData.maxGuest} Guests &#183;{" "}
                      {placeData.noOfBedrooms}
                      bedroom &#183; {placeData.noOfBathrooms} beds &#183;{" "}
                      {placeData.noOfBathrooms} bathroom
                    </p>
                  </div>
                  <img
                    src="https://img.freepik.com/free-icon/user_318-804790.jpg"
                    alt=""
                    className="w-14 h-14 absolute  top-3 end-0 rounded-full bg-gray-200"
                  />
                </div>
                <hr className="mt-5 " />
                <div className="mt-5">{placeData.description}</div>
                <hr className="mt-5 " />
                <div className="mt-5">
                  <p className="text-gray-800 font-medium text-2xl">
                    What this place offers
                  </p>

                  <div className="flex gap-48">
                    <div className="mt-5">
                      <div className="flex gap-4 m-2 ml-0">
                        {placeData.perks.includes("wifi")}
                        <WifiSvg /> Wi-fi
                      </div>
                      <div className="flex gap-4 m-2 ml-0">
                        {placeData.perks.includes("parking")}
                        <ParkingSvg /> Parking
                      </div>
                      <div className="flex gap-4 m-2 ml-0">
                        {placeData.perks.includes("tv")}
                        <TvSvg /> TV
                      </div>
                      <div className="flex gap-4 m-2 ml-0">
                        {placeData.perks.includes("radio")}
                        <RadioSvg /> Radio
                      </div>
                      <div className="flex gap-4 m-2 ml-0">
                        {placeData.perks.includes("pets")}
                        <PetsSvg /> Pets allowed
                      </div>
                      <div className="flex gap-4 m-2 ml-0">
                        {placeData.perks.includes("entrance")}
                        <PrivateEntrance /> Private Entrance
                      </div>
                    </div>

                    <div className="mt-5">
                      <div className="flex gap-4 m-2 ml-0">
                        {placeData.perks.includes("wifi")}
                        <WifiSvg /> Wi-fi
                      </div>
                      <div className="flex gap-4 m-2 ml-0">
                        {placeData.perks.includes("parking")}
                        <ParkingSvg /> Parking
                      </div>
                      <div className="flex gap-4 m-2 ml-0">
                        {placeData.perks.includes("tv")}
                        <TvSvg /> TV
                      </div>
                      <div className="flex gap-4 m-2 ml-0">
                        {placeData.perks.includes("radio")}
                        <RadioSvg /> Radio
                      </div>
                      <div className="flex gap-4 m-2 ml-0">
                        {placeData.perks.includes("pets")}
                        <PetsSvg /> Pets allowed
                      </div>
                      <div className="flex gap-4 m-2 ml-0">
                        {placeData.perks.includes("entrance")}
                        <PrivateEntrance /> Private Entrance
                      </div>
                    </div>
                  </div>
                </div>
                <hr className="mt-5 " />
                <div className="mt-8 items-center">
                  <div className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 inline">
                      <path
                        fillRule="evenodd"
                        d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <p className="inline ml-4 mt-4">
                      Check-in : {placeData.checkIn}
                      {+placeData.checkIn.trim(":") < 12 ? " AM" : " PM"}
                    </p>
                    <br />
                  </div>

                  <div className="mt-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 inline">
                      <path
                        fillRule="evenodd"
                        d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm10.72 4.72a.75.75 0 011.06 0l3 3a.75.75 0 010 1.06l-3 3a.75.75 0 11-1.06-1.06l1.72-1.72H9a.75.75 0 010-1.5h10.94l-1.72-1.72a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="inline ml-4 ">
                      Check-out : {placeData.checkOut}{" "}
                      {+placeData.checkIn.trim(":") < 12 ? " AM" : " PM"}
                    </p>
                    <br />
                  </div>
                </div>
              </div>
              <div>
                <BookingWidget place={placeData} />
              </div>
            </div>
            <hr className="mt-4"></hr>
            <div className="mt-5">
              <div className="">
                <div className="flex mt-10 gap-4">
                  <img
                    src="https://img.freepik.com/free-icon/user_318-804790.jpg"
                    alt=""
                    className="  w-14 h-14  top-0 left-0 rounded-full bg-red-500"
                  />
                  <div>
                    <h1 className="font-medium text-2xl">
                      Hosted By {hostData.name}
                    </h1>
                    <p className="text-slate-500 text-sm">
                      Joined in {hostData.createdAt.split("T")[0]}
                    </p>
                  </div>
                </div>
                <div className="flex mt-4 gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className=" w-6 h-6 ">
                    <path
                      fillRule="evenodd"
                      d="M12.516 2.17a.75.75 0 00-1.032 0 11.209 11.209 0 01-7.877 3.08.75.75 0 00-.722.515A12.74 12.74 0 002.25 9.75c0 5.942 4.064 10.933 9.563 12.348a.749.749 0 00.374 0c5.499-1.415 9.563-6.406 9.563-12.348 0-1.39-.223-2.73-.635-3.985a.75.75 0 00-.722-.516l-.143.001c-2.996 0-5.717-1.17-7.734-3.08zm3.094 8.016a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <p className="text-gray-800 text-base">Identity verified</p>
                </div>

                <div className="mt-8 text-gray-800">
                  <p className="my-3">Policy number: {hostData._id}</p>
                  <p className="my-3">Languages: English, हिन्दी</p>
                  <p className="my-3">Response rate: 100%</p>
                  <p className="my-3">Response time: within an hour</p>
                </div>
                <div className="my-10">
                  <Link
                    className="px-6 py-4 bg-gray-200 rounded-md outline-black text-base"
                    to="/contact/chat">
                    Contact host
                  </Link>
                </div>
              </div>
            </div>
            {/* <div className="my-4" /> */}
          </div>
        </>
      )}
    </div>
  );
};

export default PlacePage;
