import { NavLink } from "react-router"

const Nav =()=> {

    return (
            <nav className="nav top-nav justify-content-center justify-content-md-between">
                <NavLink to="/" className="nav-link">Home</NavLink>
                <NavLink to="/book" className="nav-link">Books</NavLink>
                <NavLink to="/author" className="nav-link">Authors</NavLink>
                <NavLink to="/publishing" className="nav-link">Publishing Company</NavLink>
                <NavLink to="/format" className="nav-link">Format</NavLink>
                <NavLink to="/genre" className="nav-link">Genre</NavLink>
            </nav>
    )
}

export default Nav