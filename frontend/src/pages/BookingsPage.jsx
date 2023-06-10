import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReviewDialogBox from "../components/ReviewDialogBox";

const BookingsPage = () => {
  const { user } = useSelector((state) => state.user);
  const [bookings, setBookings] = useState(null);

  useEffect(() => {
    axios
      .get(`book/bookings/${user._id}`)
      .then((res) => {
        console.log("jsknd", res.data.bookings);
        setBookings(res.data.bookings);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  }, []);

  const canReview = (date) => {
    if (new Date(date).getTime() < new Date().getTime()) {
      return true;
    }
    return false;
  };

  return (
    <div className="flex gap-10 justify-center">
      <div className="mt-14 ">
        <div className="shadow-2xl shadow-black-300 h-64 w-64 rounded-2xl flex-row justify-center">
          <div className="pt-8 pl-14">
            <img
              className="h-36 w-36 object-cover rounded-full"
              src="https://w7.pngwing.com/pngs/49/613/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-dark-black.png"
              alt="place"
            />
          </div>
          <h2 className="font-bold text-3xl mt-3 flex justify-center">
            {user.name}
          </h2>
        </div>
      </div>
      <div className="mt-10 w-5/12">
        {bookings &&
          bookings.map((booking) => (
            <div
              className="shadow-2xl shadow-black-300 h-60 m-10"
              key={booking._id}>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1 bg-lightblue p-8 pt-6">
                  <div>
                    <h2 className="inline font-medium text-2xl">
                      {booking.placeName}
                    </h2>
                    <p>
                      {booking.placeAddress} &#183; {booking.numberOfGuests}{" "}
                      guests
                    </p>
                  </div>

                  <div className="flex gap-6 mt-4">
                    <div>
                      <p>{booking.checkIn.slice(0, 10)}</p>
                      <p>{booking.checkInTime}</p>
                    </div>
                    <div className="mt-3">{">"}</div>
                    <div>
                      <p>{booking.checkOut.slice(0, 10)}</p>
                      <p>{booking.checkOutTime}</p>
                    </div>
                  </div>
                  <hr className="mt-5 border-black" />
                  <div className="flex gap-10 justify mt-4">
                    <Link
                      className="px-4 py-2 bg-gray-200 rounded-md outline-black text-base"
                      to="/contact/chat">
                      Contact Host
                    </Link>
                    {canReview(booking.checkOut) && (
                      <ReviewDialogBox bookingData={booking} />
                    )}
                  </div>
                </div>
                <div className="col-span-1 bg-lightblue">
                  <img
                    className="h-60 w-full object-cover"
                    src={booking.placePhoto}
                    alt="place"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default BookingsPage;
