import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import { CookiesProvider } from "react-cookie";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import AccountPage from "./pages/AccountPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { fetchUserAsync, userActions } from "./store/user";
import { useDispatch, useSelector } from "react-redux";
import PlacePage from "./pages/PlacePage";
import PagenotFound from "./pages/PagenotFound";
import BookingsPage from "./pages/BookingsPage";
import BookingPage from "./pages/ReservationDetailPage";
import ReservationPage from "./pages/ReservationPage";
import MyAccount from "./components/MyAccount";
import ReservationDetailPage from "./pages/ReservationDetailPage";
import MyPlaces from "./pages/ReservationPage";
import { GoogleApiWrapper } from "google-maps-react";

axios.defaults.baseURL = "http://localhost:5000/api/v1/";
const URL = "http://localhost:5000/api/v1/users/profile";

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (!user) {
        // fetch(URL, { credentials: "include" })
        //   .then((res) => res.json())
        //   .then((res) => {
        //     dispatch(userActions.userData(res.user));
        //     dispatch(userActions.ready());
        //   })
        //   .catch((err) => {});
        dispatch(fetchUserAsync());
      }
    } catch (error) {}
    // eslint-disable-next-line
  }, []);

  return (
    <CookiesProvider>
      <ToastContainer theme="dark" autoClose={2000} />
      {/* <GoogleApiWrapper /> */}
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<HomePage />} />
          {/* <Route index path="/home" element={<HomePage />}></Route> */}
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route
            path="/account"
            element={
              user ? (
                <Navigate replace to="/account/myAccount" />
              ) : (
                <Navigate replace to="/login" />
              )
            }></Route>
          {/* <Route path="/account/myAccount" element={<MyAccount />} />
          <Route path="/account/reservations" element={<ReservationPage />} />
          <Route path="/account/bookings" element={<BookingsPage />} />
          <Route path="/account/liked" element={<MyAccount />} />
          <Route path="/account/places" element={<MyPlaces />} /> */}
          <Route path="/account/:param" element={<AccountPage />}></Route>
          <Route path="/account/bookings/:id" element={<BookingPage />}></Route>
          <Route path="/places/:id" element={<PlacePage />}></Route>
          <Route
            path="/reservation/:id"
            element={<ReservationDetailPage />}></Route>
          {/* /account/bookings/${bookingData._id} */}
          {/* <Route path="/account/:param/:action" element={<AccountPage />}></Route> */}
          {/* <Route
          path="/account/:param"
          element={
            user ? <AccountPage /> : <Navigate replace to="/login" />
          }></Route>
        <Route
          path="/account/:param/:action"
          element={
            user ? <AccountPage /> : <Navigate replace to="/login" />
          }></Route> */}
        </Route>
        {/* </Route> */}
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </CookiesProvider>
  );
}

export default App;
