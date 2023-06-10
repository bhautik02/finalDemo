import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import PhotoGallery from "../components/PhotoGallery";
import AddressLink from "../components/AddressLink";
import BookingWidget from "../components/BookingWidget";
import { useDispatch } from "react-redux";
import { bookingActions } from "../store/booking";
import ShowAmenities from "../components/ShowAmenities";
import CheckInSvg from "../utils/svg/CheckInSvg";
import CheckOutSvg from "../utils/svg/CheckOutSvg";
import BatchSvg from "../utils/svg/BatchSvg";
import StarSvg from "../utils/svg/StarSvg";

// import { getPlace } from "./../api";

const PlacePage = () => {
  const dispatch = useDispatch();
  const [placeData, setPlaceData] = useState(null);
  const [hostData, setHostData] = useState(null);
  const [ready, setReady] = useState(false);
  const [reviews, setReviews] = useState([]);

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
        setHostData(res.data.place.host[0]);
        setPlaceData(res.data.place);
        setReviews(res.data.place.reviews);
        dispatch(bookingActions.bookedDate(res.data.place.bookedDates));
        setReady(true);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
    // eslint-disable-next-line
  }, []);

  if (!placeData) return "";

  // console.log(reviews);
  return (
    <div>
      {ready && (
        <>
          {console.log(placeData)}
          <div className="mx-80 mt-4">
            <h1 className="text-3xl">{placeData.title}</h1>
            <AddressLink>{placeData.address}</AddressLink>
            <PhotoGallery place={placeData} />
            {/* <PhotosPlace place={placeData} /> */}
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
                      {placeData.noOfBedrooms} bedroom &#183;{" "}
                      {placeData.noOfBathrooms} beds &#183;{" "}
                      {placeData.noOfBathrooms} bathroom
                    </p>
                  </div>
                  <img
                    src="https://img.freepik.com/free-icon/user_318-804790.jpg"
                    alt=""
                    className="w-14 h-14 absolute  top-3 end-0 border-grey-800 rounded-full bg-gray-200"
                  />
                </div>
                <hr className="mt-5 " />
                <div className="mt-5">{placeData.description}</div>
                <hr className="mt-5 " />
                <div className="mt-5">
                  <p className="text-gray-800 font-medium text-2xl">
                    What this place offers
                  </p>

                  <div className="flex gap-36">
                    <ShowAmenities perks={placeData.perks} />
                  </div>
                </div>
                <hr className="mt-5 " />
                <div className="mt-8 items-center">
                  <div className="mt-4">
                    <CheckInSvg />
                    <p className="inline ml-4 mt-4">
                      Check-in : {placeData.checkIn}
                      {+placeData.checkIn.split(":")[0] < 12 ? " AM" : " PM"}
                    </p>
                    <br />
                  </div>

                  <div className="mt-4">
                    <CheckOutSvg />
                    <p className="inline ml-4 ">
                      Check-out : {placeData.checkOut}{" "}
                      {+placeData.checkIn.split(":")[0] < 12 ? " AM" : " PM"}
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
            <div className="mt-5 flex items-center">
              <div className="">
                {reviews ? (
                  <div>
                    <p className=" text-gray-800 font-medium text-2xl">
                      <StarSvg size={4} margin={2} /> {placeData.rating} 4.52
                      &#183; {reviews.length} Reviews
                    </p>
                    <div className="my-4">
                      <div>
                        <img
                          src="https://img.freepik.com/free-icon/user_318-804790.jpg"
                          alt="profile"
                          className="w-10 h-10 border-grey-800 rounded-full bg-gray-200"
                        />
                      </div>
                      <div>{reviews[0].review}</div>
                    </div>
                  </div>
                ) : (
                  "No Reviews"
                )}
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
                  <BatchSvg />
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
