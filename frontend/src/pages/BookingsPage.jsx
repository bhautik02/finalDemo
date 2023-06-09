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
      <div className="mx-80 mt-10 ">
        {bookings &&
          bookings.map((booking) => (
            <div className="shadow-2xl shadow-black-300 h-60 m-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2 bg-lightblue p-8">
                  <div>
                    <h2 className="inline font-medium text-2xl">
                      {booking.placeName}fg
                    </h2>
                    <p>
                      {booking.address} &#183; {booking.numberOfGuests} guests
                    </p>
                  </div>

                  <div className="flex gap-6 mt-4">
                    <div>
                      <p>{booking.checkIn.slice(0, 10)}</p>
                      <p>{booking.checkInTime}cit</p>
                    </div>
                    <div>{">"}</div>
                    <div>
                      <p>{booking.checkOut.slice(0, 10)}</p>
                      <p>{booking.checkOutTime}cot</p>
                    </div>
                  </div>
                  <hr className="mt-6" />
                  <div className="flex gap-10 mt-4">
                    <button>a</button>
                    <button>b</button>
                    <button>c</button>
                  </div>
                </div>
                <div className="col-span-1 bg-lightblue">
                  <img
                    className="h-60 w-full object-cover"
                    src="https://img.staticmb.com/mbcontent/images/uploads/2022/12/Most-Beautiful-House-in-the-World.jpg"
                    alt="place"
                  />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default BookingsPage;
