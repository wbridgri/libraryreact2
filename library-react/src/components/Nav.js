import { NavLink } from "react-router"

const navClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link"

const Nav = () => {
    return (
        <nav className="top-nav" aria-label="Main navigation">
            <NavLink to="/" className={navClass} end>Home</NavLink>
            <NavLink to="/book" className={navClass}>Books</NavLink>
            <NavLink to="/author" className={navClass}>Authors</NavLink>
            <NavLink to="/publishing" className={navClass}>Publishers</NavLink>
            <NavLink to="/format" className={navClass}>Format</NavLink>
            <NavLink to="/genre" className={navClass}>Genre</NavLink>
        </nav>
    )
}

export default Nav
