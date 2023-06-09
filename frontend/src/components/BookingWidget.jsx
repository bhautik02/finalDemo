import { useEffect, useState } from "react";
import { differenceInCalendarDays } from "date-fns";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MyDatePicker from "./DatePicker";
import { bookingActions } from "../store/booking";
import datesBetween from "dates-between";

export default function BookingWidget({ place }) {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const user = useSelector((state) => state.user.user);
  const bookingData = useSelector((state) => state.booking.bookingData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      setName(user.name);
    }
  }, [user]);

  let numberOfNights = 0;
  if (checkIn && checkOut) {
    numberOfNights = differenceInCalendarDays(
      new Date(checkOut),
      new Date(checkIn)
    );
  }

  const formatDateForBookedDate = (date) => {
    const dateSlice = date.slice(0, 10);
    const dateArray = dateSlice.split("-");
    const day = +dateArray[2];
    const month = +dateArray[1];
    const year = +dateArray[0];

    return day + "/" + month + "/" + year;
  };

  const bookedDateArray = (startDate, EndDate) => {
    const result = [];
    const dates = Array.from(
      datesBetween(new Date(startDate), new Date(EndDate))
    );
    for (let i = 1; i < dates.length; i++) {
      const temp = formatDateForBookedDate(dates[i].toISOString());
      result.push(temp);
    }
    return result;
    // dispatch(bookingActions.selectedDate(result));
  };

  const formatDateForCountNights = (date) => {
    const tempDateArr = date.split("/");
    const formattedDate =
      tempDateArr[1] + "/" + tempDateArr[0] + "/" + tempDateArr[2];
    return formattedDate;
  };

  const setCheckInDate = (value) => {
    const formattedDate = formatDateForCountNights(value);
    setCheckIn(formattedDate);
  };

  const setCheckOutDate = (value) => {
    const formattedDate = formatDateForCountNights(value);
    setCheckOut(formattedDate);
  };

  async function bookThisPlace() {
    const bookedDates = bookedDateArray(checkIn, checkOut);
    console.log("place", place._id);
    const formData = {
      checkIn,
      checkOut,
      numberOfGuests,
      name,
      phone,
      placeID: place._id,
      price: numberOfNights * place.price,
      bookedDates,
      placeName: place.name,
      placeAddress: place.address,
      placePhoto: place.photo[0],
    };

    axios
      .post(`book/bookings`, formData)
      .then((res) => {
        dispatch(bookingActions.bookingData(res.data.booking));
        console.log("book", res.data.booking);
      })
      .catch((err) => {
        // console.log(err.response.data);
        alert(err.response.data.message);
      });
  }

  if (bookingData) {
    return <Navigate to={`/account/bookings/${bookingData._id}`} />;
  }

  return (
    <div className="bg-white shadow p-4 rounded-2xl">
      <div className="text-2xl text-center">
        Price: ₹{place.price} / per night
      </div>
      <div className="border rounded-2xl mt-4">
        <div className="flex">
          <div className="py-3 px-4">
            <label>Check in:</label>
            <MyDatePicker setDate={setCheckInDate} />
          </div>
          <div className="py-3 px-4 border-l">
            <label>Check out:</label>
            <MyDatePicker setDate={setCheckOutDate} />
          </div>
        </div>
        <div className="py-3 px-4 border-t">
          <label>Number of guests:</label>
          <input
            type="number"
            value={numberOfGuests}
            onChange={(ev) => setNumberOfGuests(ev.target.value)}
          />
        </div>
        {numberOfNights > 0 && (
          <div className="py-3 px-4 border-t">
            <label>Your full name:</label>
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
            <label>Phone number:</label>
            <input
              type="tel"
              minLength={10}
              maxLength={10}
              value={phone}
              onChange={(ev) => setPhone(ev.target.value)}
            />
          </div>
        )}
      </div>
      <button onClick={bookThisPlace} className="primary mt-4">
        Book this place
        {numberOfNights > 0 && <span> ₹{numberOfNights * place.price}</span>}
      </button>
    </div>
  );
}
