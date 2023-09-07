import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Login = () => {
 
  const [error, setError] = useState("");
  const { signIn } = useContext(AuthContext);

  const location = useLocation()
  const navigate = useNavigate()
  const from = location.state?.from?.pathname || "/";
  //   handle login
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
console.log("email and password in login", email, password)
    // signIn With Email and Password
    signIn(email, password)
    .then((result) => {
      const signInUser = result.user;
      console.log("loginUser", signInUser);
      navigate(from, { replace: true });
    })
    .catch((error) => {
  
      setError(error.message);

    });
  
   
};
  

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col w-full  ">
        <div className="text-center mb-10 ">
          <h1 className="text-5xl   font-bold">Login Please!</h1>
        </div>
        <div className="card shadow-2xl flex-shrink-0  w-full   max-w-xl bg-base-100 ">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <div className="form-control ">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  name="email"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control mt-6">
                <input className="btn   mt-6" type="submit" value="Login" />
              </div>
            </form>
            <p className="text-center py-4 text-orange-400">
              New Here ? <Link to="/register"> please Register</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
