import {Link} from 'react-router-dom' 


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Waste-Management</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/">About Us</Link>
                <Link to="/">Services</Link>
                <Link to="/contact">Contact Us</Link>
                <Link to="/">Login</Link>
                
            </div>
        </nav>
     );
}
 
export default Navbar;