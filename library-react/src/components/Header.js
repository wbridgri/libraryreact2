import { Link } from "react-router"
import Nav from "./Nav"

const Header = () => {
    return (
        <header className="site-header" id="header">
            <div className="container">
                <div className="site-header-inner">
                    <Link to="/" className="site-brand">
                        <h1 className="site-title">Library</h1>
                        <p className="site-tagline">Discover books &amp; authors</p>
                    </Link>
                    <Nav />
                </div>
            </div>
        </header>
    )
}

export default Header
