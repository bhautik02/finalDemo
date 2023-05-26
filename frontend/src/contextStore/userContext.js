import React, { useEffect, useState } from "react";
const userContext = React.createContext({});

const URL = "http://localhost:5000/api/v1/users/profile";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) {
      fetch(URL, { credentials: "include" })
        .then((res) => res.json())
        .then((res) => {
          setUser(res.user);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [user]);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
};

export default UserContextProvider;
export { userContext };
