import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { hostedPlaceActions } from "../store/place";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const preInput = (title, text) => {
  return (
    <div className="flex gap-2">
      <p className="text-base text-gray-500">{title}:</p>
      <p className="text-xl font-mono">{text}</p>
    </div>
  );
};

const preInputForArray = (title, text, id) => {
  return (
    <div className="flex gap-2">
      <p className="text-base text-gray-500">{title}:</p>
      {text.map((value) => {
        return (
          <p className="text-xl font-mono" key={id + value}>
            {value},
          </p>
        );
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
    <>
      {allHostedPlaces && (
        <div className="pt-10">
          <div className="mx-auto md:px-10 sm:px-2 px-4 xsm:ml-20px ">
            <div className=" grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 ">
              {allHostedPlaces.map((place) => {
                return (
                  <Link
                    className="col-span-1 cursor-pointer group"
                    to="/account">
                    <div className="flex flex-col gap-2 w-full">
                      <div className="aspect-square w-full relative overflow-hidden rounded-xl ">
                        <img
                          fill
                          className=" object-cover h-full w-full group-hover:scale-110 transition "
                          src={place.photo[0]}
                          alt="Listing"
                        />
                        <div className="absolute top-3 right-3"></div>
                      </div>
                      <div class="font-semibold text-lg">Europe, Belgium</div>
                      <div class="font-light text-neutral-500">Beach</div>
                      <div class="flex flex-row items-center gap-1">
                        <div class="font-semibold">$ 136</div>
                        <div class="font-light">night</div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage;

/*

    <div className="p-5">
     {allHostedPlaces &&
        allHostedPlaces.map((place) => {
          return (
            <div className="flex justify-center m-3 " key={place._id}>
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
                  {preInputForArray("Perks", place.perks, place._id)}
                   {preInputForArray("Photo", place.photo)}

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


*/
