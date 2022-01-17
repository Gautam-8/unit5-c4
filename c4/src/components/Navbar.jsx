import { Link } from "react-router-dom"

export const Navbar = () => {

    return (
        <div>
            <Link to={'/'} style={{margin:"10px"}}> Login  </Link>
            <Link to={'/dashboard'} style={{margin:"10px"}}>Dashboard</Link>
            <Link to={'/apply'} style={{margin:"10px"}}>Apply</Link>

        </div>

        
      
    )
}