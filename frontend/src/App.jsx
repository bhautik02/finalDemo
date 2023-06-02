import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import AccountPage from "./pages/AccountPage";

import { useEffect } from "react";
import { userActions } from "./store/user";
import { useDispatch, useSelector } from "react-redux";

axios.defaults.baseURL = "http://localhost:5000/api/v1/";
const URL = "http://localhost:5000/api/v1/users/profile";

function App() {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  useEffect(() => {
    try {
      if (!user) {
        fetch(URL, { credentials: "include" })
          .then((res) => res.json())
          .then((res) => {
            dispatch(userActions.userData(res.user));
            dispatch(userActions.ready());
          })
          .catch((err) => {});
      }
    } catch (error) {}
    // eslint-disable-next-line
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<IndexPage />}>
          <Route path="/index" element={<IndexPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          {/* {console.log(user)} */}
          <Route
            path="/account"
            element={
              user ? (
                <Navigate replace to="/account/myAccount" />
              ) : (
                <Navigate replace to="/login" />
              )
            }></Route>
          <Route path="/account/:param" element={<AccountPage />}></Route>
          <Route
            path="/account/:param/:action"
            element={<AccountPage />}></Route>
          {/* <Route
          path="/account/:param"
          element={
            user ? <AccountPage /> : <Navigate replace to="/login" />
          }></Route>
        <Route
          path="/account/:param/:action"
          element={
            user ? <AccountPage /> : <Navigate replace to="/login" />
          }></Route> */}
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
