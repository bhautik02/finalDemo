import axios from "axios";
import { useState } from "react";
import { Link, Navigate } from "react-router-dom";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  const onRegisterUser = async (event) => {
    event.preventDefault();
    const formdata = {
      name,
      email,
      password,
    };

    axios
      .post("users/signup", formdata)
      .then(() => {
        alert("user created");
        setRedirect(true);
      })
      .catch((err) => {
        alert(err.response.data.message);
      });

    setName("");
    setEmail("");
    setPassword("");
  };

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="mx-auto max-w-md" onSubmit={onRegisterUser}>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
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
          <button className="primary">register</button>
          <div className="text-center py-2 text-gray-500">
            Do have account?{" "}
            <Link to="/login" className="underline text-black">
              Login now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
