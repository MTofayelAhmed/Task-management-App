

const Login = () => {

    const handleLogin = (event)=> {
        event.preventDefault()

    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col w-full  ">
          <div className="text-center mb-10 ">
            <h1 className="text-5xl   font-bold">Login Please!</h1>
          </div>
          <div className="card shadow-2xl flex-shrink-0  w-full   max-w-xl bg-base-100 ">
            <div className="card-body  ">
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
                  <input
                    className="btn   mt-6"
                    type="submit"
                    value="Login"
                  />
                </div>
                
              </form>
          
  
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;