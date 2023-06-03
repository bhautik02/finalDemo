//mui imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Box, Modal } from "@mui/material";

import PlusSvg from "../../utils/svg/PlusSvg";
import { useEffect, useState } from "react";
import HostingSlider from "../HostingSlider";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { hostedPlaceActions } from "../../store/place";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

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

const MyPlaces = () => {
  const user = useSelector((state) => state.user.user);
  const hostedData = useSelector((state) => state.hostedPlace.yourHostedPlace);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("---------- HOSTED DATA--->", hostedData);
  }, [hostedData]);

  const userId = user._id;
  // console.log(userId);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  useEffect(
    () => {
      axios
        .get(`place/hostPlace/${userId}`)
        .then((res) => {
          // if (res.data.length === 0) {
          //   return;
          // }
          dispatch(hostedPlaceActions.hostingData(res.data.hostedPlace));
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    // eslint-disable-next-line
    []
  );

  return (
    <>
      <div className="text-center p-6">
        <button
          to="addPlaces"
          className="inline-flex gap-1  py-1 px-4 bg-primary rounded-full text-white"
          onClick={handleOpen}>
          <PlusSvg />
          Add Place
        </button>
      </div>
      <div>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <div className="flex justify-center ">
              <div className="text-2xl">Host Your Place</div>
            </div>
            <div className="p-8">
              <HostingSlider />
            </div>
          </Box>
        </Modal>
      </div>

      {hostedData.length === 0 ? (
        <div className="flex justify-center m-3 ">
          <Card
            sx={{
              width: 500,
              height: 100,
              background: "#f5f5f5",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <p className="text-2xl">You Don't Have any hosted Place.</p>
          </Card>
        </div>
      ) : (
        //   (
        //   hostedData.map((place) => {
        //     return (
        //       // <div className="flex justify-center m-3" key={place._id}>
        //       //   <Card
        //       //     sx={{
        //       //       width: 800,
        //       //       background: "#f5f5f5",
        //       //       display: "flex",
        //       //       // justifyContent: "center",
        //       //     }}>
        //       //     <CardContent>
        //       //       {preInput("Title", place.title)}
        //       //       {preInput("Address", place.address)}
        //       //       {preInput("Description", place.description)}
        //       //       <br />
        //       //       {preInputForArray("Perks", place.perks, place._id)}
        //       //       {/* {preInputForArray("Photo", place.photo)} */}

        //       //       <br />
        //       //       {preInput("Number Of BedRooms", place.noOfBedrooms)}
        //       //       {preInput("Number Of Bathrooms", place.noOfBathrooms)}
        //       //       {preInput("Max Guest Allowed", place.maxGuest)}

        //       //       <br />
        //       //       {preInput("Check in Time", place.checkIn)}
        //       //       {preInput("Check out Time", place.checkOut)}
        //       //     </CardContent>
        //       //   </Card>
        //       // </div>

        //       <div className="">
        //         <div className="max-w-lg mx-auto xl:px-20  md:px-10 sm:px-2 px-4 ">
        //           <div className="pt-24 grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 ">
        //             <div className="col-span-1 cursor-pointer group">
        //               <div className="flex flex-col gap-2 w-full">
        //                 <div className="aspect-square w-full relative overflow-hidden rounded-xl ">
        //                   <img
        //                     fill
        //                     className=" object-cover h-full w-full group-hover:scale-110 transition "
        //                     src={place.photo[0]}
        //                     alt="Listing"
        //                   />
        //                   <div className="absolute top-3 right-3"></div>
        //                 </div>
        //                 <div class="font-semibold text-lg">Europe, Belgium</div>
        //                 <div class="font-light text-neutral-500">Beach</div>
        //                 <div class="flex flex-row items-center gap-1">
        //                   <div class="font-semibold">$ 136</div>
        //                   <div class="font-light">night</div>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     );
        //   })
        // )
        // )

        <div className="">
          <div className="mx-auto md:px-10 sm:px-2 px-4 xsm:ml-20px ">
            <div className=" grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8 ">
              {hostedData &&
                // hostedData.length > 0 &&
                hostedData.map((place) => {
                  return (
                    <div className="col-span-1 cursor-pointer group">
                      {console.log("HOSTED------------->", place)}
                      <div className="flex flex-col gap-2 w-full">
                        <div className="aspect-square w-full relative overflow-hidden rounded-xl ">
                          <img
                            fill
                            className=" object-cover h-full w-full group-hover:scale-110 transition "
                            src={place?.photo[0]}
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
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default MyPlaces;
