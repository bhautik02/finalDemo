import LoadingSpinner from "../utils/LoadingSpinner";
import { NavLink, Navigate, useParams } from "react-router-dom";
import MyAccount from "../components/MyAccount";
import UserSvg from "../utils/svg/UserSvg";
import ReservationSvg from "../utils/svg/ReservationSvg";
import LikeSvg from "../utils/svg/LikeSvg";
import PlaceSvg from "../utils/svg/PlaceSvg";
import MyPlaces from "../components/MyPlaces/MyPlaces";
import { useSelector } from "react-redux";

const AccountPage = () => {
  const param = useParams();
  const isUserLoggedIn = useSelector((state) => state.user.isUserLoggedIn);
  const user = useSelector((state) => state.user.user);
  console.log(user);
  const ready = useSelector((state) => state.user.isReady);

  if (!ready) {
    return <LoadingSpinner />;
  }

  if (ready & !isUserLoggedIn) {
    return <Navigate to={"/login"} />;
  }

  if (ready && isUserLoggedIn) {
    const activeClassName = ({ isActive }) =>
      isActive
        ? "inline-flex gap-1 py-2 px-6 bg-primary rounded-full text-white"
        : "inline-flex gap-1 py-2 px-6 bg-gray-200 rounded-full";
    return (
      <>
        <nav className="w-full justify-center flex mt-8 gap-2">
          <NavLink className={activeClassName} to={"/account/myAccount"}>
            <UserSvg />
            My Account
          </NavLink>

          <NavLink className={activeClassName} to={"/account/reservation"}>
            <ReservationSvg />
            My Reservastion
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
      </>
    );
  }
};

export default AccountPage;
