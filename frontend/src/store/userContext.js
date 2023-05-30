import axios from "axios";
import React, { useEffect, useState } from "react";
const userContext = React.createContext({});

const URL = "http://localhost:5000/api/v1/users/profile";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      if (!user) {
        fetch(URL, { credentials: "include" })
          .then((res) => res.json())
          .then((res) => {
            setUser(res.user);
            setReady(true);
          })
          .catch((err) => {});
      }
    } catch (error) {}
  }, [user]);

  return (
    <userContext.Provider value={{ user, setUser, ready }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
export { userContext };
