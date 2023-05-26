import React, { useEffect, useState } from "react";
const userContext = React.createContext({});

const BASEURL = "http://localhost:5000/api/v1/";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log("USER PROFILE---=>");
    if (!user) {
      fetch(`${BASEURL}users/profile`, { credentials: "include" })
        .then((res) => res.json())
        .then((res) => {
          console.log("PROFILE RES =======>", res);

          if (res.status === "success") {
            console.log(res);

            setUser(res.user);
            // alert("user logged.");
          }
          if (res.status === "failed") {
            console.log(res.message);
          }
        })
        .catch((error) => {
          console.log("ERROR IN USERCOMNTEXT --->", error);
        });
    }
  }, [user]);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {console.log(user)}
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
export { userContext };
