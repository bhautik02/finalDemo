import { useContext } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../store/userContext";
import Logosvg from "../utils/svg/LogoSvg";
import SearchSvg from "../utils/svg/SearchSvg";
import UserSvg from "../utils/svg/UserLoginSvg";

const Header = () => {
  const { user } = useContext(userContext);

  return (
    <header className="flex justify-between">
      <a href="/" className="flex item-center gap-1">
        <Logosvg />
        <p className="font-bold text-2xl">bhautik</p>
      </a>
      <div className="flex border  border-grey-500 rounded-full gap-2 p-2 shadow-lg shadow-grey-100">
        <div>Any where</div>
        <div className="border-l border-grey-500" />
        <div>Any week</div>
        <div className="border-l border-grey-500" />
        <div>Add guest</div>
        <button className="bg-primary rounded-full p-1">
          <SearchSvg />
        </button>
      </div>
      <Link
        to={user ? "/account/myAccount" : "/login"}
        className="flex border items-center border-grey-500 rounded-full gap-2 p-2">
        <UserSvg />
        {!!user ? <div>{user.name}</div> : <div>Login</div>}
      </Link>
    </header>
  );
};

export default Header;
