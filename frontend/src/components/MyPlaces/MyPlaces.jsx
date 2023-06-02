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

const MyPlaces = () => {
  const user = useSelector((state) => state.user.user);
  const hostedData = useSelector((state) => state.hostedPlace.yourHostedPlace);
  const dispatch = useDispatch();
  // const [hostedPlace, setHostedPlace] = useState(null);

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
          dispatch(hostedPlaceActions.hostingData(res.data.hostedPlace));
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    },
    // eslint-disable-next-line
    [userId]
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

      {/* {hostedData === null && (
        <div className="justify-center">
          <p>You Don't Have any hosted Place.</p>
        </div>
      )} */}

      {hostedData.length === 0 ? (
        <div className="justify-center">
          <p>You Don't Have any hosted Place.</p>
        </div>
      ) : (
        hostedData.map((place) => {
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
        })
      )}
    </>
  );
};

export default MyPlaces;
