import { useContext, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { userContext } from "../contextStore/userContext";

const BASEURL = "http://localhost:5000/api/v1/";

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

    // console.log(formdata);

    // const data = await axios.post("users/signup", formdata);
    // console.log(data);

    fetch(`${BASEURL}users/login`, {
      method: "POST",
      // credentials: "include",
      body: JSON.stringify(formdata),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") {
          // localStorage.setItem("data", JSON.stringify(res));
          console.log("user logged.");
          setUser(res.user);
          setRedirect(true);
        }
        if (res.status === "failed") {
          console.log(res.message);
        }
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
              // console.log(email);
            }}
          />
          <input
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              // console.log(password);
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
