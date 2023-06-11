import { useRoutes } from "react-router-dom"
import Login from "../pages/LOGIN/Login"
import Signup from "../pages/SIGNUP/Signup"
import Home from "../pages/HOMEPAGE/Home"

const Routes = () => {
    return useRoutes([
        {path: "/cadastro", element: <Signup/>},
        {path: "/login", element: <Login/>},
        {path: "/", element: <Home/>}
    ])
}
export default Routes