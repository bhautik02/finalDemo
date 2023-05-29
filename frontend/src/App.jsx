import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import IndexPage from "./pages/IndexPage";
import Layout from "./components/Layout";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserContextProvider from "./store/userContext";
import axios from "axios";
import AccountPage from "./pages/AccountPage";

axios.defaults.baseURL = "http://localhost:5000/api/v1/";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/index" element={<IndexPage />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route
            path="/account/"
            element={<Navigate replace to="/account/myAccount" />}></Route>
          <Route path="/account/:param" element={<AccountPage />}></Route>
          <Route
            path="/account/:param/:action"
            element={<AccountPage />}></Route>
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
