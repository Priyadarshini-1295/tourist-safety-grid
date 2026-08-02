import { Link } from "react-router-dom";

function Navbar() {

  return (
    <nav className="navbar">

      <h2>
        🛡 Smart Tourism Safety Grid
      </h2>


      <div className="nav-links">

        <Link to="/register">
          Register
        </Link>

        <Link to="/tourist-id">
          Tourist ID
        </Link>

        <Link to="/sos">
          SOS
        </Link>

        <Link to="/safety">
          Safety
        </Link>

        <Link to="/emergency-contacts">
          Emergency Contacts
        </Link>

        <Link to="/attractions">
          Attractions
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;