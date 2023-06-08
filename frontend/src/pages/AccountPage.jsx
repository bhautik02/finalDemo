import LoadingSpinner from "../utils/LoadingSpinner";
import { NavLink, useParams } from "react-router-dom";
import MyAccount from "../components/MyAccount";
import UserSvg from "../utils/svg/UserSvg";
import ReservationSvg from "../utils/svg/ReservationSvg";
import LikeSvg from "../utils/svg/LikeSvg";
import PlaceSvg from "../utils/svg/PlaceSvg";
import MyPlaces from "../components/MyPlaces/MyPlaces";
import { useSelector } from "react-redux";
import BookingsPage from "./BookingsPage";

const AccountPage = () => {
  const param = useParams();

  const user = useSelector((state) => state.user.user);
  const ready = useSelector((state) => state.user.isReady);

  const activeClassName = ({ isActive }) =>
    isActive
      ? "inline-flex gap-1 py-2 px-6 bg-primary rounded-full text-white"
      : "inline-flex gap-1 py-2 px-6 bg-gray-200 rounded-full";
  return !ready ? (
    <LoadingSpinner />
  ) : (
    ready && user && (
      <>
        <nav className="w-full justify-center flex mt-8 gap-2">
          <NavLink className={activeClassName} to={"/account/myAccount"}>
            <UserSvg />
            My Account
          </NavLink>

          <NavLink className={activeClassName} to={"/account/reservation"}>
            <ReservationSvg />
            My Reservations
          </NavLink>

          <NavLink className={activeClassName} to={"/account/bookings"}>
            <ReservationSvg />
            My Bookings
          </NavLink>

          <NavLink className={activeClassName} to={"/account/liked"}>
            <LikeSvg />
            My Liked Places
          </NavLink>

          <NavLink className={activeClassName} to={"/account/places"}>
            <PlaceSvg />
            My Places
          </NavLink>
        </nav>

        {param.param === "myAccount" && <MyAccount user={user} />}
        {param.param === "places" && <MyPlaces />}
        {param.param === "bookings" && <BookingsPage />}
      </>
    )
  );
};

export default AccountPage;
