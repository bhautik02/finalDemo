import { useContext } from "react";
import { userContext } from "../store/userContext";
import LoadingSpinner from "../utils/LoadingSpinner";
import { NavLink, Navigate, useParams } from "react-router-dom";
import MyAccount from "../components/MyAccount/MyAccount";

const AccountPage = () => {
  const param = useParams();
  const { user, ready } = useContext(userContext);

  if (!ready) {
    return <LoadingSpinner />;
  }

  if (ready & !user) {
    return <Navigate to={"/login"} />;
  }

  if (ready && user) {
    const activeClassName = ({ isActive }) =>
      isActive ? "py-2 px-6 bg-primary rounded-full text-white" : "py-2 px-6";
    return (
      <>
        <nav className="w-full justify-center flex mt-8 gap-2">
          <NavLink className={activeClassName} to={"/account/myAccount"}>
            My Account
          </NavLink>
          <NavLink className={activeClassName} to={"/account/reservation"}>
            My Reservastion
          </NavLink>
          <NavLink className={activeClassName} to={"/account/liked"}>
            My Liked Product
          </NavLink>
          <NavLink className={activeClassName} to={"/account/places"}>
            My Places
          </NavLink>
        </nav>
        {param.param === "myAccount" && <MyAccount user={user} />}
      </>
    );
  }
};

export default AccountPage;

// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import { CardActionArea } from "@mui/material";

// export default function MyAccount(props) {
//   return (
//     <>
//       {" "}
//       <div className="flex justify-center p-24">
//         <Card sx={{ maxWidth: 1000 }}>
//           <CardActionArea>
//             <div className="flex  justify-center">
//               <div className=" items-center w-96 h-24">
//                 <CardContent>
//                   <Typography gutterBottom variant="h5" component="div">
//                     Username: {props.user.name}
//                   </Typography>
//                   <Typography variant="body2" color="text.secondary">
//                     Email: {props.user.email}
//                   </Typography>
//                 </CardContent>
//               </div>
//             </div>
//           </CardActionArea>
//         </Card>
//       </div>
//       <button>Logout</button>
//     </>
//   );
// }
