import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { userContext } from "../contextStore/userContext";

import axios from "axios";

const LoginPage = () => {
  //to take input from user while login
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(userContext);

  //to redirect user after login
  const [redirect, setRedirect] = useState(false);

  //submit handler for userlogin
  const onUserLogin = (event) => {
    event.preventDefault();
    const formdata = {
      email,
      password,
    };

    axios
      .post(`users/login`, formdata, { withCredentials: true })
      .then((res) => {
        setUser(res.data.user);
        setRedirect(true);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });

    setEmail("");
    setPassword("");
  };

  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="mx-auto max-w-md" onSubmit={onUserLogin}>
          <input
            type="email"
            id="email"
            placeholder="email@email.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button className="primary">login</button>
          <div className="text-center py-2 text-gray-500">
            Don't have account?{" "}
            <Link to="/register" className="underline text-black">
              Register now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
