import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { hostedPlaceActions } from "../store/place";
import { useEffect } from "react";

const preInput = (title, text) => {
  return (
    <div className="flex gap-2">
      <p className="text-base text-gray-500">{title}:</p>
      <p className="text-xl font-mono">{text}</p>
    </div>
  );
};

const preInputForArray = (title, text) => {
  return (
    <div className="flex gap-2">
      <p className="text-base text-gray-500">{title}:</p>
      {text.map((value) => {
        return <p className="text-xl font-mono">{value},</p>;
      })}
    </div>
  );
};

const HomePage = () => {
  const allHostedPlaces = useSelector(
    (state) => state.hostedPlace.allHostedPlaces
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const getAllHostedData = () => {
      axios
        .get(`place/hostPlaces`)
        .then((res) => {
          dispatch(hostedPlaceActions.allHostingData(res.data.hostedPlace));
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    };
    getAllHostedData();
  }, [dispatch]);

  return (
    <div className="p-5">
      {allHostedPlaces &&
        allHostedPlaces.map((place) => {
          return (
            <div className="flex justify-center m-3">
              <Card
                sx={{
                  width: 800,
                  background: "#f5f5f5",
                  display: "flex",
                  // justifyContent: "center",
                }}>
                <CardContent>
                  {preInput("Title", place.title)}
                  {preInput("Address", place.address)}
                  {preInput("Description", place.description)}
                  <br />
                  {preInputForArray("Perks", place.perks)}
                  {/* {preInputForArray("Photo", place.photo)} */}

                  <br />
                  {preInput("Number Of BedRooms", place.noOfBedrooms)}
                  {preInput("Number Of Bathrooms", place.noOfBathrooms)}
                  {preInput("Max Guest Allowed", place.maxGuest)}

                  <br />
                  {preInput("Check in Time", place.checkIn)}
                  {preInput("Check out Time", place.checkOut)}
                </CardContent>
              </Card>
            </div>
          );
        })}
    </div>
  );
};

export default HomePage;
