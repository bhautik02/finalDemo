import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

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

  return (
    <>
      {bookings &&
        bookings.map((booking) => (
          <div className="mx-96 mt-24">
            <div className="shadow-lg shadow-black-300 h-60 p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-lightblue p-4">
                  <div>
                    <h2 className="inline font-medium text-2xl">Hosted By</h2>
                    <p>
                      {booking.address} &#183; {booking.numberOfGuests} guests
                    </p>
                  </div>

                  <div className="flex">
                    <div>
                      <p>{booking.checkIn}</p>
                      <p>{booking.checkInTime}cit</p>
                    </div>
                    <div>></div>
                    <div>
                      <p>{booking.checkOut}</p>
                      <p>{booking.checkOutTime}cot</p>
                    </div>
                  </div>
                </div>
                <div className="col-span-1 bg-lightblue p-4">gsdasggwd</div>
              </div>
            </div>
          </div>
        ))}
    </>
  );
};
export default BookingsPage;
