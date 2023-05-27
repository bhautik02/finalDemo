import { useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  return <div> {navigate("/account/myAccount")}</div>;
};

export default Account;
