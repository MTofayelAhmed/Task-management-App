import { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [error, setError] = useState("");
  const { createUser, updateUserData } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    // const bio = form.bio.value;

    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const createdUser = result.user;
        console.log("user Created from signUp", createdUser);
        updateUserData(createdUser, name, photo)
          .then(() => {})
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((error) => {
        setError(error.message);
      });
    form.reset();
    navigate("/login");
  };
  return (
    <form onSubmit={handleRegister}>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-full ">
          <div className="text-center lg:text-left my-10">
            <h1 className="text-5xl font-bold">Register Now</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
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
                  type="text"
                  placeholder="password"
                  name="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">profile Picture</span>
                </label>
                <input
                  type="text"
                  placeholder="Picture"
                  name="photo"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Biography</span>
                </label>
                <textarea
                  name="bio"
                  placeholder="Bio"
                  className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <input className="btn " type="submit" value="SignUp" />
              </div>
              <p className="mt-1 text-center ">
                <span className=" text-red-600 font-medium">{error}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default SignUp;
