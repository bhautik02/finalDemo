//mui imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Modal } from "@mui/material";

import PlusSvg from "../../utils/svg/PlusSvg";
import { useState } from "react";
import HostingSlider from "../HostingSlider";
import { useSelector } from "react-redux";
import axios from "axios";

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

const MyPlaces = () => {
  const user = useSelector((state) => state.user.user);
  // const [hostedPlace, setHostedPlace] = useState(null);

  const userId = user._id;
  console.log(userId);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  axios
    .get(`place/hostPlace/${userId}`)
    .then((res) => {
      console.log(res.data);
      // setHostedPlace(res);
    })
    .catch((err) => {
      alert(err.response.data.message);
    });

  console.log(user);
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

      {/* hosted places */}
      <div className="flex justify-center m-3">
        <Card
          sx={{
            width: 800,
            background: "#eeeeee",
            display: "flex",
            // justifyContent: "center",
          }}>
          <CardContent>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default MyPlaces;
