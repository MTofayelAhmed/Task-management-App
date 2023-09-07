import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Main></Main>,
            children: [
                {
                    path: "/login",
                    element: <Login></Login>
                },
                {
                    path: "/register",
                    element: <SignUp></SignUp>
                }
            ]
        }
    ]
)


export default router; 