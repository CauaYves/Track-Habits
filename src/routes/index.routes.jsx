import { useRoutes } from "react-router-dom"
import Login from "../pages/LOGIN/Login"
import Signup from "../pages/SIGNUP/Signup"
import Home from "../pages/HOMEPAGE/Home"
import Today from "../pages/TODAY/Today"
import History from "../pages/HISTORICO/Historico"

const Routes = () => {
    return useRoutes([
        {path: "/cadastro", element: <Signup/>},
        {path: "/login", element: <Login/>},
        {path: "/habitos", element: <Home/>},
        {path: "/hoje", element: <Today/>},
        {path: "/historico", element: <History/>}
    ])
}
export default Routes