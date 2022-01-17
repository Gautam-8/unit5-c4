import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {

    console.log(children)

    const toggle = useSelector((state) => state.jobState.toggle);
    const auth = useSelector((state) => state.jobState.auth);

if(!auth){
    return <Navigate to={'/'}/>
}

return children
}