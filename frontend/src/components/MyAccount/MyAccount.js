import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea } from "@mui/material";

export default function MyAccount(props) {
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
                <div className="flex justify-center  mt-3 relative">
                  <Button>Logout</Button>
                </div>
              </CardContent>
            </div>
          </div>
        </CardActionArea>
      </Card>
    </div>
  );
}
