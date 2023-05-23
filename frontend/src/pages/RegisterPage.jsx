import { Link } from "react-router-dom";

const RegisterPage = () => {
  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="mb-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        <form className="mx-auto max-w-md">
          <input type="text" id="email" placeholder="John Doe" />
          <input type="email" id="email" placeholder="email@email.com" />
          <input type="password" id="password" placeholder="Password" />
          <button className="primary">login</button>
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
