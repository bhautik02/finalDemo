import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userActions, userLogoutAsync } from "../store/user";
import StarSvg from "../utils/svg/StarSvg";

export default function MyAccount(props) {
  const dispatch = useDispatch();
  //to redirect user after login
  const navigate = useNavigate();

  const logoutHandler = () => {
    // axios
    //   .get(`users/logout`)
    //   .then((res) => {
    //     // removeCookie("token");
    //     document.cookie = `token=${""}; expires=${new Date().getTime() - 1000}`;
    //     dispatch(userActions.userData(null));
    //     // dispatch(userActions.logout());
    //     navigate("/");
    //   })
    //   .catch((err) => {
    //     console.log(err);
    // //   });
    // document.cookie = `token=${""}; expires=${new Date().getTime() - 1000}`;
    dispatch(userLogoutAsync());
    navigate("/");
  };

  return (
    <div className="flex justify-center p-24">
      <Card sx={{ maxWidth: 1000 }}>
        <CardActionArea>
          <div className="flex flex-row justify-center">
            <div className="mx-5 my-5 items-center justify-center">
              <CardMedia
                className="rounded-md bg-red"
                component="img"
                style={{
                  height: "100%",
                  objectFit: "cover",
                  width: "250px",
                  borderRadius: "10px",
                }}
                image="https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/08/1487591496-nick-fury-mcu-samuel-l-jackson.jpg?crop=0.75xw:1xh;center,top&resize=1200:*"
                alt="profile"></CardMedia>
            </div>
            <div className="w-80 h-64 items-center flex">
              <CardContent className="max-w-15 p-15">
                <Typography gutterBottom variant="h5" component="div">
                  User name: {props.user.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Email: {props.user.email}
                </Typography>
                <div className="flex justify-center  mt-5 relative">
                  <Button
                    onClick={logoutHandler}
                    sx={{
                      color: "#F5385D",
                      ":hover": {
                        bgcolor: "#F5385D",
                        color: "white",
                      },
                    }}>
                    Logout
                  </Button>
                </div>
              </CardContent>
            </div>
          </div>
        </CardActionArea>
      </Card>
    </div>
    // <>
    //   <div className="ml-32 mt-10 ">
    //     <div className="shadow-2xl shadow-black-300 h-64 w-96  rounded-2xl">
    //       <div className="grid grid-cols-3 m-4">
    //         <div className="flex col-span-2 bg-lightblue p-8 justify-center">
    //           <div>
    //             <img
    //               className="h-36 w-36 object-cover rounded-full"
    //               src="https://w7.pngwing.com/pngs/49/613/png-transparent-computer-icons-avatar-user-profile-avatar-heroes-dark-black.png"
    //               alt="place"
    //             />
    //             <h2 className="flex font-bold mt-2 text-3xl justify-center">
    //               {props.user.name}
    //             </h2>

    //             <p></p>
    //           </div>
    //         </div>
    //         <div className="col-span-1 bg-lightblue ">
    //           <div className="flex-col items-center my-4 mt-14">
    //             <div className="">
    //               <p className="text-2xl font-semibold">278</p>
    //               <p className="text-xs">Reviews</p>
    //               <hr className="my-4" />
    //             </div>
    //             <div>
    //               <p className="flex text-2xl font-semibold">4.72</p>
    //               <div className="">
    //                 <StarSvg size={4} />
    //               </div>
    //               <p className="text-xs">Rating</p>
    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
}
