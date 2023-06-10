import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";

export default function ReviewDialogBox({ bookingData }) {
  const [open, setOpen] = React.useState(false);
  const [rating, setRating] = React.useState(0);
  const [review, setReview] = React.useState(null);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    setOpen(false);
    const reviewBy = bookingData.name;
    console.log("name:", reviewBy);
    const bookingID = bookingData._id;
    const place = bookingData.place;
    const user = bookingData.bookBy;

    console.log(bookingID);
    axios
      .post(`review/reviews/${bookingID}`, {
        name: reviewBy,
        place,
        user,
        rating,
        review,
      })
      .then((res) => {
        console.log("review Post succesfully");
      })
      .catch((err) => {
        alert(err.response.data.message);
      });
  };

  return (
    <div>
      <button
        variant="outlined"
        onClick={handleClickOpen}
        className="px-4 py-2 bg-gray-200 rounded-md outline-black text-base">
        Review it
      </button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="review-dialog-title"
        aria-describedby="review-dialog-description">
        <DialogTitle id="review-dialog-title" className="flex justify-center">
          {"Review Your Trip"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="review-dialog-description">
            <form className="flex-row  gap-2" onSubmit={submitHandler}>
              <div className="my-2 ">
                <label>Give a Rating</label>
                <input
                  type="Number"
                  min={1}
                  max={5}
                  placeholder={1}
                  onChange={(event) => setRating(event.target.value)}
                  required={true}
                />
              </div>
              <div className="my-2">
                <label>Give a Review</label>
                <input
                  type="text"
                  placeholder={"Write a Review"}
                  required={true}
                  onChange={(event) => setReview(event.target.value)}
                />
              </div>
              <div className="flex gap-2 justify-end">
                <button
                  onClick={handleClose}
                  className="px-4 py-2 bg-gray-200 rounded-md outline-black text-base">
                  cancel
                </button>
                <button
                  type="submit"
                  autoFocus
                  className="px-4 py-2 bg-gray-200 rounded-md outline-black text-base">
                  Submit
                </button>
              </div>
            </form>
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </div>
  );
}
