import { Link } from "react-router-dom"

export const Navbar = () => {

    return (
        <div>
            <Link to={'/'}> Login  </Link>
            <Link to={'/dashboard'} >Dashboard</Link>

        </div>

        
      
    )
}