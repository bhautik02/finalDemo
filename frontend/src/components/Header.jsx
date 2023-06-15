import { Link } from "react-router-dom";
import Logosvg from "../utils/svg/LogoSvg";
import SearchSvg from "../utils/svg/SearchSvg";
import UserSvg from "../utils/svg/UserLoginSvg";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user.user);
  return (
    <div>
      {/* <div className="text-white bg-gray-950 sticky top-0 z-10"> */}
      <header className=" flex justify-between mt-4 pl-10 pr-10">
        <a href="/" className="flex items-center gap-1 ">
          <Logosvg />
          <p className="font-bold text-2xl">title</p>
        </a>
        {/*     position: absolute;
    width: 100%;
    justify-content: center;
    display: flex; */}
        {/* <div className="relative"> */}
        {/* <div className="absolute w-full justify-center flex"> */}
        <div className="flex  border border-grey-500 rounded-full gap-2 p-2 shadow-lg shadow-grey-100">
          <div>Any where</div>
          <div className="border-l border-grey-500" />
          <div>Any week</div>
          <div className="border-l border-grey-500" />
          <div>Add guest</div>
          <button className="bg-primary rounded-full p-1">
            <SearchSvg />
          </button>
        </div>
        {/* </div> */}
        {/* </div> */}

        <div className="flex  gap-1 ">
          <Link
            // className="p-2 items-center  hover:text-white hover:bg-primary rounded-full px-4"
            className="p-2 items-center px-4"
            to={user ? "/account/places" : "/login"}>
            host your place
          </Link>
          <Link
            to={user ? "/account/myAccount" : "/login"}
            className="flex border items-center border-grey-500 rounded-full gap-2 p-2">
            <UserSvg />
            {user ? <div>{user.name}</div> : <div>Login</div>}
          </Link>
        </div>
      </header>
      <hr className="mt-4" />
    </div>
  );
};

export default Header;
