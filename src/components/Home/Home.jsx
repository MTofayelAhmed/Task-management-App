

const Home = () => {
    return (
        <form >
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col w-full ">
            <div className="text-center lg:text-left my-10">
              <h1 className="text-5xl font-bold">Task Creation Page</h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="title"
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
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    name="description"
                    placeholder="description"
                    className="textarea textarea-bordered textarea-lg w-full max-w-xs"
                  ></textarea>
                </div>
                <div className="form-control mt-6">
                  <input className="btn " type="submit" value="Task Button" />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </form>
    );
};

export default Home;