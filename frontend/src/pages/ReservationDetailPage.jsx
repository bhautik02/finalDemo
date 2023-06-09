import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/material";
import TablePagination from "@mui/material/TablePagination";
import axios from "axios";
import { useParams } from "react-router-dom";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function ReservationDetailPage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [reservations, setReservations] = React.useState([]);

  const { id: placeId } = useParams();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  React.useEffect(() => {
    axios
      .get(`/reservation/${placeId}`)
      .then((res) => {
        setReservations(res.data.reservations);
      })
      .catch((err) => {
        console.log(err);
        alert(err.data.message);
      });
  }, []);

  console.log(reservations);
  return (
    <Box
      style={{ marginLeft: "350px", marginRight: "350px", marginTop: "50px" }}>
      <TableContainer component={Paper} style={{ marginBottom: "5%" }}>
        <Table aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="left">Place</StyledTableCell>
              <StyledTableCell align="left">Phone</StyledTableCell>
              <StyledTableCell align="left">Number of Guests</StyledTableCell>
              <StyledTableCell align="left">CheckIn Date</StyledTableCell>
              <StyledTableCell align="left">CheckOut Date</StyledTableCell>
              <StyledTableCell align="right">Total Price</StyledTableCell>
              <StyledTableCell align="right">contact</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservations.map((reservation) => (
              <StyledTableRow key={reservation._id}>
                <StyledTableCell component="th" scope="row">
                  {reservation.name}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {reservation.placeName}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {reservation.phone}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {reservation.numberOfGuests}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {reservation.checkOut.split("T")[0]}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {reservation.checkIn.split("T")[0]}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {reservation.price}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <button>b</button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[2, 4, 6]}
          component="paper"
          count={reservations.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );
}
