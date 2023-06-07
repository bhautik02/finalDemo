import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function MyDatePicker({ setDate }) {
  const getFormattedDate = (date) => {
    const today = date.$d;
    const yyyy = today.getFullYear();
    let mm = today.getMonth() + 1; // Months start at 0!
    let dd = today.getDate();

    return dd + "/" + mm + "/" + yyyy;
  };

  const shouldDisable = (date) => {
    const formattedDate = getFormattedDate(date);
    let blackoutDates = ["9/6/2023", "12/6/2023"];

    return blackoutDates.includes(formattedDate);
  };

  const dateChangeHandler = (date) => {
    console.log("DATE------------->", date);
    // setDatePicked(getFormattedDate(date));
    const formattedDate = getFormattedDate(date);
    // setDatePicked(formattedDate);

    setDate(formattedDate);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={["DatePicker"]}>
        <DatePicker
          label="Basic date picker"
          disablePast
          shouldDisableDate={shouldDisable}
          onChange={dateChangeHandler}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
