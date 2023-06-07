import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import Layout from "./components/Layout";
import { CookiesProvider } from "react-cookie";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import axios from "axios";
import AccountPage from "./pages/AccountPage";

import { useEffect } from "react";
import { userActions } from "./store/user";
import { useDispatch, useSelector } from "react-redux";
import PlacePage from "./pages/PlacePage";
import PagenotFound from "./pages/PagenotFound";

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
    <CookiesProvider>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route path="/" element={<Layout />}>
          <Route index path="/home" element={<HomePage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
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
          <Route path="/places/:id" element={<PlacePage />}></Route>
          {/* <Route path="/account/:param/:action" element={<AccountPage />}></Route> */}
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
        {/* </Route> */}
        <Route path="*" element={<PagenotFound />} />
      </Routes>
    </CookiesProvider>
  );
}

export default App;
