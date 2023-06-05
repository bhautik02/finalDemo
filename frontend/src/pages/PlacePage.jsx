import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import PhotoGallery from "../components/PhotoGallery";
import AddressLink from "../components/AddressLink";
// import { getPlace } from "./../api";

const PlacePage = () => {
  const [placeData, setPlaceData] = useState(null);
  const [ready, setReady] = useState(false);

  const { id: placeId } = useParams();

  // console.log(placeId);

  useEffect(() => {
    if (!placeId) {
      return;
    }
    axios
      .get(`place/${placeId}`)
      .then((res) => {
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
    <div className="bg-slate-50 -mx-4">
      {ready && (
        <div className="mx-96 mt-4">
          <h1 className="text-3xl">{placeData.title}</h1>

          <AddressLink>{placeData.address}</AddressLink>

          <PhotoGallery place={placeData} />
          <div className="mt-8 mb-8 grid gap-8 grid-cols-1 md:grid-cols-[2fr_1fr]">
            <div>
              <div className="my-4">
                <h2 className="font-semibold text-2xl">Description</h2>
                {placeData.description}
              </div>
              Check-in: {placeData.checkIn}
              <br />
              Check-out: {placeData.checkOut}
              <br />
              Max number of guests: {placeData.maxGuests}
            </div>
            <div>{/* <BookingWidget place={placeData} /> */}</div>
          </div>
          <div className="bg-white px-8 py-8 border-t">
            <div>
              <h2 className="font-semibold text-2xl">Extra info</h2>
            </div>
            <div className="mb-4 mt-2 text-sm text-gray-700 leading-5">
              {placeData.extraInfo}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlacePage;
