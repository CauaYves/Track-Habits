import { useRoutes } from "react-router-dom"
import Singup from "../pages/SINGUP/Singup"

const Routes = () => {
    return useRoutes([
        {path: "/cadastro", element: <Singup/>},
    ])
}
export default Routes