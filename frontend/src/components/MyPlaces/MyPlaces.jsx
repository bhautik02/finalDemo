import { Box, Modal } from "@mui/material";
import PlusSvg from "../../utils/svg/PlusSvg";
import { useState } from "react";
import HostingSlider from "../HostingSlider";
import { useSelector } from "react-redux";

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
  const data = useSelector((state) => state.addPlace.hostPlaceData);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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

        {console.log(data)}
      </div>
    </>
  );
};

export default MyPlaces;
