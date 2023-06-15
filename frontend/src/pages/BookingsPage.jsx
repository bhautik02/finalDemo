import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ReviewDialogBox from "../components/ReviewDialogBox";
import { getAllbookingAsync } from "../store/booking";

const BookingsPage = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { allBookings } = useSelector((state) => state.booking);
  const userId = user._id;

  useEffect(() => {
    dispatch(getAllbookingAsync(userId));
    // eslint-disable-next-line
  }, []);

  const canReview = (date) => {
    if (new Date(date).getTime() < new Date().getTime()) {
      return true;
    }
    return false;
  };

  return (
    <>
      <p className="flex text-3xl font-semibold mt-2 -mb-4 justify-center ">
        My Bookings
      </p>
      <div className="flex gap-10 justify-center">
        {/* <div className="mt-10 ">
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
        </div> */}
        <div className="w-5/12">
          {allBookings &&
            allBookings.map((booking) => (
              <div
                className="shadow-2xl shadow-black-300  m-10 -mb-4"
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
                      className="h-full w-full object-cover"
                      src={booking.placePhoto}
                      alt="place"
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};
export default BookingsPage;
