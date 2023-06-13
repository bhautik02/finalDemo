import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import { hostedPlaceActions, placeActions } from "../store/place";

const MyPlaces = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const hostedData = useSelector((state) => state.hostedPlace.yourHostedPlace);

  const userId = user._id;

  useEffect(() => {
    axios
      .get(`place/hostPlace/${userId}`)
      .then((res) => {
        dispatch(placeActions.hostingData(res.data.hostedPlace));
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <p className="flex text-3xl justify-center font-semibold ml-10 mb-4">
        My Reservations
      </p>
      {hostedData.length === 0 ? (
        <div className="flex  justify-center m-3 ">
          <div className="flex w-1/2 h-3/4 justify-center items-center">
            <h1 className="absolute -mt-96">
              You not Hosted any Place, Start Hosting...
            </h1>
            <img
              src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=2000"
              alt="No Data Found."
              height={"500px"}
            />
          </div>
        </div>
      ) : (
        <div className="mx-auto md:px-10 sm:px-2 px-4 xsm:ml-20px ">
          <div className=" grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-8 ">
            {hostedData.map((place) => {
              return (
                <Link
                  className="col-span-1 cursor-pointer group"
                  key={place._id}
                  to={`/reservation/${place._id}`}>
                  <div className="flex flex-col gap-2 w-full">
                    <div className="aspect-square w-full relative overflow-hidden rounded-xl ">
                      <img
                        className=" object-cover h-full w-full group-hover:scale-110 transition "
                        src={place.photo[0]}
                        alt="Listing"
                      />
                      <div className="absolute top-3 right-3"></div>
                    </div>
                    <div className="mt-1">
                      <div className="font-semibold text-lg">{place.title}</div>
                      <div className="font-light">{place.address}</div>
                      {/* <div className="flex flex-row items-center gap-1">
                          <div className="font-semibold">{place.price} ₹</div>
                          <div className="font-light">night</div>
                        </div>*/}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default MyPlaces;
