import './navbar.styles.scss';

import { Outlet, Link } from 'react-router-dom';
import ExplosionLogo from '../../../assets/explosion.svg';

function NavBar() {
  return (
    <>
      <div className="navbar">
        <Link className="logo-container" to="/">
          <img src={ExplosionLogo} alt="app logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN-IN
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default NavBar;
