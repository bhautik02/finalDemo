//mui imports
import Card from "@mui/material/Card";
import { Box, Modal } from "@mui/material";
import PlusSvg from "../../utils/svg/PlusSvg";
import { useEffect, useState } from "react";
import HostingSlider from "../HostingSlider";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllHostedPlacesByUserAsync } from "../../store/addPlace";

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

const MyPlaces = (props) => {
  const user = useSelector((state) => state.user.user);
  const hostedData = useSelector((state) => state.addPlace.yourHostedPlaces);
  const dispatch = useDispatch();

  const userId = user._id;

  const [open, setOpen] = useState(false);
  const [editingPlaceInfo, setEditingPlaceInfo] = useState(false);

  const handleOpen = () => {
    setEditingPlaceInfo(false);
    setOpen(true);
  };
  const editHandleOpen = () => {
    setOpen(true);
    setEditingPlaceInfo(true);
  };
  const handleClose = () => setOpen(false);

  useEffect(() => {
    dispatch(getAllHostedPlacesByUserAsync(userId));
    // eslint-disable-next-line
  }, [getAllHostedPlacesByUserAsync]);

  const setClose = () => {
    setOpen(false);
  };

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
        <p className="flex text-3xl font-semibold  -mb-4 justify-center ">
          My Hosted Places
        </p>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description">
          <Box sx={style}>
            <div className="flex justify-center ">
              {editingPlaceInfo ? (
                <div className="text-2xl">Edit Your Place</div>
              ) : (
                <div className="text-2xl">Host Your Place</div>
              )}
            </div>
            <div className="p-8">
              <HostingSlider
                setClose={setClose}
                editingPlaceInfo={editingPlaceInfo}
              />
            </div>
          </Box>
        </Modal>
      </div>
      {!hostedData ? (
        <div className="flex  justify-center m-3 ">
          <Card
            sx={{
              width: 500,
              height: 400,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}>
            <h1 className="absolute -mt-96">
              You not Hosted any Place, Start Hosting...
            </h1>
            <img
              src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-536.jpg?w=2000"
              alt="No Data Found."
              height={"500px"}
            />
          </Card>
        </div>
      ) : (
        <div className="pt-10">
          <div className="mx-auto md:px-10 sm:px-2 px-4 xsm:ml-20px ">
            <div className=" grid  grid-cols-1  sm:grid-cols-2  md:grid-cols-3  lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5 gap-8 ">
              {hostedData.map((place) => {
                return (
                  <Link
                    className="col-span-1 cursor-pointer group"
                    onClick={editHandleOpen}
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
    </>
  );
};

export default MyPlaces;
//
