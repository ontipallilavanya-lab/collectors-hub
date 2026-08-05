import { Link } from "react-router-dom";

import "../styles/navbar.css";

function Navbar({
  wishlistCount,
  collectionCount,
}) {
    return (
        <nav className="navbar">

            <h2 className="logo">Collector's Hub</h2>

            <ul className="menu">

  <li>
    <Link to="/">
      Marketplace
    </Link>
  </li>

  <li>
    <Link to="/community">
      Community
    </Link>
  </li>

  <li>
    <Link to="/collection">
      My Collection ({collectionCount})
    </Link>
  </li>

  <li>
    ❤️ {wishlistCount}
  </li>

</ul>

        </nav>
    );
}

export default Navbar;