import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
const {user, logOut}= useContext(AuthContext)


const handleLogout= ()=> {
    logOut()
}
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Task Management App</a>
      </div>
      <div>

        {
            user? (
                <ul className=" md:flex gap-4 cursor-pointer ">
           <li>
            <Link to="/">Home</Link>
           </li>
              <li onClick={handleLogout}>
                <Link>Logout</Link>
              </li>
              <li>
                <div className="w-10 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </li>
            </ul>

            ): 
            (
                <ul className=" md:flex gap-4 cursor-pointer ">
           
                <li>
                  <Link to='/register'>Register</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                
                
              </ul>
            )
        }
       
       
      </div>
    </div>
  );
};

export default Navbar;
