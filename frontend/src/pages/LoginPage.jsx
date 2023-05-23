import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Login</h1>
        <form className="mx-auto max-w-md">
          <input type="email" id="email" placeholder="email@email.com" />
          <input type="password" id="password" placeholder="Password" />
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
