import React, { useEffect, useState } from "react";
const userContext = React.createContext({});

const BASEURL = "http://localhost:5000/api/v1/";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      fetch(`${BASEURL}users/profile`)
        .then((res) => res.json())
        .then((res) => {
          if (res.status === "success") {
            console.log(res);
            setUser(res.user);
            // alert("user logged.");
          }
          if (res.status === "failed") {
            console.log(res.message);
          }
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
