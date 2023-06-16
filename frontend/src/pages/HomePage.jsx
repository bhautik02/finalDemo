import { useDispatch, useSelector } from "react-redux";
import { getAllPlacesAsync } from "../store/place";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Filters from "../components/Filters";
import Map, { MapComponent, MapContainer } from "../components/Map";

const HomePage = () => {
  const allplaces = useSelector((state) => state.place.allPlaces);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPlacesAsync());
  }, []);

  return (
    // <div className="bg-gray-950 text-white ">
    <div>
      <Filters />
      {allplaces && (
        <div className="py-8 ">
          <div className="mx-auto md:px-10 sm:px-2 px-4 xsm:ml-20px ">
            <div className=" grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-8 ">
              {allplaces.map((place) => {
                return (
                  <Link
                    className="col-span-1 cursor-pointer group"
                    to={`/places/${place._id}`}
                    key={place._id}>
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
                        <div className="font-semibold text-lg">
                          {place.address}
                        </div>
                        <div className="font-light text-neutral-500">Beach</div>
                        <div className="flex flex-row items-center gap-1">
                          <div className="font-semibold">{place.price} ₹</div>
                          <div className="font-light">night</div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
      {/* <iframe
        title="kedar"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228225.89119998863!2d-82.1359357856101!3d26.64753629985287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88db44a7e78016f5:0xafd1a4163a9b6ff2!2sCape Coral, FL, USA!5e0!3m2!1sen!2sbd!4v1616562014411!5m2!1sen!2sbd"
        allowfullscreen="true"
        loading="lazy"></iframe> */}
      {/* <MapContainer /> */}
    </div>
    // </div>
  );
};

export default HomePage;
// AIzaSyDwIVgIMPOY0UMpmXrqO0hOBNSTM7dH2pA
